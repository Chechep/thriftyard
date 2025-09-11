import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Smartphone", price: 15000, image: "https://via.placeholder.com/500x400", description: "High-end smartphone with excellent features." },
      { id: 2, name: "Headphones", price: 2500, image: "https://via.placeholder.com/500x400", description: "Noise-cancelling headphones for immersive sound." },
      { id: 3, name: "Laptop", price: 60000, image: "https://via.placeholder.com/500x400", description: "Powerful laptop for work and gaming." },
      { id: 4, name: "Sneakers", price: 4500, image: "https://via.placeholder.com/500x400", description: "Comfortable and stylish sneakers." },
    ];

    const found = dummyProducts.find(p => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-gray-800 dark:text-gray-200">Loading...</p>;

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200 py-10 flex justify-center">
      <div className="container max-w-4xl px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          &larr; Back
        </button>

        {/* Product Detail */}
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Ksh {product.price}</p>
            <p className="text-gray-700 dark:text-gray-400 mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition w-full md:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
