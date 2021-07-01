import React from 'react';
import SAMSUNG from './../../../asset/sams.jpg';
const ProductLef=()=>{
    return (
        <>
        <div className="product-detail-left-product-list">
              <div className="product-detail-left-product-list-title">
                Latest Products
              </div>
              <div className="product-detail-left-product-list-item">
                {[1, 2, 3, 4, 5].map((key) => {
                  return (
                    <div key={key} className="product-detail-left-product-item">
                      <div className="product-detail-left-product-item-left">
                        <img
                          alt=""
                          src={SAMSUNG}
                        />
                      </div>
                      <div className="product-detail-left-product-item-right">
                        <p>Notebook Black Spire V Nitro VN7-591G</p>
                        <p>
                          <del>$2,299,00</del>
                        </p>
                        <div>$1,199,00</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
        </>
    )
}

export default ProductLef;