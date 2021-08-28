import React, { Fragment } from "react";

import classes from "./Home.module.css";
import sitting from "../../assets/images/sitting.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Table from "../UI/Table/Table";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const hero_img = sitting;

const Home = () => {
  return (
    <Container className={classes.container}>
      <section className={classes.hero}>
        <div className={classes.text}>
          <p className={classes.para}>
            <a className="playfair" href="#">
              Raiden
            </a>{" "}
            is blockchain infrastructure for social money.
          </p>
        </div>
        <div className={classes.hero_img}>
          <img src={hero_img} alt="hero" className={classes.hero_img} />
        </div>
      </section>
      <section className={classes.content}>
        <div className={classes.para1}>
          <p>
            The Raiden network mints branded digital tokens unique to your
            online presence, allowing you to own, and control and coordinate the
            value you create across platform.
          </p>
        </div>
        <div className={classes.btns}>
          <Button className={classes.btn} variant="contained" color="primary">
            <Link
              to="/buyerSignUp"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Buyer
            </Link>
          </Button>
          <Button className={classes.btn} variant="contained" color="primary">
            Creator
          </Button>
        </div>
        <div className={classes.para2}>
          <p>
            We call these branded tokens creator coins and utilize the Solona
            Blockchain to mint each token under the ERC 20 standards. Using the
            Solona Blockchain allows us develop social money in a wa that is
            controlled by you and your community,not us as a network
          </p>
        </div>
      </section>
      <section className={classes.ranking}>
        <div className={classes.label}>
          <h1>Our Top Creators</h1>
        </div>
        <div>
          <Table />
        </div>
      </section>
    </Container>
  );
};

export default Home;
