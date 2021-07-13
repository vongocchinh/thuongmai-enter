import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Link } from "react-router-dom";
const HeaderTop = () => {
  return (
    <>
      <div className="header-container-top-layout">
        <div className="header-container-top-left">
          <div className="div">Welcome to Worldwide Electronics Store</div>
        </div>
        <div className="header-container-top-right">
          <Link to="/map" className="div">
            <LocationOnIcon className="size-icon-header" /> Store Locator
          </Link>
          |
          <Link to="/track" className="div">
            <LocalShippingIcon className="size-icon-header" /> Track Your Order
          </Link>
          |
          <Link to="/list" className="div">
            <StorefrontIcon className="size-icon-header" /> Shop
          </Link>
          |
          <Link to="/account" className="div">
            <AccountCircleIcon className="size-icon-header" /> Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
