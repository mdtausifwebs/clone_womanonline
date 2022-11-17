import React from "react";
import navbarcss from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import { useSelector } from "react-redux";
const Navbar = () => {
  useEffect(() => {
    const getdata = async () => {
      let res = await axios.get(
        "https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear&page=1&count=400"
      );
      res = res.data;
      // console.log("res", res);
      setsidebar(res.result.filters);
    };
    getdata();
  }, []);
  const token = JSON.parse(localStorage.getItem("token"));
  // const { Carts } = useSelector((state) => state);
  const Cartsdata = JSON.parse(localStorage.getItem("Cartsdata"));
  return (
    <div className={navbarcss.container}>
      <div className={navbarcss.childContainer}>
        <div className={navbarcss.logoSec}>
          <div
            className={navbarcss.bergarmenu}
          >
            <i className="fa fa-bars"></i>
          </div>
          <div className={navbarcss.logo}>
            <Link to="/">
              <img
                src="https://wforwomanonline.com/images/logo.png"
                alt="https://wforwomanonline.com/images/logo.png"
              />
            </Link>
          </div>
        </div>
        <div className={navbarcss.manuSec}>
          <div className={navbarcss.manuchild}>
            <Link to="/now-trending">
              <span>NEW LAUNCH</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <span className={navbarcss.hovertopwear}>
              <Link to={"/top-wear"}>TOP WEAR</Link>
              <div className={navbarcss.topwear}>
                <div className={navbarcss.topwearLink}>
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
              </div>
            </span>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/bottom-wear">
              <span>BOTTOM WEAR</span>
            </Link>
            <div className={navbarcss.botomwear}>
              <div className={navbarcss.botomwearLink}>
                <Link to="/bottom-wear-palazzo-pants">
                  <span>PLAZOOS & PANTS</span>
                </Link>
                <Link to="/bottom-wear-churidars-salwar">
                  <span>CHURIDARS & SALWARS</span>
                </Link>
                <Link to="/folksong-topwear">
                  <span>FOLKSONG</span>
                </Link>
                <Link to="/bottomwear-plus-size">
                  <span>PLUS SIZES</span>
                </Link>
                <Link to="/bottom-wear-skirts">
                  <span>SKIRTS</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/w-cosmetics">
              <span>COSMETIC</span>
            </Link>
            <div className={navbarcss.cosmetic}>
              <div className={navbarcss.cosmeticLink}>
                <Link to="/w-lips">
                  <span>LIPS</span>
                </Link>
                <Link to="/w-nails">
                  <span>NAILS</span>
                </Link>
                <Link to="/w-eyes">
                  <span>EYES</span>
                </Link>
                <Link to="/w-face-pallete">
                  <span>FACE</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/footwear">
              <span>FOOTWEAR</span>
            </Link>
            <div className={navbarcss.footwear}>
              <div className={navbarcss.footwearLink}>
                <Link to="/footwear-heels">
                  <span>HEELS</span>
                </Link>
                <Link to="/footwear-flats">
                  <span>FLATS</span>
                </Link>
                <Link to="/footwear-wedges">
                  <span>WEDGES</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/women-jewellery">
              <span>JEWELLERY</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/drapes-wear">
              <span>DRAPES</span>
            </Link>
            <div className={navbarcss.drapes}>
              <div className={navbarcss.drapesLink}>
                <Link to="/drapes-wear-dupatta">
                  <span>DUPATTAS</span>
                </Link>
                <Link to="/shawls">
                  <span>SHAWLS</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/wishful">
              <span>WISHFUL</span>
            </Link>
            <div className={navbarcss.wishful}>
              <div className={navbarcss.wishfulLink}>
                <Link to="/wishful-kurtas">
                  <span>KURTAS</span>
                </Link>
                <Link to="/wishful-sets-dresses">
                  <span>SETS & DRESSES</span>
                </Link>
                <Link to="/wishful-palazzos-and-pants">
                  <span>PALAZZOS & PANTS</span>
                </Link>
                <Link to="/wishful-skirts">
                  <span>SKIRTS</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/w-plus-size">
              <span>PLUS SIZE</span>
            </Link>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/stories-by-w">
              <span>STORE BY W</span>
            </Link>
            <div className={navbarcss.store}>
              <div className={navbarcss.storeLink}>
                <Link to="/w-aikat">
                  <span>AIKAT</span>
                </Link>
                <Link to="/w-sunehr">
                  <span>SUNEHR</span>
                </Link>
              </div>
            </div>
          </div>
          <div className={navbarcss.manuchild}>
            <Link to="/sale">
              <span>SALE</span>
            </Link>
          </div>
        </div>
        <div className={navbarcss.searchSec}>
          <input type="text" placeholder="Search here" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className={navbarcss.loginSec}>
          <div className={navbarcss.loginIcon}>
            <Link to={token ? "/login" : "/register"}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>{token ? token.name : "LOGIN"}</span>
            </Link>
            <div className={navbarcss.subloginsec}>
              <div className={navbarcss.subloginchild}>
                <Link to="/login">
                  <span>Login</span>
                </Link>
                <Link to="/register">
                  <span>Register</span>
                </Link>
                <span onClick={() => localStorage.removeItem("token")}>
                  Log Out
                </span>
              </div>
            </div>
          </div>
          <div className={navbarcss.cartIcon}>
            <Link to="/cart">
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              <p>{Cartsdata ? Cartsdata.length : "0"}</p>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
