import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import {
  useGetConversionResume,
  useGetProfileDataUser,
} from "../../hooks/dashboard";
import SectionTitle from "../Helpers/SectionTitle";
import SalesDashBoard from "../SalesDashBoard";
import InitialCardContainer from "../InitialCardContainer";
import MainPageTitle from "../Helpers/MainPageTitle";

const DashBoard = () => {
  /** Hooks */

  const { data: profileDataUser } = useGetProfileDataUser();
  const { data: conversionResume, isLoading } = useGetConversionResume();
  /* const { data: products } = useGetProducts(); */

  return (
    <Flex
      minW="100vw"
      minH="100vh"
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
        <Box overflowY="scroll" position="relative" h="85vh">
          <MainPageTitle title="Início" />
          <InitialCardContainer />
          <SectionTitle title="Dashboard de vendas" />
          <Flex w="100%">
            <SalesDashBoard />
          </Flex>
          <SectionTitle title="Funil de conversão" />
          <InitialCardContainer />
        </Box>
      )}
    </Flex>
  );
};

export default DashBoard;
