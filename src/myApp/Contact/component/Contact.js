import React from "react";
import "./styles/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Contact</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-contact">
          <p className="name">Contact Us</p>
          
          <form>
            <span>
            <input type="text" name="" value="" placeholder="Name" />
            <input type="text" name="" value="" placeholder="Phone" />
            </span>
            <input type="text" name="" value="" placeholder="Email" />
            <textarea rows="" cols=""></textarea>
            <input type="submit" name="" value="Save" />
            <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
