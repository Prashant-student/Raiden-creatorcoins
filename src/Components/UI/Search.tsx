import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    margin: "3rem",
    width: "60%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sortBy: {
    height: "3rem",
  },
}));
const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <TextField
          id="filled-full-width"
          className={classes.textField}
          placeholder="Search"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <Button className={classes.sortBy} variant="contained" color="primary">
          Sort By
        </Button>
      </Container>
    </div>
  );
};

export default Search;
