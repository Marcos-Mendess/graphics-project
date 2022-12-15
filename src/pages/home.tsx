import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Login from "../components/Main";
import MainLayout from "../layout/Auth/MainLayout";
import { theme } from "../styles/theme";

const home = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout></MainLayout>
      <Login />
    </ChakraProvider>
  );
};

export default home;
