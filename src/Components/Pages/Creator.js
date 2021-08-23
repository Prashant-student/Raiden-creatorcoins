import React from "react";
import Card from "../UI/Card";
import BasicTable from "../UI/Table";
import classes from "./Creator.module.css";

const Collectables = () => {
  return (
    <>
      <Card className={classes.profile} />
      <BasicTable />
    </>
  );
};

export default Collectables;
