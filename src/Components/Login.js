import React, { useState } from "react";
import "./login.css";
// import { Link } from "react-router-dom";
import GLogin from "./GLogin";
import GLogout from "./GLogout";
import { useNavigate } from "react-router-dom";
function Login(props) {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
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
    console.log("DONE", json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      let item = localStorage.getItem("authToken");
      console.log("yo", item);
      navigate("/dashboard");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="sign-in-panel">
      <div className="sign-in-header">
        <h1 className="text-3xl">Sign In</h1>
        <p className="font-medium">Sign in to your account</p>
      </div>
      <div className="g-sign-in-wrapper">
        <GLogin />
        <GLogin />
      </div>

      {/* <GLogout /> */}

      <div className="sign-in-form-wrapper flex flex-col content-wrapper p-7">
        <form>
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
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
            </div>
            <div className="sm:col-span-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
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
            </div>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="sign-in-btn rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="sign-up-link">
        <p>Don't have an account?</p><a onClick={props.handleIsLoginChange}> Register here</a>
      </div>
    </div>
  );
}

export default Login;
