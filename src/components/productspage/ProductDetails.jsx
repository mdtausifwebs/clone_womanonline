import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import productdetailcss from "../../StyleCss/productdetail.module.css";
import CartsPopup from "./CartsPopup";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const [tempdetails, settempdetails] = useState(false);
  const navigatelink = useNavigate();
  const [temp, setTemp] = useState(false);
  const params = useParams();
  const { Products, CartPrice } = useSelector((state) => state);
  // console.log("CartPrice", CartPrice);
  const [increment, setincrement] = useState(1);
  const [currentProduct, setproductdetail] = useState();
  const [index, setindex] = useState(0);
  const [Carts, setCarts] = useState([]);
  const navigate = useNavigate();
  const [pop, setpop] = useState(false);
  const [selectsize, setselectsize] = useState(null);
  const arrowHandler = () => {
    if (currentProduct?.gallery.length - 1 > index) {
      setindex(index + 1);
    } else {
      setindex(0);
    }
  };
  const navigatepro = () => {
    navigate("/");
  };
  useEffect(() => {
    const bigImagechange = () => {
      setTimeout(() => {
        if (currentProduct?.gallery.length - 1 > index) {
          setindex(index + 1);
        } else {
          setindex(0);
        }
      }, 1000);
    };
    if (temp) {
      bigImagechange();
    }
    const findProduct = () => {
      let product = Products.find((item) => {
        return item.id_product === params.productid;
      });
      if (!product) {
      }
      setproductdetail(product);
    };
    findProduct();
  }, [currentProduct, temp, Products, index, params]);

  const AddtoCart = () => {
    pop ? setpop(false) : setpop(true);

    //start total cart price option
    let totalprice =
      Number(JSON.parse(localStorage.getItem("CartsPrice"))) +
      Number(currentProduct.price);
    dispatch({
      type: "SET_CARTS_PRICE",
      payload: totalprice,
    });
    localStorage.setItem("CartsPrice", JSON.stringify(totalprice));
    // end total cart price
    // product add to carts  start
    if (!currentProduct || !selectsize || !increment) {
      alert("select all required option");
    } else {
      let proObj = {
        id: currentProduct.id_product,
        name: currentProduct.name,
        size: selectsize,
        quentity: increment,
        price: currentProduct.price,
      };
      console.log(proObj);
      let data = JSON.parse(localStorage.getItem("Carts")) || [];
      setCarts(data);
      if (data.length === 0) {
        data = [...Carts, currentProduct];
        setCarts(...Carts, currentProduct);
        localStorage.setItem("Carts", JSON.stringify(data));
        dispatch({
          type: "SET_CARTS_PRICE",
          payload: CartPrice + Number(currentProduct.price),
        });
      } else if (data.length >= 1) {
        // const temp = data.find((item) => {
        //   return item.id_product === currentProduct.id_product;
        // });
        // if (!temp) {
        //   data = [...data, currentProduct];
        //   setCarts(...Carts, currentProduct);
        //   localStorage.setItem("Carts", JSON.stringify(data));
        //   dispatch({
        //     type: "SET_CARTS_PRICE",
        //     payload: CartPrice + Number(currentProduct.price),
        //   });
        // }
      }
    }
  };

  const BuyNow = () => {
    console.log("BuyNow");
    navigatelink("/buy");
  };

  const [valid, setvalid] = useState(false);
  const pincodeArray = ["854336", "854312", "854327", "854326", "854325"];
  const checkDelivery = (e) => {
    let res = pincodeArray.filter((item) => {
      return item.includes(e.target.value);
    });
    res.length === 1 ? setvalid(true) : setvalid(false);
  };
  const closepopup = () => {
    pop ? setpop(false) : setpop(true);
  };
  return (
    <>
      {!currentProduct ? (
        "Loading details"
      ) : (
        <div>
          <div className={productdetailcss.container}>
            <div className={productdetailcss.smallimage}>
              {currentProduct?.gallery?.map((item, i) => {
                return (
                  <div key={i} className={productdetailcss.imagess}>
                    <img
                      key={i}
                      src={item.image}
                      alt={item.image}
                      onClick={() => setindex(i)}
                    />
                  </div>
                );
              })}
            </div>
            <div className={productdetailcss.bigimage}>
              <i
                className="fa fa-arrow-left"
                id={productdetailcss.leftarrow}
                aria-hidden="true"
                onClick={arrowHandler}
              ></i>
              <img
                onMouseOver={() => setTemp(true)}
                onMouseLeave={() => setTemp(false)}
                src={currentProduct?.gallery[index]?.image}
                alt={currentProduct?.gallery[index]?.image}
              />
              <i
                onClick={arrowHandler}
                className="fa fa-arrow-right"
                id={productdetailcss.rightarrow}
                aria-hidden="true"
              ></i>
            </div>
            <div className={productdetailcss.productdetailsSex}>
              <div className={productdetailcss.textsec}>
                <div>{currentProduct?.name}</div>
                <div>SKU: {currentProduct?.sku}</div>
                <div>Rs. {currentProduct?.price}</div>
                <div>MRP (inclusive of all taxes)</div>
                <div>SELECT SIZE</div>
                <div className={productdetailcss.sizeListcss}>
                  <span onClick={() => setselectsize(12)}>12</span>
                  <span onClick={() => setselectsize(14)}>14</span>
                  <span onClick={() => setselectsize(16)}>16</span>
                  <span onClick={() => setselectsize(18)}>18</span>
                </div>
                <div>SIZE GUIDE</div>
              </div>
              <div className={productdetailcss.buttonsec}>
                <div className={productdetailcss.incrementbtn}>
                  <button
                    onClick={() =>
                      increment > 0
                        ? setincrement(increment - 1)
                        : setincrement(increment)
                    }
                  >
                    -
                  </button>
                  <span>{increment}</span>
                  <button
                    onClick={() =>
                      increment < 10
                        ? setincrement(increment + 1)
                        : setincrement(increment)
                    }
                  >
                    +
                  </button>
                </div>
                <div className={productdetailcss.buynowCartBtn}>
                  <button onClick={AddtoCart}>ADD TO CART</button>
                  <button onClick={BuyNow}>BUY NOW</button>
                </div>
              </div>
              <div className={productdetailcss.inputPiCode}>
                <h5>CHECK DELIVERY IN YOUR AREA</h5>
                <input
                  type="text"
                  onKeyUp={checkDelivery}
                  placeholder="Enter Pin Code"
                />
                {valid ? (
                  <div className={productdetailcss.pintrue}>
                    free delivery avilable
                  </div>
                ) : (
                  <div className={productdetailcss.pinError}>
                    Please enter valid Pin code
                  </div>
                )}
              </div>
              <div className={productdetailcss.textcss}>
                <h5>KNOW YOUR WEAR</h5>
                <h6>
                  Sage green straight jacquard kurta in round neck and
                  three-quarter sleeves. It also feautures metallic embroidery.
                </h6>
              </div>
              <div className={productdetailcss.deleverySec}>
                <div className={productdetailcss.deleveryProductDetailsSec}>
                  <ul className={productdetailcss.deleveryProductDetails}>
                    <li>
                      <span>Colour</span>
                      <span>Green</span>
                    </li>
                    <li>
                      <span>Fabric Content</span>
                      <span>65% Cotton; 35% Viscose</span>
                    </li>
                    <li>
                      <span>Fabric Detail</span>
                      <span>Vetiver Multi Gold Zari</span>
                    </li>
                    <li>
                      <span>Neck Type</span>
                      <span>Round Neck</span>
                    </li>
                    <li>
                      <span>Sleeve</span>
                      <span>3/4 Sleeve</span>
                    </li>
                    <li>
                      <span>Sleeve Styling</span>
                      <span>Regular</span>
                    </li>
                  </ul>
                  {tempdetails ? (
                    <ul className={productdetailcss.deleveryProductDetails}>
                      <li>
                        <span>Fit</span>
                        <span>Regular Fit</span>
                      </li>
                      <li>
                        <span>Shape</span>
                        <span>Straight</span>
                      </li>
                      <li>
                        <span>Closure</span>
                        <span>Buttons</span>
                      </li>
                      <li>
                        <span>Occasion</span>
                        <span>Festive</span>
                      </li>
                      <li>
                        <span>Length</span>
                        <span>Calf Length</span>
                      </li>
                      <li>
                        <span>Ethnicity</span>
                        <span>Indian</span>
                      </li>

                      <li>
                        <span>Ornamentation</span>
                        <span>Metallic Embroidery</span>
                      </li>
                      <li>
                        <span>Pattern</span>
                        <span>Floral</span>
                      </li>
                      <li>
                        <span>Fabric Family</span>
                        <span>Cotton</span>
                      </li>
                      <li>
                        <span>Colour Details</span>
                        <span>Sage Green</span>
                      </li>
                      <li>
                        <span>Care</span>
                        <span>Hand Wash</span>
                      </li>
                      <li>
                        <span>Fabric Process</span>
                        <span>Yd- Jacquard</span>
                      </li>
                      <li>
                        <span>Fabric Type</span>
                        <span>Woven</span>
                      </li>
                    </ul>
                  ) : (
                    <ul></ul>
                  )}
                  <ul>
                    <span
                      className={productdetailcss.seeAndHide}
                      onClick={() =>
                        tempdetails
                          ? settempdetails(false)
                          : settempdetails(true)
                      }
                    >
                      {tempdetails ? "Hide More" : "Show More"}
                    </span>
                  </ul>
                </div>
                <div>
                  <div>STYLING SUGGESTION</div>
                  <div>
                    Style the kurta with tights and drape for a complete festive
                    look.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={productdetailcss.product_container}>
            {currentProduct?.similar_products?.map((item, i) => {
              return (
                <div
                  key={i}
                  className={productdetailcss.product_box}
                  onClick={navigatepro}
                >
                  <div className={productdetailcss.img_details}>
                    <img src={item.image} alt={item.image} />
                    <div className={productdetailcss.details}>
                      <p>VIEW DETAILS</p>
                    </div>
                  </div>
                  <h4>{item.name}</h4>
                  <h4>{item.selling_price}</h4>
                </div>
              );
            })}
            <div className={productdetailcss.popup}>
              {pop ? <CartsPopup closepopup={closepopup} /> : ""}
              {/* <CartsPopup closepopup={closepopup}/> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
