import { Flex } from "@chakra-ui/react";
import React from "react";
import CanceledOrdersChart from "../Charts/CanceledOrdersChart";
import OrdersChart from "../Charts/OrdersChart";
import ProfitChart from "../Charts/ProfitChart";
import SectionTitle from "../Helpers/SectionTitle";

const SalesDashBoard = () => {
  return (
    <>
      <SectionTitle title="Dashboard de vendas" />
      <Flex w="100%">
        <OrdersChart />
        <ProfitChart />
        <CanceledOrdersChart />
      </Flex>
    </>
  );
};

export default SalesDashBoard;
