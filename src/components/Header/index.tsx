import { Avatar, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { AvatarImage } from "../../types/menu";
import LogoIcon from "../icons/HeaderIcon";

type Props = {
  data: AvatarImage;
  isLoading: boolean;
};

const Header = ({ data, isLoading }: Props) => {
  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        w="100%"
        px="2"
        bg="#FFFFFF 0% 0% no-repeat padding-box"
        borderBottomWidth="1px"
        boxShadow="0px 3px 6px #00000014"
        h="84px"
      >
        <LogoIcon viewBox="0 0 69 59" boxSize="59px" ml="40px" />
        <Flex alignItems="center" fontSize="16px" mr="20px">
          {!isLoading ? (
            <>
              <Text color="#4E5D66" fontFamily="Ubuntu" mr="0px">
                {data?.name}
              </Text>
              <Avatar
                cursor="pointer"
                name="avatar-image"
                ml={4}
                size="sm"
                mr={2}
                src={data?.avatar}
              />
            </>
          ) : (
            <Spinner />
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Header;
