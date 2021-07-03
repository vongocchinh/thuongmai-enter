import React from "react";
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
const ProductList = () => {
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
                <select>
                  <option>Showing 1–15 of 20 results</option>
                  <option>Showing 1–15 of 20 results</option>
                  <option>Showing 1–15 of 20 results</option>
                  <option>Showing 1–15 of 20 results</option>
                </select>
                <select>
                  <option>Show 15</option>
                  <option>Show 15</option>
                  <option>Show 15</option>
                  <option>Show 15</option>
                </select>
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
