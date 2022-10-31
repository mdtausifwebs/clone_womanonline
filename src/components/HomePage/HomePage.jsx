import React from "react";
import Categorylayout from "./Categorylayout";
import Slider from "./Slider";
import HomeCss from "../../StyleCss/HomeCss.module.css"
const HomePage = () => {
  return (
    <div className={HomeCss.container}>
      <Slider />
      <Categorylayout />
    </div>
  );
};

export default HomePage;

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