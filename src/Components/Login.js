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
        <h1 className="font-bold text-3xl">Sign In</h1>
        <p className="font-medium">Sign in to your account</p>
      </div>
      <div className="g-sign-in-wrapper">
      <GLogin />
      <GLogin />
      </div>

      {/* <GLogout /> */}

      <div className="sign-in-form-wrapper flex flex-col content-wrapper p-5">

        <form>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                  <input
                    type="text"
                    name="email"
                    onChange={onChange}
                    value={credentials.email}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="abc@xyz.com"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                  <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={credentials.password}
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="password"
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <button className="" onClick={props.handleIsLoginChange}>
          New user?
        </button>
      </div>
    </div>
  );
}

export default Login;
