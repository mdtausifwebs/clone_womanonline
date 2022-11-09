import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import Sidebar from "../NavbarSec/Sidebar";
import Productcss from "../../StyleCss/ProductsStyle.module.css";
import axios from "axios";
const Products = () => {
  const dispatch = useDispatch();
  const params = useParams().navcategory;
  const [pageNo, setPageNo] = useState(4);
  const [pageSize, setPageSize] = useState(400);
  const { Products } = useSelector((state) => state);
  // console.log('Products', Products);
  useEffect(() => {
    let getdata = async () => {
      let res = await axios.get(
        `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${params}&page=${pageNo}&count=${pageSize}`
      );
      // let res = await axios.get(
      //   `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-sets-dresses&page=1&count=400`
      // );
      res = await res.data.result.products;
      dispatch({ type: "SET_PRODUCTS", payload: res });
      dispatch({ type: "SET_ALLDATA", payload: res });
      setPageNo(1);
      setPageSize(200);
    };
    getdata();
  }, [dispatch, pageNo, pageSize, params]);
  const detailsProduct = (item) => {
    dispatch({ type: "SET_DETAILS", payload: item });
  };

  return (
    <div>
      <div className={Productcss.container}>
        <div className={Productcss.sidebar}>
          <Sidebar />
        </div>
        <div className={Productcss.childContainer}>
          {Products?.map((item, i) => {
            return (
              <div key={i} className={Productcss.ProductBox}>
                <Link
                  to={`/details/${item.id_product}`}
                  onClick={() => detailsProduct(item)}
                >
                  <div  className={Productcss.img_details}>
                    <ProductSlider images={item.gallery} />
                    <div className={Productcss.details}>
                      <p>VIEW DETAILS</p>
                    </div>
                  </div>
                  <div>{item.name}</div>
                  <div>{`Rs.${item.price}`}</div>
                  <div className={Productcss.sizecss}>{`Size ${item.size
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
      </div>
    </div>
  );
};

export default Products;
