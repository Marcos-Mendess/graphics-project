import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type TitleSection = {
  title: string;
};

const MainPageTitle = ({ title }: TitleSection) => {
  return (
    <Flex alignItems="start !important">
      <Text
        color="#4E5D66"
        fontWeight="bold"
        fontSize="28px"
        p={4}
        ml="20px"
        as="h1"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default MainPageTitle;
