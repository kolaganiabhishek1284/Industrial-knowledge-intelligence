import { TextField } from "@mui/material";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search..."
}) {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant="outlined"
      sx={{
        mb: 3,
        "& .MuiOutlinedInput-root": {
          borderRadius: "15px",
          background: "white",
        },
      }}
    />
  );
}