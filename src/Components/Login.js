import React, { useEffect, useState } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GLogin from "./GLogin";
import ALogin from "./ALogin";
function Login(props) {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorsObj, setErrorsObj] = useState();
  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

  useEffect(() => {
    // appleLogin();
  }, []);
  const validateCredentials = (creds) => {
    const generatedErrors = {};
    var errorFound = false;
    if (creds.email.trim().length === 0) {
      generatedErrors.email = "*Email can not be empty!";
      errorFound = true;
    } else if (!validator.isEmail(creds.email.trim())) {
      generatedErrors.email = "*Enter a valid Email address!";
      errorFound = true;
    }
    if (creds.password.length === 0) {
      generatedErrors.password = "*Password can not be empty!";
      errorFound = true;
    }
    setErrorsObj(generatedErrors);
    return errorFound;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateCredentials(credentials)) return;
    toast.loading("Logging in!");
    const response = await fetch(`${apiUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    toast.dismiss();
    if (!json.success) {
      toast.error("Enter valid credentials!");
    }
    if (json.success) {
      toast.success("Logged in successfully!");
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    validateCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-in-panel">
      <div className="sign-in-header">
        <h1 className="text-3xl">Sign In</h1>
        <p>Sign in to your account</p>
      </div>
      <div className="sign-in-content-wrapper">
        <div className="g-sign-in-wrapper">
          <GLogin />
          <div className="rounded-md ">
            <ALogin />
          </div>
        </div>

        <div>
          <div className="sign-in-form-wrapper flex flex-col content-wrapper p-7">
            <form>
              <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label
                    htmlFor="email"
                    className="sign-in-label block text-sm leading-6"
                  >
                    Email address
                  </label>
                  <div className="sign-in-input mt-2">
                    <input
                      type="text"
                      name="email"
                      onChange={onChange}
                      value={credentials.email}
                      className="block flex-1 border-0 py-1.5 pl-1 text-black-900 placeholder-gray focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="abc@xyz.com"
                    />
                  </div>
                  {errorsObj !== undefined && errorsObj.email !== undefined && (
                    <legend className="error-dialog">{errorsObj.email}</legend>
                  )}
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="password"
                    className="sign-in-label block text-sm leading-6"
                  >
                    Password
                  </label>
                  <div className="sign-in-input mt-2">
                    <input
                      type="password"
                      name="password"
                      onChange={onChange}
                      value={credentials.password}
                      autoComplete="password"
                      className="block flex-1 border-0 py-1.5 pl-1 text-black-900 placeholder-gray focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="password"
                    />
                  </div>
                  {errorsObj !== undefined &&
                    errorsObj.password !== undefined && (
                      <legend className="error-dialog">
                        {errorsObj.password}
                      </legend>
                    )}
                </div>
              </div>
              <div className="forgot-password">
                <Link to="/">Forgot Password?</Link>
              </div>

              <button
                type="submit"
                className="sign-in-btn rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <ToastContainer />
            </form>
          </div>
          <div className="sign-up-link">
            <p>Don't have an account?</p>
            <button
              onClick={props.handleIsLoginChange}
              style={{ cursor: "pointer" }}
              href="/"
            >
              {" "}
              Register here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
