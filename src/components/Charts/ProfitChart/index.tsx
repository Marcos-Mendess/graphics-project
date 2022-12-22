import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { months } from "../../../static";
import { OrdersByMonthDashboard } from "../../../types/menu";
import { createChartValueArray } from "../../../utils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
  expectedProfit: OrdersByMonthDashboard[];
  realProfit: OrdersByMonthDashboard[];
};

const ProfitChart = ({ expectedProfit, realProfit }: Props) => {
  const expectedValues = React.useMemo(() => {
    return createChartValueArray(expectedProfit);
  }, [expectedProfit]);

  const realValues = React.useMemo(() => {
    return createChartValueArray(realProfit);
  }, [realProfit]);

  const series = [
    {
      name: "Lucro esperado",
      data: expectedValues,
    },
    {
      name: "Lucro real",
      data: realValues,
    },
  ];

  const options = {
    colors: ["#9DD6D3", "#F78899"],
    legend: {
      position: "top" as const,
      fontFamily: "Ubuntu",
      fontSize: "16px",
    },
    tooltip: {
      y: {
        formatter: (seriesNumber: any) =>
          ` ${seriesNumber.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}`,
      },
    },
    title: {
      text: "Expectativa de lucro x lucro real",
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

export default ProfitChart;
