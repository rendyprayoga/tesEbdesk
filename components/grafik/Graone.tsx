"use client";

import React, { useEffect } from "react";
import * as echarts from "echarts";

const GraOne = () => {
  useEffect(() => {
    const chartDom = document.getElementById("chartTwo");
    const myChart = echarts.init(chartDom);

    const option = {
      title: {
        text: "Jumlah Penduduk",
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
          data: [-90, -40, -80, 60, -2, 18, -100],
          type: "line",
          smooth: true,
        },
      ],
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <section
      id="chartTwo"
      style={{
        width: "100%",
        height: "400px",
      }}
    ></section>
  );
};

export default GraOne;
