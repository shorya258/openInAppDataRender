import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
function GLogin() {
  const navigate = useNavigate();

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! current user:", res.profileObj);
    handleSendCreds(res.profileObj);
  };

  const handleSendCreds = async (profObj) => {
    const response = await fetch("http://localhost:5000/api/loginByGoogle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: profObj.email,
        givenName: profObj.givenName,
      }),
    });
    const json = await response.json();

    console.log("DONE GOOGLE LOGIN", json);
    if (!json.success) {
      alert("enter valid credentials");
    }
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/dashboard");
    }
  };
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={(err) => console.log("fail", err)}
      cookiePolicy="single_host_origin"
      isSignedIn={true}
    />
  );
}

export default GLogin;
