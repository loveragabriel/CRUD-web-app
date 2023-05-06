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
    try {
      await addDoc(productListCollectionRef, {
        title: newProductTitle,
        price: newProductPrice,
        img:
          newProductImg == null
            ? "https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_1280.jpg"
            : newProductImg,
        category: newCategory,
        userId: auth?.currentUser?.uid,
      });
      window.location.reload();
    } catch (err) {
      alert("You should be logged");
      console.error(err);
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
        onBlur={(e) =>
          e.target.value === "" &&
          setNewProductImg(
            "https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_1280.jpg"
          )
        }
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
