import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  SidebarNavLinks,
  SidebarNavLink,
  CloseButton,
  ThemeToggleWrapper,
  ThemeSwitchLabel,
  ThemeSwitch,
} from "../styles/DashboardStyles.ts";
import { useSidebarStore } from "../state/sidebarStore.ts";
import { useThemeStore } from "../state/themeStore.ts";
const sidebarLinks = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/analytics", label: "Analytics" },
];

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebarStore();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={closeSidebar}>
        <FaTimes />
      </CloseButton>
      <SidebarNavLinks>
        {sidebarLinks.map(({ path, label }) => (
          <SidebarNavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {label}
          </SidebarNavLink>
        ))}
      </SidebarNavLinks>

      {/* Theme Toggle Switch */}
      <ThemeToggleWrapper>
        <ThemeSwitchLabel>Light Mode</ThemeSwitchLabel>
        <ThemeSwitch
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <ThemeSwitchLabel>Dark Mode</ThemeSwitchLabel>
      </ThemeToggleWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
