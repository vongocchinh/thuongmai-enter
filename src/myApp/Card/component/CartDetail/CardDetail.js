import React from "react";
import "./styles/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

const CardDetail = () => {
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
            <div>CardPost Detail</div>{" "}
            <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-card">
          <div className="container-card-left">
            <div className="container-card-left-item">
              <img
                alt=""
                src={
                  "https://demo2.chethemes.com/electro/wp-content/uploads/2016/02/1-1-e1457115978382.jpg"
                }
              />
              <p className="title-name">
                HomeDesign Robot Wars – Post with Gallery
              </p>
              <p className="title-brand">
                Design, Technology, Uncategorized March 4, 2016
              </p>
              <p className="title-detail strong">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, erat in malesuada aliquam, est erat faucibus purus,
                eget viverra nulla sem vitae neque. Quisque id sodales libero.
                In nec enim nisi, in ultricies quam. Sed lacinia feugiat velit,
                cursus molestie lectus
              </p>

              <div className="text-area-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                quis diam erat. Duis velit lectus, posuere a blandit sit amet,
                tempor at lorem. Donec ultricies, lorem sed ultrices interdum,
                leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec
                tempor arcu nisl, et molestie massa scelerisque ut. Nunc at
                rutrum leo. Mauris metus mauris, tristique quis sapien eu,
                rutrum vulputate enim. Mauris tempus erat laoreet turpis
                lobortis, eu tincidunt erat fermentum. Aliquam non tincidunt
                urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed
                ultrices erat. Praesent varius ultrices massa at faucibus.
                Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim
                tortor, sit amet condimentum mi ligula sit amet augue.
                Pellentesque vitae eros eget enim mollis placerat.
                <br />
                Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
                fermentum. Aliquam non tincidunt urna. Integer tincidunt nec
                nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius
                ultrices massa at faucibus. Aenean dignissim, orci sed faucibus
                pharetra, dui mi dignissim tortor, sit amet condimentum mi
                ligula sit amet augue. Pellentesque vitae eros eget enim mollis
                placerat. Pellentesque sodales augue eget ultricies ultricies.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Curabitur sagittis ultrices condimentum.
                Pellentesque ullamcorper libero in enim pellentesque lobortis.
                Praesent ut dui ac metus iaculis scelerisque at eget metus.
              </div>

              <div className="comment-post">
                <h3>Comment</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form className="form">
                  <textarea placeholder="Comment..." rows="" cols=""></textarea>
                  <div>
                    <input placeholder="Name..." />
                    <input placeholder="Email..." />
                  </div>
                  <input placeholder="Website..." />
                  <input value="Post comment" type="submit" />
                </form>
              </div>
              <div className="comment-show">
                <div className="comment-show-item">
                  <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/8ef62a38ce69806ea7691f0724a7e968?s=100&d=mm&r=g"
                  />
                  <div>
                    <p className="name">Võ Ngọc Chính</p>
                    <p className="detail">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text,{" "}
                    </p>
                    <p className="time">March 4, 2016</p>
                  </div>
                </div>
                <div className="comment-show-item">
                  <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/8ef62a38ce69806ea7691f0724a7e968?s=100&d=mm&r=g"
                  />
                  <div>
                    <p className="name">Võ Ngọc Chính</p>
                    <p className="detail">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text,{" "}
                    </p>
                    <p className="time">March 4, 2016</p>
                  </div>
                </div>
                <div className="comment-show-item">
                  <img
                    alt=""
                    src="https://secure.gravatar.com/avatar/8ef62a38ce69806ea7691f0724a7e968?s=100&d=mm&r=g"
                  />
                  <div>
                    <p className="name">Võ Ngọc Chính</p>
                    <p className="detail">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text,{" "}
                    </p>
                    <p className="time">March 4, 2016</p>
                  </div>
                </div>
              </div>
            </div>
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

export default CardDetail;
