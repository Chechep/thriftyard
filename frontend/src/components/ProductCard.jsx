import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-blue-300 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-4 flex flex-col text-gray-800 dark:text-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">Ksh {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
