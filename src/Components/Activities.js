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
        barThickness: 40
      },
      {
        label: "Min temperature",
        data: [city1temp[1], city2temp[1], city3temp[1]],
        backgroundColor: " rgba(238, 132, 132, 1)",
        borderColor: "white",
        borderWidth: "1",
        barThickness: 40
      },
    ],
  };
  const options = {
  };
  return (
    <div className="rounded-xl shadow-xl">
      <h1>Activities</h1>
      <p>May - June 2021</p>
      <Bar
        className="bar-chart-wrapper"
        data={data}
        options={options}
      ></Bar>
    </div>
  );
}

export default Activities;
