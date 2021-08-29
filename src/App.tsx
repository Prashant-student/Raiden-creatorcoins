import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar/Navbar";

import Home from "./Components/Pages/Home";
import Buy from "./Components/Pages/Buy";
import Sell from "./Components/Pages/Sell";
import Creator from "./Components/Pages/Creator";
import CreatorSignUp from "./Components/Pages/SignUp/creatorSignUp";
import SignIn from "./Components/Pages/SignIn/SignIn";
import BuyerSignUp from "./Components/Pages/SignUp/BuyerSignUP";
import SignUp from "./Components/Pages/SignUp/SignUp";
import BuyDetail from "./Components/Pages/BuyDetail";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/buy" exact component={Buy} />
        <Route path="/buyDetail" exact component={BuyDetail} />
        <Route path="/sell" exact component={Sell} />
        <Route path="/creator" exact component={Creator} />
        <Route path="/creatorSignUp" exact component={CreatorSignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/buyerSignUp" exact component={BuyerSignUp} />
        <Route path="/SignUp" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
