import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-blue-200 dark:bg-black text-black px-6 py-4 dark:text-white shadow-md transition-colors">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Virgil-Thriftyard
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/cart" className="relative hover:text-indigo-400 transition">
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-300 text-black text-xs font-bold px-1 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 px-3 py-1 border rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
