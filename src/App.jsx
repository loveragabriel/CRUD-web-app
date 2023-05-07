import { Fragment } from "react";
import { AddIcon } from "./components/AddIcon.jsx";
import { Login } from "./components/Login.jsx";
import { Products } from "./components/Products.jsx";
import { Authentication } from "./components/Authentication.jsx";
import { Container } from "@mui/material";
function App() {
  return (
    <Fragment>
        <AddIcon />
        <Login />
        <Authentication />
      <Products></Products>
    </Fragment>
  );
}

export default App;
