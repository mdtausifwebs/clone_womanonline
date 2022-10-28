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
            <Link to="/now-trending">
              <span>NEW LAUNCH</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <span className={navbarcss.hovertopwear}>
              <Link to={"/top-wear-sets-dresses"}>TOP WEAR</Link>
              <div className={navbarcss.topwear}>
                <Link to="/top-wear-kurtas">
                  <span>KURTAS</span>
                </Link>
                <Link to="/top-wear-sets-dresses">
                  <span>SETS & DRESSES</span>
                </Link>
                <Link to="/folksong-topwear">
                  <span>FOLKSONG</span>
                </Link>
                <Link to="/topwear-plus-size">
                  <span>PLUS SIZE</span>
                </Link>
                <Link to="/top-wear-tops">
                  <span>TOPS</span>
                </Link>
              </div>
            </span>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/bottom-wear-churidars-salwar">
              <span>BOTTOM WEAR</span>
            </Link>
            <div className={navbarcss.botomwear}>
              <Link to="/bottom-wear-palazzo-pants">
                <span>PLAZOOS & PANTS</span>
              </Link>
              <Link to="/bottom-wear-churidars-salwar">
                <span>CHURIDARS & SALWARS</span>
              </Link>
              <Link to="/folksong-topwear">
                <span>FOLKSONG</span>
              </Link>
              <Link to="/w-plus-size">
                <span>PLUS SIZES</span>
              </Link>
              <Link to="/bottom-wear-skirts">
                <span>SKIRTS</span>
              </Link>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/">
              <span>COSMETIC</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <span>FOOTWEAR</span>
            <Link to="/footwear">
              <span>FOOTWEAR</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/women-jewellery">
              <span>JEWELLERY</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/">
              <span>DRAPES</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/">
              <span>WISHFUL</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/w-plus-size">
              <span>PLUS SIZE</span>
            </Link>
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
            <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
