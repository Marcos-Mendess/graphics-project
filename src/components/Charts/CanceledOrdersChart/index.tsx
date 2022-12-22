import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import {
  useGetCanceledOrdersByMonth,
  useGetOrdersPerMonth,
} from "../../../hooks/dashboard";
import { months } from "../../../static";
import { createChartValueArray } from "../../../utils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CanceledOrdersChart = () => {
  /** Hooks */
  const { data: ordersPerMonth } = useGetOrdersPerMonth();
  const { data: canceledOrdersByMonth } = useGetCanceledOrdersByMonth();

  const canceledOrders = React.useMemo(() => {
    if (canceledOrdersByMonth)
      return createChartValueArray(canceledOrdersByMonth);
  }, [canceledOrdersByMonth]);

  const ordersPlaced = React.useMemo(() => {
    if (ordersPerMonth) return createChartValueArray(ordersPerMonth);
  }, [ordersPerMonth]);

  const series = [
    {
      name: "Realizados",
      data: canceledOrders as number[],
    },
    {
      name: "Cancelados",
      data: ordersPlaced as number[],
    },
  ];

  const options = {
    colors: ["#109E8E", "#F18F7F"],
    legend: {
      position: "top" as const,
      fontFamily: "Ubuntu",
      fontSize: "16px",
    },
    title: {
      text: "Pedidos realizados x pedidos cancelados",
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

    stroke: {
      colors: ["transparent"],
      width: 2,
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
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
        columnWidth: "80px",
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
      {ordersPerMonth && canceledOrdersByMonth ? (
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

export default CanceledOrdersChart;
