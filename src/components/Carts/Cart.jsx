import React from "react";
import cartcss from "./cart.module.css";
import { useSelector } from "react-redux";
import Pricefilter from "./Pricefilter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  const navigate = useNavigate();
  let { CartPrice } = useSelector((state) => state);
  const Cartdata = JSON.parse(localStorage.getItem("Cartdata"));
  let CartsPrice = JSON.parse(localStorage.getItem("CartsPrice"));
  // const [localPrice, setlocalPrice] = useState();
  const [temp, setTemp] = useState(false);
  const [coupon, setcoupon] = useState(false);
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  const couponHandler = () => {
    if (!coupon) {
      alert("Please Enter Correct  coupon ");
    } else {
      CartsPrice = CartsPrice - (CartsPrice * 10) / 100;
      localStorage.setItem("CartsPrice", JSON.stringify(CartsPrice));
      alert(
        `total: ${CartsPrice} Discount:${Math.floor(
          (CartsPrice * 10) / 100
        )} final price ${Math.floor(CartsPrice - (CartsPrice * 10) / 100)}`
      );
      navigate("/checkout");
    }
  };
  return (
    <div className={cartcss.container}>
      <h1>Shopping Cart</h1>
      <div className={cartcss.containerchild}>
        {Cartdata ? (
          <div className={cartcss.cartbox}>
            <div className={cartcss.carthead}>
              <div>Item</div>
              <div> Price</div>
              <div>Qty</div>
              <div>Discount</div>
              <div> Subtotal</div>
            </div>
            <div className={cartcss.productSex}>
              {Cartdata?.map((item, i) => {
                return (
                  <div className={cartcss.cartproduct} key={i}>
                    <Pricefilter item={item} />
                  </div>
                );
              })}
            </div>
            <div>
              <button>Shoping Continue</button>
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}
        <div className={cartcss.cartdetails}>
          <div>DISCOUNT</div>
          <div className={cartcss.couponsec}>
            <div>Coupons</div>
            <button onClick={() => (temp ? setTemp(false) : setTemp(true))}>
              ADD COUPON
            </button>
            {temp ? (
              <div className={cartcss.popup}>
                <div>
                  <h3>APPLY COUPON</h3>
                  <i
                    class="fa fa-close"
                    onClick={() => (temp ? setTemp(false) : setTemp(true))}
                  ></i>
                </div>
                <div>
                  <input
                    type="text"
                    onChange={(e) =>
                      e.target.value === "tausif"
                        ? setcoupon(true)
                        : setcoupon(false)
                    }
                    placeholder="Enter coupon code"
                  />
                  <button onClick={couponHandler}>APPLY</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div>SubTotal</div>
            <div>{`Rs. ${Math.floor(CartPrice||CartsPrice)}`}</div>
          </div>
          <div>
            <div>Discount</div>
            <div>{`Rs. 0.0`}</div>
          </div>
          <div>
            <div>Order Total </div>
            <div>{`Rs. ${Math.floor(CartPrice||CartsPrice)}`}</div>
          </div>
          <div>
            <div></div>
            <button onClick={checkoutHandler}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
