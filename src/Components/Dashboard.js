import React from "react";
import "./dashboard.css";
import Itemscard from "./Itemscard";
import Activities from "./Activities";
import TopProducts from "./TopProducts";
import AddProfile from "./AddProfile";
import SampleOutput from "./weather.json";
function Dashboard() {
  console.log(SampleOutput[0]);
  return (
    <div className="flex flex-row border-solid border-2 border-sky-500 container background-style ">
      <div
        className="menu  rounded-xl h-full text-white border-solid border-2 border-sky-500 menu-wrapper m-3"
        style={{ backgroundColor: "rgb(62, 132, 248)" }}
      >
        <h1 className="text-4xl m-10">Board.</h1>
        <p className="options text-2xl"></p>
        <h2>Dashboard</h2>
        <h2>Transactions</h2>
        <h2>Schedules</h2>
        <h2>Users</h2>
        <h2>Settings</h2>
      </div>
      <div className="dashboard-wrapper border-solid border-2 border-sky-500 ">
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
