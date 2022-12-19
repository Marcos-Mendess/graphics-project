import { Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";

const MonetaryCard = () => {
  const numero = "9292.32";

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
      <Text color="#4E5D66" fontWeight="bold">
        Ticket médio últimas 24h
      </Text>
      <Tag
        boxShadow="0px 0px 20px #0000001A"
        w="60px"
        ml="4px"
        mt="12px"
        bg="#FFFFFF 0% 0% no-repeat padding-box"
        borderRadius="12px"
        color="#109E8E"
      >
        + 15 %
      </Tag>
      <Text color="#109E8E" fontSize="16px" mt="10px">
        em relação a ontem
      </Text>
      <Text fontSize="18px" color="#4E5D66" mt="8px">
        R${" "}
        <Text as="span" fontSize="24px" ml="8px">
          {" "}
          {numero.replace(".", ",")}
        </Text>
      </Text>
    </Flex>
  );
};

export default MonetaryCard;
