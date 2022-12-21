import { Flex, HStack, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import {
  useGetAverageDiaryTicket,
  useGetAverageMonthTicket,
  useGetCanceledOrdersByMonth,
  useGetConversionResume,
  useGetExpectedProfitPerMonth,
  useGetMaintenanceAlerts,
  useGetOrdersDoneByMonth,
  useGetOrdersPerMonth,
  useGetProducts,
  useGetProfileDataUser,
  useGetRealProfitPerMonth,
  useGetSellsByMonth,
  useGetSellsPerMonth,
} from "../../hooks/dashboard";
import { OrdersByMonthDashboard, TicketResponse } from "../../types/menu";
import MonetaryCard from "../Card/MonetaryCard";
import AlertCard from "../Card/AlertCard";
import ProductCard from "../Card/ProductCard";
import OrdersChart from "../Charts/OrdersChart";

const DashBoard = () => {
  const { data: averageDailyTicket } = useGetAverageDiaryTicket();
  const { data: averageMonthlyTicket } = useGetAverageMonthTicket();
  const { data: alertData } = useGetMaintenanceAlerts();
  const { data: ordersDoneByMonth } = useGetOrdersDoneByMonth();
  const { data: sellsByMonth } = useGetSellsByMonth();
  const { data: sellPerMonth } = useGetSellsPerMonth();
  const { data: ordersPerMonth } = useGetOrdersPerMonth();
  const { data: expectedProfitPerMonth } = useGetExpectedProfitPerMonth();
  const { data: realProfitPerMonth } = useGetRealProfitPerMonth();
  const { data: canceledOrdersByMonth } = useGetCanceledOrdersByMonth();
  const { data: profileDataUser } = useGetProfileDataUser();
  const { data: conversionResume, isLoading } = useGetConversionResume();
  /* const { data: products } = useGetProducts(); */

  return (
    <Flex
      minW="90vw"
      minH="90vh"
      w="90vw"
      flexDir="column"
      alignItems="start"
      ml="40px"
    >
      {isLoading ? (
        <Flex alignItems="center" justifyContent="center" w="100%" h="100%">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <>
          <Flex justifyContent="center" alignItems="start">
            <Text
              color="#4E5D66"
              fontWeight="bold"
              fontSize="28px"
              p={4}
              ml="20px"
            >
              Início
            </Text>
          </Flex>
          <HStack spacing={3} w="100%">
            <MonetaryCard data={averageDailyTicket as TicketResponse} daily />
            <MonetaryCard
              data={averageMonthlyTicket as TicketResponse}
              monthly
            />
            {alertData?.map(({ type, value, since }) => {
              return (
                <AlertCard type={type} value={value} since={since} key={type} />
              );
            })}
            <ProductCard monthly data={ordersDoneByMonth as TicketResponse} />
            <ProductCard orders monthly data={sellsByMonth as TicketResponse} />
          </HStack>
        </>
      )}
      <Flex>
        <Text
          color="#5A4CA7"
          fontWeight="bold"
          fontSize="24px"
          p={4}
          ml="20px"
          mt="40px"
        >
          Dashboard de vendas
        </Text>
      </Flex>
      <HStack spacing={3} w="100%">
        {sellPerMonth ? (
          <OrdersChart data={sellPerMonth as OrdersByMonthDashboard[]} />
        ) : null}
      </HStack>
    </Flex>
  );
};

export default DashBoard;
