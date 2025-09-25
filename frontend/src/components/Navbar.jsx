import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { LogOut, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);
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

  const user = auth.currentUser;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-black dark:text-white px-6 py-4 shadow-md transition-colors">
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

          {/* Auth Section */}
          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 px-3 py-1 border rounded-lg hover:bg-blue-300 dark:hover:bg-gray-500 transition"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          ) : (
            <Link to="/login" className="hover:text-indigo-400 transition">Login</Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-lg"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
