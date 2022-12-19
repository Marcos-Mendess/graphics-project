import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import MonetaryCard from "../MonetaryCard";

const DashBoard = () => {
  React.useEffect(() => {
    console.log("entrou");
  });
  return (
    <Flex
      color="red"
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
        <MonetaryCard />
        <MonetaryCard />
      </HStack>
    </Flex>
  );
};

export default DashBoard;
