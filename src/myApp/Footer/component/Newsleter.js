import React from 'react';
import './news.scss';
import TelegramIcon from '@material-ui/icons/Telegram';
const Newsletter=()=>{
    return(
        <>
        <div className="container-news">
            <div className="container">
                <div className="container-news-layout">
                    <div className="container-news-layout-left">
                    <TelegramIcon fontSize="large" /> <p>Sign up to Newsletter ..and receive $20 coupon for first shopping</p>
                    </div>
                    <div className="container-news-layout-right">
                        <input  className="input-text" placeholder="Enter your email address" />
                        <input className="input-submit" value="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Newsletter;