import { Flex, HStack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AlertResponse } from "../../types/menu";
import { differenceInDaysBetweenTwoDates } from "../../utils";

const AlertCard = ({ type, value, since }: AlertResponse) => {
  const tempo = "há 5 dias";

  const differenteInDays = React.useMemo(() => {
    if (since) return differenceInDaysBetweenTwoDates(since);
  }, [since]);

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
      <Text color="#4E5D66" fontWeight="bold">
        {type}
      </Text>
      {tempo ? (
        <Tag
          boxShadow="0px 0px 20px #0000001A"
          maxW="80px"
          mt="12px"
          bg="#FFFFFF 0% 0% no-repeat padding-box"
          borderRadius="12px"
          color="#D6628E"
          fontSize="12px"
        >
          há {differenteInDays} dias
        </Tag>
      ) : null}
      {type === "Acabando o estoque" ? (
        <Text color="#D6628E" fontSize="14px" mt="10px">
          {" "}
          repor o quanto antes
        </Text>
      ) : null}
      <HStack mt={type === "Acabando o estoque" ? "8px" : "38px"}>
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

export default AlertCard;
