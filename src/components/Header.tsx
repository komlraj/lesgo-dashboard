import React from "react";
import { HeaderContainer, LogoutButton } from "../styles/DashboardStyles.ts";
import { useAuthStore } from "../state/authStore.ts";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <h1>Welcome 👋</h1>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
}
