import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const ViewController = ({ view, getView }) => {
  return (
    <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="row-radio-buttons-group"
    >
      <FormControlLabel
        value="list"
        name="view"
        onChange={getView}
        control={<Radio />}
        checked={view === "list"}
        label="List view"
      />
      <FormControlLabel
        value="table"
        name="view"
        onChange={getView}
        control={<Radio />}
        checked={view === "table"}
        label="Table view"
      />
    </RadioGroup>
  );
};

export default ViewController;
