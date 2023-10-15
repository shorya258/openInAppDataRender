import React, { useState, useEffect } from "react";
import "./addprofile.css";
import addProfile from "./assets/addProfile.png";
import ModalForm from "./ModalForm";
import whatsapp_icon from "./assets/whatsapp_icon.png";
import mail_icon from "./assets/mail_icon.png";
import ig_icon from "./assets/ig_icon.png";
import yt_icon from "./assets/yt_icon.png";
// import AddProfileForm from "./AddProfileForm";
function AddProfile() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(null);
  const fetchData = async () => {
    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch("http://localhost:5000/api/findProfileByEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    let parsedData = await response.json();
    if (parsedData !== null) {
      console.log("pdata", parsedData.body.profile_data);
      setShowProfileInfo(parsedData.body.profile_data);
      console.log("showProfileInfo", showProfileInfo);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProfile = () => {
    setShowProfileForm(true);
  };
  const onClose = () => {
    setShowProfileForm(false);
    fetchData();
  };

  return (
    <>
      {showProfileInfo == null && (
        <div className="add-profile-icon-div mx-auto my-auto w-auto flex flex-col justify-center items-center">
          <button
            variant="contained"
            component="label" 
            onClick={handleAddProfile}
          >
            <img
              src={addProfile}
              alt="add profile"
            />
          </button>
          <p className="mt-3">Add profile</p>
          {showProfileForm && <ModalForm onClose={onClose}></ModalForm>}
        </div>
      )}
      {showProfileInfo && (
        <>
          <h1 className="font-bold mb-4 "> {showProfileInfo.name}</h1>
          <div className="profile-info flex flex-row ">
            {showProfileInfo.ph_number && (
              <div className="flex flex-row-2">
                <span>
                  <img src={whatsapp_icon} alt="whatsapp_icon" />
                </span>
                {showProfileInfo.ph_number}
              </div>
            )}

            {showProfileInfo.email && (
              <div className="flex flex-row">
                <span>
                  <img src={mail_icon} alt="mail_icon" />
                </span>
                {showProfileInfo.email}
              </div>
            )}

            {showProfileInfo.yt_link && (
              <div className="flex flex-row">
                <span>
                  <img src={yt_icon} alt="yt_icon" />
                </span>
                {showProfileInfo.yt_link}
              </div>
            )}

            {showProfileInfo.ig_link && (
              <div className="flex flex-row">
                <span>
                  <img src={ig_icon} alt="ig_icon" />
                </span>
                {showProfileInfo.ig_link}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default AddProfile;
