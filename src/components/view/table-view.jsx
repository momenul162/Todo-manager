import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import TableItem from "../todos/item/table-item";

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Container>
      <Typography variant="h4" textAlign={"center"} sx={{ mt: 5, mb: 2 }}>
        Todo Table View
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              toggleSelect={toggleSelect}
            />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TableView;
