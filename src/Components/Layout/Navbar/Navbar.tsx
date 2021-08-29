import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavEle";

const Navbar = () => {
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
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
