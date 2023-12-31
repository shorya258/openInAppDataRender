import React, { useState } from "react";
import validator from "validator";
import isUrl from "is-url";
function AddProfileForm(props) {
  const [toggleBasicToSocial, setToggleBasicToSocial] = useState(true);
  const [newProfileCredentials, setNewProfileCredentials] = useState({
    name: "",
    email: "",
    ph_number: "",
    ig_link: "",
    yt_link: "",
  });
  const [errorsObj, setErrorsObj] = useState();

  const apiUrl = process.env.REACT_APP_BACKEND_API_URL;
  const validateCredentials = (creds) => {
    const generatedErrors = {};
    var errorFound = false;
    if (creds.name.trim().length === 0) {
      generatedErrors.name = "*Name can not be empty!";
      setToggleBasicToSocial(true);
      errorFound = true;
    } else if (creds.name.trim().length <= 3) {
      generatedErrors.name = "*Name should contain more than 3 letters!";
      setToggleBasicToSocial(true);
      errorFound = true;
    }
    if (creds.email.trim().length === 0) {
      generatedErrors.email = "*Email can not be empty!";
      setToggleBasicToSocial(true);
      errorFound = true;
    } else if (!validator.isEmail(creds.email.trim())) {
      generatedErrors.email = "*Enter a valid Email address!";
      setToggleBasicToSocial(true);
      errorFound = true;
    }
    if (creds.ph_number.trim().length === 0) {
      generatedErrors.ph_number = "*Phone number can not be empty!";
      setToggleBasicToSocial(true);
      errorFound = true;
    } else if (!validator.isMobilePhone(creds.ph_number)) {
      generatedErrors.ph_number = "*Invalid Phone number!";
      setToggleBasicToSocial(true);
      errorFound = true;
    }
    if (creds.ig_link.trim().length > 0 && !isUrl(creds.ig_link.trim())) {
      generatedErrors.ig_link = "*Enter a valid link!";
      errorFound = true;
    }
    if (creds.yt_link.trim().length > 0 && !isUrl(creds.yt_link.trim())) {
      generatedErrors.yt_link = "*Enter a valid link!";
      errorFound = true;
    }
    setErrorsObj(generatedErrors);
    return errorFound;
  };
  const handleSubmit = async () => {
    if (validateCredentials(newProfileCredentials)) return;
    console.log("handle submit called!");
    let userEmail = localStorage.getItem("userEmail");
    let reqData = {
      email: userEmail,
      profile_data: newProfileCredentials,
    };
    await fetch(`${apiUrl}/api/profileData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    props.onClose();
    console.log("props closed");
  };
  const onChange = (e) => {
    setNewProfileCredentials({
      ...newProfileCredentials,
      [e.target.name]: e.target.value,
    });
    validateCredentials({
      ...newProfileCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="py-5 px-7">
      <div className="modal-form-header mt-1 mb-3 flex flex-row justify-between">
        <h2 className="font-bold">Add New Profile</h2>
        <button
          className="modal-close-btn btn btn-danger fs-4"
          onClick={props.onClose}
        >
          X
        </button>
      </div>
      <hr />
      <div className="flex justify-between mt-4 ">
        <div
          className={
            toggleBasicToSocial
              ? "modal-switch-btn active-btn"
              : "modal-switch-btn"
          }
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggleBasicToSocial(true);
          }}
        >
          Basic
        </div>
        <div
          className={
            toggleBasicToSocial
              ? "modal-switch-btn"
              : "modal-switch-btn active-btn"
          }
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggleBasicToSocial(false);
          }}
        >
          Contact
        </div>
      </div>
      <section className="mb-6">
        {toggleBasicToSocial ? (
          <div className="basic">
            <form>
              <div className="my-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 place-content-center">
                {/* FULL NAME */}
                <div className="sm:col-span-6">
                  <label htmlFor="name" className="modal-form-label">
                    Enter Name*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        required
                        onChange={onChange}
                        value={newProfileCredentials.name || ""}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Eg John Doe"
                      />
                    </div>
                  </div>
                  {errorsObj !== undefined && errorsObj.name !== undefined && (
                    <legend className="error-dialog">{errorsObj.name}</legend>
                  )}
                </div>

                {/* EMAIL */}
                <div className="sm:col-span-6">
                  <label htmlFor="email" className="modal-form-label">
                    Enter Email*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                      <input
                        type="text"
                        name="email"
                        required
                        onChange={onChange}
                        value={newProfileCredentials.email || ""}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Eg John@xyz.com"
                      />
                    </div>
                  </div>
                  {errorsObj !== undefined && errorsObj.email !== undefined && (
                    <legend className="error-dialog">{errorsObj.email}</legend>
                  )}
                </div>
                {/* Phone Number */}
                <div className="sm:col-span-6">
                  <label htmlFor="ph_number" className="modal-form-label">
                    Enter Phone*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                      <input
                        type="text"
                        name="ph_number"
                        required
                        onChange={onChange}
                        value={newProfileCredentials.ph_number || ""}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Eg. 987654321"
                      />
                    </div>
                  </div>
                  {errorsObj !== undefined &&
                    errorsObj.ph_number !== undefined && (
                      <legend className="error-dialog">
                        {errorsObj.ph_number}
                      </legend>
                    )}
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="social">
            <div className="m-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              {/* INSTAGRAM LINK*/}
              <div className="sm:col-span-4">
                <label
                  htmlFor="iglink"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Instagram Link{" "}
                  <span style={{ color: "light-grey" }}>(Optional)</span>
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                    <input
                      type="text"
                      name="ig_link"
                      required
                      onChange={onChange}
                      value={newProfileCredentials.ig_link || ""}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Eg.instagram.com/username"
                    />
                  </div>
                </div>
                {errorsObj !== undefined && errorsObj.ig_link !== undefined && (
                  <legend className="error-dialog">{errorsObj.ig_link}</legend>
                )}
              </div>

              {/* YOUTUBE LINK */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Youtube Link
                  <span style={{ color: "light-grey" }}>(Optional)</span>
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                    <input
                      type="text"
                      name="yt_link"
                      required
                      onChange={onChange}
                      value={newProfileCredentials.yt_link || ""}
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="youtube/username"
                    />
                  </div>
                </div>
                {errorsObj !== undefined && errorsObj.yt_link !== undefined && (
                  <legend className="error-dialog">{errorsObj.yt_link}</legend>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
      <hr />
      <div className="flex justify-end mt-4">
        {toggleBasicToSocial ? (
          <button
            className="rounded-md bg-[#3E84F8] px-3 ml-auto py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2 mr-3"
            onClick={() => setToggleBasicToSocial(false)}
          >
            Next
          </button>
        ) : (
          <>
            <button
              className="border border-[#999CA0] rounded-lg bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2 mr-3"
              onClick={() => setToggleBasicToSocial(true)}
            >
              Back
            </button>
            <button
              className="rounded-lg bg-[#3E84F8] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2 border-radius"
              onClick={handleSubmit}
            >
              Done
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default AddProfileForm;
