import React from 'react';
import './style/news.scss';
import TelegramIcon from '@material-ui/icons/Telegram';
const Newsletter=()=>{
    return(
        <>
        <div className="container-news">
            <div className="container">
                <div className="container-news-layout">
                    <div className="container-news-layout-left">
                    <TelegramIcon fontSize="large" /> <p>Sign up to Newsletter</p>
                    </div>
                    <form className="container-news-layout-right">
                        <input  className="input-text" placeholder="Enter your email address" />
                        <input type="submit" className="input-submit" value="Sign Up" />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Newsletter;