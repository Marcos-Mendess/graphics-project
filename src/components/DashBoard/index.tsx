import { Flex, HStack, Text } from "@chakra-ui/react";
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
import Card from "../Card";

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
  const { data: conversionResume } = useGetConversionResume();
  /* const { data: products } = useGetProducts(); */

  return (
    <Flex
      maxW="100%"
      minW="90vw"
      minH="90vh"
      w="90vw"
      pos="sticky"
      flexDir="column"
      alignItems="start"
      ml="40px"
    >
      <Flex justifyContent="center" alignItems="start">
        <Text color="#4E5D66" fontWeight="bold" fontSize="28px" p={4} ml="20px">
          Início
        </Text>
      </Flex>
      <HStack spacing={3}>
        <Card monetary daily data={averageDailyTicket} />
        <Card monetary monthly data={averageMonthlyTicket} />
        <Card product title="Produtos em manutenção" />
      </HStack>
    </Flex>
  );
};

export default DashBoard;
