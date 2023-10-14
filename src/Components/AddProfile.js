import React, { useState, useEffect } from "react";
import "./addprofile.css";
import addProfile from "./assets/addProfile.png";
import ModalForm from "./ModalForm";
// import AddProfileForm from "./AddProfileForm";
function AddProfile() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState({});
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
    console.log(parsedData);
    setShowProfileInfo(parsedData);
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
    <div className="add-profile-wrapper">
      {showProfileInfo == null && (
        <>
          <button
            variant="contained"
            component="label"
            onClick={handleAddProfile}
          >
            <input />
            <img
              src={addProfile}
              alt="add profile"
              className="grid grid-cols-2 gap-4 place-content-center"
            />
            <div>
              {" "}
              <p>Add profile</p>
            </div>
          </button>
          {showProfileForm && <ModalForm onClose={onClose}></ModalForm>}
        </>
      )}
      {showProfileInfo && <h1>{showProfileInfo.name}</h1>}
    </div>
  );
}

export default AddProfile;
