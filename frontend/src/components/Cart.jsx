import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, toggleCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={toggleCart}
          />

          {/* Sliding Cart */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-gray-900 shadow-lg z-50 p-4 flex flex-col text-gray-900 dark:text-gray-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto space-y-4">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                      <div className="flex items-center mt-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                          className="px-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded disabled:opacity-50"
                        >
                          -
                        </button>
                        <span className="px-3 text-gray-800 dark:text-gray-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-800 dark:text-gray-200">
                        Ksh {item.price}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 dark:text-red-400 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Your cart is empty.
                </p>
              )}
            </div>

            {/* Checkout Button */}
            {cart.length > 0 && (
              <button
                onClick={() => {
                  toggleCart();
                  navigate("/checkout");
                }}
                className="mt-4 bg-black text-white dark:bg-sky-600 dark:hover:bg-sky-500 py-2 rounded-lg font-semibold transition"
              >
                Checkout
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
