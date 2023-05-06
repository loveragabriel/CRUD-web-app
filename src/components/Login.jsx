import { SignIn } from "./SignIn.JSX";
import { GoogleAuth } from "./GoogleAuth";
import LogOut from "./LogOut";
import { Container, Typography } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2em",
  },
  title: {
    textAlign: "center",
  },
};
export const Login = () => {
  return (
    <div>
      <Typography variant="h5" style={styles.title}>
        Ingresa con un correo y contraseña para usar la web app
      </Typography>
      <Container style={styles.container}>
        <SignIn></SignIn>
        <GoogleAuth></GoogleAuth>
        <LogOut></LogOut>
      </Container>
    </div>
  );
};
