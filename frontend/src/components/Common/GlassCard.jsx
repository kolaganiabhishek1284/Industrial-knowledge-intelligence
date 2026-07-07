import { Card } from "@mui/material";

export default function GlassCard({ children }) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 5,
        background: "rgba(255,255,255,.75)",
        backdropFilter: "blur(15px)",
        boxShadow: "0 15px 40px rgba(0,0,0,.08)",
      }}
    >
      {children}
    </Card>
  );
}