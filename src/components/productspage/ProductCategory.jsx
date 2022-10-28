import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import Productcss from "../../StyleCss/ProductsStyle.module.css";
import axios from "axios";
const ProductCategory = () => {
  const dispatch = useDispatch();
  const params = useParams().navcategory;
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(200);
  const { FilterProduct, Loading } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    let getdata = async () => {
      let res = await axios.get(
        `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${params}&page=${pageNo}&count=${pageSize}`
      );
      // let res = await axios.get(
      //   `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-sets-dresses&page=1&count=400`
      // );
      res = await res.data.result.products;
      res
        ? dispatch({ type: "SET_PRODUCTS", payload: res }) &&
          dispatch({ type: "SET_FILTER_PRODUCT", payload: res }) &&
          dispatch({ type: "SET_SUCCESS", payload: false })
        : dispatch({ type: "SET_ERROR", payload: false });
      setPageNo(1);
      setPageSize(200);
    };
    getdata();
  }, [dispatch, pageNo, pageSize, params]);
  return (
    <div>
      <div className={Productcss.container}>
        {Loading === true ? (
          <div className={Productcss.childContainer}>
            {FilterProduct?.map((item, i) => {
              return (
                <div key={i} className={Productcss.ProductBox}>
                  <Link to={`/details/${item.id_product}`}>
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
    </div>
  );
};

export default ProductCategory;
