import MainLayout from "../../layouts/MainLayout";
import AnalyticsChart from "../../components/Charts/AnalyticsChart";

export default function Analytics() {
  return (
    <MainLayout>

      <h1>Analytics Dashboard</h1>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,.08)",
        }}
      >
        <h2>Monthly Document Uploads</h2>

        <AnalyticsChart />

      </div>

    </MainLayout>
  );
}