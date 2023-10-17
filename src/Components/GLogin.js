import React from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
function GLogin() {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const onSuccess = (res) => {
    var decoded = jwt_decode(res.credential);
    handleSendCreds(decoded);
    console.log(decoded);
  };

  const handleSendCreds = async (profObj) => {
    const response = await fetch(`${apiUrl}/api/loginByGoogle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: profObj.email,
        name: profObj.givenName,
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
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onError={(err) => console.log("fail", err)}
      />
    </GoogleOAuthProvider>
  );
}
export default GLogin;
