import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { months } from "../../../static";
import { OrdersByMonthDashboard } from "../../../types/menu";
import { createChartValueArray } from "../../../utils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  ordersPerMonth: OrdersByMonthDashboard[];
  canceledOrdersByMonth: OrdersByMonthDashboard[];
};

const CanceledOrdersChart = ({
  ordersPerMonth,
  canceledOrdersByMonth,
}: Props) => {
  const canceledOrders = React.useMemo(() => {
    return createChartValueArray(canceledOrdersByMonth);
  }, [canceledOrdersByMonth]);

  const ordersPlaced = React.useMemo(() => {
    return createChartValueArray(ordersPerMonth);
  }, [ordersPerMonth]);

  const series = [
    {
      name: "Realizados",
      data: canceledOrders,
    },
    {
      name: "Cancelados",
      data: ordersPlaced,
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
      <Chart
        width="608px"
        height="400px"
        type="bar"
        options={options}
        series={series}
      ></Chart>
    </Flex>
  );
};

export default CanceledOrdersChart;
