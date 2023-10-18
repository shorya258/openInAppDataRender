import React from "react";
import AppleLogin from "react-apple-login";
function ALogin() {
  return (
    <div>
      <AppleLogin
        clientId="com.react.apple.login"
        redirectURI="https://redirectUrl.com"
        disabled
        designProp={{
          color: "white",
          type: "sign-in",
        }}
      />
    </div>
  );
}

export default ALogin;
