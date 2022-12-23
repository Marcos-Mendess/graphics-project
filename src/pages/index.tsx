import React from "react";
import Login from "../components/Main";
import MainLayout from "../layout/Auth/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}
