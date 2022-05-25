import React from "react";
import { Line } from "@ant-design/plots";

const SalesChart = () => {
  const data = [
    {
      month: "January",
      sales: 300,
    },
    {
      month: "February",
      sales: 250,
    },
    {
      month: "March",
      sales: 150,
    },
    {
      month: "April",
      sales: 100,
    },
    {
      month: "May",
      sales: 500,
    },
    {
      month: "June",
      sales: 600,
    },
    {
      month: "July",
      sales: 700,
    },
    {
      month: "August",
      sales: 800,
    },
    {
      month: "September",
      sales: 900,
    },
    {
      month: "October",
      sales: 1000,
    },
    {
      month: "November",
      sales: 1500,
    },
    {
      month: "December",
      sales: 1400,
    },
  ];

  const config = {
    data,
    xField: "month",
    yField: "sales",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };

  return (
    <React.Fragment>
      <Line {...config} />
    </React.Fragment>
  );
};

export default SalesChart;
