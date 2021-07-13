import React from "react";
import "./styles/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Img from './../asset/order (1).png';
import Img2 from './../asset/order (2).png';
import Img3 from './../asset/order (3).png';
import Img4 from './../asset/order (4).png';
import { Link } from 'react-router-dom';
const TrackOrder = () => {
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>TrackOrder</div>{" "}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-track">
          <h3>Track your Order</h3>
          <p>
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </p>
          <div className="container-track-stepper" >
                <img src={Img2} alt="" />
                <img src={Img} alt="" />
                <img src={Img3} alt="" />
                <img src={Img4} alt="" />
          </div>
          <p>
            To track your order please enter your Order ID in the box below and
            press the "Track" button.
          </p>
          <div className="container-tracker-button" >
                <Link to="/" className="button" >Track</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackOrder;
