import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavEle";
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
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
import {
  WalletDialogProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-material-ui';
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Keypair, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js';

const Navbar = () => {
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

  const { connected } = useWallet();
  return (
      <>
        <Nav>
          <NavLink className="playfair" to="/">
            <h1>Logo</h1>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink className="poppins" to="/buy">
              Buy
            </NavLink>
            <NavLink className="poppins" to="/sell">
              Sell
            </NavLink>
            <NavLink className="poppins" to="/creator">
              Creator
            </NavLink>
            <NavLink className="poppins" to="/Signup">
              Sign-Up
            </NavLink>
            <NavBtnLink className="poppins" to="/sign-in">
              Sign In
            </NavBtnLink>
              <div className="px-3">
                      <WalletDialogProvider>
                          <WalletMultiButton/>
                          {connected ? <WalletDisconnectButton /> : null}
                      </WalletDialogProvider>
                  </div>
          </NavMenu>
          {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
        </Nav>
      </>
  );
};

export default Navbar;

//
// export const Navbar = () => {
//   // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
//   // Only the wallets you want to instantiate here will be compiled into your application

// console.log(endpoint)
//   return (
//   );
// };
//
// export default Navbar;
