/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from "react";
import "./style/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ProductLef from './item/Left/ProductLeft';
import ProductTop from './item/Right/ProductTop';
import MenuLeft from "./item/Left/Menu";
import ProductMain from "./item/Right/ProductMain";


const ProductDetail = () => {

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"});
  }, [1])
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Laptops & Computers</div>{" "}
            <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Laptops</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Tablet Red EliteBook Revolve 810 G2</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-product-detail">
          <div className="product-detail-left">
            <MenuLeft/>
            <div className="product-detail-left-img-bn">
              <img
                alt=""
                src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/shop-sidebar-ad-banner.jpg"
              />
            </div>
            <ProductLef />
          </div>
          <div className="product-detail-right">
            <ProductTop />
            <ProductMain/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
