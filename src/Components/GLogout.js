import React from "react";
import { GoogleLogout } from "react-google-login";
function GLogout() {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const onSuccess = () => {
    console.log("Log out successfully");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default GLogout;
