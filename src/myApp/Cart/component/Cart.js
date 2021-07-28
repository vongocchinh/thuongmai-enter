import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./styles/style.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const Item = () => {
  return (
    <tr>
      <td>
        <DeleteIcon fontSize="small" color="action" />
      </td>

      <td>
        <img
          alt=""
          src={
            "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS82kBkrZs7er7ZfMjvjt2r5GANxk91Sqd5PHccWd1zlLipeykRmMzvLJ1p1d8pCDumo5ONHMs302s&usqp=CAc"
          }
        />
      </td>
      <td>
        <Link className="name-hover" to="/detail">
          Apple MacBook Pro MF841HN/A 13-inch Laptop
        </Link>
      </td>
      <td>$1,800.00</td>
      <td>
        <div>
          <button>
            <RemoveIcon fontSize="small" color="default" />
          </button>
          <span>5</span>
          <button>
            <AddIcon fontSize="small" color="default" />
          </button>
        </div>
      </td>
      <td>$1,800.00</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
};
const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Cart</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cart-container">
          <div className="table-cart">
            <table>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Check</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2 ,3 ].map((value, key) => {
                  return <Item key={key} />;
                })}
              </tbody>
            </table>
          </div>
          <div className="container-checkout-here">
            <h2>Cart Total</h2>
            <div className="container-checkout-here-item">
              <span>Subtotal</span>
              <span>$1,800.00</span>
            </div>
            <div className="container-checkout-here-item">
              <span>Total</span>
              <span>10</span>
            </div>
            <div className="container-checkout-here-item">
              <span>Quantity</span>
              <span>10</span>
            </div>
            <div className="container-checkout-here-item">
              <div>
                {/* <Link to="/" className="Link">
                  Home
                </Link> */}
                <Link to="/checkout" className="Link">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
