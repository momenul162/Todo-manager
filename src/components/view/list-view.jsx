import React from "react";
import { Container, List, Typography } from "@mui/material";
import TodoListItem from "../todos/item/list-item";

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
  return (
    <Container sx={{ border: 1 }}>
      <Typography variant="h4" textAlign={"center"} sx={{ my: 3 }}>
        Todo List View
      </Typography>
      <List sx={{ minWidth: 650 }}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            toggleSelect={toggleSelect}
          />
        ))}
      </List>
    </Container>
  );
};

export default ListView;
