export default function Card({ title, children }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "18px",
        padding: "25px",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      {title && (
        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}