import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import TableListTitle from "../Helpers/TableListTitle";

const Table = () => {
  return (
    <Box h="100%" w="100%" backgroundColor="#FFFFFF" borderRadius="20px">
      <TableListTitle title="Listagem de Produtos" />
    </Box>
  );
};

export default Table;
