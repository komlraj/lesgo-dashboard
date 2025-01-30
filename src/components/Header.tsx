import React from "react";
import {
  HeaderContainer,
  LogoutButton,
  ToggleButton,
} from "../styles/DashboardStyles.ts";
import { useAuthStore } from "../state/authStore.ts";
import { useNavigate } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { useSidebarStore } from "../state/sidebarStore.ts";

export default function Header() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebarStore();

  const handleLogout = () => {
    logout();
    navigate("/login");
    if (localStorage.getItem("userProfile")) {
      localStorage.removeItem("userProfile");
    }
  };

  return (
    <HeaderContainer>
      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>
      <h1>Welcome 👋</h1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
}
