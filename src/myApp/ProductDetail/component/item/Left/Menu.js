import React from 'react';
import { Link } from "react-router-dom";

const MenuLeft=()=>{
    return (
        <>
        <div className="product-detail-left-menu">
              <p className="product-detail-left-menu-item">
                <strong>Show All Categories</strong>
              </p>
              <Link className="product-detail-left-menu-item">
                Laptops & Computers (13)
              </Link>
              <Link className="product-detail-left-menu-item">
                Accessories (12)
              </Link>
              <Link className="product-detail-left-menu-item">
                All in One (1)
              </Link>
              <Link className="product-detail-left-menu-item">Gaming (1)</Link>
              <Link className="product-detail-left-menu-item">Laptops (6)</Link>
              <Link className="product-detail-left-menu-item">
                Mac Computers (1)
              </Link>
              <Link className="product-detail-left-menu-item">
                Computers (0)
              </Link>
              <Link className="product-detail-left-menu-item">
                Peripherals (1)
              </Link>
              <Link className="product-detail-left-menu-item">Servers (1)</Link>
              <Link className="product-detail-left-menu-item">
                Ultrabooks (1)
              </Link>
            </div>
        </>
    )
}

export default MenuLeft;