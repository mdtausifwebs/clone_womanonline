import React from "react";
import cartcss from "./cart.module.css";
import { useSelector } from "react-redux";
import Pricefilter from "./Pricefilter";
const Cart = () => {
  const { Carts, CartPrice, Products } = useSelector((state) => state);
  console.log("CartPrice", CartPrice);
  return (
    <div className={cartcss.container}>
      <div className={cartcss.containerchild}>
        {Carts ? (
          <div className={cartcss.cartbox}>
            <div>Shopping Cart</div>
            <div className={cartcss.carthead}>
              <div>Item</div>
              <div> Price</div>
              <div>Qty</div>
              <div>Discount</div>
              <div> Subtotal</div>
            </div>
            {Products?.map((item, i) => {
              return (
                <div className={cartcss.cartproduct} key={i}>
                  <Pricefilter item={item} />
                </div>
              );
            })}
            <div>
              <button>Shoping Continue</button>
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}
        <div className={cartcss.cartdetails}>
          <div>DISCOUNT</div>
          <div>
            <div>Coupons</div>
            <button>ADD COUPON</button>
          </div>
          <div>
            <div>SubTotal</div>
            <div>{`Rs. ${CartPrice}`}</div>
          </div>
          <div>
            <div>Discount</div>
            <div>{`Rs. 15624`}</div>
          </div>
          <div>
            <div>Order Total</div>
            <div>{`Rs. 15624`}</div>
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
