import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const CreateTodoItem = ({ getFormData }) => {
  const [todo, setTodo] = useState({ text: "", description: "" });

  const handleChange = (e) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getFormData(todo);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: 500,
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        name="text"
        onChange={handleChange}
        value={todo.text}
        id="outlined-basic"
        label="Title"
        variant="outlined"
        fullWidth
      />
      <TextField
        name="description"
        id="outlined-basic"
        label="Description"
        variant="outlined"
        onChange={handleChange}
        value={todo.description}
        fullWidth
        rows={2}
        multiline
      />
      <Button fullWidth type="submit" variant="outlined">
        Submit
      </Button>
    </Box>
  );
};

export default CreateTodoItem;

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem consequuntur rerum repellendus fugit delectus deserunt molestiae saepe quis similique consequatur maiores dolorum molestias explicabo sequi animi, rem perspiciatis eum architecto!
