/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./style/styles.scss";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ContactlessIcon from "@material-ui/icons/Contactless";
// import Newsletter from "./Newsleter";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const Footer = () => {
  const [onTop, setOnTop] = useState(false);
  const handleOnTop = () => {
    window.scrollTo({top:0,behavior:"smooth"})
  };
  useEffect(() => {
      window.addEventListener("scroll",()=>{
        handleAutoButton();
      })
    return () => {
      
    }
  }, [])
  const handleAutoButton = () => {
    if (window.pageYOffset > 300) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };
  const ComponentOnTop = (onTop) => {

    if (onTop) {
      return (
        <div onClick={handleOnTop} className="container-ontop">
          <ExpandLessIcon className="ExpandLessIcon" />
        </div>
      );
    } else {
      return <></>;
    }
  };
  return (
    <>
      {/* <Newsletter /> */}
      {ComponentOnTop(onTop)}
      <div className="footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-container-left">
              <div className="footer-container-left-1">
                <WhatsAppIcon className="size-icon-footer" />
                <p>(800) 8001-8588, (0600) 874 548</p>
              </div>
              <div className="footer-container-left-2">
                <strong>Contact Info</strong>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
              <div className="footer-container-left-3">
                <FacebookIcon className="FacebookIcon" />{" "}
                <TwitterIcon className="FacebookIcon" />{" "}
                <InstagramIcon className="FacebookIcon" />{" "}
                <LinkedInIcon className="FacebookIcon" />{" "}
                <YouTubeIcon className="FacebookIcon" />{" "}
                <ContactlessIcon className="FacebookIcon" />
              </div>
              <div className="footer-container-left-4">
                    <form className="container-news-layout-right">
                        <input  className="input-text" placeholder="Enter your email address" />
                        <input type="submit" className="input-submit" value="Save" />
                    </form>
              </div>
            </div>
            <div className="footer-container-right">
              <div>
                <a href="###">
                  <strong>Find It Fast</strong>
                </a>
                <a href="###">Laptops & Computers</a>
                <a href="###">Cameras & Photography</a>
                <a href="###">Smart Phones & Tablets</a>
                <a href="###">Video Games & Consoles</a>
                <a href="###">TV & Audio</a>
                <a href="###">Gadgets</a>
                <a href="###">Car Electronic & GPS</a>
              </div>
              <div>
                <a href="###"> </a>
                <a href="###">Printers & Ink</a>
                <a href="###">Software</a>
                <a href="###">Office Supplies</a>
                <a href="###">Computer Components</a>
              </div>
              <div>
                <a href="###">
                  <strong>Customer Care</strong>
                </a>
                <a href="###">My Account</a>
                <a href="###">Track your Order</a>
                <a href="###">Customer Service</a>
                <a href="###">Returns Exchange</a>
                <a href="###">FAQs</a>
                <a href="###">Product Support</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer-footer">
            <div>© Electro - All Rights Reserved</div>
            <img
              alt=""
              src="https://demo2.chethemes.com/electro/wp-content/uploads/2017/02/patment-icon.png"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
