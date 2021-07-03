import React from 'react';
// SwiperSlide
import { Swiper,  } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/core";
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);
const MenuRightSlider=()=>{
    return (
        <>
        <div className="banner-page-right">
              <div className="slider-page">
                <Swiper
                  effect="Coverflow"
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  className="mySwiper"
                >
                  {/* <SwiperSlide className="SwiperSlide">
                    <img
                      alt=""
                      src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/dd690x300_XR.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="SwiperSlide">
                    <img
                      alt=""
                      src="https://cdn.tgdd.vn/2021/06/banner/830-300-830x300-13.png"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="SwiperSlide">
                    <img
                      alt=""
                      src="https://cdn.tgdd.vn/2021/06/banner/sn-dh-830-300-830x300.png"
                    />
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
        </>
    )
}

export default MenuRightSlider;