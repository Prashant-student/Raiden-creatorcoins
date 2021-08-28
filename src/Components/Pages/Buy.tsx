import React from "react";

// import {
//   InputBase,
//   SearchIcon,
//   TextField,
//   Container,
//   Button,
// } from "@material-ui/core";

import classes from "./Buy.module.css";
import Table from "../UI/Table/Table";
import SortTable from "../UI/Table/SortTable";
import FilteringTable from "../UI/Table/FilteringTable";
const Buy = () => {
  return (
    <main>
      {/* <div className={classes.searchBar}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          className={classes.sInput}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.ranking}>
        
      </div> */}
      <FilteringTable />
    </main>
  );
};

export default Buy;
