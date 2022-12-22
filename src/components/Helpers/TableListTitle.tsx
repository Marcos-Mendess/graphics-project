import { Text } from "@chakra-ui/react";
import React from "react";

type TitleSection = {
  title: string;
};

const TableListTitle = ({ title }: TitleSection) => {
  return (
    <Text
      color="#4E5D66"
      fontWeight="bold"
      fontSize="30px"
      ml="40px"
      as="h2"
      fontFamily="Ubuntu"
      mt="55px"
    >
      {title}
    </Text>
  );
};

export default TableListTitle;
