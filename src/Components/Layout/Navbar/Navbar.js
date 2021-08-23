import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavEle";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/buy" activeStyle>
            Buy
          </NavLink>
          <NavLink to="/sell" activeStyle>
            Sell
          </NavLink>
          <NavLink to="/creator" activeStyle>
            Creator
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign-Up
          </NavLink>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
