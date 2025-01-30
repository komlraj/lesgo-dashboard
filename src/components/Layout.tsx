import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "../components/Sidebar.tsx";
import Header from "../components/Header.tsx";
import { LayoutContainer, MainContent } from "../styles/DashboardStyles.ts";
import { useSidebarStore } from "../state/sidebarStore.ts";
import { lightTheme, darkTheme } from "../assets/theme.ts";
import { useThemeStore } from "../state/themeStore.ts";

export default function Layout() {
  const { isOpen } = useSidebarStore();
  const { theme } = useThemeStore();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <LayoutContainer>
        <Sidebar />
        <MainContent isOpen={isOpen}>
          <Header />
          <Outlet />
        </MainContent>
      </LayoutContainer>
    </ThemeProvider>
  );
}
