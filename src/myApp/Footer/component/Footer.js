import React from "react";
import "./styles.scss";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ContactlessIcon from "@material-ui/icons/Contactless";
import Newsletter from "./Newsleter";
const Footer = () => {
  return (
    <>
      <Newsletter />
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
