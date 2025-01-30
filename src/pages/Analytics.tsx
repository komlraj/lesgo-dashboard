import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  // Static sales data for the last 7 days
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales in USD",
        data: [50, 75, 60, 90, 120, 80, 100],
        backgroundColor: "#f09465",
        borderColor: "#f09465",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2 style={{ opacity: 0.7 }}>Sales Analytics</h2>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
