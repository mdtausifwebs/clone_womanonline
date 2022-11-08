import React from "react";
import { useState } from "react";
import pricecss from "./price.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
const Pricefilter = ({ item }) => {
  const dispatch = useDispatch();
  const [itemCount, setitemCount] = useState(1);
  const { CartPrice } = useSelector((state) => state);
  const [ItemPrices, setItemPrices] = useState(Number(item.price));
  // const Carts = JSON.parse(localStorage.getItem("Carts"));

  const decIncHandler = (type) => {
    if (type === "dec") {
      if (itemCount > 1) {
        setItemPrices(ItemPrices - Number(item.price));
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice - Number(item.price),
        });
      }
      itemCount > 1 ? setitemCount(itemCount - 1) : setitemCount(itemCount);
    } else {
      itemCount < 10 ? setitemCount(itemCount + 1) : setitemCount(itemCount);
      if (itemCount < 10) {
        setItemPrices(ItemPrices + Number(item.price));
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice + Number(item.price),
        });
      }
    }
  };
  const removeHndler = (id) => {
    let data = JSON.parse(localStorage.getItem("Carts"));
    data = data.filter((item) => {
      return item.id_product !== id;
    });
    localStorage.setItem("Carts", JSON.stringify(data));
  };

  return (
    <div className={pricecss.priceContainer}>
      <div>
        <div className={pricecss.imageSec}>
          <img src={item.gallery[0].image} alt="cartimage" />
        </div>
        <div className={pricecss.detailsSec}>
          <span>{item.name}</span>
          <button onClick={() => removeHndler(item.id_product)}>
            <i className="fa fa-trash-o"></i>
            <span>Remove</span>
          </button>
        </div>
      </div>
      <div className={pricecss.pricesex}>
        <div>
          <span>{`Rs.${item.price}`}</span>
        </div>
        <div className={pricecss.buttonSec}>
          <button onClick={() => decIncHandler("dec")}>-</button>
          <p>{itemCount}</p>
          <button onClick={() => decIncHandler("inc")}>+</button>
        </div>
        <div>
          <span>{` ${item.discount}`}</span>
        </div>
        <div>
          <span>{` ${ItemPrices}`}</span>
        </div>
      </div>
      
    </div>
  );
};

export default Pricefilter;
