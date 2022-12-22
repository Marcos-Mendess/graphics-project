import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
};

const ColumnNameTable = ({ title }: Props) => {
  return (
    <Text
      fontFamily="Ubuntu"
      color="#FFFFFF"
      letterSpacing="0.64px"
      ml="40px"
      h="100%"
      mt="12px"
    >
      {title}
    </Text>
  );
};

export default ColumnNameTable;
