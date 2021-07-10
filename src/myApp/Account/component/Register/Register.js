import React from "react";
import "./styles/style.scss";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Register = () => {
  return (
    <>
      <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Register</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-register">
          <div className="register-left">
            <form className="container-layout-login">
              <div className="layout-login">
                <p className="title-page">Create your very own account </p>
                <label>Username or email address *</label>
                <input placeholder="Email" className="text-input" />
                <label>Password *</label>
                <input placeholder="Password" className="text-input" />
                <label>Password Confirm *</label>
                <input placeholder="Password Confirm" className="text-input" />

                <input className="sb-input" value="Register" type="submit" />
              </div>
            </form>
          </div>
          <div className="register-right">
            <div>
            <p className="title-page-register">
              Sign up today and you will be able to :
            </p>
            <ul>
              <li>Speed your way through checkout</li>
              <li>Track your orders easily</li>
              <li>Keep a record of all your purchases</li>
            </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
