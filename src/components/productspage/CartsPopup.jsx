import React from "react";
import cartpopupcss from "../../StyleCss/cartpopup.module.css";
import { useNavigate } from "react-router-dom";
const CartsPopup = ({ closepopup }) => {
  const data = JSON.parse(localStorage.getItem("Cartdata"));
  const CartsPrice = JSON.parse(localStorage.getItem("CartsPrice"));
  const navigate = useNavigate();
  const removeHndler = (id) => {
    let removeProduct = data.filter((item) => {
      return item.id_product !== id;
    });
    localStorage.setItem("Cartdata", JSON.stringify(removeProduct));
    localStorage.setItem(
      "CartsPrice",
      JSON.stringify(CartsPrice - Number(removeProduct.price))
    );
  };
  const navigates = () => {
    navigate("/cart");
  };
  const navigtorcheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className={cartpopupcss.container}>
      <i
        onClick={closepopup}
        className="fa fa-close"
        id={cartpopupcss.iconcrose}
      ></i>
      <div className={cartpopupcss.subtotal}>
        <span>{`item in carts : ${data ? data.length : 0}`}</span>
        <span>{`Cart subTotal : ${CartsPrice}`}</span>
      </div>
      <div>
        <button onClick={navigtorcheckout}>CHECKOUT</button>
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
                <span>{`RS. ${item.price}`}</span>
                <span>{`SIZE ${item.size}`}</span>
                <span>{`QTY ${item.quentity}`}</span>
                <button onClick={() => removeHndler(item.id_product)}>
                  <i className="fa fa-trash-o"></i>
                  <span>Remove</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={cartpopupcss.viewcarts}>
        <button onClick={navigates}>VIEW AND EDIT CART</button>
      </div>
    </div>
  );
};

export default CartsPopup;
