import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import cuverPatterns from "../../../public/img/curve-patterns.png";

/* type Props = {
  children: React.ReactNode;
}; */

const MainLayout = () => {
  return (
    <Box w="100%" position="absolute" opacity="0.6">
      <Image src={cuverPatterns} alt="background-image" priority />
      <Box w="100%" maxW={1920}></Box>
    </Box>
  );
};

export default MainLayout;
