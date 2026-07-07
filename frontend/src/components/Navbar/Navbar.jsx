export default function Navbar() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      right-0
      h-[70px]
      bg-slate-900/95
      backdrop-blur-xl
      border-b
      border-slate-700
      z-50
      flex
      items-center
      justify-between
      px-8
      "
    >
      <h1 className="text-2xl font-bold text-blue-400">
        Industrial Knowledge Intelligence
      </h1>

      <div className="text-white">
        ET AI Hackathon 2026
      </div>
    </header>
  );
}