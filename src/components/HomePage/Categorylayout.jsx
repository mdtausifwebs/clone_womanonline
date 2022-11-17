import { Link } from "react-router-dom";
import React from "react";
import categorycss from "../../StyleCss/homeCategory.module.css";
let bodyimage = [
  {
    text: "W BEAUTY",
    url: "w-cosmetics",
    imageurl:
      "https://wforwoman.gumlet.io/commonsection/1654861163W_BEAUTY-Footer.jpg",
  },
  {
    text: "TRENDING NOW",
    url: "now-trending",
    imageurl:
      "https://wforwoman.gumlet.io/commonsection/1653036982W-Footwear-Footer-desktop.jpg",
  },
  {
    text: "CATEGORY TO BAG",
    url: "footwear",
    imageurl:
      "https://wforwoman.gumlet.io/commonsection/1654667187W-Plus-Footer-desktop.jpg",
  },
  {
    text: "FOLKSONG",
    url: "folksong-topwear",
    imageurl:
      "https://wforwoman.gumlet.io/commonsection/1648195461FolkSong-Footer-banner-desktop.jpg",
  },
];
let TopCategory = [
  {
    url: "top-wear-sets-dresses",
    images: "https://wforwomanonline.com/_nuxt/img/topwear.378002d.jpg",
  },
  {
    url: "top-wear-tops",
    images: "https://wforwomanonline.com/_nuxt/img/top-w-topwear2.58fdc6f.jpg",
  },
  {
    url: "topwear-plus-size",
    images: "https://wforwomanonline.com/_nuxt/img/top-w-bottom3.9c6422c.jpg",
  },
  {
    url: "footwear-wedges",
    images: "https://wforwomanonline.com/_nuxt/img/top-w-foot4.bb91b80.jpg",
  },
];
let FESTIVEBUYS = [
  {
    url: "top-wear-kurtas",
    images:
      "https://wforwomanonline.com/_nuxt/img/budget-buys-W-kurts1.3503803.jpg",
  },
  {
    url: "top-wear-sets-dresses",
    images:
      "https://wforwomanonline.com/_nuxt/img/budget-buys-W-sets2.ced8c09.jpg",
  },
  {
    url: "footwear-wedges",
    images:
      "https://wforwomanonline.com/_nuxt/img/budget-buys-W-foot3.3899248.jpg",
  },
  {
    url: "bottom-wear-skirt",
    images:
      "https://wforwomanonline.com/_nuxt/img/budget-buys-W-bottomwear4.eeee08e.jpg",
  },
  {
    url: "topwear-plus-size",
    images:
      "https://wforwomanonline.com/_nuxt/img/budget-buys-W-plus5.1acb573.jpg",
  },
  {
    url: "drapes-wear",
    images:
      "https://wforwomanonline.com/_nuxt/img/budget-buys-W-drape6.29f8213.jpg",
  },
];

const Categorylayout = () => {
  return (
    <div className={categorycss.main_container}>
      <div className={categorycss.container}>
        <div className={categorycss.head}>
          <div className={categorycss.deleveryicons}>
            <div>
            <i className="fa fa-truck"></i>
              <span>CASH ON DELEVERY</span>
            </div>
            <div>
              <span>|</span>
            </div>
            <div>
              <i className="fa fa-truck"></i>
              <span>FREE SHIPPING</span>
            </div>
            <div>
              <span>|</span>
            </div>
            <div>
              <i className="fa fa-rotate-right"></i>
              <span>EASY RETURNS</span>
            </div>
          </div>
        </div>
        <div className={categorycss.head}>
          <h1>Top Category</h1>
        </div>
        <div className={categorycss.bodyimagecss}>
          <Link to={bodyimage[0].url}>
            <img src={bodyimage[0].imageurl} alt="body" />
          </Link>
        </div>
        <div className={categorycss.head}>
          <h1>{bodyimage[1].text}</h1>
        </div>
        <div className={categorycss.bodyimagecss}>
          <Link to={bodyimage[1].url}>
            <img src={bodyimage[1].imageurl} alt="body" />
          </Link>
        </div>
        <div className={categorycss.categorybox}>
          {TopCategory?.map((item, i) => {
            return (
              <div key={i} className={categorycss.CategoryImage}>
                <Link to={`/${item.url}`}>
                  <img src={item.images} alt={item.url + "images"} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className={categorycss.head}>
          <h1>{bodyimage[2].text}</h1>
        </div>
        <div className={categorycss.bodyimagecss}>
          <Link to={bodyimage[2].url}>
            <img src={bodyimage[2].imageurl} alt="body" />
          </Link>
        </div>
        <div className={categorycss.head}>
          <h1>{bodyimage[3].text}</h1>
        </div>
        <div className={categorycss.bodyimagecss}>
          <Link to={bodyimage[0].url}>
            <img src={bodyimage[3].imageurl} alt="body" />
          </Link>
        </div>
        <div className={categorycss.head}>
          <h1>FESTIVE BUYS </h1>
        </div>
        <div className={categorycss.categorybox}>
          {FESTIVEBUYS?.map((item, i) => {
            return (
              <div key={i} className={categorycss.CategoryImage}>
                <Link to={`/${item.url}`}>
                  <img src={item.images} alt={item.url + "images"} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categorylayout;
