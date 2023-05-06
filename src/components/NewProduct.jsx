import { useState } from "react";
import { FormControl, TextField, Button, MenuItem } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { auth, productListCollectionRef } from "../config/firebase";
import category from "../module/category";

const inputStyle = {
  padding: "0.5em",
};

export const NewProduct = () => {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const onSubmitProduct = async () => {
    if (
      !newProductTitle ||
      !newProductImg ||
      !newProductPrice ||
      !newCategory
    ) {
      alert("⚠️ al menos un valor está vacío!");
    } else {
      try {
        await addDoc(productListCollectionRef, {
          title: newProductTitle,
          price: newProductPrice,
          img: newProductImg,
          category: newCategory,
          userId: auth?.currentUser?.uid,
        });
        window.location.reload();
        alert(
          "Gracias por agregar un producto. \n Ahora podrás editar el título o eliminarlo"
        );
      } catch (err) {
        alert(
          "🙄 Necesitas registrarte primero. \n Puedes introducir un correo y contraseña de prueba!"
        );
        console.error(err);
      }
    }
  };

  return (
    <FormControl
      sx={{
        position: "fixed",
        display: "flex",
        top: "5vh",
        alignItems: "center",
        backgroundColor: "#DAA520",
        borderRadius: "8px",
        zIndex: "1",
        padding: "1em",
      }}
    >
      <TextField
        style={inputStyle}
        id="outlined-number"
        label="Título"
        type="texto"
        onChange={(e) => setNewProductTitle(e.target.value)}
      />
      <TextField
        style={inputStyle}
        id="outlined-number"
        label="URL Producto"
        type="texto"
        onChange={(e) => setNewProductImg(e.target.value)}
      />

      <TextField
        style={inputStyle}
        id="outlined-number"
        label="Precio"
        type="number"
        onChange={(e) => setNewProductPrice(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        helperText="Selecciona una categoría"
        onChange={(e) => setNewCategory(e.target.value)}
      >
        {category.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" onClick={onSubmitProduct}>
        Subir Producto
      </Button>
    </FormControl>
  );
};
