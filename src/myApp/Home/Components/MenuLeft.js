import React from 'react';
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Img from "../asset/megamenu-2.png";
import Img2 from "../asset/megamenu-3.png";
import Img3 from "../asset/megamenu-4.png";
const MenuLeft=()=>{
    return (
        <>
        <div className="banner-page-left">
              <div className="banner-page-menu-list">
                <div className="menu-list-item">
                  <Link className="menu-list-item-link" to="/">
                    <>Value of the Day Top 100</>
                  </Link>
                </div>
                <div className="menu-list-item">
                  <Link className="menu-list-item-link" to="/">
                    <>Accessories Super</>
                  </Link>
                </div>
                <div className="menu-list-item">
                  <Link className="menu-list-item-link" to="/">
                    <>BrandsTrending</>
                  </Link>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/"> Computers & Accessories</li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/">Cameras, Audio & Video</li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex2">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/">Mobiles & Tablets</li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex3">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/">Movies, Music & Video</li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex4">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/">Games TV & Audio</li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex5">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/">Watches & Eyewear</li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex6">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img3} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-list-item menu-list-item-flex">
                  <li to="/"> Car, Motorbike & Industrial </li>
                  <ArrowForwardIosIcon className="ArrowForwardIosIcon" />
                  <div className="hover-menu-item-flex7">
                    <div className="hover-menu-item-flex-item">
                      <div className="hover-menu-item-flex-item-left">
                        <a href="###">
                          <strong>Computers & Accessories</strong>
                        </a>
                        <a href="###">All Computers & Accessories</a>
                        <a href="###">Laptops, Desktops & Monitors</a>
                        <a href="###">Pen Drives, Hard Drives & Memory Cards</a>
                        <a href="###">Printers & Ink</a>
                        <a href="###">Networking & Internet Devices</a>
                        <a href="###">Computer Accessories</a>
                        <a href="###">Software</a>
                        <a href="###">Computer Accessories</a>
                      </div>
                      <div className="hover-menu-item-flex-item-right">
                        <a href="###">
                          <strong>Audio & Video</strong>
                        </a>
                        <a href="###">All Audio & Video</a>
                        <a href="###">Headphones & Speakers</a>
                        <a href="###">Home Entertainment Systems</a>
                        <div className="img-store-menu">
                          <img alt="" src={Img} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}

export default MenuLeft;