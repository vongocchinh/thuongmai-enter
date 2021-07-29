import React from "react";
import "./styles/styles.scss";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
const Product = () => {
  return (
    <>
      <div className="container-product-brand">
        <h3>Product Brand</h3>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {[1, 2, 3].map((key) => {
              return (
                <Grid className="product-item-home" key={key} item>
                  <Paper className="paper">
                    <p className="brand-name-home">Audio Speakers</p>
                    <p className="product-name-home">
                      Wireless Audio System Multiroom 360 Wireless Audio System
                      Multiroom 360
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
                        12.000.000 VNĐ
                        <del>17.000.000 VNĐ</del>
                      </p>
                      {/* <Link to="/cart" >
                      <AddShoppingCartIcon className="AddShoppingCartIcon" />
                      </Link> */}
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
    </>
  );
};

export default Product;
