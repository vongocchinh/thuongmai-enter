import React,{useEffect} from "react";
import CardDetailComponent from "./../component/CartDetail/CardDetail";

const CardDetail = () => {

  useEffect(() => {
    window.scrollTo({top:0,behavior:"auto"})
  }, )
  return (
    <>
      <CardDetailComponent />
    </>
  );
};

export default CardDetail;
