import React from "react";
import "./dashboard.css";
import Itemscard from "./Itemscard";
import Activities from "./Activities";
import TopProducts from "./TopProducts";
import AddProfile from "./AddProfile";
import SampleOutput from "./weather.json";
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
        </div></div>
      </div>
      <div className="w-10/12 dashboard-wrapper border-solid border-2 border-sky-500 ">
        <h1> Dashboard</h1>
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
