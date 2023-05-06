import { Button } from "@mui/material";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { Alerta } from "./Alerta";
import { Box } from "@mui/material";

const LogOut = () => {
  const [displayAlert, setDisplayAlert] = useState("");

  const logOut = async () => {
    try {
      await signOut(auth);
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Button onClick={logOut} variant="contained" color="warning">
        Salir
      </Button>
      <Box>
        {displayAlert && (
          <Alerta
            severity="success"
            title="Desconectado"
            message="Te has desconectado con Éxito"
          />
        )}
      </Box>
    </div>
  );
};

export default LogOut;
