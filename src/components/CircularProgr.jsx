import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularProgr() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // optional: add a semi-transparent background
        zIndex: 9999,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
