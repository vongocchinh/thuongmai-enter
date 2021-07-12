import React from "react";
import CartComponent from "./../component/Cart";
import { useEffect } from "react";

const Cart = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
  return (
    <>
      <CartComponent />
    </>
  );
};

export default Cart;
