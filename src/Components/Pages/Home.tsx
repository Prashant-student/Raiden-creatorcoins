import React, {
  useRef,
  useState,
  useCallback,
  CSSProperties,
  useEffect,
} from "react";

import { Link } from "react-router-dom";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import {
  useTrail,
  a,
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

import { Button, Container, Grid } from "@material-ui/core";

import Coin from "./Coin";
import TopRanking from "../UI/Table/TopRanking";
import classes from "./Home.module.css";

import sitting from "../../assets/images/sitting.svg";
const hero_img = sitting;

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={classes.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Grid item xs={12} className={classes.para}>
        <p>
          The Raiden network mints branded digital tokens unique to your online
          presence, allowing you to own, and control and coordinate the value
          you create across platform.
        </p>
      </Grid>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, padding: 40 }}>
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={classes.btnGrp}
      >
        <Grid item xs={6} className={classes.btn}>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "0 5rem", fontSize: "2rem" }}
          >
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
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "0 5rem", fontSize: "2rem" }}
          >
            Creator
          </Button>
        </Grid>
      </Grid>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <Grid item xs={12} className={classes.para}>
        <p>
          We call these branded tokens creator coins and utilize the Solona
          Blockchain to mint each token under the ERC 20 standards. Using the
          Solona Blockchain allows us develop social money in a way that is
          controlled by you and your community, not us as a network
        </p>
      </Grid>
    </animated.div>
  ),
];

const Hero = () => {
  const [open, set] = useState(true);
  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      className={classes.hero}
    >
      <Grid
        item
        xs={6}
        onClick={() => set((state) => !state)}
        className={classes.heroText}
        style={{ paddingLeft: "6rem" }}
      >
        <Trail open={open}>
          <span className="playfair" style={{ color: "#ff9b21" }}>
            Raiden{" "}
          </span>
          <span>is blockchain infrastructure</span>
          <span>for social money.</span>
        </Trail>
      </Grid>
      <Grid item xs={6} className={classes.hero_img}>
        <img src={hero_img} alt="hero" className={classes.hero_img} />
      </Grid>
      {/* <div className={classes.coinPosition}>
        <Coin />
      </div> */}
    </Grid>
  );
};

const Content = () => {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 3), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  useEffect(() => {
    transRef.start();
  }, [index]);
  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      className={classes.content}
    >
      <div
        className={`flex fill ${classes.contentContainer}`}
        onClick={onClick}
      >
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
      </div>
    </Grid>
    // <Grid
    //   container
    //   spacing={1}
    //   justifyContent="center"
    //   alignItems="center"
    //   className={classes.content}
    // >
    //

    // </Grid>
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
      <Grid item xs={12} style={{ color: "black" }}>
        <TopRanking />
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return (
    <Container className={classes.container}>
      <Grid container spacing={3} direction="column">
        <Parallax pages={3} style={{ top: "0", left: "0" }}>
          <Grid container item>
            <Hero />
          </Grid>
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: "#D922FE", marginTop: "5rem" }}
          />
          <ParallaxLayer
            offset={1}
            speed={1.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginTop: "5rem",
            }}
          >
            <Grid container direction="column" item>
              <Content />
            </Grid>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{
              backgroundColor: "#BD3EF2",
              marginTop: "5rem",
            }}
          />
          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              marginTop: "5rem",
            }}
          >
            <Grid container direction="column" item>
              <Ranking />
            </Grid>
          </ParallaxLayer>
        </Parallax>
      </Grid>
    </Container>
  );
};
export default Home;
