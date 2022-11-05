import "./App.css";
import loadable from "react-loadable";
import Footer from "./components/HomePage/Footer";
import Navbar from "./components/NavbarSec/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage/HomePage";
// import ProductDetails from "./components/productspage/ProductDetails";
// import Products from "./components/productspage/Products";
import Registration from "./components/User/Registration";
import Cart from "./components/Carts/Cart";
import Login from "./components/User/Ligin";
import BuyPage from "./components/Carts/BuyPage";
import Checkout from "./components/Payment/Checkout";
const Homeloading = loadable({
  loader: () => import("./components/HomePage/HomePage"),
  loading: () => <div>loading....</div>,
});
const Productloading = loadable({
  loader: () => import("./components/productspage/Products"),
  loading: () => <div>loading....</div>,
});
const ProductDetailsLoading=loadable({
  loader:()=>import("./components/productspage/ProductDetails"),
  loading:()=><div>loading....</div>,
})
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homeloading />} />
          <Route path="/:navcategory" element={<Productloading />} />
          <Route path="/details/:productid" element={<ProductDetailsLoading />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
