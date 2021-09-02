import React from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Components/Layout/Navbar/Navbar";

import Home from './Components/Pages/Home';
import Buy from './Components/Pages/Buy';
import Sell from './Components/Pages/Sell';
import Creator from './Components/Pages/Creator';
import CreatorSignUp from './Components/Pages/CreatorSignUpPersonalDetails'
import SignIn from './Components/Pages/SignIn/SignIn';
import BuyerSignUp from "./Components/Pages/SignUp/BuyerSignUP";
import SignUp from "./Components/Pages/SignUp/SignUp"
import CoinDetails from "./Components/Pages/CoinDetails";
import Password from "./Components/Pages/Password"
import BuyDetail from "./Components/Pages/BuyDetail";
import CreatorProfileUserVisible from "./Components/Pages/CreatorProfileUserVisible";
import BuyerProfile from "./Components/Pages/BuyerProfile";
import CreatorSignUpPersonalDetails from "./Components/Pages/CreatorSignUpPersonalDetails";
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
        <Route path="/creatorSignUpPersonalDetails" exact component={CreatorSignUpPersonalDetails} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/buyerSignUp" exact component={BuyerSignUp} />
        <Route path="/SignUp" exact component={SignUp} />
        <Route path="/CoinDetails" exact component={CoinDetails} />
        <Route path="/Password" exact component={Password} />
        <Route path="/CreatorProfileUserVisible" exact component={CreatorProfileUserVisible} />
        <Route path="/BuyerProfile" exact component={BuyerProfile} />



      </Switch>
    </BrowserRouter>
  );
}

export default App;
