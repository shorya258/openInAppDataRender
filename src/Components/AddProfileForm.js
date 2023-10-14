import React, { useState } from "react";

function AddProfileForm(props) {
  const [toggleBasicToSocial, setToggleBasicToSocial] = useState(true);
  const [newProfileCredentials, setNewProfileCredentials] = useState({
    name: "",
    email: "",
    ph_number: "",
    ig_link: "",
    yt_link: "",
  });
  const handleSubmit = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let reqData = {
      email: userEmail,
      profile_data: newProfileCredentials,
    };
    console.log(reqData);
    let response = await fetch("http://localhost:5000/api/profileData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    });
    console.log("order response::::", response);

    // SEND THIS PROFILE OBJ TO BACKEND
    // let res = await fetch("http://localhost:5000/api/findProfileByEmail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email: reqData.email }),
    // });

    // console.log("res:::", res);
    props.onClose();
  };
  const onChange = (e) => {
    setNewProfileCredentials({
      ...newProfileCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="m-2 p-2">
      <h2 className="font-bold">Add New Profile</h2>
      <hr />
      <div className="flex justify-around ">
        <div
          className="basic-heading mr-1"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggleBasicToSocial(true);
          }}
        >
          Basic
        </div>
        <div
          className="Contact-heading ml-1"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggleBasicToSocial(false);
          }}
        >
          Contact
        </div>
      </div>
      <section>
        {toggleBasicToSocial ? (
          <div className="basic">
            <form>
              <div className="m-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 place-content-center">
                {/* FULL NAME */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enter Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        required
                        onChange={onChange}
                        value={newProfileCredentials.name || ""}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Eg John Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enter Email
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                      <input
                        type="text"
                        name="email"
                        required
                        onChange={onChange}
                        value={newProfileCredentials.email || ""}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Eg John@xyz.com"
                      />
                    </div>
                  </div>
                </div>
                {/* Phone Number */}
                <div className="sm:col-span-4">
                  <label
                    htmlFor="ph_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Enter Phone
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-black-600 sm:max-w-md">
                      <input
                        type="text"
                        name="ph_number"
                        required
                        onChange={onChange}
                        value={newProfileCredentials.ph_number || ""}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Eg. 987654321"
                      />
                    </div>
                  </div>
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
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Eg.instagram.com/username"
                    />
                  </div>
                </div>
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
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="youtube/username"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      <hr />
      <button
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2 mr-3"
        onClick={props.onClose}
      >
        Back
      </button>
      <button
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2"
        onClick={handleSubmit}
      >
        Done
      </button>
    </div>
  );
}

export default AddProfileForm;
