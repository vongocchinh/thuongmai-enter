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
            to="/list"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Featured Brands
          </NavLink>

          <NavLink
            to="/account"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Trending Styles
          </NavLink>

          <NavLink
            to="/card"
            activeClassName="active-menu"
            className="menu-item-header"
            href="####"
          >
            Gift Cards
          </NavLink>

          <NavLink
            to="/contact"
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
