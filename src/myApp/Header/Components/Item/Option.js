import React from "react";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Option = () => {
  return (
    <>
      <div className="header-option">
        <div>
          <RepeatIcon className="size-icon" />
        </div>
        <div>
          <AccountCircleIcon className="size-icon" />
        </div>
        <div>
          <FavoriteBorderIcon className="size-icon" />
        </div>
        <div>
          <AddShoppingCartIcon className="size-icon" />
          <span>3</span>
        </div>
      </div>
    </>
  );
};

export default Option;
