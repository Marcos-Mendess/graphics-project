import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useGetProfileDataUser } from "../../../hooks/dashboard";
import {
  createAgeCategoriesArray,
  createChartValueArray,
  legendPipe,
} from "../../../utils";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TransactiorPerClientChart = () => {
  const { data: profileDataUser } = useGetProfileDataUser();

  const newValues = React.useMemo(() => {
    if (profileDataUser) {
      return createChartValueArray(
        profileDataUser["transactions-per-client-type"]
      );
    }
  }, [profileDataUser]);

  const categoryArray = React.useMemo(() => {
    if (profileDataUser) {
      const formattedArray = createAgeCategoriesArray(
        profileDataUser["transactions-per-client-type"]
      );
      return legendPipe(formattedArray as string[]);
    }
  }, [profileDataUser]);

  const options = {
    colors: ["#9FD8D5", "#7BB686"],
    legend: {
      position: "right" as const,
      fontFamily: "Ubuntu",
      fontSize: "16px",
      offsetY: 160,
      offsetX: 70,
      floating: true,
    },
    labels: categoryArray,
    title: {
      text: "Transações por tipo de cliente",
      margin: 40,
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
      id: "pie",
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      padding: {
        top: -80,
        right: 260,
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.6,
        expandOnClick: false,
      },
    },
  };

  return (
    <Flex
      background="#FFFFFF 0% 0% no-repeat padding-box"
      px="20px"
      borderRadius="12px"
      ml="32px"
    >
      {options && newValues ? (
        <Chart
          width="539px"
          height="400px"
          type="donut"
          options={options}
          series={newValues}
        ></Chart>
      ) : null}
    </Flex>
  );
};

export default TransactiorPerClientChart;
