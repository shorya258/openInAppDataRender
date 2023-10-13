import React from "react";
import { GoogleLogout } from "react-google-login";
function GLogout() {
  const clientId =
    "980512281451-t9ppbk7qgsg0qmejr2c06vl0f7p53bpg.apps.googleusercontent.com";
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
