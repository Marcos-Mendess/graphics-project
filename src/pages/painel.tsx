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
    <>
      <Header data={data as AvatarImage} isLoading={isLoading} />
      <MainLayout />
      <SideBar
        selectedOptions={selectedOptions}
        handleSelectedOptions={setSelectedOptions}
      />
    </>
  );
};

export default Painel;
