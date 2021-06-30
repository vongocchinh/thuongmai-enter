import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
const HeaderTop = () => {
  return (
    <>
      <div className="header-container-top-layout">
        <div className="header-container-top-left">
          <div>Welcome to Worldwide Electronics Store</div>
        </div>
        <div className="header-container-top-right">
          <div>
            <LocationOnIcon className="size-icon-header" /> Store Locator
          </div>
          |
          <div>
            <LocalShippingIcon className="size-icon-header" /> Track Your Order
          </div>
          |
          <div>
            <StorefrontIcon className="size-icon-header" /> Shop
          </div>
          |
          <div>
            <AccountCircleIcon className="size-icon-header" /> Account
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
