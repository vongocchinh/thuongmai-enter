import React from "react";
import "./style/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme, withStyles } from "@material-ui/core/styles";
import ReactStars from "react-rating-stars-component";
import LinearProgress from "@material-ui/core/LinearProgress";
import Pagination from '@material-ui/lab/Pagination';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#939393",
  },
}))(LinearProgress);
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const ProductDetail = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Laptops & Computers</div>{" "}
            <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Laptops</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Tablet Red EliteBook Revolve 810 G2</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-product-detail">
          <div className="product-detail-left">
            <div className="product-detail-left-menu">
              <p className="product-detail-left-menu-item">
                <strong>Show All Categories</strong>
              </p>
              <Link className="product-detail-left-menu-item">
                Laptops & Computers (13)
              </Link>
              <Link className="product-detail-left-menu-item">
                Accessories (12)
              </Link>
              <Link className="product-detail-left-menu-item">
                All in One (1)
              </Link>
              <Link className="product-detail-left-menu-item">Gaming (1)</Link>
              <Link className="product-detail-left-menu-item">Laptops (6)</Link>
              <Link className="product-detail-left-menu-item">
                Mac Computers (1)
              </Link>
              <Link className="product-detail-left-menu-item">
                Computers (0)
              </Link>
              <Link className="product-detail-left-menu-item">
                Peripherals (1)
              </Link>
              <Link className="product-detail-left-menu-item">Servers (1)</Link>
              <Link className="product-detail-left-menu-item">
                Ultrabooks (1)
              </Link>
            </div>
            <div className="product-detail-left-img-bn">
              <img
                alt=""
                src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/shop-sidebar-ad-banner.jpg"
              />
            </div>
            <div className="product-detail-left-product-list">
              <div className="product-detail-left-product-list-title">
                Latest Products
              </div>
              <div className="product-detail-left-product-list-item">
                {[1, 2, 3, 4, 5].map((key) => {
                  return (
                    <div key={key} className="product-detail-left-product-item">
                      <div className="product-detail-left-product-item-left">
                        <img
                          alt=""
                          src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/03/Smartphone5-180x180.jpg"
                        />
                      </div>
                      <div className="product-detail-left-product-item-right">
                        <p>Notebook Black Spire V Nitro VN7-591G</p>
                        <p>
                          <del>$2,299,00</del>
                        </p>
                        <div>$1,199,00</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="product-detail-right">
            <div className="product-detail-right-img">
              <div className="product-detail-right-img-left">
                <img
                  alt=""
                  src="data:image/jpeg;base64,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"
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
            <div className="product-detail-right-des">
              <div className="product-detail-right-des-tab">
                <AppBar position="static" color="#FFF">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="#000"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Specification" {...a11yProps(0)} />
                    <Tab label="Description" {...a11yProps(1)} />
                    <Tab label="Reviews" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
              </div>
              <div>
                <SwipeableViews
                  style={{ with: "100%" }}
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel
                    className="TabPanel-des"
                    value={value}
                    index={0}
                    dir={theme.direction}
                  >
                    <p className="title">Technical Specifications</p>
                    {[
                      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                      18, 19,
                    ].map((key) => {
                      return (
                        <div key={key} className="tab-bar-des-item">
                          <li>Graphics Card Description </li>
                          <li>Integrated Graphics Card</li>
                        </div>
                      );
                    })}
                  </TabPanel>
                  <TabPanel
                    className="TabPanel-des"
                    value={value}
                    index={1}
                    dir={theme.direction}
                  >
                    <div className="des-detail-product"></div>
                  </TabPanel>
                  <TabPanel
                    className="TabPanel-des"
                    value={value}
                    index={2}
                    dir={theme.direction}
                  >
                    <div className="review-con-top">
                      <div className="review-con-top-item">
                        <p>Based on 3 reviews</p>
                        <div className="review-con-top-item-user-ratting">
                          <p>3.3 overall</p>
                          <div className="row-bar-review-count">
                            <div className="row-bar-review-count-star">
                              <StarRatings
                                rating={5}
                                starDimension="18px"
                                starSpacing="0px"
                                className="StarRatings"
                                starRatedColor="#FED700"
                              />
                            </div>

                            <div className="row-bar-review-count-bo">
                              <BorderLinearProgress
                                className="BorderLinearProgress"
                                variant="determinate"
                                value={50}
                              />
                            </div>

                            <div className="total-star">150</div>
                          </div>
                          <div className="row-bar-review-count">
                            <div className="row-bar-review-count-star">
                              <StarRatings
                                rating={4}
                                starDimension="18px"
                                starSpacing="0px"
                                className="StarRatings"
                                starRatedColor="#FED700"
                              />
                            </div>

                            <div className="row-bar-review-count-bo">
                              <BorderLinearProgress
                                className="BorderLinearProgress"
                                variant="determinate"
                                value={50}
                              />
                            </div>

                            <div className="total-star">150</div>
                          </div>
                          <div className="row-bar-review-count">
                            <div className="row-bar-review-count-star">
                              <StarRatings
                                rating={3}
                                starDimension="18px"
                                starSpacing="0px"
                                className="StarRatings"
                                starRatedColor="#FED700"
                              />
                            </div>

                            <div className="row-bar-review-count-bo">
                              <BorderLinearProgress
                                className="BorderLinearProgress"
                                variant="determinate"
                                value={50}
                              />
                            </div>

                            <div className="total-star">150</div>
                          </div>
                          <div className="row-bar-review-count">
                            <div className="row-bar-review-count-star">
                              <StarRatings
                                rating={2}
                                starDimension="18px"
                                starSpacing="0px"
                                className="StarRatings"
                                starRatedColor="#FED700"
                              />
                            </div>

                            <div className="row-bar-review-count-bo">
                              <BorderLinearProgress
                                className="BorderLinearProgress"
                                variant="determinate"
                                value={50}
                              />
                            </div>

                            <div className="total-star">150</div>
                          </div>
                          <div className="row-bar-review-count">
                            <div className="row-bar-review-count-star">
                              <StarRatings
                                rating={1}
                                starDimension="18px"
                                starSpacing="0px"
                                className="StarRatings"
                                starRatedColor="#FED700"
                              />
                            </div>

                            <div className="row-bar-review-count-bo">
                              <BorderLinearProgress
                                className="BorderLinearProgress"
                                variant="determinate"
                                value={80}
                              />
                            </div>

                            <div className="total-star">150</div>
                          </div>
                        </div>
                      </div>
                      <div className="review-con-top-item">
                        <p>Add a review</p>
                        <form>
                          <div>
                            <label>Your Rating</label>
                            <div>
                              <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                                classNames="ReactStars"
                              />
                            </div>
                          </div>
                          <div>
                            <label>Your Review</label>
                            <textarea />
                          </div>
                          <div>
                            <label>Name *</label>
                            <input />
                          </div>
                          <div>
                            <label>Email *</label>
                            <input />
                          </div>
                          <div>
                            <label></label>
                            <input type="submit" defaultValue="Review" />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="product-detail-des-review-list">
                      {[1, 2, 3, 4, 5, 6].map((key) => {
                        return (
                          <div
                            key={key}
                            className="product-detail-des-review-item"
                          >
                            <div className="product-detail-des-review-item-start">
                              <StarRatings
                                rating={3}
                                starDimension="18px"
                                starSpacing="0px"
                                className="StarRatings"
                                starRatedColor="#FED700"
                              />
                            </div>
                            <div className="product-detail-des-review-item-start-cmt">
                              Fusce vitae nibh mi. Integer posuere, libero et
                              ullamcorper facilisis, enim eros tincidunt orci,
                              eget vestibulum sapien nisi ut leo. Cras finibus
                              vel est ut mollis. Donec luctus condimentum ante
                              et euismod.
                            </div>
                            <div className="product-detail-des-review-item-start-name">
                              <strong>Peter Wargner</strong>{" "}
                              <span>– March 25, 2016</span>
                            </div>
                          </div>
                        );
                      })}
                      <div className="Pagination">
                      <Pagination count={10}  /> 
                      </div>
                    </div>
                  </TabPanel>
                </SwipeableViews>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
