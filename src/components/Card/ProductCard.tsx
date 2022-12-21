import { Flex, HStack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { TicketResponse } from "../../types/menu";
import { getLastMonth } from "../../utils";

type Props = {
  data: TicketResponse;
  daily?: boolean;
  monthly?: boolean;
  orders?: boolean;
};

const ProductCard = ({ data, daily, monthly, orders }: Props) => {
  const lastMonth = getLastMonth();

  const value = React.useMemo(() => {
    if (data) {
      const valueString = data?.value.toString();
      return valueString.replace(".", ",");
    }
  }, [data]);

  const percentageValue = React.useMemo(() => {
    if (data) {
      const valueString = data?.growth.toString();
      return `+ ${valueString} %`;
    }
  }, [data]);

  const negativeGrowth = React.useMemo(() => {
    if (data && data?.growth > 0) return false;
    if (data && data?.growth < 0) return true;
  }, [data]);

  return (
    <Flex
      w="232px"
      h="168px"
      borderRadius="15px"
      bg="#FFFFFF 0% 0% no-repeat padding-box"
      direction="column"
      p={5}
      fontFamily="Ubuntu"
    >
      {daily ? (
        <Text color="#4E5D66" fontWeight="bold">
          Pedidos realizados nas últimas 24h
        </Text>
      ) : null}
      {monthly && !orders ? (
        <Text color="#4E5D66" fontWeight="bold">
          Pedidos realizados no mês
        </Text>
      ) : null}
      {orders ? (
        <Text color="#4E5D66" fontWeight="bold">
          Produtos vendidos no mês
        </Text>
      ) : null}
      {percentageValue ? (
        <Tag
          boxShadow="0px 0px 20px #0000001A"
          w="55px"
          ml="4px"
          mt="12px"
          bg="#FFFFFF 0% 0% no-repeat padding-box"
          borderRadius="12px"
          fontSize="12px"
          color={negativeGrowth ? "#D6628E" : "#109E8E"}
        >
          {percentageValue}
        </Tag>
      ) : null}
      {daily ? (
        <Text
          color={negativeGrowth ? "#D6628E" : "#109E8E"}
          fontSize="14px"
          mt="10px"
        >
          em relação a ontem
        </Text>
      ) : null}
      {monthly ? (
        <Text
          color={negativeGrowth ? "#D6628E" : "#109E8E"}
          fontSize="14px"
          mt="10px"
        >
          em relação a {lastMonth}
        </Text>
      ) : null}

      <HStack mt="10px">
        <Text fontSize="20px" fontWeight="bold" color="#4E5D66">
          {value}
        </Text>
        <Text fontSize="16px" fontWeight="normal" color="#4E5D66" ml="8px">
          produtos
        </Text>
      </HStack>
    </Flex>
  );
};

export default ProductCard;
