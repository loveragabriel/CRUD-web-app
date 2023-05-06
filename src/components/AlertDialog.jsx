import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AlertDialog({onPress, onClick, productoTitle}) {


  return (
    <Container    sx={{
        position: "fixed",
        top: "20vh",
        alignItems: "center",
        backgroundColor: "#DAA520",
        borderRadius: "8px",
        zIndex: "1",
      }}     >  
        <DialogTitle>{`¿Quieres eliminar el  ${productoTitle} ?`}</DialogTitle>
        <DialogContent >
          <DialogContentText id="alert-dialog-slide-description">
            Este producto quedará eliminado de la base de datos y no podrá ser consultado nuevamentes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={onPress}>Disagree</Button>
      <Button onClick={onClick}>Agree</Button>
        </DialogActions>
    </Container >
  );
}