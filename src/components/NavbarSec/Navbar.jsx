import React from "react";
import navbarcss from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={navbarcss.container}>
      <div className={navbarcss.childContainer}>
        <div className={navbarcss.logoSec}>
          <Link to="/">
            <img
              src="https://wforwomanonline.com/images/logo.png"
              alt="https://wforwomanonline.com/images/logo.png"
            />
          </Link>
        </div>
        <div className={navbarcss.manuSec}>
          <div className={navbarcss.manuchild}>
            <span>NEW LAUNCH</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span className={navbarcss.hovertopwear}>
              <Link to={"/top-wear-kurtas"}>TOP WEAR</Link>
              <div className={navbarcss.topwear}>
                <span>KURTAS</span>
                <span>SETS & DRESSES</span>
                <span>FOLKSONG</span>
                <span>PLUS SIZE</span>
                <span>TOPS</span>
              </div>
            </span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>BOTTOM WEAR</span>
            <div className={navbarcss.botomwear}>
              <span>PLAZOOS & PANTS</span>
              <span>CHURIDARS & SALWARS</span>
              <span>FOLKSONG</span>
              <span>PLUS SIZES</span>
              <span>SKIRTS</span>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <span>COSMETIC</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>FOOTWEAR</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>JEWELLERY</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>DRAPES</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>WISHFUL</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>PLUS SIZE</span>
          </div>
          <div className={navbarcss.manuchild}>
            <span>STORE BY W</span>
            <span>SALE</span>
          </div>
        </div>
        <div className={navbarcss.searchSec}>
          <input type="text" placeholder="Search here" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className={navbarcss.loginSec}>
          <div className={navbarcss.loginIcon}>
            <i className="fa fa-user" aria-hidden="true"></i>
            <span>LOGIN</span>
          </div>
          <div className={navbarcss.cartIcon}>
            {/* <p>{cartdata ? cartdata.length : "0"}</p> */}
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
