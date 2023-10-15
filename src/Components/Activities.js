import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import Legend1 from "../Components/assets/legend1.svg";
import Legend2 from "../Components/assets/legend2.svg";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Activities(props) {
  console.log("props", props);
  let minTempArray = props.cityData?.map(
    (city) => Number(city.main.temp_min) - 273
  );
  let maxTempArray = props.cityData?.map(
    (city) => Number(city.main.temp_max) - 273
  );
  let cityNames = props.cityData?.map((city) => city.name);

  console.log("minTempArray", minTempArray);
  console.log("maxTempArray", maxTempArray);
  console.log("cityNames", cityNames);
  const data = {
    labels: cityNames,
    datasets: [
      {
        label: "Max temperature",
        data: maxTempArray,
        backgroundColor: " rgba(152, 216, 158, 1)",
        borderColor: "white",
        borderWidth: "1",
        barThickness: 40,
        borderRadius: 5,
        pointStyle: "circle",
      },
      {
        label: "Min temperature",
        data: minTempArray,
        backgroundColor: " rgba(238, 132, 132, 1)",
        borderColor: "white",
        borderWidth: "1",
        barThickness: 40,
        borderRadius: 5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="activities-wrapper border-and-shadow-box rounded-xl shadow-xl px-10 py-6">
      <div className="flex flex-row justify-between items-end activities-heading-wrapper mb-6">
        <div className="activities-subhead-wrapper">
          <h1 className="dashboard-sub-heading">Activities</h1>
          <p>May - June 2021</p>
        </div>
        <div className="flex flex-row activities-legend">
          <div className="flex flex-row items-center legend ml-2">
            <img src={Legend1} alt="img1" />
            <p>Min Temp.</p>
          </div>

          <div className="flex flex-row items-center legend ml-2">
            <img src={Legend2} alt="img2" />
            <p>Max Temp.</p>
          </div>
        </div>
      </div>
      <Bar
        className="bar-chart-wrapper"
        data={data}
        options={options}
        style={{ width: "80%" }}
      ></Bar>
    </div>
  );
}

export default Activities;
