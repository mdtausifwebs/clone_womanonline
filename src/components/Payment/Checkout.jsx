import React from "react";
import checkoutcss from "./checkout.module.css";
// import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Checkout = () => {
  // const { Carts } = useSelector((state) => state);
  const [mobile, setmobile] = useState();
  const [name, setname] = useState();
  const [address, setaddress] = useState();
  const [pincode, setpincode] = useState();
  const [city, setcity] = useState();
  const [states, setstates] = useState();
  const [email, setemail] = useState();
  const [valid, setvalid] = useState(true);
  const [errors, setErrors] = useState("");
  const [copon, setcopon] = useState(false);
  const [addressdata, setaddressdata] = useState([]);
  let CartsPrice = JSON.parse(localStorage.getItem("CartsPrice"));
  let Cartdata = JSON.parse(localStorage.getItem("Cartdata"));

  const ContinueHandler = () => {
    const addressobj = {
      name,
      mobile,
      address,
      pincode,
      city,
      states,
      email,
    };
    setaddressdata([...addressdata, addressobj]);
    console.log("addressdata", addressdata);
  };
  useEffect(() => {
    const pincodeArray = ["854336", "854312", "854327", "854326", "854325"];
    let res = pincodeArray.filter((item) => {
      return item.includes(pincode);
    });
    res.length === 1 ? setvalid(true) : setvalid(false);
    valid
      ? setErrors("FREE delivery:Friday, Nov 11")
      : setErrors("Please enter valid Pin code");
  }, [pincode, valid]);
  const cuponsValide = () => {
    if (!copon) {
      alert("Please Enter Valid Coupon code");
    } else {
      CartsPrice = CartsPrice - (CartsPrice * 10) / 100;
      localStorage.setItem("CartsPrice", JSON.stringify(CartsPrice));
      alert(
        `total: ${CartsPrice} Discount:${Math.floor(
          (CartsPrice * 10) / 100
        )} final price ${Math.floor(CartsPrice - (CartsPrice * 10) / 100)}`
      );
    }
  };
  const removeHndler = () => {
    console.log("removeHndler");
  };
  return (
    <div className={checkoutcss.container}>
      <div className={checkoutcss.logo}>
        <img src="https://wforwomanonline.com/images/logo.png" alt="" />
      </div>
      <div className={checkoutcss.containerChild}>
        <div className={checkoutcss.details}>
          <div className={checkoutcss.bar}>
            <div className={checkoutcss.carts}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span>CART</span>
            </div>
            <div className={checkoutcss.shop}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span>SHIPPING</span>
            </div>
            <div className={checkoutcss.pay}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span >REVIEW & PAY</span>
            </div>
          </div>
          <div className={checkoutcss.inputsec}>
            <h2>LOGIN OR CHECKOUT AS GUEST</h2>
            <input
              type="number"
              onChange={(e) => setmobile(e.target.value)}
              placeholder="Enter Mobile Number"
            />
            <input
              type="text"
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Full Name"
            />
            <input
              type="text"
              onChange={(e) => setaddress(e.target.value)}
              placeholder="Enter Street Address"
            />
            <input
              type="text"
              onChange={(e) => setpincode(e.target.value)}
              placeholder="Enter PIN Code"
            />
            <p className={valid ? checkoutcss.green : checkoutcss.red}>
              {errors}
            </p>
            <input
              type="text"
              onChange={(e) => setcity(e.target.value)}
              placeholder="Enter City"
            />
            <input
              type="text"
              onChange={(e) => setstates(e.target.value)}
              placeholder="Enter State"
            />
            <input
              type="text"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter Email"
            />
            <div className={checkoutcss.radiobutton}>
              <div>
                <h4>Select Address Type</h4>
                <div></div>
              </div>
              <div>
                <div>
                  <input type="radio" name="address" value="home" /> Home
                </div>
                <div>
                  <input type="radio" name="address" value="office" /> Office
                </div>
              </div>
            </div>
            <div>
              <button onClick={ContinueHandler}>CONTINUE</button>
            </div>
          </div>
        </div>
        <div className={checkoutcss.pricesec}>
          <div className={checkoutcss.coupons}>
            <div>
              <div>APPLY DISCOUNT COUPON</div>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter coupon code"
              onChange={(e) =>
                e.target.value === "tausif" ? setcopon(true) : setcopon(false)
              }
            />
            <button onClick={cuponsValide}>APPLY</button>
          </div>
          <div>
            <h3>ORDER SUMMARY</h3>
            <h4>Edit Cart</h4>
          </div>
          <div className={checkoutcss.productSec}>
            {Cartdata?.map((item, i) => {
              return (
                <div className={checkoutcss.cartpopproduct} key={i}>
                  <div className={checkoutcss.imgSec}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={checkoutcss.textSec}>
                    <span>{item.name}</span>
                    <span>{`RS. ${item.price}`}</span>
                    <span>{`SIZE ${item.size}`}</span>
                    <span>{`QTY ${item.quentity}`}</span>
                    <button onClick={() => removeHndler(item.id)}>
                      <i className="fa fa-trash-o"></i>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <h3>Sub Total</h3>
            <h4> {`Rs. ${Math.floor(CartsPrice)}`}</h4>
          </div>
          <div>
            <h3>Discount</h3>
            <h4> {`Rs. 00.0`}</h4>
          </div>
          <div>
            <h3>Order Total</h3>
            <h4> {`Rs. ${Math.floor(CartsPrice)}`}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
