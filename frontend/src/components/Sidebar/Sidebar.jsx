import {
  LayoutDashboard,
  Upload,
  Bot,
  Files,
  Network,
  Wrench,
  ShieldCheck,
  BarChart3,
  Settings,
  Database,
  Activity,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Upload Center",
    path: "/upload",
    icon: Upload,
  },
  {
    name: "AI Assistant",
    path: "/chat",
    icon: Bot,
  },
  {
    name: "Documents",
    path: "/documents",
    icon: Files,
  },
  {
    name: "Knowledge Graph",
    path: "/knowledge",
    icon: Network,
  },
  {
    name: "Maintenance",
    path: "/maintenance",
    icon: Wrench,
  },
  {
    name: "Compliance",
    path: "/compliance",
    icon: ShieldCheck,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
      fixed
      left-0
      top-0
      w-[280px]
      h-screen
      bg-[#111827]
      border-r
      border-slate-700
      flex
      flex-col
      "
    >
      {/* Logo */}

      <div className="px-7 py-8 border-b border-slate-700">

        <div className="flex items-center gap-4">

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            flex
            items-center
            justify-center
            text-2xl
            font-bold
            text-white
            "
          >
            AI
          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Industrial AI
            </h2>

            <p className="text-slate-400 text-sm">
              Enterprise Platform
            </p>

          </div>

        </div>

      </div>

      {/* Menu */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        {menus.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-4
                rounded-xl
                px-4
                py-4
                mb-2
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
                `
              }
            >
              <Icon size={22} />

              <span className="font-medium">
                {item.name}
              </span>
            </NavLink>
          );

        })}

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700 p-5">

        <div className="rounded-xl bg-slate-800 p-4">

          <div className="flex items-center gap-3 mb-4">

            <Database className="text-blue-400" size={20} />

            <span className="text-white font-semibold">
              System Status
            </span>

          </div>

          <div className="flex items-center justify-between mb-3">

            <span className="text-slate-400">
              Backend
            </span>

            <span className="text-green-400">
              Online
            </span>

          </div>

          <div className="flex items-center justify-between mb-4">

            <span className="text-slate-400">
              Version
            </span>

            <span className="text-white">
              v1.0
            </span>

          </div>

          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">

            <div
              className="
              h-full
              bg-gradient-to-r
              from-blue-500
              to-cyan-500
              rounded-full
              "
              style={{ width: "78%" }}
            />

          </div>

          <div className="flex items-center justify-between mt-2 text-xs">

            <span className="text-slate-400">
              Storage
            </span>

            <span className="text-white">
              78%
            </span>

          </div>

        </div>

        <div className="mt-5 flex items-center gap-3">

          <Activity className="text-green-400" size={20} />

          <span className="text-green-400 text-sm">
            All Systems Operational
          </span>

        </div>

      </div>

    </aside>
  );
}