import { Fragment } from "react";
import { AddIcon } from "./components/AddIcon.jsx";
import { Login } from "./components/Login.jsx";
import { Products } from "./components/Products.jsx";
function App() {
  return (
    <Fragment>
      <AddIcon></AddIcon>
      <Login></Login>
      <Products></Products>
    </Fragment>
  );
}

export default App;
