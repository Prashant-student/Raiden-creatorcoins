import React from "react";

import classes from "./Home.module.css";
import sitting from "../../assets/images/sitting.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TopRanking from "../UI/Table/TopRanking";
import { Link } from "react-router-dom";
import Coin from "./Coin";
import { Divider } from "material-ui";

const hero_img = sitting;

const Hero = () => {
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      className={classes.hero}
    >
      <Grid item xs={6} className={classes.text}>
        <p className={classes.para}>
          <span className="playfair">Raiden </span>
          is blockchain infrastructure for social money.
        </p>
      </Grid>
      <Grid item xs={6} className={classes.hero_img}>
        <img src={hero_img} alt="hero" className={classes.hero_img} />
      </Grid>
      <div className={classes.coinPosition}>
        <Coin />
      </div>
    </Grid>
  );
};

const Content = () => {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      className={classes.content}
    >
      <Grid item xs={12} className={classes.para}>
        <p>
          The Raiden network mints branded digital tokens unique to your online
          presence, allowing you to own, and control and coordinate the value
          you create across platform.
        </p>
      </Grid>
      <Grid item xs={12} container className={classes.btnGrp}>
        <Grid item xs={6} className={classes.btn}>
          <Button variant="contained" color="primary">
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
        </Grid>
        <Grid item xs={6} className={classes.btn}>
          <Button variant="contained" color="primary">
          <Link
              to="/Creator"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Creator
            </Link>          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.para}>
        <p>
          We call these branded tokens creator coins and utilize the Solona
          Blockchain to mint each token under the ERC 20 standards. Using the
          Solona Blockchain allows us develop social money in a wa that is
          controlled by you and your community,not us as a network
        </p>
      </Grid>
      
    </Grid>
  );
};

const Ranking = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      className={classes.ranking}
    >
      <Grid item xs={4} className={classes.label}>
        <h1>Our Top Creators</h1>
      </Grid>
      <Grid item xs={12}>
        <TopRanking />
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return (
    <Container className={classes.container}>
      <Grid container spacing={3} direction="column">
        <Grid container item xs={12} spacing={3}>
          <Hero />
        </Grid>
        <Grid container direction="column" item xs={12} spacing={3}>
          <Content />
        </Grid>
        <Grid container direction="column" item xs={12} spacing={3}>
          <Ranking />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
