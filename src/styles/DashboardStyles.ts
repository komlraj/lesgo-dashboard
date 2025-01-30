import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Layout Styling
export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.bodyBg};
  color: ${({ theme }) => theme.textColor};
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
`;

// Sidebar Styling
export const SidebarContainer = styled.nav<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.sidebarText};
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease-in-out;
  z-index: 100;

  @media (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  }
`;

export const SidebarNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding-top: 36px;
  }
`;

export const SidebarNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.sidebarText};
  font-weight: 500;
  text-decoration: none;
  padding: 12px 15px;
  font-size: 18px;
  margin-top: 10px;
  transition: background 0.3s;
  border-radius: 5px;

  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.buttonBg};
  }
  &.active {
    background: ${({ theme }) => theme.buttonBg};
  }
`;

export const CloseButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Theme Toggle Wrapper */
export const ThemeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 4px;
  bottom: 30px;
  width: calc(100% - 20px);
  padding: 10px;
`;

/* Theme Toggle Switch */
export const ThemeSwitchLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

export const ThemeSwitch = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: 20px;
  appearance: none;
  background: ${({ theme }) => theme.buttonBg};
  border-radius: 10px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:checked {
    background: ${({ theme }) => theme.buttonBg};
  }

  &::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.buttonText};
    border-radius: 50%;
    top: 1px;
    left: 2px;
    transition: transform 0.3s ease-in-out;
  }

  &:checked::before {
    transform: translateX(20px);
  }
`;

// Main Content Styling
export const MainContent = styled.main<{ isOpen: boolean }>`
  margin-left: ${(props) => (props.isOpen ? "250px" : "0")};
  padding: 20px;
  transition: margin-left 0.3s ease-in-out;
  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

// Header Styling
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f47838;
  padding: 10px 20px;
  color: white;
  height: 60px;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;

  &:hover {
    color: #ddd;
  }
`;

// Logout Button
export const LogoutButton = styled.button`
  background: #d32f2f;
  color: white;
  font-weight: 600;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: darkred;
  }
`;
