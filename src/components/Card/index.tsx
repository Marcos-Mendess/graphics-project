import { Flex, HStack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { getLastMonth } from "../../utils";

type Props = {
  monetary?: boolean;
  daily?: boolean;
  monthly?: boolean;
  product?: boolean;
  orders?: boolean;
  title?: string;
  data?: any;
};

const Card = ({
  daily,
  monthly,
  monetary,
  product,
  orders,
  title,
  data,
}: Props) => {
  const numero = "9292.32";
  const inteiro = "10";
  const porcentage = "+ 15 %";
  const lastMonth = getLastMonth();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {monetary ? (
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
              Ticket médio últimas 24h
            </Text>
          ) : null}
          {monthly ? (
            <Text color="#4E5D66" fontWeight="bold">
              Ticket médio mensal
            </Text>
          ) : null}
          <Tag
            boxShadow="0px 0px 20px #0000001A"
            w="60px"
            ml="4px"
            mt="12px"
            bg="#FFFFFF 0% 0% no-repeat padding-box"
            borderRadius="12px"
            color="#109E8E"
          >
            {porcentage}
          </Tag>
          {daily ? (
            <Text color="#109E8E" fontSize="16px" mt="10px">
              em relação a ontem
            </Text>
          ) : null}
          {monthly ? (
            <Text color="#109E8E" fontSize="16px" mt="10px">
              em relação a {lastMonth}
            </Text>
          ) : null}
          <Text fontSize="16px" color="#4E5D66" mt="8px">
            R${" "}
            <Text as="span" fontSize="20px" ml="8px" fontWeight="bold">
              {" "}
              {numero.replace(".", ",")}
            </Text>
          </Text>
        </Flex>
      ) : null}

      {product ? (
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
              Ticket médio últimas 24h
            </Text>
          ) : null}
          {monthly ? (
            <Text color="#4E5D66" fontWeight="bold">
              Ticket médio mensal
            </Text>
          ) : null}
          {title ? (
            <Text color="#4E5D66" fontWeight="bold">
              {title}
            </Text>
          ) : null}
          <Tag
            boxShadow="0px 0px 20px #0000001A"
            w="60px"
            ml="4px"
            mt="12px"
            bg="#FFFFFF 0% 0% no-repeat padding-box"
            borderRadius="12px"
            color="#D6628E"
          >
            {porcentage}
          </Tag>
          {daily ? (
            <Text color="#109E8E" fontSize="16px" mt="10px">
              em relação a ontem
            </Text>
          ) : null}
          {monthly ? (
            <Text color="#109E8E" fontSize="16px" mt="10px">
              em relação a {lastMonth}
            </Text>
          ) : null}
          <HStack mt="40px">
            <Text fontSize="20px" fontWeight="bold" color="#4E5D66">
              {inteiro}
            </Text>
            <Text fontSize="16px" fontWeight="normal" color="#4E5D66" ml="8px">
              produtos
            </Text>
          </HStack>
        </Flex>
      ) : null}

      {orders ? (
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
              Ticket médio últimas 24h
            </Text>
          ) : null}
          {monthly ? (
            <Text color="#4E5D66" fontWeight="bold">
              Ticket médio mensal
            </Text>
          ) : null}
          <Tag
            boxShadow="0px 0px 20px #0000001A"
            w="60px"
            ml="4px"
            mt="12px"
            bg="#FFFFFF 0% 0% no-repeat padding-box"
            borderRadius="12px"
            color="#109E8E"
          >
            {porcentage}
          </Tag>
          {daily ? (
            <Text color="#109E8E" fontSize="16px" mt="10px">
              em relação a ontem
            </Text>
          ) : null}
          {monthly ? (
            <Text color="#109E8E" fontSize="16px" mt="10px">
              em relação a {lastMonth}
            </Text>
          ) : null}
          <HStack mt="10px">
            <Text fontSize="20px" fontWeight="bold" color="#4E5D66">
              {inteiro}
            </Text>
            <Text fontSize="16px" fontWeight="normal" color="#4E5D66" ml="8px">
              produtos
            </Text>
          </HStack>
        </Flex>
      ) : null}
    </>
  );
};

export default Card;
