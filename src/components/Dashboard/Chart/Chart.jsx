import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({
 label = "label",
 xAxisLabels = [],
 yAxisData = [],
 backgroundColor = [],
 borderColor = [],
}) => {
 return (
  <Line
   data={{
    labels: xAxisLabels,
    datasets: [
     {
      label: label,
      data: yAxisData,
      backgroundColor,
      borderColor,
      borderWidth: 1,
     },
    ],
   }}
   options={{
    scales: {
     yAxes: [
      {
       ticks: {
        beginAtZero: false,
       },
      },
     ],
    },
   }}
  />
 );
};

export default Chart;
