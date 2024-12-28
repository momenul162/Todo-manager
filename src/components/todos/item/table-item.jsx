import React from "react";
import { TableRow, TableCell, Checkbox, Button } from "@mui/material";

const TableItem = ({ todo, toggleComplete, toggleSelect }) => {
  return (
    <TableRow key={todo.id}>
      <TableCell padding="checkbox">
        <Checkbox
          edge="start"
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
          disableRipple
        />
      </TableCell>
      <TableCell align="center">{todo.text}</TableCell>
      <TableCell align="center">{todo.time.toDateString()}</TableCell>
      <TableCell align="center">
        <Button
          variant="text"
          color={todo.inComplete ? "warning" : "success"}
          onClick={() => toggleComplete(todo.id)}
          disabled={todo.isComplete}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
