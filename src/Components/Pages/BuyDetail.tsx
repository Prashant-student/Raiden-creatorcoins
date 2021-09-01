import React from "react";

import LineChart from "../UI/LineChart";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ActivityTable from "../UI/Table/ActivityTable";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import classes from "./BuyDetail.module.css";

import profile from "../../assets/images/wp7967123-gojou-wallpapers.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import { Button } from "@material-ui/core";

const BuyDetail = () => {
  return (
    <div className={classes.buyDetail}>
      <Container>
        <Grid container spacing={1}>
          <Grid
            item
            md={12}
            container
            className={classes.Info}
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            <Grid item md={4} sm={6} container style={{ marginBottom: "1rem" }}>
              <Grid item md={4} container>
                <img
                  src={profile}
                  alt="profile"
                  className={classes.profileImg}
                />
              </Grid>
              <Grid item md={8} sm={6} container direction="column">
                <Grid item md={6} style={{ marginBottom: "1rem" }}>
                  <p>
                    <b style={{ marginBottom: "15px" }}>Creator name</b> Token
                  </p>
                </Grid>
                <Grid item md={6} className={classes.socials}>
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
            <Grid item md={4} sm={6} container direction="column" spacing={2}>
              <Grid item md={12} container spacing={1}>
                <Grid item md={12}>
                  <p>
                    <b>current Price</b> Arrow
                  </p>
                </Grid>
              </Grid>
              <Grid item md={12}></Grid>
              <Grid item md={12}>
                {" "}
                lowest price
              </Grid>
              <Grid item md={12}>
                highest price
              </Grid>
            </Grid>
            <Grid item md={4} sm={12}>
              <Grid
                item
                md={12}
                className={classes.btn}
                spacing={2}
                justifyContent="flex-end"
                alignItems="center"
              >
                {/* <Button variant="contained" color="primary">
                  Buy
                </Button>
                <Button variant="contained" color="primary">
                  Convert
                </Button> */}
                <ButtonGroup
                  size="large"
                  color="primary"
                  aria-label="large outlined primary button group"
                >
                  <Button>Buy</Button>
                  <Button>Convert</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            md={12}
            className={classes.Stats}
            style={{ marginBottom: "1rem" }}
          >
            <Grid
              md={8}
              sm={12}
              justifyContent="center"
              alignItems="flex-start"
              style={{ marginBottom: "2rem", paddingRight: "1rem" }}
              className={classes.chart}
            >
              <LineChart />
            </Grid>
            <Grid
              md={4}
              sm={12}
              className={classes.Convertor}
              direction="column"
              spacing={3}
            >
              <Grid item md={12} container className={classes.indConv}>
                <b>Creator: </b>
                <TextField
                  // id="outlined-number"
                  // label="CRT"
                  // type="number"
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  type="number"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />

                {/* <Grid item md={4}>
                  Creator:{" "}
                </Grid>
                <Grid item md={8}>
                  <TextField
                    // id="outlined-number"
                    // label="CRT"
                    // type="number"
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    type="number"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid> */}
              </Grid>
              <Grid item md={12} container className={classes.indConv}>
                <b>Raiden: </b>
                <TextField
                  // id="outlined-number"
                  // label="CRT"
                  // type="number"
                  id="standard-full-width"
                  style={{ margin: 8, color: "white" }}
                  type="number"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={12} container className={classes.indConv}>
                <b>Solana: </b>
                <TextField
                  // id="outlined-number"
                  // label="CRT"
                  // type="number"
                  id="standard-full-width"
                  style={{ margin: 8 }}
                  type="number"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={12}
            sm={12}
            className={classes.Activity}
            style={{ color: "black", marginBottom: "1rem" }}
          >
            <ActivityTable />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BuyDetail;
