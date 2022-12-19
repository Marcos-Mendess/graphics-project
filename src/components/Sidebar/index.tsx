import React from "react";
import { Divider, Flex, IconButton } from "@chakra-ui/react";
import NavItem from "../NavItem";
import MenuIcon from "../icons/Menu";
import { SideNavOptions } from "../../types/menu";
import { SERVICES_LIST, showServiceByOptions } from "../../static";

type Props = {
  handleSelectedOptions: (option: SideNavOptions) => void;
  selectedOptions: number;
};

const SideBar = ({ selectedOptions, handleSelectedOptions }: Props) => {
  const [navSize, changeNavSize] = React.useState("large");

  return (
    <>
      <Flex
        pos="sticky"
        left="5"
        h="100vh"
        mt="2.5vh"
        w={navSize == "large" ? "88px" : "200px "}
        justifyContent="space-between"
        data-testid="sidenavbar-container"
      >
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize == "large" ? "center" : "flex-start"}
          as="nav"
          backgroundColor="white"
          boxShadow="0px 3px 6px #00000029"
          borderRadius="8px"
          mb="240px"
          mr="10px"
        >
          <Flex
            justifyContent="center"
            w={navSize == "large" ? "88px" : "200px "}
          >
            <IconButton
              background="none"
              mt={5}
              aria-label="Menu-icon"
              _hover={{ background: "none" }}
              icon={<MenuIcon />}
              onClick={() => {
                if (navSize == "small") changeNavSize("large");
                else changeNavSize("small");
              }}
            />
          </Flex>
          <Divider mt={5} w="100%" />
          {SERVICES_LIST.map(({ title, icon, selected, disabled }) => {
            return (
              <NavItem
                key={title}
                title={title}
                icon={icon}
                navSize={navSize}
                selected={selectedOptions === selected}
                setSelect={() => handleSelectedOptions(selected)}
                disabled={disabled}
              />
            );
          })}
        </Flex>
        <Flex w="100%">{showServiceByOptions(selectedOptions)}</Flex>
      </Flex>
    </>
  );
};

export default SideBar;
