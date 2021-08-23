import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavEle';

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
<<<<<<< HEAD:src/Components/Layout/Navbar/Navbar.js
          <NavLink to="/creator" activeStyle>
            Creator
=======
          <NavLink className="poppins" to="/collectables">
            Collectables
>>>>>>> 93716f7eabf41628b280ea338b7de0110486d2d3:src/Components/Layout/Navbar/Navbar.tsx
          </NavLink>
          <NavLink className="poppins" to="/sign-up">
            Sign-Up
          </NavLink>
          <NavBtnLink className="poppins" to="/signin">
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
