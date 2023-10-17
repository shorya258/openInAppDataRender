import React from "react";
import AppleLogin from "react-apple-login";
function ALogin() {
  return (
    <div>
      <AppleLogin
        clientId="com.react.apple.login"
        redirectURI="https://redirectUrl.com"
        disabled
      />
    </div>
  );
}

export default ALogin;
