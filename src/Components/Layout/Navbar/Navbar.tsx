import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavEle";
import logo from "../../../assets/icons/logo.png";

const Navbar = () => {
  const icon = logo;
  return (
    <>
      <Nav>
        <NavLink className="playfair" to="/">
          <img src={icon} width="50" height="50" alt="icon" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className="poppins" to="/buy">
            Buy
          </NavLink>
          <NavLink className="poppins" to="/BuyerProfile">
            BuyerProfile
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
