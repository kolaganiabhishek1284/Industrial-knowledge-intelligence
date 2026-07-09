import {
  Bell,
  Search,
  Moon,
  UserCircle,
  Settings,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-[280px]
      right-0
      h-[72px]
      bg-[#111827]/95
      backdrop-blur-xl
      border-b
      border-slate-700
      flex
      items-center
      justify-between
      px-8
      z-50
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">

        <div>
          <h1 className="text-2xl font-bold text-white">
            Industrial Knowledge Intelligence
          </h1>

          <p className="text-sm text-slate-400">
            Enterprise AI Platform
          </p>
        </div>

      </div>

      {/* Center */}

      <div className="hidden lg:flex items-center">

        <div
          className="
          flex
          items-center
          gap-3
          bg-[#1E293B]
          px-4
          py-3
          rounded-xl
          w-[380px]
          "
        >
          <Search size={18} color="#94A3B8" />

          <input
            type="text"
            placeholder="Search documents, AI chats..."
            className="
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
            w-full
            "
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        <button className="text-slate-300 hover:text-white transition">
          <Bell size={22} />
        </button>

        <button className="text-slate-300 hover:text-white transition">
          <Moon size={22} />
        </button>

        <button className="text-slate-300 hover:text-white transition">
          <Settings size={22} />
        </button>

        <div
          className="
          flex
          items-center
          gap-3
          bg-[#1E293B]
          px-3
          py-2
          rounded-xl
          "
        >
          <UserCircle size={36} />

          <div>

            <p className="font-semibold">
              Abhishek
            </p>

            <p className="text-xs text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}