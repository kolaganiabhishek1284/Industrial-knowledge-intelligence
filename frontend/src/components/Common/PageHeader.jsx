import { Typography } from "@mui/material";

export default function PageHeader({
  title,
  subtitle,
}) {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        {title}
      </Typography>

      <Typography
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        {subtitle}
      </Typography>
    </>
  );
}