import React from 'react';
import {  withStyles } from "@material-ui/core/styles";
import ReactStars from "react-rating-stars-component";
import LinearProgress from "@material-ui/core/LinearProgress";
import StarRatings from "react-star-ratings";
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
const ReviewForm=()=>{
    return (
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
    )
}

export default ReviewForm;