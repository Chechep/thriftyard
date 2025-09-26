import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";
import { ArrowLeft, Minus, Plus, CheckCircle } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Blue");

  if (!product)
    return (
      <p className="text-center mt-10 text-gray-800 dark:text-gray-200">
        Product not found
      </p>
    );

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () =>
    setQuantity((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, color: selectedColor });
  };

  const colors = [
    { name: "Blue", bg: "bg-blue-500" },
    { name: "Black", bg: "bg-black" },
    { name: "Red", bg: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200 pt-24 pb-10 flex justify-center">
      <div className="container max-w-3xl px-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Product Card */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />

          {/* Details */}
          <div className="p-6 flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Ksh {product.price}
              </p>
              <p className="flex items-center gap-2 text-green-600 dark:text-green-400 mt-2">
                <CheckCircle className="w-5 h-5" /> In stock
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-400">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition transform hover:scale-110 ${
                      selectedColor === color.name
                        ? "border-blue-600"
                        : "border-gray-400"
                    } ${color.bg}`}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Selected: <span className="font-semibold">{selectedColor}</span>
              </p>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={decreaseQty}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-semibold">{quantity}</span>
                <button
                  onClick={increaseQty}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition text-lg font-semibold"
            >
              Add {quantity} to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
