import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./styles/style.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
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
            {[1, 2, 3].map((key) => {
              return (
                <tr>
                  <td>
                  <DeleteIcon fontSize="small" color="primary" />
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
                    <button><RemoveIcon fontSize="small" color="default" /></button>
                    <span>5</span>
                    <button><AddIcon fontSize="small" color="default" /></button>
                  </td>
                  <td>$1,800.00</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              );
            })}
          </div>
          <div className="container-checkout-here">
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
                <Link to="/" className="Link">
                  Home
                </Link>
                <Link to="/checkout" className="Link">
                  Check Out
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
