import React, {useMemo} from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// @ts-ignore
import Navbar from "./Components/Layout/Navbar/Navbar"

import Home from './Components/Pages/Home';
import Buy from './Components/Pages/Buy';
import Sell from './Components/Pages/Sell';
// @ts-ignore
import Creator from './Components/Pages/Creator';
import CreatorSignUp from './Components/Pages/CreatorSignUpPersonalDetails'
import SignIn from './Components/Pages/SignIn';
import BuyerSignUp from "./Components/Pages/SignUp/BuyerSignUP";
import SignUp from "./Components/Pages/SignUp/SignUp"
import CoinDetails from "./Components/Pages/CoinDetails";
import Password from "./Components/Pages/Password"
import BuyDetail from "./Components/Pages/BuyDetail";
import {
    getBitpieWallet,
    getCoin98Wallet,
    getLedgerWallet,
    getMathWallet,
    getPhantomWallet,
    getSolflareWallet,
    getSolletWallet,
    getSolongWallet,
    getTorusWallet,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {clusterApiUrl} from "@solana/web3.js";

function App() {
    const wallets = useMemo(() => [
        getPhantomWallet(),
        getSolflareWallet(),
        getTorusWallet({
            options: { clientId: 'Get a client ID @ https://developer.tor.us' }
        }),
        getLedgerWallet(),
        getSolongWallet(),
        getMathWallet(),
        getSolletWallet(),
        getCoin98Wallet(),
        getBitpieWallet(),
    ], []);

    const endpoint = useMemo(() => clusterApiUrl(), []);
    return (
    <BrowserRouter>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
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
            <Route path="/CoinDetails" exact component={CoinDetails} />
            <Route path="/Password" exact component={Password} />
          </Switch>
          </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  );
}

export default App;
