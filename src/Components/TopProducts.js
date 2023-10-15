import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Legend1 from "../Components/assets/legend1.svg";
import Legend2 from "../Components/assets/legend2.svg";
import Legend3 from "../Components/assets/legend3.svg";
import "./TopProducts.css";
ChartJS.register(ArcElement, Tooltip, Legend);
function TopProducts() {
  const data = {
    labels: ["yes", "no", "maybe"],
    datasets: [
      {
        label: "Poll",
        data: [8, 5, 2],
        backgroundColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(238, 132, 132, 1)",
          "rgb(246,220,125)",
        ],
        borderColor: "white",
      },
    ],
    // background: rgba(152, 216, 158, 1);  GREEN
    // background: rgba(238, 132, 132, 1); RED
    // rgb(246,220,125) YELLOW
  };
  const options = {
    aspectRatio: 3,
    cutout: 60,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className="products-subhead-wrapper flex flex-row justify-between">
        <h1 className="dashboard-sub-heading">TopProducts</h1>
        <p>May - June 2021</p>
      </div>

      <div className="flex flex-row items-center justify-between top-products-wrapper">
        <Doughnut className="doughnut" data={data} options={options}></Doughnut>
        <div className="product-legends flex flex-col w-6/12">
          <div className="product-legend flex flex-row items-baseline">
            <img src={Legend2} alt="img2" />
            <div className="product-legend-text">
              <h3>Basic Tees</h3>
              <p>31%</p>
            </div>
          </div>
          <div className="product-legend flex flex-row items-baseline">
            <img src={Legend3} alt="img3" />
            <div className="product-legend-text">
              <h3>Custom Short Pants</h3>
              <p>31%</p>
            </div>
          </div>
          <div className="product-legend flex flex-row items-baseline">
            <img src={Legend1} alt="img1" />
            <div className="product-legend-text">
              <h3>Super Hoodies</h3>
              <p>31%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopProducts;
