import React from "react";
import "./background.css";

import iconrow from "./assets/Frame 2.png";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";
function Background() {
  const [isLogin, setIsLogin] = useState(true);

  const handleIsLoginChange = () => {
    setIsLogin(!isLogin);
    console.log("handle called");
  };
  return (
    <div className="flex flex-row h-screen w-auto items-center place-content-center mx-auto background-style ">
      <div className="left-panel">
        <div className="logo">
          <p className="text-white">LOGO</p>
        </div>
        <div className="heading">
          <p className="text-white">Board.</p>
        </div>
        <div className="icons-row">
          <img src={iconrow} alt="icon-row" />
        </div>
      </div>
      <div className="right-panel">
        {isLogin ? (
          <Login handleIsLoginChange={handleIsLoginChange} />
        ) : (
          <Signup handleIsLoginChange={handleIsLoginChange} />
        )}
      </div>
    </div>
  );
}

export default Background;
