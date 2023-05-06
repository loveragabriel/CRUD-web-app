import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import { FormControl, TextField, Button } from "@mui/material";
import { Alerta } from "./Alerta";

const signInStyles = {
  inputs: {
    margin: "0.1em",
  },
};

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayAlert, setDisplayAlert] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setDisplayAlert(true);
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setDisplayAlert(false);
      }, 3000);
    } catch (err) {
      let codeError = err.code;
      console.log(codeError);
      switch (codeError) {
        case 'auth/invalid-email':
          alert('Complete el correo correctament')
          
          break;
        case 'auth/missing-password':
          alert('Ingrese una contraseña mayor a 6 caracteres')
          break;
        case 'auth/weak-password':
          alert('La contraseña debería contener almenos 6 caracteres')
        break
        
        default:
          break;
      }
    }
  };
  return (
    <div>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Correo"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          style={signInStyles.inputs}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          style={signInStyles.inputs}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={signIn} variant="contained" sx={{ margin: "0.5em" }}>
          Ingresar
        </Button>
      </FormControl>
      {displayAlert ? (
        <Alerta
          severity="success"
          title="Ingresado"
          message="Has ingresado Correctamente"
        />
      ) : (
        ""
      )}
    </div>
  );
};
