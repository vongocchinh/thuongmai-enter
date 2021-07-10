import React from 'react';
import './styles/style.scss';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from 'react-router-dom';
const Login =()=>{
    return (
        <>
        <div className="container">
        <div className="container-product-title">
          <div className="container-product-title-item">
            <div>Home</div> <ArrowForwardIosIcon className="icon-size" />
          </div>
          <div className="container-product-title-item">
            <div>Login</div>{" "}
            <ArrowForwardIosIcon className="icon-size" />
          </div>
        </div>
      </div>
        <div className="container">
            <form className="container-layout-login">
                <div className="layout-login">
                <p className="title-page">Welcome back! Sign in to your account</p>
                <label>Username or email address *</label>
                <input placeholder="Email" className="text-input" />
                <label>Password *</label>
                <input placeholder="Password" className="text-input" />
                <span>
                    <input type="checkbox"  />
                    <span>Remember me</span>
                </span>
                <input className="sb-input" value="Login"  type="submit"/>
                <Link className="link-login" to="">Lost your password?</Link>
                </div>    
            </form>
        </div>
        </>
    )
}

export default Login;