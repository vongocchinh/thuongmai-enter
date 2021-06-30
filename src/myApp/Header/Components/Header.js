/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./styles/styles.scss";
import HeaderTop from "./Item/HeaderTop";
import Logos from "./Item/Logo";
import Search from "./Item/Search";
import Option from "./Item/Option";
import Menu from "./Item/Menu";

const Home = () => {
  return (
    <>
      <div className="header-container-top">
        <div className="container">
          <HeaderTop />{" "}
        </div>
      </div>
      <div className="container">
        <div className="header-container">
          <div className="header-container-row">
            <Logos />
            <Search />
            <Option />
          </div>
          <div className="container-header-menu">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
