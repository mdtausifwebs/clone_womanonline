import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Slidercss from "../../StyleCss/ProductSlider.module.css";
const ProductSlider = ({ images }) => {
  const [index, setindex] = useState(0);
  const [temp, settemp] = useState(false);
  const changeslide = () => {
    setTimeout(() => {
      if (index < images.length - 1) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
    }, 1000);
  };
  useEffect(() => {
    if (temp) {
      changeslide();
    }
  });
  return (
    <div className={Slidercss.container}>
      <div className={Slidercss.childContainer}>
        <img
          onMouseOver={() => settemp(true)}
          onMouseLeave={() => settemp(false) && setindex(0)}
          src={images[index].image}
          alt={images[index]}
        />
      </div>
    </div>
  );
};

export default ProductSlider;
