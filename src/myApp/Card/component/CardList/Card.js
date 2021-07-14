import React from "react";
import "./styles/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import TextsmsIcon from "@material-ui/icons/Textsms";

var arr = [
  "https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/1-1-e1457115978382.jpg",
  "https://demo2.chethemes.com/electro/wp-content/uploads/2016/03/8-e1457115718213.jpg",
  "https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/6-e1457115765230.jpg",
];
const Card = () => {
  const activeItem = () => {
    var item = document.querySelectorAll(".item");

    item.forEach((res) =>
      res.addEventListener("click", () => {
        let j = 0;
        while (j < item.length) {
          item[j++].className = "item";
        }
        res.className = "item active";
      })
    );
  };
  activeItem();
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>CardPost</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-card">
          <div className="container-card-left">
            {arr.map((value, key) => {
              return (
                <>
                  <div key={key} className="container-card-left-item">
                    <img alt="" src={value} />
                    <p className="title-name">
                      HomeDesign Robot Wars – Post with Gallery
                    </p>
                    <p className="title-brand">
                      Design, Technology, Uncategorized March 4, 2016
                    </p>
                    <p className="title-detail">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed tincidunt, erat in malesuada aliquam, est erat
                      faucibus purus, eget viverra nulla sem vitae neque.
                      Quisque id sodales libero. In nec enim nisi, in ultricies
                      quam. Sed lacinia feugiat velit, cursus molestie lectus
                    </p>
                    <div className="option-item" >
                      <Link className="read-more" to="/cardDetail">
                        Read More
                      </Link>{" "}
                      <span>
                        <TextsmsIcon className="TextsmsIcon" />3
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="container-card-right">
            <div className="container-card-right-item">
              <p>Categories</p>
              <div className="row-item">
                <Link to="###" className="item active">
                  Design
                </Link>
                <Link to="###" className="item">
                  Events
                </Link>
                <Link to="###" className="item">
                  Links & Quotes
                </Link>
                <Link to="###" className="item">
                  News
                </Link>
                <Link to="###" className="item">
                  Social
                </Link>
                <Link to="###" className="item">
                  Technology
                </Link>
                <Link to="###" className="item">
                  Uncategorized
                </Link>
              </div>
            </div>
            <div className="container-card-right-item">
              <p>Recent Posts</p>
              <div className="row-item">
                {[1, 2, 3, 4].map((value, key) => {
                  return (
                    <div className="item-post">
                      <img
                        src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/1-150x150.jpg"
                        alt=""
                      />
                      <div>
                        <Link className="span" to="/cardDetail">
                          Robot Wars – Post with Gallery Robot Wars – Post with
                          Gallery
                        </Link>
                        <span className="span">March 4, 2016</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
