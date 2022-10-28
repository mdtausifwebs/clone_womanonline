import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarSec/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/productspage/ProductDetails";
import ProductCategory from "./components/productspage/ProductCategory";
import { useSelector } from "react-redux";
function App() {
  const { Loading } = useSelector((state) => state);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:navcategory" element={<ProductCategory />} />
          <Route path="/details/:productid" element={<ProductDetails />} />
        </Routes>
        {Loading? "" : <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
