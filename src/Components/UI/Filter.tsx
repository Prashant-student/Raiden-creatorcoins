import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Filter.module.css";

// @ts-ignore
const Filter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChangeHandler = useAsyncDebounce((value: any) => {
    setFilter(value || undefined);
  }, 400);

  return (
    <div className={classes.searchBar}>
      <span>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </span>
      <InputBase
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChangeHandler(e.target.value);
        }}
        placeholder="Search…"
        className={classes.sInput}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default Filter;
