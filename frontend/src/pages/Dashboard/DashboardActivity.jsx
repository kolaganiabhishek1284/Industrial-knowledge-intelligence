import { Paper, Typography, Stack, Chip } from "@mui/material";

const activities = [
  "PDF uploaded successfully",
  "Knowledge Base updated",
  "OCR completed",
  "AI answered maintenance query",
  "Compliance report generated",
];

export default function DashboardActivity() {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography variant="h6" mb={3}>
        Recent Activity
      </Typography>

      <Stack spacing={2}>
        {activities.map((item, index) => (
          <Chip
            key={index}
            label={item}
            color="primary"
            variant="outlined"
          />
        ))}
      </Stack>
    </Paper>
  );
}