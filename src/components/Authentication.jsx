import { Container, Icon } from "@mui/material";
import { useState, useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { auth } from "../config/firebase";

export const Authentication = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const checkAuthState = () => {
      auth.onAuthStateChanged((user) => {
        setLoggedIn(!!user);
      });
    };

    checkAuthState();
  }, []);
  return (
    <Container sx={{ position: "fixed", top: "0.5em", left: "90vw" }}>
      {loggedIn ? (
        <Icon sx={{ color: "#FF8C00", fontSize: "2" }}>
          <PersonIcon></PersonIcon>
        </Icon>
      ) : (
        <Icon>
          <PersonOffIcon></PersonOffIcon>
        </Icon>
      )}
    </Container>
  );
};
