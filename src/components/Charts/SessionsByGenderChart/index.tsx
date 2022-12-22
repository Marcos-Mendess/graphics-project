import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useGetProfileDataUser } from "../../../hooks/dashboard";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SessionsByGenderChart = () => {
  const { data: profileDataUser } = useGetProfileDataUser();

  const values = React.useMemo(() => {
    if (profileDataUser) {
      const values = profileDataUser["sessions-per-sex"];
      return [Number(values.male), Number(values.female)];
    }
  }, [profileDataUser]);

  const series = values;

  const options = {
    colors: ["#F7C982", "#393C56"],
    legend: {
      position: "right" as const,
      fontFamily: "Ubuntu",
      fontSize: "16px",
      offsetY: 160,
      offsetX: 70,
      floating: true,
    },
    labels: ["Masculino", "Feminino"],
    title: {
      text: "Sessões por gênero",
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
      {profileDataUser ? (
        <Chart
          width="539px"
          height="400px"
          type="donut"
          options={options}
          series={series}
        ></Chart>
      ) : null}
    </Flex>
  );
};

export default SessionsByGenderChart;
