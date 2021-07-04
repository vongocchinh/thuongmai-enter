import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./styles/productSlider.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import { Paper } from "@material-ui/core";
import SW from './../asset/swbw.jpg'
// install Swiper modules
SwiperCore.use([Pagination]);

const ProductSlider = () => {
  return (
    <>
      <div className="container">
        <div className="product-container-slider-main">
          <p className="title-p">Recently Added</p>
          <Swiper
            className="Swiper-slider"
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1351: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key) => {
              return (
                <SwiperSlide key={key} className="SwiperSlide-slide">
                  <Grid className="product-item-home-slide">
                    <Paper className="paper-slider">
                       <p className="product-name-home-slider">
                        Wireless Audio System Multiroom 360
                      </p>
                      <Link to="/a" className="product-img-home-slider">
                        <img
                          alt=""
                          src={SW}
                        />
                      </Link>
                      <div className="price-product-slider">
                        <p>$1.900.00</p>
                        <p>
                          <del>$2.900.00</del>
                        </p>
                      </div>
                    </Paper>
                  </Grid>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
