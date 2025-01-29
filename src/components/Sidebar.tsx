import React from "react";
import { SidebarContainer, SidebarNavLink } from "../styles/DashboardStyles.ts";

const sidebarLinks = [
  { path: "/", label: "Home" },
  { path: "/profile", label: "Profile" },
  { path: "/analytics", label: "Analytics" },
];

export default function Sidebar() {
  return (
    <SidebarContainer>
      <h2>Dashboard</h2>
      <nav>
        {sidebarLinks.map(({ path, label }) => (
          <SidebarNavLink
            key={path}
            to={path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {label}
          </SidebarNavLink>
        ))}
      </nav>
    </SidebarContainer>
  );
}
