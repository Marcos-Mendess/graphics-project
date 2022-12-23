import { HStack } from "@chakra-ui/react";
import React from "react";
import { useScreenClass } from "react-grid-system";
import CanceledOrdersChart from "../Charts/CanceledOrdersChart";
import OrdersChart from "../Charts/OrdersChart";
import ProfitChart from "../Charts/ProfitChart";
import SectionTitle from "../Helpers/SectionTitle";

const SalesDashBoard = () => {
  const screenClass = useScreenClass();
  const breakPoint = ["sm", "md", "lg", "xl"].includes(screenClass);
  return (
    <>
      {breakPoint ? (
        <>
          <SectionTitle title="Dashboard de vendas" />
          <OrdersChart />
          <ProfitChart />
          <CanceledOrdersChart />
        </>
      ) : (
        <>
          <SectionTitle title="Dashboard de vendas" />
          <HStack w="100%" spacing={8}>
            <OrdersChart />
            <ProfitChart />
            <CanceledOrdersChart />
          </HStack>
        </>
      )}
    </>
  );
};

export default SalesDashBoard;
