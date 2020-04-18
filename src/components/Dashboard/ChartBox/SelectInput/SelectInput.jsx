import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const SelectInput = ({
 defaultValue,
 value,
 handleChange,
 divisas = [],
 metales = [],
 unidadDeCuenta = [],
 indices = [],
}) => (
 <FormControl className="displayInlineBlock" style={{ margin: "1rem" }}>
  <InputLabel id="id-select-label">Indicador</InputLabel>
  <Select
   labelId="select-label"
   id="select"
   defaultValue={defaultValue}
   value={value}
   onChange={handleChange}
  >
   {divisas.map((item) => (
    <MenuItem key={item.key} value={item.key}>
     {item.name}
    </MenuItem>
   ))}

   {metales.map((item) => (
    <MenuItem key={item.key} value={item.key}>
     {item.name}
    </MenuItem>
   ))}

   {unidadDeCuenta.map((item) => (
    <MenuItem key={item.key} value={item.key}>
     {item.name}
    </MenuItem>
   ))}

   {indices.map((item) => (
    <MenuItem key={item.key} value={item.key}>
     {item.name}
    </MenuItem>
   ))}
  </Select>
 </FormControl>
);

export default SelectInput;
