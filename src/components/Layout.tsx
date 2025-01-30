import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.tsx";
import Header from "../components/Header.tsx";
import { LayoutContainer, MainContent } from "../styles/DashboardStyles.ts";
import { useSidebarStore } from "../state/sidebarStore.ts";

export default function Layout() {
  const { isOpen } = useSidebarStore();
  
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent isOpen={isOpen}>
        <Header />
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}
