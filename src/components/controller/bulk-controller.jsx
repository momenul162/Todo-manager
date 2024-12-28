import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const BulkController = ({ clearSelect, allSelect, clearCompleted }) => {
  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Button onClick={clearSelect}>Clear Select</Button>
      <Button onClick={clearCompleted}>Clear Completed</Button>
      <Button onClick={allSelect}>All Select</Button>
    </ButtonGroup>
  );
};

export default BulkController;
