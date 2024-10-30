"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

const GraTwo = () => {
  useEffect(() => {
    var chartDom = document.getElementById("chart-bar");
    var myChart = echarts.init(chartDom);

    var option = {
      title: {
        text: "Prasarana Air Bersih",
        left: "center",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLabel: {
          show: false,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [180, 110, 50, 60, 120, 250, 180],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="chart-bar" style={{ width: "100%", height: "400px" }}></div>;
};

export default GraTwo;
