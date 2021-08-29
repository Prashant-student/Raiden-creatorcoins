import React from "react";
import LineChart from "../UI/LineChart";

import classes from "./BuyDetail.module.css";

import profile from "../../assets/images/wp7967123-gojou-wallpapers.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";

const BuyDetail = () => {
  return (
    <main className={classes.buyDetail}>
      <div className={classes.creatorInfo}>
        <img src={profile} alt="profile" className={classes.profileImg} />
        <div className={classes.creatorDetails}>
          <h1>Creator</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quae
            nulla voluptatibus repellat officia fugiat iste architecto, culpa
            laborum quod dignissimos veniam asperiores, ipsum quo necessitatibus
            itaque repudiandae! Optio fugiat, quae omnis ipsa necessitatibus,
            fuga ad ducimus reiciendis nam perspiciatis, ab praesentium
            architecto corporis. Quae magni sit explicabo perspiciatis placeat?
          </p>
          <div className={classes.socials}>
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
          </div>
        </div>
      </div>
      <div className={classes.analytics}>
        <LineChart />
      </div>
      <div className={classes.activity}>Past Activity</div>
      <div className={classes.buyOptions}>Buy Options</div>
    </main>
  );
};

export default BuyDetail;
