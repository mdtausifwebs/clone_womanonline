import React from "react";
import { useState } from "react";
import pricecss from "./price.module.css";
import { useDispatch, useSelector } from "react-redux";
const Pricefilter = ({ item }) => {
  const dispatch = useDispatch();
  const [itemCount, setitemCount] = useState(1);
  const { CartPrice } = useSelector((state) => state);
  const [ItemPrices, setItemPrices] = useState(Number(item.price));
  const CartsPrice = JSON.parse(localStorage.getItem("CartsPrice"));
  const Cartdata = JSON.parse(localStorage.getItem("Cartdata"));

  const decIncHandler = (type) => {
    if (type === "dec") {
      if (itemCount > 1) {
        setItemPrices(ItemPrices - Number(item.price));
        localStorage.setItem(
          "CartsPrice",
          JSON.stringify(CartsPrice - Number(item.price))
        );
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice + Number(item.price),
        });
      }
      itemCount > 1 ? setitemCount(itemCount - 1) : setitemCount(itemCount);
    } else {
      itemCount < 10 ? setitemCount(itemCount + 1) : setitemCount(itemCount);
      if (itemCount < 10) {
        setItemPrices(ItemPrices + Number(item.price));
        localStorage.setItem(
          "CartsPrice",
          JSON.stringify(CartsPrice + Number(item.price))
        );
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice + Number(item.price),
        });
      }
    }
  };
  const removeHndler = (id) => {
    const filterdata = Cartdata.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem(
      "CartsPrice",
      JSON.stringify(CartsPrice - Number(filterdata.price))
    );
    localStorage.setItem("Cartdata", JSON.stringify(filterdata));
  };

  return (
    <div className={pricecss.priceContainer}>
      <div>
        <div className={pricecss.imageSec}>
          <img src={item.image} alt="cartimage" />
        </div>
        <div className={pricecss.detailsSec}>
          <span>{item.name}</span>
          <button onClick={() => removeHndler(item.id)}>
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
          <span>{`Rs.  0.0`}</span>
        </div>
        <div>
          <span>{`Rs.  ${ItemPrices}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Pricefilter;
