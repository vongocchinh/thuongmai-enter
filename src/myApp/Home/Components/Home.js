import React from "react";
import "./styles/styles.scss";

import Product from "./Product";
import ProductSlider from "./ProductSlider";
import BannerImg from "./BannerImg";
import MenuLeft from "./MenuLeft";
import MenuRightSlider from "./MenuRightSlider";
import ProductFooter from "./ProductFooter";

const Home = () => {
  return (
    <>
      <div className="banner-page">
        <div className="container">
          <div className="container-page">
            <MenuLeft />
            <MenuRightSlider />
          </div>
        </div>
      </div>
      <BannerImg />
      <Product />
      <div className="container">
        <div className="container-bg-main">
          <img
            alt=""
            src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/Ad-Banner.png"
          />
        </div>
      </div>
      <ProductSlider />
      <ProductFooter />
    </>
  );
};

export default Home;
