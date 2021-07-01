import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <div className="container-header-menu-layout">
        <div>
          <NavLink
            exact
            to="/"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Home
          </NavLink>

          <NavLink
            to="/detail"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Super Deals
          </NavLink>

          <NavLink
            to="/b"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Featured Brands
          </NavLink>

          <NavLink
            to="/c"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Trending Styles
          </NavLink>

          <NavLink
            to="/d"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Gift Cards
          </NavLink>

          <NavLink
            to="/e"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
