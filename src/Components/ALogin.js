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
          height: 40,
          width: 210,
          color: "white",
          border: true,
          type: "sign-in",
          border_color: "red",
          border_radius: 10,
          scale: 1,
          locale: "en_US",
        }}
      />
    </div>
  );
}

export default ALogin;
