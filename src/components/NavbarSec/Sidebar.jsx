
import React, { useState } from "react";
import Styles from "../../StyleCss/Sidebar.module.css";
const Sidebar = ({
  Sortpricebtnft,
  Sortpricebtnse,
  PalazzosPantsSortbtn,
  ChuridarSalwarSortbtm,
  ColorSortBtnBlack,
  ColorSortBtnBlue,
  ColorSortBtnRed,
  patternshowHandler,
  OccasionshowHandler,
  fabricfamilyCategoryHandler,
  ClosurecategoryHandler,
  sizecategoryHandler
}) => {
  const [toggle, setToggle] = useState("");
  const [arr, setarr] = useState([]);
  const categoryShow = (type) => {
    setarr([...arr, type]);
    if (toggle) {
      setToggle("");
    } else {
      setToggle(type);
    }
  };
  return (
    <div className={Styles.sidebar_container}>
      <div className={Styles.sidebar}>
        <div className={Styles.sidebar_column}>
          <div className={Styles.filter}>
            <div>FILTER</div>
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Category")}
            >
              <div>Category</div>
              <div>{toggle === "Category" ? "v" : "^"}</div>
            </div>
            {toggle === "Category" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={PalazzosPantsSortbtn}>Palazzos & Pants</button>
                <button onClick={ChuridarSalwarSortbtm}>
                  Churidar & Salwar
                </button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("price")}
            >
              <div>price</div>
              <div>{toggle === "price" ? "v" : "^"}</div>
            </div>
            {toggle === "price" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={Sortpricebtnft}>Rs.0 to Rs.2000</button>
                <button onClick={Sortpricebtnse}>Rs.2000 to Rs.4000</button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Color")}
            >
              <div>Color</div>
              <div>{toggle === "Color" ? "v" : "^"}</div>
            </div>
            {toggle === "Color" ? (
              <div className={Styles.categoryesBtnheading}>
                <div>
                  <span></span>
                  <button onClick={ColorSortBtnBlack}>black</button>
                </div>
                <div>
                  <span></span> <button onClick={ColorSortBtnBlue}>blue</button>
                </div>
                <div>
                  <span></span> <button onClick={ColorSortBtnRed}>red</button>
                </div>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Size")}
            >
              <div>Size</div>
              <div>{toggle === "Size" ? "v" : "^"}</div>
            </div>
            {toggle === "Size" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => sizecategoryHandler("6")}>6</button>
                <button onClick={() => sizecategoryHandler("8")}>8</button>
                <button onClick={() => sizecategoryHandler("10")}>10</button>
                <button onClick={() => sizecategoryHandler("12")}>12</button>
                <button onClick={() => sizecategoryHandler("14")}>14</button>
                <button onClick={() => sizecategoryHandler("16")}>16</button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Occasion")}
            >
              <div>Ornamentation</div>
              <div>{toggle === "Occasion" ? "v" : "^"}</div>
            </div>
            {toggle === "Occasion" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => OccasionshowHandler("Festive")}>
                  Festive
                </button>
                <button onClick={() => OccasionshowHandler("Casual")}>
                  Casual
                </button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Pattern")}
            >
              <div>Pattern</div>
              <div>{toggle === "Pattern" ? "v" : "^"}</div>
            </div>
            {toggle === "Pattern" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => patternshowHandler("Solid")}>
                  Solid{" "}
                </button>
                <button onClick={() => patternshowHandler("Floral")}>
                  Floral
                </button>
                <button onClick={() => patternshowHandler("Striped")}>
                  Striped
                </button>
                <button onClick={() => patternshowHandler("Geometric")}>
                  Geometric{" "}
                </button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Fabric Family")}
            >
              <div>Fabric Family</div>
              <div>{toggle === "Fabric Family" ? "v" : "^"}</div>
            </div>
            {toggle === "Fabric Family" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => fabricfamilyCategoryHandler("Cotton")}>
                  Cotton
                </button>
                <button onClick={() => fabricfamilyCategoryHandler("Viscose")}>
                  Viscose
                </button>
                <button onClick={() => fabricfamilyCategoryHandler("Rayon")}>
                  Rayon
                </button>
                <button onClick={() => fabricfamilyCategoryHandler("Crepe")}>
                  Crepe
                </button>
                <button
                  onClick={() => fabricfamilyCategoryHandler("Cotton Blend")}
                >
                  Cotton Blend
                </button>

                <button
                  onClick={() =>
                    fabricfamilyCategoryHandler("100% Man Made Fiber")
                  }
                >
                  100% Man Made Fiber
                </button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => categoryShow("Closure")}
            >
              <div>Closure</div>
              <div>{toggle === "Closure" ? "v" : "^"}</div>
            </div>
            {toggle === "Closure" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => ClosurecategoryHandler("Button")}>
                  Button
                </button>
                <button onClick={() => ClosurecategoryHandler("Zip")}>
                  Zip
                </button>
                <button onClick={() => ClosurecategoryHandler("Side Zip")}>
                  Side Zip
                </button>
                <button onClick={() => ClosurecategoryHandler("Zipper")}>
                  Zipper
                </button>
                <button onClick={() => ClosurecategoryHandler("Slip-on")}>
                  Slip On
                </button>
                <button
                  onClick={() => ClosurecategoryHandler("Button & Keyhole")}
                >
                  Button & Keyhole
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
