import React, { useState, useEffect } from "react";

import { GoogleLogout } from "react-google-login";

import "./dashboard.css";
import Itemscard from "./Itemscard";
import Activities from "./Activities";
import TopProducts from "./TopProducts";
import AddProfile from "./AddProfile";
import SampleOutput from "./weather.json";
import stockPhoto from "../Components/assets/stockPhoto.jpg";
import BellIcon from "../Components/assets/bell_icon.svg";
import dashboardIcon from "../Components/assets/dashboard_icon.svg";
import transactionsIcon from "../Components/assets/transaction_icon.svg";
import schedulesIcon from "../Components/assets/schedule_icon.svg";
import settingIcon from "../Components/assets/setting_icon.svg";
import userIcon from "../Components/assets/user_icon.svg";
import vector1 from "../Components/assets/vector1.svg";
import vector2 from "../Components/assets/vector2.svg";
import vector3 from "../Components/assets/vector3.svg";
import vector4 from "../Components/assets/vector4.svg";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// require("dotenv").config();
function Dashboard() {
  let navigate = useNavigate();
  const clientId =
    "980512281451-t9ppbk7qgsg0qmejr2c06vl0f7p53bpg.apps.googleusercontent.com";
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [avgTemp, setAvgTemp] = useState(0);
  const [avgFeelsTemp, setFeelsTemp] = useState(0);
  let API_KEY = "d28b937e8b237af8a5e4e15379047501";
  // let API_KEY = process.env.REACT_APP_APIKEY;
  // console.log(`${process.env.REACT_APP_APIKEY}`);
  // CHARKHI DADRI

  const [cityData, setCityData] = useState([]);

  async function fetchData(lati, longi) {
    console.log("fetchdata called");
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("parsed data", parsedData);
    setCityData((cityData) => {
      calculateTemp([...cityData, parsedData]);
      return [...cityData, parsedData];
    });
  }
  // console.log("city data", cityData);
  useEffect(() => {
    if (cityData.length === 0) {
      fetchData(23.2, 77.4);
      //Bhopal
      fetchData(28.5, 76.4);
      // //Charkhi Dādri
      fetchData(22.5, 77.4);
      // kolkata 22.5726° N, 88.3639° E
      fetchData(13.0, 80.2);
      // // 13.0827° N, 80.2707° E
      fetchData(26.8, 80.9);
      // 26.8467° N, 80.9462° E
    }
  }, []);
  const calculateTemp = (cityData) => {
    console.log("calc temp", cityData);
    if (cityData.length === 5) {
      let avg_temp = 0;
      let total_temp = 0;
      cityData.forEach((city) => {
        total_temp += city.main.temp;
      });
      avg_temp = Math.floor(total_temp / 5) - 273;
      console.log(avg_temp);
      setAvgTemp(avg_temp);

      total_temp = 0;
      let temp_feels = 0;
      cityData.forEach((city) => {
        total_temp += city.main.feels_like;
      });

      temp_feels = Math.floor(total_temp / 5) - 273;
      setFeelsTemp(temp_feels);
    }
  };
  const handleLogout = () => {
    if (localStorage.getItem("googleAuthToken") !== null) {
      setIsGoogleLogin(true);
    }
    // localStorage.removeItem("authToken");
    localStorage.clear();
    sessionStorage.clear();
    console.log("local storage cleared out");
    navigate("/");
  };
  return (
    <div className="flex justify-between flex-row w-screen h-screen border-solid background-style p-10">
      <div
        className="w-2/12 menu rounded-xl h-100 text-white border-solid mr-12"
        style={{ backgroundColor: "rgb(62, 132, 248)" }}
      >
        <div className="flex flex-col justify-between menu-items-wrapper py-10 px-8 h-full">
          <div>
            <h1 className="text-4xl font-bold">Board.</h1>
            <div className="flex flex-col gap-8 my-10">
              <div className="dashboard-menu-links flex gap-4">
                <img src={dashboardIcon} alt="dashboardIcon" />
                <h2 className="font-bold">Dashboard</h2>
              </div>
              <div className="dashboard-menu-links flex gap-4">
                <img src={transactionsIcon} alt="transactionsIcon" />
                <h2>Transactions</h2>
              </div>
              <div className="dashboard-menu-links flex gap-4">
                <img src={schedulesIcon} alt="schedulesIcon" />
                <h2>Schedules</h2>
              </div>
              <div className="dashboard-menu-links flex gap-4">
                <img src={userIcon} alt="userIcon" />
                <h2>Users</h2>
              </div>
              <div className="dashboard-menu-links flex gap-4">
                <img src={settingIcon} alt="settingIcon" />
                <h2>Settings</h2>
              </div>
            </div>
          </div>
          <div className="menu-bottom-links flex flex-col items-start gap-2">
            <button>Help</button>
            <button>Contact Us</button>
            <button onClick={handleLogout}>
              {isGoogleLogin && <div>dude!</div>}
              Log out
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-10/12 py-4 dashboard-wrapper border-solid ">
        <div className="flex flex-row items-center justify-between mb-3">
          <h1 className="dashboard-heading"> Dashboard</h1>
          <div className="flex flex-row items-center ">
            <form className="ml-6">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full h-4/6 p-2 pl-10 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-6"
            >
              <path
                d="M16.3861 12.6564V8.91122C16.3861 5.55139 14.2011 2.72107 11.2411 1.86988C10.9481 1.09912 10.2321 0.55603 9.38611 0.55603C8.54011 0.55603 7.82411 1.09912 7.53111 1.86988C4.57111 2.72211 2.38611 5.55139 2.38611 8.91122V12.6564L0.679109 14.4392C0.586067 14.536 0.512279 14.6511 0.461994 14.7778C0.411709 14.9046 0.385919 15.0404 0.386109 15.1776V17.2664C0.386109 17.5434 0.491466 17.809 0.679003 18.0049C0.866539 18.2008 1.12089 18.3108 1.38611 18.3108H17.3861C17.6513 18.3108 17.9057 18.2008 18.0932 18.0049C18.2808 17.809 18.3861 17.5434 18.3861 17.2664V15.1776C18.3863 15.0404 18.3605 14.9046 18.3102 14.7778C18.2599 14.6511 18.1862 14.536 18.0931 14.4392L16.3861 12.6564ZM16.3861 16.222H2.38611V15.61L4.09311 13.8272C4.18615 13.7304 4.25994 13.6153 4.31023 13.4886C4.36051 13.3618 4.3863 13.226 4.38611 13.0888V8.91122C4.38611 6.03181 6.62911 3.68923 9.38611 3.68923C12.1431 3.68923 14.3861 6.03181 14.3861 8.91122V13.0888C14.3861 13.3666 14.4911 13.6319 14.6791 13.8272L16.3861 15.61V16.222ZM9.38611 21.444C10.0054 21.4448 10.6096 21.2441 11.1146 20.8697C11.6196 20.4954 12.0004 19.966 12.2041 19.3552H6.56811C6.77177 19.966 7.15259 20.4954 7.65762 20.8697C8.16265 21.2441 8.76681 21.4448 9.38611 21.444Z"
                fill="black"
              />
            </svg>

            <img
              className="stock-image ml-6"
              src={stockPhoto}
              alt="stock"
            ></img>
          </div>
        </div>
        <div className=" flex flex-row justify-between gap-5 item-cards-wrapper">
          {cityData.length > 0 && (
            <>
              <Itemscard
                iconColor={"rgba(127, 205, 147, 1)"}
                iconImg={vector1}
                iconAltTxt="Average Visbility"
                content={cityData[0].visibility}
                caption={"Average Visbility"}
              />
              <Itemscard
                iconColor={"rgba(222, 191, 133, 1)"}
                iconImg={vector2}
                iconAltTxt="Total Transactions"
                content={cityData[0].main.humidity}
                caption={"Average Humidity"}
              />
              <Itemscard
                iconColor={"rgba(236, 164, 164, 1)"}
                iconImg={vector3}
                iconAltTxt="Average Temperature"
                // content={"88"}
                content={avgTemp}
                caption={"Average Temperature (in ℃)"}
              />
              <Itemscard
                iconColor={"rgba(169, 176, 229, 1)"}
                iconImg={vector4}
                iconAltTxt="Feels Like"
                // content={"88"}
                content={avgFeelsTemp}
                caption={"Feels Like (in ℃)"}
              />
            </>
          )}
        </div>

        {/* green rgba(127, 205, 147, 1) */}
        {/* yellow rgba(222, 191, 133, 1) */}
        {/* red rgba(236, 164, 164, 1) */}
        {/* purple rgba(169, 176, 229, 1) */}
        <Activities
          // city1name={SampleOutput[0].name}
          // city2name={SampleOutput[1].name}
          // city3name={SampleOutput[2].name}
          // city1data={SampleOutput[0].main}
          // city2data={SampleOutput[1].main}
          // city3data={SampleOutput[2].main}

          // city1name={cityData[0].name}
          // city2name={cityData[1].name}
          // city3name={cityData[2].name}
          cityData={cityData}
          // city2data={cityData}
          // city3data={cityData}
        />
        <div className="flex flex-row justify-between">
          <div className="top-products w-6/12 mr-4 h-100 px-10 py-6 bg-white border-and-shadow-box rounded-xl shadow-xl p-3 ">
            <TopProducts />
          </div>
          <div className="add-profile-wrapper w-6/12 ml-4 h-100 bg-white border-and-shadow-box rounded-xl shadow-xl ">
            <AddProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
