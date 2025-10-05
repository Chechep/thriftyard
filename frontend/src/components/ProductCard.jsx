import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  // Ensure product has images
  const mainImage = product?.images?.[0];

  return (
    <div className="bg-blue-200 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-6 flex flex-col text-gray-800 dark:text-gray-200">
      {/* 🖼️ Image Gallery */}
      {product.images && product.images.length > 0 ? (
        <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} image ${index + 1}`}
              className="w-44 h-44 object-cover rounded-lg flex-shrink-0 border border-gray-200 dark:border-gray-700"
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400">
          No image available
        </div>
      )}

      {/* 🧾 Product Info */}
      <div className="mt-4 flex flex-col">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-400">{product.category}</p>
        <p className="mt-2 text-gray-800 dark:text-gray-300">{product.description}</p>
        <p className="mt-3 text-lg font-bold text-indigo-700 dark:text-indigo-400">
          Ksh {product.price}
        </p>
      </div>

      {/* 🛒 Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-5 bg-indigo-600 dark:bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition font-medium"
      >
        Add to Cart
      </button>
    </div>
  );
}
