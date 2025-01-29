import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import Header from "../components/Header.tsx";
import { LayoutContainer, MainContent } from "../styles/DashboardStyles.ts";

export default function Layout() {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}
