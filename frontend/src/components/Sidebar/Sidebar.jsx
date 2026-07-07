import {
  HomeIcon,
  CloudArrowUpIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ShareIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const menus = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Upload", path: "/upload", icon: CloudArrowUpIcon },
  { name: "AI Chat", path: "/chat", icon: ChatBubbleLeftRightIcon },
  { name: "Documents", path: "/documents", icon: DocumentTextIcon },
  { name: "Knowledge Graph", path: "/knowledge", icon: ShareIcon },
  { name: "Maintenance", path: "/maintenance", icon: WrenchScrewdriverIcon },
  { name: "Compliance", path: "/compliance", icon: ShieldCheckIcon },
  { name: "Analytics", path: "/analytics", icon: ChartBarIcon },
  { name: "Settings", path: "/settings", icon: Cog6ToothIcon },
];

export default function Sidebar() {
  return (
    <aside
      style={{
        position: "fixed",
        top: "70px",
        left: 0,
        width: "280px",
        height: "calc(100vh - 70px)",
        background: "#0f172a",
        padding: "20px",
        overflowY: "auto",
      }}
    >
      <h2
        style={{
          color: "#3b82f6",
          marginBottom: "25px",
        }}
      >
        Navigation
      </h2>

      {menus.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "14px",
              textDecoration: "none",
              color: "white",
              background: isActive ? "#2563eb" : "transparent",
              transition: ".25s",
            })}
          >
            <Icon width={24} />
            {item.name}
          </NavLink>
        );
      })}
    </aside>
  );
}