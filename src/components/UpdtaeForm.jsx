import { FormControl, TextField, Button, Tooltip, Icon } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const UpdateForm = ({ onClick, onChange, onPress, onChangePrice }) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        top: "45vh",
        alignItems: "center",
        backgroundColor: "#F2921D",
        padding: "2em",
        borderRadius: "8px",
        zIndex: "1",
      }}
    >
      <FormControl>
        <Tooltip title="Cerrar">
          <Icon onClick={onClick}>
            <ClearIcon></ClearIcon>
          </Icon>
        </Tooltip>

        <TextField
          id="outlined-basic"
          label="Título"
          variant="outlined"
          sx={{ padding: "0.5em" }}
          onChange={onChange}
        />
         <TextField
          id="outlined-basic"
          label="Precio"
          variant="outlined"
          sx={{ padding: "0.5em" }}
          onChange={onChangePrice}
        />
        <Button variant="contained" onClick={onPress}>
          Actualizar
        </Button>
      </FormControl>
    </div>
  );
};
