import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

function SelectLabels() {
  const [region, setRegion] = React.useState("");

  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  const { darkMode } = useSelector((state) => state.darkModeReducer);
  return (
    <div className={darkMode ? "inputElemDarkMode" : "inputElem"}>
      <FormControl sx={{ width: 200 }}>
        <InputLabel
          id={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
        >
          Filter by Region
        </InputLabel>
        <Select
          labelId={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
          id={
            darkMode
              ? "demo-simple-select-helper-label-darkMode"
              : "demo-simple-select-helper-label"
          }
          value={region}
          label="region"
          onChange={handleChange}
          variant="standard"
          disableUnderline
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"America"}>America</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectLabels;
