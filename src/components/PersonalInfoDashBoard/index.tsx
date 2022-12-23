import { HStack } from "@chakra-ui/react";
import React from "react";
import { useScreenClass } from "react-grid-system";
import SessionsByGenderChart from "../Charts/SessionsByGenderChart";
import TransactionsPerAgeChart from "../Charts/TransactionsPerAgeChart";
import TransactiorPerClientChart from "../Charts/TransactiorPerClientChart";
import SectionTitle from "../Helpers/SectionTitle";

const PersonalInfoDashBoard = () => {
  const screenClass = useScreenClass();
  const breakPoint = ["sm", "md", "lg", "xl"].includes(screenClass);
  return (
    <>
      {breakPoint ? (
        <>
          <SectionTitle title="Perfil do usuário" />
          <TransactionsPerAgeChart />
          <SessionsByGenderChart />
          <TransactiorPerClientChart />
        </>
      ) : (
        <>
          <SectionTitle title="Perfil do usuário" />
          <HStack w="100%" spacing={8}>
            <TransactionsPerAgeChart />
            <SessionsByGenderChart />
            <TransactiorPerClientChart />
          </HStack>
        </>
      )}
    </>
  );
};

export default PersonalInfoDashBoard;
