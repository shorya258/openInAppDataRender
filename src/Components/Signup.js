import { useState } from "react";
import React from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorsObj, setErrorsObj] = useState();

  const [showAccountCreated, setShowAccountCreated] = useState(false);
  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
  const validateCredentials = (creds) => {
    const generatedErrors = {};
    var errorFound = false;
    if (creds.name.trim().length === 0) {
      generatedErrors.name = "*Name can not be empty!";
      errorFound = true;
    } else if (creds.name.trim().length <= 3) {
      generatedErrors.name = "*Name should contain more than 3 letters!";
      errorFound = true;
    }
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
    } else if (creds.password.trim().length <= 3) {
      generatedErrors.name = "*Password is too short!";
      errorFound = true;
    }
    setErrorsObj(generatedErrors);
    return errorFound;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateCredentials(credentials)) return;
    const response = await fetch(`${apiUrl}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (!json.success) {
      toast.error("enter valid credentials");
    }

    setTimeout(() => {
      toast.success("Account created successfully!");

      setShowAccountCreated(true);
      setTimeout(() => {
        props.handleIsLoginChange();
      }, 1500);
    }, 1500);
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    validateCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-in-panel">
      <div className="sign-in-header">
        <h1 className="text-3xl">Sign Up</h1>
        <p>Create an account</p>
      </div>
      <div className="mt-6 sign-in-form-wrapper flex flex-col content-wrapper p-7">
        <form>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 mb-3">
            {/* FULL NAME */}
            <div className="sm:col-span-6">
              <label
                htmlFor="name"
                className="sign-in-label block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="sign-in-input mt-2">
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  value={credentials.name}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Full Name"
                />
              </div>
              {errorsObj !== undefined && errorsObj.name !== undefined && (
                <legend className="error-dialog ">{errorsObj.name}</legend>
              )}
            </div>

            {/* EMAIL */}
            <div className="sm:col-span-6">
              <label
                htmlFor="email"
                className="sign-in-label block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="sign-in-input mt-2">
                <input
                  type="text"
                  name="email"
                  onChange={onChange}
                  value={credentials.email}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="email@abc.com"
                />
              </div>
              {errorsObj !== undefined && errorsObj.email !== undefined && (
                <legend className="error-dialog">{errorsObj.email}</legend>
              )}
            </div>
            {/* PASSWORD */}
            <div className="sm:col-span-6">
              <label
                htmlFor="password"
                className="sign-in-label block text-sm font-medium leading-6"
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
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="password"
                />
              </div>
              {errorsObj !== undefined && errorsObj.password !== undefined && (
                <legend className="error-dialog">{errorsObj.password}</legend>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="sign-in-btn rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {showAccountCreated && (
            <div>
              <ToastContainer />
            </div>
          )}
        </form>
      </div>
      <div className="sign-up-link">
        <p>Already have an account?</p>
        <button onClick={props.handleIsLoginChange}> Sign In here</button>
      </div>
    </div>
  );
}

export default Signup;
