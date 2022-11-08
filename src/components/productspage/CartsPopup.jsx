import React from "react";
import cartpopupcss from "../../StyleCss/cartpopup.module.css";
const CartsPopup = ({ closepopup }) => {
  const data = JSON.parse(localStorage.getItem("Carts"));
  const removeHndler = (id) => {
    let removeProduct = data.filter((item) => {
      return item.id_product !== id;
    });
    localStorage.setItem("Carts", JSON.stringify(removeProduct));
  };
  return (
    <div className={cartpopupcss.container}>
        <i onClick={closepopup} className="fa fa-close" id={cartpopupcss.iconcrose}></i>
      <div className={cartpopupcss.subtotal}>
        <span>{`item in carts : 10`}</span>
        <span>{`Cart subTotal : 10201`}</span>
      </div>
      <div>
        <button>CHECKOUT</button>
      </div>
      <div className={cartpopupcss.itemsec}>
        {data?.map((item, i) => {
          return (
            <div className={cartpopupcss.cartpopproduct} key={i}>
              <div className={cartpopupcss.imgSec}>
                <img src={item.image} alt="" />
              </div>
              <div className={cartpopupcss.textSec}>
                <span>{item.name}</span>
                <span>{item.size}</span>
                <span>{item.quentity}</span>
                <button onClick={() => removeHndler(item.id_product)}>
                  <i className="fa fa-trash-o"></i>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button>VIEW AND EDIT CART</button>
      </div>
    </div>
  );
};

export default CartsPopup;
