import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import useStore from "../../store";

const SalesChart = ({ orderList }) => {
  const data = [
    { id: 1, month: "January", sales: 0 },
    { id: 2, month: "February", sales: 0 },
    { id: 3, month: "March", sales: 0 },
    { id: 4, month: "April", sales: 0 },
    { id: 5, month: "May", sales: 0 },
    { id: 6, month: "June", sales: 0 },
    { id: 7, month: "July", sales: 0 },
    { id: 8, month: "August", sales: 0 },
    { id: 9, month: "September", sales: 0 },
    { id: 10, month: "October", sales: 0 },
    { id: 11, month: "November", sales: 0 },
    { id: 12, month: "December", sales: 0 },
  ];
  if (orderList?.length > 0) {
    orderList.map((order) => {
      if (order?.payment_details) {
        const date = new Date(order?.payment_details?.created_at);
        const month = date.getMonth();
        data[month].sales += 1;
      }
    });
  }

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
