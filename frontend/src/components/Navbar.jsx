import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { LogOut, Moon, Sun, ShoppingCart, Search, Home } from "lucide-react";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { cart, toggleCart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState("");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const user = auth.currentUser;

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/30 dark:bg-black/30
        backdrop-blur-md
        text-black dark:text-white
        px-6 py-4 shadow-md transition-colors
      "
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Virgil-Thriftyard
        </Link>

        {/* Center Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex items-center w-1/3 bg-gray-200/60 dark:bg-gray-800/60 rounded-lg px-3 py-1 backdrop-blur-sm"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow bg-transparent outline-none px-2 text-sm dark:text-white"
          />
          <button
            type="submit"
            className="p-1 text-gray-600 dark:text-gray-300 hover:text-indigo-400"
          >
            <Search size={18} />
          </button>
        </form>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Home Icon */}
          <Link
            to="/"
            className="p-2 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition"
            title="Home"
          >
            <Home size={22} />
          </Link>

          {/* Cart Button */}
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition"
          >
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs font-bold px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* Auth Section */}
          {user ? (
            <button
              onClick={handleLogout}
              className="p-2 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition"
              title="Logout"
            >
              <LogOut size={22} />
            </button>
          ) : (
            <Link to="/login" className="hover:text-indigo-400 transition">
              Login
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-700/50 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
