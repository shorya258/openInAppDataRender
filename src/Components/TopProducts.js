import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
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
    aspectRatio: 2,
    cutout: 40
  };
  return (
    <>
      <div>TopProducts</div>
      <div>
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </>
  );
}

export default TopProducts;
