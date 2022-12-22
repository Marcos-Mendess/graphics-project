import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { useGetAvatarImage } from "../hooks/dashboard";
import MainLayout from "../layout/Auth/MainLayout";
import { AvatarImage } from "../types/menu";

const Painel = () => {
  const [selectedOptions, setSelectedOptions] = React.useState(0);

  const { data, isLoading } = useGetAvatarImage();

  return (
    <Box display="flex" overflow="hidden">
      <MainLayout>
        <Header data={data as AvatarImage} isLoading={isLoading} />
        <SideBar
          selectedOptions={selectedOptions}
          handleSelectedOptions={setSelectedOptions}
        />
      </MainLayout>
    </Box>
  );
};

export default Painel;
