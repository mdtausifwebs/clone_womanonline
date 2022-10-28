import React from "react";
import ProductsWomen from "./productspage/ProductsWomen";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./NavbarSec/Sidebar";
import HomepageCss from "../StyleCss/HomePagecss.module.css";
const HomePage = () => {
  const dispatch = useDispatch();
  const params = useParams().navcategory;
  // let categoryArr = [
  //   "footwear-wedges",
  //   "footwear-wedges",
  //   "top-wear-kurtas",
  //   "top-wear-sets-dresses",
  //   "folksong-topwear",
  //   "topwear-plus-size",
  //   "top-wear-tops",
  //   "bottom-wear-palazzo-pants",
  //   "bottom-wear-churidars-salwar",
  //   "bottomwear-plus-size",
  //   "bottom-wear-skirts",
  //   "footwear-heels",
  //   "footwear-flats",
  //   "footwear-wedges",
  //   "women-jewellery",
  //   "drapes-wear",
  //   "drapes-wear-dupatta",
  //   "wishful",
  //   "wishful-kurtas",
  //   "wishful-sets-dresses",
  //   "wishful-palazzos-and-pants",
  //   "w-plus-size",
  //   "w-aikat",
  //   "w-sunehr",
  //   "stories-by-w",
  //   "now-trending",
  // ];
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(200);
  const [categoryConst, setcategoryConst] = useState("top-wear-sets-dresses");
  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });
    let getdata = async () => {
      let res = await axios.get(
        `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${categoryConst}&page=${pageNo}&count=${pageSize}`
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
      setcategoryConst("topwear-plus-size");
    };
    getdata();
  }, [dispatch, pageNo, pageSize, categoryConst]);

  return (
    <div className={HomepageCss.container}>
      <div className={HomepageCss.childcontainer}>
        <div className={HomepageCss.sidebar}>
          <Sidebar />
        </div>
        <div className={HomepageCss.productcss}>
          <ProductsWomen params={params} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
