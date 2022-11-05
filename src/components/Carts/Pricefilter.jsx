import React from "react";
import { useState } from "react";
import pricecss from "./price.module.css";
import { useDispatch, useSelector } from "react-redux";
const Pricefilter = ({ item }) => {
  const dispatch = useDispatch();
  const [itemCount, setitemCount] = useState(1);
  const { CartPrice } = useSelector((state) => state);
  const decIncHandler = (type) => {
    if (type === "dec") {
      if (item > 1) {
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice - Number(item.price),
        });
      }
      itemCount > 1 ? setitemCount(itemCount - 1) : setitemCount(itemCount);
    } else {
      itemCount < 10 ? setitemCount(itemCount + 1) : setitemCount(itemCount);
      if (item < 10) {
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice + Number(item.price),
        });
      }
    }
  };
  const removeHndler = (id) => {
    console.log("id", id);
  };
  return (
    <div className={pricecss.priceContainer}>
      <div className={pricecss.imageSec}>
        <img src={item.gallery[0].image} alt="cartimage" />
      </div>
      <div className={pricecss.detailsSec}>
        <span>{item.name}</span>
        <button onClick={() => removeHndler(item.id_product)}>Remove</button>
        <span>{`Rs.${item.price}`}</span>
        <span> {`Total Rs.${item.price * itemCount}`}</span>
        <span>{`Total item ${itemCount}`}</span>
      </div>
      <div className={pricecss.buttonSec}>
        <button onClick={() => decIncHandler("dec")}>-</button>
        <button onClick={() => decIncHandler("inc")}>+</button>
      </div>
    </div>
  );
};

export default Pricefilter;
