import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type TitleSection = {
  title: string;
};

const SectionTitle = ({ title }: TitleSection) => {
  return (
    <>
      <Flex>
        <Text
          color="#5A4CA7"
          fontWeight="bold"
          fontSize="24px"
          p={4}
          ml="20px"
          mt="40px"
          as="h2"
        >
          {title}
        </Text>
      </Flex>
    </>
  );
};

export default SectionTitle;
