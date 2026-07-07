import { Card, Typography, Box } from "@mui/material";

export default function StatCard({
  title,
  value,
  icon,
  color = "#2563eb",
}) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 5,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography color="text.secondary">
            {title}
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            mt={1}
          >
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: 3,
            bgcolor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          {icon}
        </Box>
      </Box>
    </Card>
  );
}