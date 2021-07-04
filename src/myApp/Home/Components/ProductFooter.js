import React from 'react';
import './styles/productFooter.scss';
import SW from './../asset/sqp.jpg'
import SW2 from './../asset/swb.jpg'
import SW3 from './../asset/sw.jpg'
import { Link } from 'react-router-dom';
const ProductFooter=()=>{
    return (
        <>
        <div className="container">
            <div className="banner-product">
                <div className="banner-product-column">
                    <div className="banner-product-top"><p>Featured Products</p></div>
                    <div className="banner-product-top-main">
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={"data:image/png;base64,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"} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW2} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW3} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-product-column">
                <div className="banner-product-top"><p>Top Selling Products</p></div>
                    <div className="banner-product-top-main">
                        <Link to="/detail" className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </Link>
                        <Link to="/detail" className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQENaOM_3iR1z_J8GHj8iQxo8oLWOQXvX3fZ_1gXEuxIZvLqlcQNVqIzMxtJI3mK3ZRU79htrZ8oPs&usqp=CAc'} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6 Tablet Thin EliteBook Revolve 810 G6 Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$1,800,00</p>
                            </div>
                        </Link>
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW3} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6 Tablet Thin EliteBook</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-product-column">
                <div className="banner-product-top"><p>On-sale Products</p></div>
                    <div className="banner-product-top-main">
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRlMRtJm_sSqzTYTZ6USnLUmQ0HM4xCxMmBLEpjR8aivrt0elH1BGHm9mv4zZg5&usqp=CAc"} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW2} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={"data:image/png;base64,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"} />
                            </div>
                            <div className="banner-product-top-main-right">
                                <p><strong>Tablet Thin EliteBook Revolve 810 G6</strong></p>
                                <p>$ 1,800,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="clear"></div>
        </>
    )
}

export default ProductFooter;