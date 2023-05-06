import { useEffect, useState } from "react";
import { getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import {
  Container,
  Icon,
  Paper,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import { productListCollectionRef } from "../config/firebase";
import ClearIcon from "@mui/icons-material/Clear";
import { db } from "../config/firebase";
import EditIcon from "@mui/icons-material/Edit";
import { UpdateForm } from "./UpdtaeForm";
import CircularProgr from "./CircularProgr";

const styles = {
  title: {
    textAlign: "center",
    marginTop: "1.5em",
  },
  paper: {
    transition: "transform 0.2s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },
};

export const Products = () => {
  const [productList, setProductList] = useState([]);
  const [inputUpdate, setInputUpdate] = useState(false);
  const [updateTitleInput, setUpateTitleInput] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductList = async () => {
      try {
        setIsLoading(true);
        const data = await getDocs(productListCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductList(filteredData);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProductList();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const productDocRef = doc(db, "products", id);
      await deleteDoc(productDocRef);
      const updatedList = productList.filter((product) => product.id !== id);
      setProductList(updatedList);
    } catch (err) {
      console.error(err);
      alert("⚠️ Solo puedes eliminar los productos que hayas creado!");
    }
  };

  const updateTitle = async () => {
    try {
      const productDocRef = doc(db, "products", selectedProductId);
      await updateDoc(productDocRef, { title: updateTitleInput });
      setInputUpdate(false);
      const updatedList = productList.map((product) => {
        if (product.id === selectedProductId) {
          return { ...product, title: updateTitleInput };
        } else {
          return product;
        }
      });
      setProductList(updatedList);
    } catch (err) {
      console.error(err);
      alert(
        "⚠️ Solo puedes editar los productos al ingresar con correo y contraseña!"
      );
    }
  };

  const handleClick = (id) => {
    setSelectedProductId(id);
    setInputUpdate(true);
  };

  return (
    <>
      <Typography variant="h4" style={styles.title}>
        Lista de productos
      </Typography>
      {isLoading ? (
        <CircularProgr />
      ) : (
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {inputUpdate && selectedProductId && (
            <UpdateForm
              onClick={() => setInputUpdate(false)}
              onPress={() => updateTitle()}
              onChange={(e) => setUpateTitleInput(e.target.value)}
            />
          )}
          {productList.length === 0 ? (
            <Typography variant="body1" sx={{ margin: "2em" }}>
              {" "}
              No hay productos para mostrar
            </Typography>
          ) : (
            productList.map((product) => (
              <Paper
                key={product.id}
                elevation={1}
                sx={{ maxWidth: "350px", margin: "0.5em", ...styles.paper }}
              >
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#A9A9A9",
                    alignItems: "center",
                  }}
                >
                  <Tooltip title="Eliminar Producto">
                    <Icon onClick={() => deleteProduct(product.id)}>
                      <ClearIcon></ClearIcon>
                    </Icon>
                  </Tooltip>

                  <Typography variant="h5">{product.title}</Typography>

                  <Tooltip title="Actualizar Título">
                    <Icon onClick={() => handleClick(product.id)}>
                      <EditIcon></EditIcon>
                    </Icon>
                  </Tooltip>
                </Container>

                <img src={product.img} width={"350px"} />
                <Box sx={{ padding: "0.5em" }}>
                  <Typography variant="h5" sx={{ display: "flex" }}>
                    {" "}
                    $ {product.price}
                  </Typography>
                  <Typography variant="h6">{product.category}</Typography>
                </Box>
              </Paper>
            ))
          )}
        </Container>
      )}
    </>
  );
};
