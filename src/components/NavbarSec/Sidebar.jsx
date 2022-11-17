import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Styles from "../../StyleCss/Sidebar.module.css";
const Sidebar = () => {
  const { Alldata } = useSelector((state) => state);
  const [toggle, setToggle] = useState("");
  const [arr, setarr] = useState([]);
  const dispatch = useDispatch();
  const popupToggle = (type) => {
    setarr([...arr, type]);
    if (toggle) {
      setToggle("");
    } else {
      setToggle(type);
    }
  };
  // category sort
  // const categorySortHandler = (type) => {
  //   let sort = Alldata.filter(
  //     (item) => item.category === "Pants" || item.category === "Palazzos"
  //   );
  //   dispatch({ type: "SET_PRODUCTS", payload: sort });
  //   console.log("sort", sort);
  // };
  // price sort
  const priceSortHandler = (type) => {
    if (type === "low") {
      let filter = Alldata.filter((item) => {
        return item.price <= 2000;
      });
      let sort = filter.sort((a, b) => {
        return a.price - b.price;
      });
      dispatch({ type: "SET_PRODUCTS", payload: sort });
    } else {
      let filter = Alldata.filter((item) => {
        return item.price >= 2000;
      });
      let sort = filter.sort((a, b) => {
        return b.price - a.price;
      });
      dispatch({ type: "SET_PRODUCTS", payload: sort });
    }
  };
  // color sort
  const ColorSortHandler = (type) => {
    let sort = Alldata.filter((item) => {
      return item.color === type;
    });
    dispatch({ type: "SET_PRODUCTS", payload: sort });
    console.log(sort);
  };
  // size sort
  const sizeHandler = (type) => {
    let sort = Alldata.filter((item) => {
      return item.size.include(type);
    });
    dispatch({ type: "SET_PRODUCTS", payload: sort });
    console.log(sort);
  };
  const patternshowHandler = (type) => {
    let sort = Alldata.filter((item) => {
      return item.pattern === type;
    });
    dispatch({ type: "SET_PRODUCTS", payload: sort });
    console.log(sort);
  };
  const OccasionshowHandler = () => {};
  const ChuridarSalwarSortbtm = () => {};
  const PalazzosPantsSortbtn = () => {};
  // fabric sort
  const fabricfamilyCategoryHandler = (type) => {
    let sort = Alldata.filter((item) => {
      return item.fabric_family === type;
    });
    dispatch({ type: "SET_PRODUCTS", payload: sort });
    console.log(sort);
  };
  const ClosureHandler = (type) => {
    let sort = Alldata.filter((item) => {
      return item.closure === type;
    });
    dispatch({ type: "SET_PRODUCTS", payload: sort });
    console.log(sort);
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
              onClick={() => popupToggle("Category")}
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
              onClick={() => popupToggle("price")}
            >
              <div>price</div>
              <div>{toggle === "price" ? "v" : "^"}</div>
            </div>
            {toggle === "price" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => priceSortHandler("low")}>
                  Rs.0 to Rs.2000
                </button>
                <button onClick={() => priceSortHandler("high")}>
                  Rs.2000 to Rs.4000
                </button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => popupToggle("Color")}
            >
              <div>Color</div>
              <div>{toggle === "Color" ? "v" : "^"}</div>
            </div>
            {toggle === "Color" ? (
              <div className={Styles.categoryesBtnheading}>
                <div>
                  <button onClick={() => ColorSortHandler("Red")}>Red</button>
                </div>
                <div>
                  <button onClick={() => ColorSortHandler("Teal")}>Teal</button>
                </div>
                <div>
                  <button onClick={() => ColorSortHandler("Pink")}>Pink</button>
                </div>
                <div>
                  <button onClick={() => ColorSortHandler("Green")}>
                    Green
                  </button>
                </div>
                <div>
                  <button onClick={() => ColorSortHandler("Blue")}>Blue</button>
                </div>
                <div>
                  <button onClick={() => ColorSortHandler("Purple")}>
                    Purple
                  </button>
                </div>
                <div>
                  <button onClick={() => ColorSortHandler("Yellow")}>
                    Yellow
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => popupToggle("Size")}
            >
              <div>Size</div>
              <div>{toggle === "Size" ? "v" : "^"}</div>
            </div>
            {toggle === "Size" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => sizeHandler("6")}>6</button>
                <button onClick={() => sizeHandler("8")}>8</button>
                <button onClick={() => sizeHandler("10")}>10</button>
                <button onClick={() => sizeHandler("12")}>12</button>
                <button onClick={() => sizeHandler("14")}>14</button>
                <button onClick={() => sizeHandler("16")}>16</button>
              </div>
            ) : null}
          </div>
          <div className={Styles.categoryesHeader}>
            <div
              className={Styles.categoryesheading}
              onClick={() => popupToggle("Occasion")}
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
              onClick={() => popupToggle("Pattern")}
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
              onClick={() => popupToggle("Fabric Family")}
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
              onClick={() => popupToggle("Closure")}
            >
              <div>Closure</div>
              <div>{toggle === "Closure" ? "v" : "^"}</div>
            </div>
            {toggle === "Closure" ? (
              <div className={Styles.categoryesBtnheading}>
                <button onClick={() => ClosureHandler("Button")}>Button</button>
                <button onClick={() => ClosureHandler("Zip")}>Zip</button>
                <button onClick={() => ClosureHandler("Side Zip")}>
                  Side Zip
                </button>
                <button onClick={() => ClosureHandler("Zipper")}>Zipper</button>
                <button onClick={() => ClosureHandler("Slip-on")}>
                  Slip On
                </button>
                <button onClick={() => ClosureHandler("Button & Keyhole")}>
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
