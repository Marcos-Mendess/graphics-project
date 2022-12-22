import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useGetSellsPerMonth } from "../../../hooks/dashboard";
import { months } from "../../../static";
import { createChartValueArray } from "../../../utils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OrdersChart = () => {
  /** Hooks */
  const { data } = useGetSellsPerMonth();

  const chartValues = React.useMemo(() => {
    if (data) return createChartValueArray(data);
  }, [data]);

  const series = [
    {
      name: "Pedidos",
      data: chartValues as number[],
    },
  ];

  const options = {
    title: {
      text: "Pedidos por mês",
      margin: 25,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "20px",
        color: "#333333",
        marginLeft: "10px",
        fontFamily: "Ubuntu",
      },
    },
    chart: {
      id: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#393C56"],
    stroke: {
      colors: ["transparent"],
      width: 2,
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          color: ["#4D4141"],
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Ubuntu",
        },
      },
    },
    grid: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
        borderRadius: 3,
      },
      dataLabels: {
        maxItems: 12,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <Flex
      background="#FFFFFF 0% 0% no-repeat padding-box"
      px="20px"
      borderRadius="12px"
    >
      {data ? (
        <Chart
          width="608px"
          height="400px"
          type="bar"
          options={options}
          series={series}
        ></Chart>
      ) : null}
    </Flex>
  );
};

export default OrdersChart;
