import { Box, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import React from "react";
import ListItem from "./item/list-item";
import { useState } from "react";
import TableView from "../view/table-view";
import ListView from "../view/list-view";
import CreateTodoItem from "../create-todo-item";
import Controller from "../controller";
import { useEffect } from "react";

const defaultData = [
  {
    id: "euriower34",
    text: "Main task of todo",
    description: "A simple description",
    time: new Date(),
    isComplete: false,
    isSelect: false,
  },
  {
    id: "euri54ower34",
    text: "Secondary of todo",
    description: "A simple description",
    time: new Date(),
    isComplete: false,
    isSelect: false,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(defaultData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [view, setView] = useState("list");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState([]);

  const getFormData = (todo) => {
    (todo.id = `task-management-app-${Math.random(1000, 20000)}`),
      (todo.time = new Date()),
      (todo.isComplete = false),
      (todo.isSelect = false),
      setTodos([todo, ...todos]);
    setIsOpenForm(false);
  };

  const toggleComplete = (todoId) => {
    const allTodos = [...todos];
    const todo = allTodos.find((t) => t.id === todoId);
    todo.isComplete = !todo.isComplete;

    setTodos(allTodos);
  };
  const toggleSelect = (todoId) => {
    const allTodos = [...todos];
    const todo = allTodos.find((t) => t.id === todoId);
    todo.isSelect = !todo.isSelect;

    setTodos(allTodos);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const performSearch = () => {
    return todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const performFilter = (todos) => {
    if (filter === "completed") {
      return todos.filter((todo) => todo.isComplete);
    } else if (filter === "running") {
      return todos.filter((todo) => !todo.isComplete);
    } else {
      return todos;
    }
  };

  const toggleForm = () => {
    setIsOpenForm(!isOpenForm);
  };

  const handleClose = () => {
    setIsOpenForm(false);
  };

  const handleFilter = (value) => {
    setFilter(value);
  };

  const getView = (e) => {
    setView(e.target.value);
  };
  const clearSelect = () => {
    const selectedTodos = todos.filter((todo) => !todo.isSelect);
    setTodos(selectedTodos);
  };

  const allSelect = () => {
    const allSelectTodo = todos.filter((todo) => (todo.isSelect = true));
    setTodos(allSelectTodo);
  };

  const clearCompleted = () => {
    const completedTodo = todos.filter((todo) => !todo.isComplete);
    setTodos(completedTodo);
  };

  const viewDisplay = () => {
    let todos = performSearch();
    todos = performFilter(todos);

    if (!todos.length > 0) {
      return (
        <Typography variant="h3" align="center" mt={10}>
          Not available
        </Typography>
      );
    }

    return view === "list" ? (
      <ListView todos={todos} toggleComplete={toggleComplete} toggleSelect={toggleSelect} />
    ) : (
      <TableView todos={todos} toggleComplete={toggleComplete} toggleSelect={toggleSelect} />
    );
  };

  return (
    <Box>
      <Typography variant="h3" textAlign={"center"} my={5}>
        Task Management Tools
      </Typography>

      {/* Search todo & new button */}
      <Controller
        term={searchTerm}
        view={view}
        filter={filter}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
        handleFilter={handleFilter}
        getView={getView}
        clearSelect={clearSelect}
        allSelect={allSelect}
        clearCompleted={clearCompleted}
      />

      {/* Todo item view */}
      <Box sx={{ my: 4 }}>{viewDisplay()}</Box>

      {/* Form Dialog */}
      <Dialog open={isOpenForm} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{"Create new todo"}</DialogTitle>
        <DialogContent>
          <CreateTodoItem getFormData={getFormData} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Todos;
