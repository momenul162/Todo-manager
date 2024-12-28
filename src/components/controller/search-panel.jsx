import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

const SearchPanel = ({ term, handleSearch, toggleForm }) => {
  return (
    <Container
      sx={{
        display: "flex",
        gap: 1,
      }}
    >
      <TextField
        onChange={(e) => handleSearch(e.target.value)}
        value={term}
        label="Enter your search"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" variant="contained" color="success" onClick={toggleForm}>
        New
      </Button>
    </Container>
  );
};

export default SearchPanel;
