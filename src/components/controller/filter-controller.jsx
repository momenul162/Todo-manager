import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const FilterController = ({ handleFilter, filter }) => {
  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Button
        variant={filter === "all" ? "contained" : "outlined"}
        onClick={() => handleFilter("all")}
      >
        All
      </Button>
      <Button
        variant={filter === "running" ? "contained" : "outlined"}
        onClick={() => handleFilter("running")}
      >
        Running
      </Button>
      <Button
        variant={filter === "completed" ? "contained" : "outlined"}
        onClick={() => handleFilter("completed")}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};

export default FilterController;
