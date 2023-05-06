import { Icon, Tooltip } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { NewProduct } from "./NewProduct";
import { useState } from "react";

export const AddIcon = () => {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <div>
      <Tooltip title="Agregar Producto">
        <Icon sx={{ position: "fixed" }}>
          <AddCircleIcon
            onClick={() => setDisplayForm(!displayForm)}
          ></AddCircleIcon>
        </Icon>
      </Tooltip>
      {displayForm && <NewProduct />}
    </div>
  );
};
