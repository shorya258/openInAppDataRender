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
import Legend1 from "../Components/assets/legend1.svg"
import Legend2 from "../Components/assets/legend2.svg"

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Activities(props) {
  let city1name = props.city1name;
  let city2name = props.city2name;
  let city3name = props.city3name;
  let city1temp = [props.city1data.temp_min, props.city1data.temp_max];
  let city2temp = [props.city2data.temp_min, props.city2data.temp_max];
  let city3temp = [props.city3data.temp_min, props.city3data.temp_max];
  const data = {
    labels: [city1name, city2name, city3name],
    datasets: [
      {
        label: "Max temperature",
        data: [city1temp[0], city2temp[0], city3temp[0]],
        backgroundColor: " rgba(152, 216, 158, 1)",
        borderColor: "white",
        borderWidth: "1",
        barThickness: 40,
        borderRadius: 5,
        pointStyle: "circle",
      },
      {
        label: "Min temperature",
        data: [city1temp[1], city2temp[1], city3temp[1]],
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
          stepSize: 100,
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
    <div className="rounded-xl shadow-xl p-6 border-sky-500 border-solid border-2">
      <div className="flex flex-row justify-between activities-heading-wrapper mb-6">
        <div className="activities-subhead-wrapper">
          <h1 className="dashboard-sub-heading">Activities</h1>
          <p>May - June 2021</p>
        </div>
        <div className="flex flex-row activities-legend">
          <div className="flex flex-row legend ml-2">
            <img src={Legend1} alt="img1"/>
            <p>Min Temp.</p>
          </div>

          <div className="flex flex-row legend ml-2">
            <img src={Legend2} alt="img2"/>
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
