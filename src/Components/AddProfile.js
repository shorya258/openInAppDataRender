import React, { useState, useEffect } from "react";
import "./addprofile.css";
import ModalForm from "./ModalForm";
import whatsapp_icon from "./assets/whatsapp_icon.png";
import mail_icon from "./assets/mail_icon.png";
import ig_icon from "./assets/ig_icon.png";
import yt_icon from "./assets/yt_icon.png";
import AddProfileIcon from "../Components/assets/addProfile.svg";

// import AddProfileForm from "./AddProfileForm";

function AddProfile() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(null);

  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
  const fetchData = async () => {
    let userEmail = localStorage.getItem("userEmail");

    let response = await fetch(`${apiUrl}/api/findProfileByEmail`, {
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
    console.log("form closed!");
    fetchData();
  };

  return (
    <>
      {showProfileForm && <ModalForm onClose={onClose}></ModalForm>}
      {showProfileInfo == null && (
        <div className="add-profile-icon-div mx-auto my-auto w-auto flex flex-col justify-center items-center h-3/12">
          <button
            variant="contained"
            component="label"
            onClick={handleAddProfile}
          >
            <img src={AddProfileIcon} alt="add profile" />
          </button>
          <p className="mt-3">Add profile</p>
        </div>
      )}
      {showProfileInfo && (
        <div className="flex flex-col justify-evenly h-full py-3 px-6 show-profile-info h-3/12">
          <h1 className="font-bold mt-2"> {showProfileInfo.name}</h1>
          <div className="profile-info grid grid-cols-2 grid-rows-2 gap-3 my-6">
            {showProfileInfo.ph_number && (
              <div className="flex flex-row items-center">
                <img src={whatsapp_icon} alt="whatsapp_icon" />
                <p>{showProfileInfo.ph_number}</p>
              </div>
            )}
            {showProfileInfo.ig_link && (
              <div className="flex flex-row items-center">
                <img src={ig_icon} alt="ig_icon" />
                <p>{showProfileInfo.ig_link}</p>
              </div>
            )}

            {showProfileInfo.email && (
              <div className="flex flex-row items-center">
                <img src={mail_icon} alt="mail_icon" />
                <p>{showProfileInfo.email}</p>
              </div>
            )}

            {showProfileInfo.yt_link && (
              <div className="flex flex-row items-center">
                <img src={yt_icon} alt="yt_icon" />
                <p>{showProfileInfo.yt_link}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default AddProfile;
