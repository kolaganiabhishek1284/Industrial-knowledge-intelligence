export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
      }}
    >
      <h3>{title}</h3>

      <h1
        style={{
          color,
          fontSize: "40px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}