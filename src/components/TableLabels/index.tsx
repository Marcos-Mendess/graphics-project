import React from "react";

import { Box, Divider, Flex, Grid, GridItem } from "@chakra-ui/react";
import ColumnNameTable from "../Helpers/ColumnNameTable";

const TableLabels = () => {
  return (
    <Box mt="50px">
      <Grid templateColumns="1fr 2fr" gap={10} mx="40px">
        <GridItem w="100%" h="50px" bg="#4E5D66" borderRadius="9px">
          <ColumnNameTable title="PRODUTO" />
        </GridItem>
        <GridItem w="100%" h="50px" bg="#4E5D66" borderRadius="9px">
          <Flex>
            <ColumnNameTable title="CORES" />
            <Divider
              orientation="vertical"
              color="#FFFFFF"
              ml="25%"
              h="30px"
              my="10px !important"
            />
            <ColumnNameTable title="ESPECIFICAÇÕES" />
            <Divider
              orientation="vertical"
              color="#FFFFFF"
              ml="25%"
              h="30px"
              my="10px !important"
            />
            <ColumnNameTable title="STATUS" />
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TableLabels;
