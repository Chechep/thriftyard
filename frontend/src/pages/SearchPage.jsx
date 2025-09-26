import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import productsData from "../data/products"; // adjust path
import ProductCardMinimal from "../components/ProductCardMinimal";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-black text-gray-900 dark:text-white">
      {/* Navbar with Back + Search */}
      <div className="sticky top-0 bg-blue-200 dark:bg-black p-4 flex items-center gap-3 shadow-md">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 flex items-center bg-white dark:bg-gray-800 rounded-lg px-3">
          <Search className="w-5 h-5 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent p-2 focus:outline-none text-gray-800 dark:text-gray-200"
          />
        </div>
      </div>

      {/* Results */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCardMinimal
              key={product.id}
              product={product}
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
