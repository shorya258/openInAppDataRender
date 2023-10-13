import React from "react";
import "./dashboard.css";
import Itemscard from "./Itemscard";
import Activities from "./Activities";
import TopProducts from "./TopProducts";
function Dashboard() {
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
          <Activities />
        </div>
        <div className="top-products">
          <TopProducts />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
