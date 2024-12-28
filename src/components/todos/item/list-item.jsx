import {
  Button,
  Checkbox,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const TodoListItem = ({ todo, toggleComplete, toggleSelect }) => {
  return (
    <ListItem key={todo.id} disablePadding>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
          sx={{ cursor: "pointer" }}
          tabIndex={-1}
        />
      </ListItemIcon>
      <ListItemText primary={todo.text} />
      <ListItemText primary={todo.time.toDateString()} />
      <ListItemButton>
        <Button
          variant="text"
          color={todo.inComplete ? "warning" : "success"}
          onClick={() => toggleComplete(todo.id)}
          disabled={todo.isComplete}
        >
          {todo.isComplete ? "Completed" : "Running"}
        </Button>
      </ListItemButton>
    </ListItem>
  );
};

export default TodoListItem;
