import React from 'react';
import './styles/productFooter.scss';
import SW from './../asset/sqp.jpg'
import SW2 from './../asset/swb.jpg'
import SW3 from './../asset/sw.jpg'
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
                                <img alt="" src={SW} />
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
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW} />
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
                <div className="banner-product-top"><p>On-sale Products</p></div>
                    <div className="banner-product-top-main">
                        <div className="banner-layout-main">
                            <div className="banner-product-top-main-left">
                                <img alt="" src={SW} />
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
            </div>
        </div>
        <div className="clear"></div>
        </>
    )
}

export default ProductFooter;