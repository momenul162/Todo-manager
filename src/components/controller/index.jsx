import { Box, Container } from "@mui/material";
import React from "react";
import SearchPanel from "./search-panel";
import FilterController from "./filter-controller";
import ViewController from "./view-controller";
import BulkController from "./bulk-controller";

const Controller = ({
  term,
  filter,
  handleSearch,
  toggleForm,
  handleFilter,
  view,
  getView,
  clearSelect,
  allSelect,
  clearCompleted,
}) => {
  return (
    <Container>
      <SearchPanel term={term} handleSearch={handleSearch} toggleForm={toggleForm} />

      <Box sx={{ display: "flex", justifyContent: "space-between", my: 4 }}>
        <FilterController handleFilter={handleFilter} filter={filter} />
        <ViewController view={view} getView={getView} />
        <BulkController
          clearSelect={clearSelect}
          allSelect={allSelect}
          clearCompleted={clearCompleted}
        />
      </Box>
    </Container>
  );
};

export default Controller;
