import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ onPress, onClick, productoTitle }) {
  return (
    <Container
      sx={{
        position: "fixed",
        top: "20vh",
        alignItems: "center",
        backgroundColor: "#F2921D",
        borderRadius: "8px",
        zIndex: "1",
        color: "white",
      }}
    >
      <DialogTitle>{`¿Quieres eliminar el  ${productoTitle} ?`}</DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          sx={{ color: "white" }}
        >
          Este producto quedará eliminado de la base de datos y no podrá ser
          consultado nuevamentes.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "white" }} onClick={onPress}>
          Cancelar
        </Button>
        <Button sx={{ color: "white" }} onClick={onClick}>
          Eliminar
        </Button>
      </DialogActions>
    </Container>
  );
}
