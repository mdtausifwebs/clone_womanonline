import React, { useState } from "react";
import {  useSelector } from "react-redux";
import Styles from "../../StyleCss/Sidebar.module.css";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const state = useSelector((state) => state?.Alldata?.result?.filters);
  // console.log("state", state);
  const [temp, setTemp] = useState(false);
  const [expandText, setExpandText] = useState("");
  const expandHandler = (text) => {
    setExpandText(text);
    temp && expandText === text ? setTemp(false) : setTemp(true);
  };
  return (
    <div className={Styles.sidebar_container}>
      <div className={Styles.sidebar}>
        <div className={Styles.sidebar_column}>
          <div className={Styles.filter}>
            <div>FILTER</div>
          </div>
          <div className={Styles.container}>
            {state?.map((item, i) => {
              return (
                <div key={i} className={Styles.sidebarSec}>
                  <div
                    className={Styles.categorySec}
                    onClick={() => expandHandler(item?.filter_lable)}
                  >
                    <div>{item?.filter_lable}</div>
                    <div>
                      {temp && expandText === item.filter_lable ? (
                        <AiOutlineCaretUp />
                      ) : (
                        <AiOutlineCaretDown />
                      )}
                    </div>
                  </div>
                  {item.options.length > 0 && temp && expandText === item.filter_lable
                    ? item.options?.map((item, i) => {
                      return (
                        <div key={i} className={Styles.barSec}>
                          <Link to={`/${item.code}`}>
                            <div>{item.value}</div>
                            <div>{`(${item.total} Qty)`}</div>
                          </Link>
                        </div>
                      );
                    })
                    : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
