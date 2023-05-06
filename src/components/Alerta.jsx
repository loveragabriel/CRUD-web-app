import { Alert, AlertTitle } from "@mui/material";

export const Alerta = ({ type, title, message }) => {
  return (
    <Alert
      severity={type}
      sx={{
        position: "fixed",
        display: "flex",
        top: "20vh",
        alignItems: "center",
        backgroundColor: "#DAA520",
        borderRadius: "8px",
        zIndex: "1",
      }}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};
