import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Icon } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Alerta } from "./Alerta";
import { useState } from "react";

export const GoogleAuth = () => {
  const [displayAlert, setDisplayAlert] = useState("");

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setDisplayAlert(true);
      setTimeout(() => {
        setDisplayAlert(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("⚠️ Verifica los datos ingresados ");
    }
  };
  return (
    <div>
      <Button
        variant="outlined"
        onClick={signInWithGoogle}
        sx={{ margin: "1em" }}
      >
        <Icon>
          <Google></Google>
        </Icon>
        Continuar con Google
      </Button>
      {displayAlert && (
        <Alerta
          severity="success"
          title="Ingresado"
          message="Has ingresado Correctamente"
        />
      )}
    </div>
  );
};
