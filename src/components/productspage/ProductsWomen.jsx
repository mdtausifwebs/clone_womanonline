import React from "react";
import { useSelector } from "react-redux";
import ProductSlider from "./ProductSlider";
import { Link } from "react-router-dom";
import Productcss from "../../StyleCss/ProductsStyle.module.css";
const ProductsWomen = () => {
  const { FilterProduct, Loading } = useSelector((state) => state);
  return (
    <div className={Productcss.container}>
      {Loading === true ? (
        <div className={Productcss.childContainer}>
          {FilterProduct?.map((item, i) => {
            return (
              <div key={i} className={Productcss.ProductBox}>
                <Link to={`/product/${item.id_product}`}>
                  <div className={Productcss.img_details}>
                    <ProductSlider images={item.gallery} />
                    <p>VIEW DETAILS</p>
                  </div>
                  <div>{item.name}</div>
                  <div>{`Rs.${item.price}`}</div>
                  <div>{`Size ${item.size
                    .split("]")
                    .join("")
                    .split("[")
                    .join("")
                    .trim()
                    .split(" ")}`}</div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductsWomen;
