import React from 'react';

import I1 from "../asset/1.png";
import I2 from "../asset/2.png";
import I3 from "../asset/3.png";
const BannerImg=()=>{
    return (
        <>
        <div className="container">
        <div className="container-banner-img">
          <div className="container-item-banner-img">
            <img alt="" src={I1} />
          </div>
          <div className="container-item-banner-img">
            <img alt="" src={I2} />
          </div>
          <div className="container-item-banner-img">
            <img alt="" src={I3} />
          </div>
        </div>
      </div>
        </>
    )
}

export default BannerImg;