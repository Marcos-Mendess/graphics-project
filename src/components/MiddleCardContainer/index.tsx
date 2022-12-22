import { HStack } from "@chakra-ui/react";
import React from "react";
import { TicketResponse } from "../../types/menu";
import AlertCard from "../Card/AlertCard";
import MonetaryCard from "../Card/MonetaryCard";
import ProductCard from "../Card/ProductCard";
import {
  useGetAverageDiaryTicket,
  useGetAverageMonthTicket,
  useGetMaintenanceAlerts,
  useGetOrdersDoneByMonth,
  useGetSellsByMonth,
} from "../../hooks/dashboard";
import SectionTitle from "../Helpers/SectionTitle";

const MiddleCardContainer = () => {
  /** Hooks */
  const { data: averageDailyTicket } = useGetAverageDiaryTicket();
  const { data: averageMonthlyTicket } = useGetAverageMonthTicket();
  const { data: alertData } = useGetMaintenanceAlerts();
  const { data: ordersDoneByMonth } = useGetOrdersDoneByMonth();
  const { data: sellsByMonth } = useGetSellsByMonth();
  return (
    <>
      <SectionTitle title="Funil de Conversão" />

      <HStack spacing={3} w="100%">
        <MonetaryCard data={averageDailyTicket as TicketResponse} daily />
        <MonetaryCard data={averageMonthlyTicket as TicketResponse} monthly />
        {alertData?.map(({ type, value, since }) => {
          return (
            <AlertCard type={type} value={value} since={since} key={type} />
          );
        })}
        <ProductCard monthly data={ordersDoneByMonth as TicketResponse} />
        <ProductCard orders monthly data={sellsByMonth as TicketResponse} />
      </HStack>
    </>
  );
};

export default MiddleCardContainer;
