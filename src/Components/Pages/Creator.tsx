import React from "react";
import Card from "../UI/Card";
import BasicTable from "../UI/Table/Table";
import classes from "./Creator.module.css";

const Creator = () => {
  return (
    <>
      <Card className={classes.profile} />
      <BasicTable />
    </>
  );
};

export default Creator;
