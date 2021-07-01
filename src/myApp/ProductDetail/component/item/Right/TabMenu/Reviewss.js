import React from 'react';

import Pagination from '@material-ui/lab/Pagination';

import StarRatings from "react-star-ratings";
const Reviews=()=>{
    return (
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
    )
}

export default Reviews;