import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SearchPage from "./pages/SearchPage";
import { CartProvider } from "./context/CartContext";
import About from "./pages/About";

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            {/* Remove direct Cart route — handled by sidebar */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        {/* Render Cart drawer globally */}
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
