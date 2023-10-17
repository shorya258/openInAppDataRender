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
  const appleLogin = () => {
    var doc = new DOMParser().parseFromString(
      `<svg width="18"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
        fill="#999999"
      />
    </svg>`,
      "application/xml"
    );
    const btn =
      document.querySelector(".g-sign-in-wrapper").children[1].children[0];
    btn.innerHTML = "";
    btn.appendChild(btn.ownerDocument.importNode(doc.documentElement, true));
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
          <ALogin />
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
