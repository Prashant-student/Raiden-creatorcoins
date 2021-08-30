import React from "react";

import LineChart from "../UI/LineChart";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ActivityTable from "../UI/Table/ActivityTable";

import classes from "./BuyDetail.module.css";

import profile from "../../assets/images/wp7967123-gojou-wallpapers.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";

const CreatorInfo = () => {
  return (
    <Grid container spacing={2} className={classes.creatorInfo}>
      <Grid item xs={4}>
        <img src={profile} alt="profile" className={classes.profileImg} />
      </Grid>
      <Grid
        item
        xs={8}
        container
        direction="column"
        className={classes.creatorDetails}
      >
        <Grid item xs={6}>
          <h1>Creator</h1>
        </Grid>
        <Grid item xs={12}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae
            nulla voluptatibus repellat officia fugiat iste architecto, culpa
            laborum quod dignissimos veniam asperiores, ipsum quo necessitatibus
            itaque repudiandae! Optio fugiat, quae omnis ipsa necessitatibus,
            fuga ad ducimus reiciendis nam perspiciatis, ab praesentium
            architecto corporis. Quae magni sit explicabo perspiciatis placeat?
          </p>
        </Grid>

        <Grid item xs={12} container className={classes.socials}>
          <span>
            <TwitterIcon />
          </span>
          <span>
            <YouTubeIcon />
          </span>
          <span>
            <InstagramIcon />
          </span>
          <span>
            <HomeIcon />
          </span>
        </Grid>
      </Grid>
    </Grid>
  );
};

const BuyDetail = () => {
  return (
    <Container className={classes.buyDetail}>
      <Grid container spacing={3}>
        <Grid item container spacing={2} style={{ marginBottom: "2rem" }}>
          <Grid item sm={12} md={8}>
            <CreatorInfo />
          </Grid>
          <Grid item sm={12} md={4}>
            Buy Options
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
          style={{ marginBottom: "2rem" }}
        >
          <Grid item sm={12} md={6} style={{ color: "black" }}>
            <ActivityTable />
          </Grid>
          <Grid item sm={12} md={6} className={classes.analytics}>
            <LineChart />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BuyDetail;
