import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // icon import
import ProductCardMinimal from "../components/ProductCardMinimal";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Smartphone", price: 15000, image: "https://via.placeholder.com/300x200", description: "High-end smartphone with excellent features." },
      { id: 2, name: "Headphones", price: 2500, image: "https://via.placeholder.com/300x200", description: "Noise-cancelling headphones for immersive sound." },
      { id: 3, name: "Laptop", price: 60000, image: "https://via.placeholder.com/300x200", description: "Powerful laptop for work and gaming." },
      { id: 4, name: "Sneakers", price: 4500, image: "https://via.placeholder.com/300x200", description: "Comfortable and stylish sneakers." },
    ];
    setProducts(dummyProducts);
  }, []);

  const handleClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200 py-10 flex justify-center relative">
      {/* Fixed Back button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center text-black dark:text-white hover:underline"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      <div className="container max-w-6xl px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCardMinimal
              key={product.id}
              product={product}
              onClick={() => handleClick(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
