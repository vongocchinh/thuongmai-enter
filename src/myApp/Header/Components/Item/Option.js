import React from "react";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from 'react-router-dom';
const Option = () => {
  return (
    <>
      <div className="header-option">
        <div className="header-option-item">
          <RepeatIcon className="size-icon" />
        </div>
        <div  className="header-option-item">
          <AccountCircleIcon className="size-icon" />
        </div>
        <div  className="header-option-item">
          <FavoriteBorderIcon className="size-icon" />
        </div>
        <Link  className="header-option-item" to="/cart">
          <AddShoppingCartIcon className="size-icon" />
          <span>3</span>
        </Link>
      </div>
    </>
  );
};

export default Option;
