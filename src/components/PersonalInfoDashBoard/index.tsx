import { HStack } from "@chakra-ui/react";
import React from "react";
import SessionsByGenderChart from "../Charts/SessionsByGenderChart";
import TransactionsPerAgeChart from "../Charts/TransactionsPerAgeChart";
import TransactiorPerClientChart from "../Charts/TransactiorPerClientChart";
import SectionTitle from "../Helpers/SectionTitle";

const PersonalInfoDashBoard = () => {
  return (
    <>
      <SectionTitle title="Perfil do usuário" />
      <HStack w="100%" spacing={8}>
        <TransactionsPerAgeChart />
        <SessionsByGenderChart />
        <TransactiorPerClientChart />
      </HStack>
    </>
  );
};

export default PersonalInfoDashBoard;
