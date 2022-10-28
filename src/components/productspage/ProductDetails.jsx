import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import productdetailcss from "../../StyleCss/productdetail.module.css";
const ProductDetails = () => {
  const [tempdetails, settempdetails] = useState(false);
  const navigatelink = useNavigate();
  const params = useParams();
  const { Products } = useSelector((state) => state);
  const [{ gallery, similar_products, name, sku, price }, setproductdetail] =
    useState([]);

  const [index, setindex] = useState(0);
  const findProduct = () => {
    let product = Products.find((item) => {
      return item.id_product === params.productid;
    });
    if (!product) {
      navigatelink("/");
    }
    setproductdetail(product);
  };
  useEffect(() => {
    findProduct();
  });
  return (
    <>
      <div className={productdetailcss.container}>
        <div className={productdetailcss.smallimage}>
          {gallery &&
            gallery.map((item, i) => {
              return (
                <div className={productdetailcss.imagess}>
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
          <img
            src={gallery && gallery[index].image}
            alt={gallery && gallery[index].image}
          />
        </div>
        <div className={productdetailcss.productdetailsSex}>
          <div className={productdetailcss.productdetails}>
            <div>
              <h3>{name}</h3>
            </div>
            <div>
              <p>SKU: {sku}</p>
            </div>
            <div>
              <h3>Rs. {price}</h3>
              <span>MRP (inclusive of all taxes)</span>
            </div>
            <div>
              <h4>SELECT SIZE</h4>
              <div className={productdetailcss.sizeListcss}>
                <h1>size</h1>
              </div>
              <h4> SIZE GUIDE</h4>
            </div>
            <div className={productdetailcss.cart_button}>
              <div>
                <button>-</button>
                <span>10</span>
                <button>+</button>
                <button className={productdetailcss.buynowCartBtn}>
                  ADD TO CART
                </button>
                <button className={productdetailcss.buynowCartBtn}>
                  BUY NOW
                </button>
              </div>
            </div>
            <div className={productdetailcss.deleverySec}>
              <div className={productdetailcss.inputPiCode}>
                <h5>CHECK DELIVERY IN YOUR AREA</h5>
                <input type="text" placeholder="Enter Pin Code" />
              </div>
              <div>
                <h5>KNOW YOUR WEAR</h5>
                <h6>
                  Sage green straight jacquard kurta in round neck and
                  three-quarter sleeves. It also feautures metallic embroidery.
                </h6>
              </div>
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
                <ul>
                  <span
                    className={productdetailcss.seeAndHide}
                    onClick={() =>
                      tempdetails ? settempdetails(false) : settempdetails(true)
                    }
                  >
                    {tempdetails ? "Hide More" : "Show More"}
                  </span>
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
      </div>
      <div className={productdetailcss.product_container}>
        {similar_products?.map((item, i) => {
          return (
            <div key={i} className={productdetailcss.product_box}>
              <Link to={`/`}>
                <div className={productdetailcss.img_details}>
                  <img src={item.image} alt={item.image} />
                  <p>VIEW DETAILS</p>
                </div>
                <h4>{item.name}</h4>
                <h4>{item.selling_price}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetails;
