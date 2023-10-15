import React from "react";
import "./dashboard.css";
import Itemscard from "./Itemscard";
import Activities from "./Activities";
import TopProducts from "./TopProducts";
import AddProfile from "./AddProfile";
import SampleOutput from "./weather.json";
import stockPhoto from "../Components/assets/stockPhoto.jpg";
// import { useEffect } from "react";
// require("dotenv").config();
function Dashboard() {
  // let API_KEY = "d28b937e8b237af8a5e4e15379047501";
  // let API_KEY = process.env.REACT_APP_APIKEY;
  // console.log(`${process.env.REACT_APP_APIKEY}`);
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=23.2&lon=77.4&appid=${API_KEY}`;
  // useEffect(() => {
  //   async function fetchData() {
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log("parsed data", parsedData);
  //   }
  //   fetchData();
  // });

  return (
    <div className="flex justify-between flex-row w-screen h-screen border-solid border-2 border-sky-500 background-style p-10">
      <div
        className="w-2/12 menu rounded-xl h-100 text-white border-solid border-2 border-sky-500 mr-10"
        style={{ backgroundColor: "rgb(62, 132, 248)" }}
      >
        <div className="menu-items-wrapper my-10 px-8">
          <h1 className="text-4xl">Board.</h1>
          <div className="flex flex-col gap-5 my-10">
            <h2>Dashboard</h2>
            <h2>Transactions</h2>
            <h2>Schedules</h2>
            <h2>Users</h2>
            <h2>Settings</h2>
          </div>
        </div>
      </div>
      <div className="w-10/12 dashboard-wrapper border-solid border-2 border-sky-500 ">
        <div className="flex flex-row items-center justify-between">
          <h1> Dashboard</h1>
          <div className="flex flex-row items-center ">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" 
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                  class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>

            <img className="stock-image" src={stockPhoto} alt="stock"></img>
          </div>
        </div>
        <div className=" flex flex-row item-cards-wrapper">
          <Itemscard content={"Total Resources"} />
          <Itemscard content={"Total Transactions"} />
          <Itemscard content={"Total Likes"} />
          <Itemscard content={"Total Users"} />
        </div>
        <div className="activites">
          <Activities
            city1name={SampleOutput[0].name}
            city2name={SampleOutput[1].name}
            city3name={SampleOutput[2].name}
            city1data={SampleOutput[0].main}
            city2data={SampleOutput[1].main}
            city3data={SampleOutput[2].main}
          />
        </div>
        <div className="flex flex-row ">
          <div className="top-products bg-white rounded-xl shadow-xl m-3 p-5">
            <TopProducts />
          </div>
          <div className="add-profile bg-white rounded-xl shadow-xl m-3 p-5">
            <AddProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
