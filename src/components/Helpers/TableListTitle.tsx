import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type TitleSection = {
  title: string;
};

const TableListTitle = ({ title }: TitleSection) => {
  return (
    <Flex alignItems="start !important">
      <Text
        color="#4E5D66"
        fontWeight="bold"
        fontSize="30px"
        mt="55px"
        ml="40px"
        as="h2"
        fontFamily="Ubuntu"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default TableListTitle;
