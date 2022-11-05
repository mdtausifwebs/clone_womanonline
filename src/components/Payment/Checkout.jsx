import React from "react";
import checkoutcss from "./checkout.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
const Checkout = () => {
  const { Carts } = useSelector((state) => state);
  const [mobile, setmobile] = useState();
  const [name, setname] = useState();
  const [address, setaddress] = useState();
  const [pincode, setpincode] = useState();
  const [city, setcity] = useState();
  const [states, setstates] = useState();
  const [email, setemail] = useState();
  const [valid, setvalid] = useState(true);
  const [errors, setErrors] = useState("");
  const [copon, setcopon] = useState();
  const [addressdata, setaddressdata] = useState([]);
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
    if (copon === "tausif") {
      console.log("copon valide");
    } else {
      console.log("copon not valide");
    }
  };
  return (
    <div className={checkoutcss.container}>
      <div className={checkoutcss.containerChild}>
        <div className={checkoutcss.logo}>
          <img src="https://wforwomanonline.com/images/logo.png" alt="" />
        </div>
        <div className={checkoutcss.head}>
          <div className={checkoutcss.bar}>
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span>CART</span>
            </div>
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span>SHIPPING</span>
            </div>
            <div>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <span>REVIEW & PAY</span>
            </div>
          </div>
          <div className={checkoutcss.coupons}>
            <div>
              <div>APPLY DISCOUNT COUPON</div>
            </div>
          </div>
        </div>
        <div className={checkoutcss.details}>
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
          <div className={checkoutcss.pricesec}>
            <div>
              <input
                type="text"
                placeholder="Enter coupon code"
                onChange={(e) => setcopon(e.target.value)}
              />
              <button onClick={cuponsValide}>APPLY</button>
            </div>
            <div>
              <h3>ORDER SUMMARY</h3>
              <h4>Edit Cart</h4>
            </div>
            <div>
              {Carts.map((item) => {
                return (
                  <div>
                    <img src={item.gallery[0].image} alt="cartimage" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <h3>Sub Total</h3>
              <h4>Rs. 6464646</h4>
            </div>
            <div>
              <h3>Discount</h3>
              <h4>Rs. 6464646</h4>
            </div>
            <div>
              <h3>Order Total</h3>
              <h4>Rs. 6464646</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
