import { Flex, Icon, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import React from "react";
import * as _chakra_ui_system from "@chakra-ui/system";

type Props = {
  title: string;
  icon: any;
  selected?: boolean;
  navSize: string;
  setSelect: () => void;
  disabled?: boolean;
};

const NavItem = ({
  title,
  icon,
  selected,
  navSize,
  disabled,
  setSelect,
}: Props) => {
  return (
    <Flex flexDir="column" w="60px" alignItems="center">
      <Menu placement="right">
        <Link
          p={3}
          w="100%"
          textDecoration="none !important"
          onClick={() => {
            if (!disabled) setSelect();
          }}
        >
          <MenuButton
            w={navSize == "large" ? "40px" : "180px"}
            h="40px"
            background={selected && !disabled ? "#5A4CA7" : "inherit"}
            color={selected ? "#FFF" : "#4e5d66"}
            borderRadius={6}
          >
            <Flex>
              <Icon boxSize="40px" viewBox="0 0 40 40" as={icon} />
              <Text
                ml={5}
                h="40px"
                alignItems="center"
                display={navSize == "small" ? "flex" : "none"}
                color={selected ? "#FFFFFF" : "inherit"}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItem;
