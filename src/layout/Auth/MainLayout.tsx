import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import cuverPatterns from "../../../public/img/curve-patterns.png";

const MainLayout = () => {
  return (
    <Box w="100%" position="absolute">
      <Image src={cuverPatterns} alt="background-image" />
    </Box>
  );
};

export default MainLayout;
