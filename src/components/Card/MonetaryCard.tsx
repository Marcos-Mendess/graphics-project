import { Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { TicketResponse } from "../../types/menu";
import { formatter, getLastMonth } from "../../utils";

type Props = {
  data: TicketResponse;
  daily?: boolean;
  monthly?: boolean;
};

const MonetaryCard = ({ data, daily, monthly }: Props) => {
  const lastMonth = getLastMonth();

  const value = React.useMemo(() => {
    if (data) {
      const formatedValue = data?.value.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      });
      return formatedValue;
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
      w="250px"
      h="168px"
      borderRadius="15px"
      bg="#FFFFFF 0% 0% no-repeat padding-box"
      direction="column"
      p={5}
      fontFamily="Ubuntu"
    >
      {daily ? (
        <Text color="#4E5D66" fontWeight="bold">
          Ticket médio últimas 24h
        </Text>
      ) : null}
      {monthly ? (
        <Text color="#4E5D66" fontWeight="bold">
          Ticket médio mensal
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

      <Text fontSize="16px" color="#4E5D66" mt="8px">
        R${" "}
        {value ? (
          <Text as="span" fontSize="20px" ml="8px" fontWeight="bold">
            {" "}
            {value}
          </Text>
        ) : null}
      </Text>
    </Flex>
  );
};

export default MonetaryCard;
