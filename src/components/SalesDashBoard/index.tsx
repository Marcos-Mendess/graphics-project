import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  useGetCanceledOrdersByMonth,
  useGetExpectedProfitPerMonth,
  useGetOrdersPerMonth,
  useGetRealProfitPerMonth,
  useGetSellsPerMonth,
} from "../../hooks/dashboard";
import { OrdersByMonthDashboard } from "../../types/menu";
import CanceledOrdersChart from "../Charts/CanceledOrdersChart";
import OrdersChart from "../Charts/OrdersChart";
import ProfitChart from "../Charts/ProfitChart";
import SectionTitle from "../Helpers/SectionTitle";

const SalesDashBoard = () => {
  /** Hooks */
  const { data: sellPerMonth } = useGetSellsPerMonth();
  const { data: ordersPerMonth } = useGetOrdersPerMonth();
  const { data: expectedProfitPerMonth } = useGetExpectedProfitPerMonth();
  const { data: realProfitPerMonth } = useGetRealProfitPerMonth();
  const { data: canceledOrdersByMonth } = useGetCanceledOrdersByMonth();
  return (
    <>
      <SectionTitle title="Dashboard de vendas" />
      <Flex w="100%">
        {sellPerMonth ? (
          <OrdersChart data={sellPerMonth as OrdersByMonthDashboard[]} />
        ) : null}
        {expectedProfitPerMonth && realProfitPerMonth ? (
          <ProfitChart
            expectedProfit={expectedProfitPerMonth}
            realProfit={realProfitPerMonth}
          />
        ) : null}
        {canceledOrdersByMonth && ordersPerMonth ? (
          <CanceledOrdersChart
            ordersPerMonth={ordersPerMonth}
            canceledOrdersByMonth={canceledOrdersByMonth}
          />
        ) : null}
      </Flex>
    </>
  );
};

export default SalesDashBoard;
