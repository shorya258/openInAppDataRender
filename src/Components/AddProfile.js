import React, { useState } from "react";
import "./addprofile.css";
import addProfile from "./assets/addProfile.png";
import ModalForm from "./ModalForm";
// import AddProfileForm from "./AddProfileForm";
function AddProfile() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const handleAddProfile = () => {
    setShowProfileForm(true);
  };
  const onClose = () => {
    setShowProfileForm(false);
  };

  return (
    <div className="add-profile-wrapper">
      <button variant="contained" component="label" onClick={handleAddProfile}>
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
    </div>
  );
}

export default AddProfile;
