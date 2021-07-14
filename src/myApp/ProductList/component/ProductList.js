/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MenuLeft from "./../../ProductDetail/component/item/Left/Menu";
import ProductLeft from "./../../ProductDetail/component/item/Left/ProductLeft";
import "./style/styles.scss";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
// import SW from '../asset/sw.jpg';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Pagination } from "@material-ui/lab";
import Filter from "./Item/Filter";
import StarRatings from "react-star-ratings";
import Select from "react-select";
const ProductList = () => {
  const [countSelect, setCountSelect] = useState(0);
  useEffect(() => {
    setCountSelect(150);
  });
  const options = [
    { value: "1", label: "Showing 1–15 of " + countSelect + " results" },
    { value: "2", label: "Showing 1–15 of " + countSelect + " results" },
    { value: "3", label: "Showing 1–15 of " + countSelect + " results" },
    { value: "4", label: "Showing 1–15 of " + countSelect + " results" },
  ];
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
            <MenuLeft />
            <Filter />
            <div className="product-detail-left-img-bn">
              <img
                alt=""
                src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/shop-sidebar-ad-banner.jpg"
              />
            </div>
            <ProductLeft />
          </div>
          <div className="product-detail-right">
            <div className="container-product-list">
              <div className="container-product-list-title">
                <label>Smart Phones & Tablets</label>
                <label>Showing 1–15 of 20 results</label>
              </div>
              <div className="container-product-list-menu">
                <Select className="select-option" options={options}></Select>
                <Select
                  className="select-option-right"
                  defaultValue={15}
                  options={[
                    { value: 15, label: "show 15" },
                    { value: 25, label: "show 15" },
                    { value: 55, label: "show 15" },
                    { value: 85, label: "show 15" },
                  ]}
                ></Select>
              </div>
              <div className="container-product-list-item">
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={2}>
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18,
                    ].map((key) => {
                      return (
                        <Grid className="product-item-home" key={key} item>
                          <Paper className="paper">
                            <p className="brand-name-home">Audio Speakers</p>
                            <p className="product-name-home">
                              Wireless Audio System Multiroom 360 Wireless Audio
                              System Multiroom 360
                            </p>
                            <Link to="/detail" className="product-img-home">
                              <img
                                alt=""
                                src={
                                  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS82kBkrZs7er7ZfMjvjt2r5GANxk91Sqd5PHccWd1zlLipeykRmMzvLJ1p1d8pCDumo5ONHMs302s&usqp=CAc"
                                }
                              />
                            </Link>
                            <div className="price-product-home">
                              <p>
                                $1.900.00
                                <del>$2.900.00</del>
                              </p>
                              <AddShoppingCartIcon className="AddShoppingCartIcon" />
                            </div>
                            <div className="star-product-home">
                              <StarRatings
                                rating={2}
                                starDimension="16px"
                                starSpacing="0px"
                                className="StarRatings-product"
                                starRatedColor="#FED207"
                              />
                              <span>(12)</span>
                            </div>
                          </Paper>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </div>
              <div className="Pagination">
                <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
