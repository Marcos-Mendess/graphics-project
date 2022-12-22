import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import cuverPatterns from "../../../public/img/curve-patterns.png";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Flex
      w="100%"
      direction="column"
      align="center"
      m="0 auto"
      pos="absolute"
      overflowY="hidden"
      h="100vh"
      overflowX="hidden"
    >
      <Box display="flex" position="relative" maxH="100vh" maxW="100vw">
        <Image src={cuverPatterns} alt="background-image" priority />
      </Box>
      <Box w="100%" maxW={1920} position="absolute" zIndex="1">
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
