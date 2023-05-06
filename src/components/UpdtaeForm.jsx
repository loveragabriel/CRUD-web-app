import { FormControl, TextField, Button, Tooltip, Icon } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export const UpdateForm = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        top: "45vh",
        alignItems: "center",
        backgroundColor: "#4B0082",
        padding: "2em",
        borderRadius: "8px",
        zIndex: "1",
      }}
    >
      <FormControl>
        <Tooltip title="Cerrar">
          <Icon onClick={props.onClick}>
            <ClearIcon></ClearIcon>
          </Icon>
        </Tooltip>

        <TextField
          id="outlined-basic"
          label="Actualizar Título"
          variant="outlined"
          sx={{ padding: "0.5em" }}
          onChange={props.onChange}
        />
        <Button variant="contained" onClick={props.onPress}>
          Actualizar
        </Button>
      </FormControl>
    </div>
  );
};
