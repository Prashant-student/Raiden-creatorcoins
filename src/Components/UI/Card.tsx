import React from "react";
import { ReactChild, ReactFragment, ReactPortal } from "react";
import classes from "./Card.module.css";

const Card = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
