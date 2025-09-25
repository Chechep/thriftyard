import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { auth } from "../firebase"; // 👈 make sure firebase.js exports auth

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Get current user from Firebase
  const user = auth.currentUser;

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-10 bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="container mx-auto">
        
        {/* Profile Section */}
        {user && (
          <div className="flex items-center mb-6 bg-blue-200 dark:bg-gray-900 p-4 rounded-lg shadow">
            <img
              src={user.photoURL || "https://via.placeholder.com/50"}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="ml-4">
              <h2 className="text-lg font-semibold">
                {user.displayName || user.email}
              </h2>
            </div>
          </div>
        )}

        {/* Cart Section */}
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
        ) : (
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white dark:bg-gray-800 shadow rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">Ksh {item.price}</p>
                  <div className="flex items-center mt-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded-lg text-center dark:bg-gray-700 dark:border-gray-600"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="font-bold">Ksh {item.price * item.quantity}</p>
              </div>
            ))}

            {/* Cart Summary */}
            <div className="p-6 rounded-lg shadow-md dark:shadow-gray-700 dark:bg-gray-900 text-right">
              <h2 className="text-xl font-bold">Total: Ksh {total}</h2>
              <Link to="/checkout">
                <button className="mt-4 bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
