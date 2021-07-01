import React from 'react';
import StarRatings from "react-star-ratings";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SAMSUNG from './../../../asset/sw.jpg';
const ProductTop=()=>{
    return (
        <div className="product-detail-right-img">
              <div className="product-detail-right-img-left">
                <img
                  alt=""
                  src={SAMSUNG}
                />
              </div>
              <div className="product-detail-right-img-item">
                <div className="product-detail-right-img-item-top">
                  <p>Laptops, Ultrabooks</p>
                  <p>Tablet Red EliteBook Revolve 810 G2</p>
                  <p>
                    <StarRatings
                      rating={3}
                      starDimension="18px"
                      starSpacing="0px"
                      className="StarRatings"
                      starRatedColor="#FED700"
                    />
                    (3 customer reviews)
                  </p>
                  <p>
                    Availability: <strong>34 in stock</strong>
                  </p>
                </div>
                <div className="product-detail-right-img-item-top-main">
                  <ul>
                    <li>Intel Core i5 processors (13-inch model)</li>
                    <li>Intel Iris Graphics 6100 (13-inch model)</li>
                    <li>Flash storage</li>
                    <li>Up to 10 hours of battery life2 (13-inch model)</li>
                    <li>Force Touch trackpad (13-inch model)</li>
                  </ul>
                </div>
                <div className="product-detail-right-img-item-top-price">
                  <span>$1,999.00</span>{" "}
                  <span>
                    <del>$2,299.00</del>
                  </span>
                </div>
                <div className="product-detail-right-img-item-top-add-cart">
                  <button>
                    <AddShoppingCartIcon />
                    <p> Add to cart</p>
                  </button>
                </div>
              </div>
            </div>
    )
}

export default ProductTop;