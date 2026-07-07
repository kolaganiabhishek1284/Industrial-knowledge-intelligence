import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <Sidebar />

      <main
        className="
        ml-[280px]
        mt-[70px]
        p-8
        min-h-[calc(100vh-70px)]
        bg-gradient-to-br
        from-slate-100
        via-blue-50
        to-slate-200
        "
      >
        {children}
      </main>

    </div>
  );
}