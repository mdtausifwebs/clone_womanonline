import "./App.css";
import Footer from "./components/HomePage/Footer";
import Navbar from "./components/NavbarSec/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProductDetails from "./components/productspage/ProductDetails";
import Products from "./components/productspage/Products";
import Registration from "./components/User/Registration";
import Cart from "./components/Carts/Cart";
import Login from "./components/User/Ligin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:navcategory" element={<Products />} />
          <Route path="/details/:productid" element={<ProductDetails />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
