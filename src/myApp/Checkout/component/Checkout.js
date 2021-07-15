import React ,{useState} from "react";
import "./styles/styles.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Checkout = () => {
    const [payment, setPayment] = useState(true);
    const onChange=(e)=>{
        if(e.target.value==="4"){
            setPayment(true);
        }else{
            setPayment(false);
        }
    }

  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Checkout</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-checkout">
          <form className="container-checkout-left">
            <p>Billing address</p>
            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-two">
                <label>First Name</label>
                <input placeholder="First name" />
              </div>
              <div className="container-checkout-left-item-two">
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </div>
            </div>
            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-one">
                <label>UserName</label>
                <input placeholder="User Name" />
              </div>
            </div>
            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-one">
                <label>Email</label>
                <input placeholder="Email" />
              </div>
            </div>
            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-one">
                <label>Phone</label>
                <input placeholder="Phone" />
              </div>
            </div>

            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-two">
                <label>Tỉnh , Thành phố</label>
                <select name="calc_shipping_provinces" required="">
                  <option value="">Tỉnh / Thành phố</option>
                </select>
                <input
                  className="billing_address_1"
                  name=""
                  type="hidden"
                  value=""
                />
              </div>
              <div className="container-checkout-left-item-two">
                <label>Quận Huyện</label>
                <select name="calc_shipping_district" required="">
                  <option value="">Quận / Huyện</option>
                </select>
                <input
                  className="billing_address_2"
                  name=""
                  type="hidden"
                  value=""
                />
              </div>
            </div>

            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-one">
                <label>Address</label>
                <input placeholder="Address" />
              </div>
            </div>
            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-one">
                <label>Address 1</label>
                <input placeholder="Address 2" />
              </div>
            </div>



            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-there">
                <label>Country </label>
                <input placeholder="Country" disabled />
              </div>
              <div className="container-checkout-left-item-there">
                <label>State</label>
                <input placeholder="State" disabled />
              </div>
              <div className="container-checkout-left-item-there">
                <label>Zip</label>
                <input placeholder="Zip" disabled />
              </div>
            </div>

            <div className="container-checkout-left-item-check-layout">
              <div className="container-checkout-left-item-check">
                <input type="checkbox" />{" "}
                <label>Lorem Ipsum is simply dummy text . </label>
              </div>
              <div className="container-checkout-left-item-check">
                <input type="checkbox" />{" "}
                <label>Lorem Ipsum is simply dummy text of the printing </label>
              </div>
            </div>
            <div className="container-checkout-left-item-radio-layout">
              <p>Payment</p>
              <div className="container-checkout-left-item-radio">
                <span>
                  <input onChange={onChange} name="payment" value="1" type="radio" />
                  <label>Credit card</label>
                </span>
                <span>
                  <input onChange={onChange} name="payment" value="2" type="radio" />
                  <label>Debit card</label>
                </span>
                <span>
                  <input onChange={onChange} name="payment" value="3" type="radio" />
                  <label>Paypal</label>
                </span>
                <span>
                  <input onChange={onChange} name="payment" value="4" type="radio" />
                  <label>Payment on delivery</label>
                </span>
              </div>
            </div>

            <div className="container-checkout-left-item">
              <div className="container-checkout-left-item-two">
                <label>Name on card</label>
                <input placeholder="Name on card" disabled={payment?payment:false} />
              </div>
              <div className="container-checkout-left-item-two">
                <label>Credit card number</label>
                <input placeholder="Credit card number" disabled={payment?payment:false} />
              </div>
            </div>
            <div className="container-checkout-left-item-sb">
              <input value="Continue to checkout" type="submit" />
            </div>
          </form>
          <div className="container-checkout-right">
            <p>Your cart</p>
            <div className="container-checkout-right-cart">
              <div className="container-checkout-right-cart-item">
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS82kBkrZs7er7ZfMjvjt2r5GANxk91Sqd5PHccWd1zlLipeykRmMzvLJ1p1d8pCDumo5ONHMs302s&usqp=CAc"
                />
                <div>
                  <label>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </label>
                  <label>Quantity: 10</label>
                  <label>Price: $18.000.00</label>
                </div>
              </div>
              <div className="container-checkout-right-cart-item">
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS82kBkrZs7er7ZfMjvjt2r5GANxk91Sqd5PHccWd1zlLipeykRmMzvLJ1p1d8pCDumo5ONHMs302s&usqp=CAc"
                />
                <div>
                  <label>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </label>
                  <label>Quantity: 10</label>
                  <label>Price: $18.000.00</label>
                </div>
              </div>
              <div className="container-checkout-right-cart-item-sb">
                <label>Total</label>
                <label>$200.000</label>
              </div>
              <div className="container-checkout-right-cart-item-sb">
                <input placeholder="Promo Code" type="text" />
                <input type="submit" value="Apply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
