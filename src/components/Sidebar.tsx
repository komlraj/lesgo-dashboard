import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  SidebarNavLinks,
  SidebarNavLink,
  CloseButton,
} from "../styles/DashboardStyles.ts";
import { useSidebarStore } from "../state/sidebarStore.ts";

const sidebarLinks = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/analytics", label: "Analytics" },
];

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebarStore();

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
    </SidebarContainer>
  );
};

export default Sidebar;
