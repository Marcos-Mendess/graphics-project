import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useGetProfileDataUser } from "../../../hooks/dashboard";
import {
  createAgeCategoriesArray,
  createChartValueArray,
} from "../../../utils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TransactionsPerAgeChart = () => {
  const { data: profileDataUser } = useGetProfileDataUser();

  const transactionsPerAgeRange = React.useMemo(() => {
    if (profileDataUser && profileDataUser["transactions-per-age"])
      return createAgeCategoriesArray(
        profileDataUser["transactions-per-age"]
      ).reverse();
  }, [profileDataUser]);

  const chartValues = React.useMemo(() => {
    if (profileDataUser && profileDataUser["transactions-per-age"])
      return createChartValueArray(
        profileDataUser["transactions-per-age"]
      ).reverse();
  }, [profileDataUser]);

  const series = [
    {
      name: "Transações",
      data: chartValues as number[],
    },
  ];

  const options = {
    title: {
      text: "Transações por idade",
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
      categories: transactionsPerAgeRange,
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
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          color: ["#4D4141"],
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Ubuntu",
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
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
      {profileDataUser ? (
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

export default TransactionsPerAgeChart;
