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
import MainPageTitle from "../Helpers/MainPageTitle";
import { useScreenClass } from "react-grid-system";

const InitialCardContainer = () => {
  const screenClass = useScreenClass();
  const breakPoint = ["sm", "md", "lg", "xl"].includes(screenClass);

  /** Hooks */
  const { data: averageDailyTicket } = useGetAverageDiaryTicket();
  const { data: averageMonthlyTicket } = useGetAverageMonthTicket();
  const { data: alertData } = useGetMaintenanceAlerts();
  const { data: ordersDoneByMonth } = useGetOrdersDoneByMonth();
  const { data: sellsByMonth } = useGetSellsByMonth();

  return (
    <>
      <MainPageTitle title="Início" />
      {breakPoint ? (
        <>
          <HStack spacing={3} w="100%">
            <MonetaryCard
              data={averageMonthlyTicket as TicketResponse}
              monthly
            />
            {alertData?.map(({ type, value, since }) => {
              return (
                <AlertCard type={type} value={value} since={since} key={type} />
              );
            })}
          </HStack>
          <HStack spacing={3} w="100%" mt="20px">
            <ProductCard
              orders
              monthly
              data={ordersDoneByMonth as TicketResponse}
            />
            <ProductCard monthly data={sellsByMonth as TicketResponse} />
            <MonetaryCard data={averageDailyTicket as TicketResponse} daily />
          </HStack>
        </>
      ) : (
        <HStack spacing={3} w="100%">
          <MonetaryCard data={averageDailyTicket as TicketResponse} daily />
          <MonetaryCard data={averageMonthlyTicket as TicketResponse} monthly />
          {alertData?.map(({ type, value, since }) => {
            return (
              <AlertCard type={type} value={value} since={since} key={type} />
            );
          })}
          <ProductCard
            orders
            monthly
            data={ordersDoneByMonth as TicketResponse}
          />

          <ProductCard monthly data={sellsByMonth as TicketResponse} />
        </HStack>
      )}
    </>
  );
};

export default InitialCardContainer;
