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

function Activities() {
  const data = {
    labels: ["week 1", "week 2", "week 3", "week 4", "week 5"],
    datasets: [
      {
        label: "user",
        data: [3, 6, 7, 2.4, 5],
        backgroundColor: " rgba(152, 216, 158, 1)",
        borderColor: "white",
        borderWidth: "1",
      },
      {
        label: "Guest",
        data: [3, 9, 2, 5, 3],
        backgroundColor: " rgba(238, 132, 132, 1)",
        borderColor: "white",
        borderWidth: "1",
      },
    ],
  };
  const options = {};
  return (
    <div>
      <Bar
        style={{ padding: "1rem", width: "80%" }}
        data={data}
        options={options}
      ></Bar>
    </div>
  );
}

export default Activities;
