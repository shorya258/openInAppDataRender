import { useState } from "react";
import React from "react";
function Signup(props) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showAccountCreated, setShowAccountCreated] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signup", {
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
    console.log("DONE", json);
    if (!json.success) {
      alert("enter valid credentials");
    }

    setTimeout(() => {
      setShowAccountCreated(true);
      setTimeout(() => {
        props.handleIsLoginChange();
      }, 1500);
    }, 1500);
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
            <p>Account Created!</p>
          </div>
        )}
      </form>
      </div>
      <div className="sign-up-link">
        <p>Already have an account?</p><a onClick={props.handleIsLoginChange}> Sign In here</a>
      </div>
    </div>
  );
}

export default Signup;
