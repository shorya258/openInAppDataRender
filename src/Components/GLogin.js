import React from "react";

import GoogleLogin from "react-google-login";
function GLogin() {
  const clientId =
    "980512281451-t9ppbk7qgsg0qmejr2c06vl0f7p53bpg.apps.googleusercontent.com";
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! current user:", res.profileObj);
  };
  //   const onFailure = (res) => {
  //     console.log("LOGIN FAILED! res:", res);
  //   };
  return (
    <div>
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={(err) => console.log("fail", err)}
          cookiePolicy="single_host_origin"
          isSignedIn={true}
        />
      </div>
    </div>
  );
}

export default GLogin;
