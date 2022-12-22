import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const TablePaginator = () => {
  return (
    <Flex justifyContent="end" w="90%" mt="30px" textAlign="center">
      <Text mt="2px" color="#e0e0e0">
        {" "}
        1 de 40
      </Text>
      <Link backgroundColor="#ededed" mb="15px" mx="10px" borderRadius="5px">
        <ChevronLeftIcon boxSize="30px" />
      </Link>
      <Link>
        <ChevronRightIcon
          boxSize="30px"
          backgroundColor="#ededed"
          borderRadius="5px"
        />
      </Link>
    </Flex>
  );
};

export default TablePaginator;
