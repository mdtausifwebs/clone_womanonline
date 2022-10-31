import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import slidercss from "../../StyleCss/Slider.module.css";
let slider = [
  "https://wforwomanonline.gumlet.io/banner/1665641270Homepage%20Banner_Web.jpg",
  "https://wforwoman.gumlet.io/banner/1655271138W-website_desktop_banner-15-june.jpg",
  "https://wforwomanonline.gumlet.io/banner/1663589407stories-by-w-desktop.png",
  "https://wforwoman.gumlet.io/banner/1654855759W_web-BANNER.jpg",
  "https://wforwoman.gumlet.io/banner/1649936672Buy1Get1%20Free-14-april.jpg",
];

const Slider = () => {
  const [index, setindex] = useState(0);
  console.log("index", index);
  const [temp, setTemp] = useState(false);
  console.log("temp", temp);
  const indexcount = () => {
    setTimeout(() => {
      if (slider.length - 1 > index) {
        setindex(index + 1);
      } else {
        setindex(0);
      }
    }, 1000);
  };
  useEffect(() => {
    if (temp) {
      indexcount();
    }
  });
  return (
    <>
      <div className={slidercss.container}>
        <div className={slidercss.imagebox}>
          <i
            className="fa fa-arrow-left"
            id={slidercss.lefticon}
            onClick={() =>
              index > 0 ? setindex(index - 1) : setindex(slider.length - 1)
            }
            aria-hidden="true"
          ></i>
          <img
            onMouseOver={() => setTemp(true)}
            onMouseOut={() => setTemp(false)}
            src={slider[index]}
            alt={slider[index]}
          />
          <i
            className="fa fa-arrow-right"
            id={slidercss.righticon}
            onClick={() =>
              slider.length - 1 > index ? setindex(index + 1) : setindex(0)
            }
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </>
  );
};

export default Slider;
