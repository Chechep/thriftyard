import { useContext } from "react";
import { CartContext } from "../context/CartContext";

// Import all images from assets
import tshirt1 from "../assets/T-shirtA.jpg";
import tshirt2 from "../assets/T-shirtA1.jpg";
import tshirt3 from "../assets/T-shirtCH.jpg";

import trousers1 from "../assets/Trouser.jpg";
import trousers2 from "../assets/Trouser1.jpg";
import trousers3 from "../assets/Trouser2.jpg";

import sneakers1 from "../assets/Sneaker.jpg";
import sneakers2 from "../assets/Sneaker1.jpg";
import sneakers3 from "../assets/Sneaker2.jpg";

const products = [
  {
    id: 1,
    name: "T-Shirts",
    images: [tshirt1, tshirt2, tshirt3],
    price: 1500,
  },
  {
    id: 2,
    name: "Trousers",
    images: [trousers1, trousers2, trousers3],
    price: 4000,
  },
  {
    id: 3,
    name: "Sneakers",
    images: [sneakers1, sneakers2, sneakers3],
    price: 4500,
  },
];

export default function ProductCard() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-blue-200 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all p-4 flex flex-col text-gray-800 dark:text-gray-200"
        >
          {/* 🖼️ Image Gallery */}
          <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index + 1}`}
                className="w-36 h-36 object-cover rounded-lg flex-shrink-0 border border-gray-300 dark:border-gray-600"
              />
            ))}
          </div>

          {/* 🧾 Product Info */}
          <div className="mt-3 flex flex-col">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-black dark:text-white font-bold">
              Ksh {product.price}
            </p>
          </div>

          {/* 🛒 Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
