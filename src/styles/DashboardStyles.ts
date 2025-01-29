import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Layout Styling
export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

// Sidebar Styling
export const SidebarContainer = styled.aside`
  width: 250px;
  background: #2c3e50;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 20px;
  }
`;

export const SidebarNavLink = styled(NavLink)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  transition: 0.3s;

  &:hover,
  &.active {
    background: #34495e;
  }
`;

// Main Content Styling
export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background: #ecf0f1;
`;

// Header Styling
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

// Logout Button
export const LogoutButton = styled.button`
  background: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: darkred;
  }
`;
