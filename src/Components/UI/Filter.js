import React from "react";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Filter.module.css";
const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.searchBar}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search…"
        className={classes.sInput}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default Filter;
