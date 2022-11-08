import React from "react";
import cartcss from "./cart.module.css";
import { useSelector } from "react-redux";
import Pricefilter from "./Pricefilter";
import { useState } from "react";
const Cart = () => {
  let { CartPrice } = useSelector((state) => state);
  const Carts = JSON.parse(localStorage.getItem("Carts"));
  const [temp, setTemp] = useState(false);
  return (
    <div className={cartcss.container}>
      <h1>Shopping Cart</h1>
      <div className={cartcss.containerchild}>
        {Carts ? (
          <div className={cartcss.cartbox}>
            <div className={cartcss.carthead}>
              <div>Item</div>
              <div> Price</div>
              <div>Qty</div>
              <div>Discount</div>
              <div> Subtotal</div>
            </div>
            <div className={cartcss.productSex}>
              {Carts?.map((item, i) => {
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
            <button onClick={() => temp?setTemp(false):setTemp(true)}>ADD COUPON</button>
            {temp ? (
              <div className={cartcss.popup}>
                <div>
                  <h3>APPLY COUPON</h3>
                  <i class="fa fa-close" onClick={() => temp?setTemp(false):setTemp(true)}></i>
                </div>
                <div>
                  <input type="text" onClick={(e)=>e.target.value==="tausif"?"true":"false"} placeholder="Enter coupon code" />
                  <button>APPLY</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <div>SubTotal</div>
            <div>{`Rs. ${CartPrice}`}</div>
          </div>
          <div>
            <div>Discount</div>
            <div>{`Rs. 0`}</div>
          </div>
          <div>
            <div>Order Total </div>
            <div>{`Rs. ${CartPrice}`}</div>
          </div>
          <div>
            <div></div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
