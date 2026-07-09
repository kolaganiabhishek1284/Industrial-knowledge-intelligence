import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        style={{
          marginLeft: "300px",
          marginTop: "72px",
          minHeight: "calc(100vh - 72px)",
          padding: "30px",
          background: "#f1f5f9",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </>
  );
}