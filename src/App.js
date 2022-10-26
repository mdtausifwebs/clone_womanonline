import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavbarSec/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsWomen from "./components/productspage/ProductsWomen";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/productspage/ProductDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:navcategory" element={<ProductsWomen />} />
          <Route path="product/:productid" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
