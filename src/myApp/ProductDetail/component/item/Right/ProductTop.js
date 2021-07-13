/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SAMSUNG from "./../../../asset/sw.jpg";
// import ReactImageZoom from "react-image-zoom";

const arr = [
  {
    id: "1",
    value:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQU8p2jYN7VTl8jqAL3opvylcnKDLpFiZyOjfjyKxO5GvO_CA8i30baiVTJkyW6&usqp=CAc",
  },
  {
    id: "2",
    value:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSpdw3SahSKTwyu09e9SQtn82lhVf5vXDXEUr5hORujpH04buciiF97707OKMp5Sm4MdYpw6yIctro&usqp=CAc",
  },
  {
    id: "3",
    value:
      "data:image/png;base64,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",
  },
  {
    id: "4",
    value: SAMSUNG,
  },
];
const ProductTop = () => {
  const [Img, setImg] = useState(null);
  const showImg = (arr) => {
    var html = null;

    html = arr.map((value, key) => {
      return (
        <img
          className="img-click"
          key={key}
          onClick={() => {
            setImg(value.value);
          }}
          alt=""
          src={value.value}
        />
      );
    });
    return html;
  };
  const activeOnclick = () => {
    const img = document.querySelectorAll(".img-click");
    img.forEach((res) =>
      res.addEventListener("click", () => {
        var j = 0;
        while (j < img.length) {
          img[j].className = "img-click";
          j++;
        }
        res.className = "img-click active";
      })
    );
  };
  activeOnclick();
  useEffect(() => {
    setImg(arr[0].value);
  }, [1]);



  return (
    <div className="product-detail-right-img">
      <div className="product-detail-right-img-left">
        <figure  className="img-main" >
            <img alt="" src={Img}  />
        </figure>

        {/* <ReactImageZoom {...props} /> */}
        <div className="div-con-item-img">{showImg(arr)}</div>
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
  );
};

export default ProductTop;
