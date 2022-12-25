// let res = await axios.get(
//   `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-sets-dresses&page=1&count=400`
// );
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductSlider from "./ProductSlider";
import Sidebar from "../NavbarSec/Sidebar";
import Productcss from "../../StyleCss/Products.module.css";
import axios from "axios";
const Products = () => {
  const dispatch = useDispatch();
  const params = useParams().navcategory;
  const [pageNo] = useState(1);
  const [pageSize] = useState(2000);
  const state = useSelector((state) => state?.Alldata?.result?.products);
  const [data, setdata] = useState([])
  const pageArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [currentpage, setCurrentpage] = useState(1)
  const [perPageSize] = useState(8)
  // console.log(Products, loading)
  const indexLast = currentpage * perPageSize
  const indexFirst = indexLast - perPageSize
  console.log(indexFirst, indexLast)
  useEffect(() => {
    if (state != null) {
      setdata(state?.slice(indexFirst, indexLast))
    }
  }, [currentpage, state, indexFirst, indexLast])
  const pagesize = (text) => {
    if (text === "Pre") {
      setCurrentpage(currentpage - 1)
    } else {
      setCurrentpage(currentpage + 1)
    }
  }
  useEffect(() => {
    let getdata = async () => {
      let res = await axios.get(
        `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${params}&page=${pageNo}&count=${pageSize}`
      );
      res = await res.data;
      dispatch({ type: "SET_ALLDATA", payload: res });
    };
    getdata();

  }, [dispatch, params, pageNo, pageSize]);

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
          {data?.map((item, i) => {
            return (
              <div key={i} className={Productcss.ProductBox}>
                <Link
                  to={`/details/${item.id_product}`}
                  onClick={() => detailsProduct(item)}
                >
                  <div className={Productcss.img_details}>
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
          <div className={Productcss.pageNoSec}>
            <button onClick={() => currentpage > 1 ? setCurrentpage(currentpage - 1) : null}>Pre</button>
            {
              pageArr.map((item, i) => {
                return <div key={i}>
                  <button className={currentpage === item ? Productcss.Active : null} onClick={() => pagesize(item)}>{item}</button>
                </div>
              })
            }
          
            <button onClick={() => currentpage < state?.length - 1 / perPageSize ? setCurrentpage(currentpage + 1) : null}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
