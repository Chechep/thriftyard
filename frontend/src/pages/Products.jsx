import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCardMinimal from "../components/ProductCardMinimal";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import productsData from "../data/products";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // Load products from data
  useEffect(() => {
    setTimeout(() => setProducts(productsData), 300);
  }, []);

  // Extract unique categories
  const categories = ["All", ...new Set(productsData.map((p) => p.name))];

  // Filtered + sorted products
  const displayedProducts = products
    .filter((p) => selectedCategory === "All" || p.name === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200 pt-24 pb-10 flex justify-center relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center pt-24 pb-10 text-black dark:text-white hover:underline"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        <span>Back</span>
      </button>

      <div className="container max-w-6xl px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-3">
            <SlidersHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none"
            >
              <option value="default">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Loading Spinner */}
        {products.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-20">
            <div className="animate-spin border-4 border-blue-400 border-t-transparent rounded-full w-10 h-10 mx-auto mb-4"></div>
            Loading products...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedProducts.map((product) => (
              <ProductCardMinimal
                key={product.id}
                product={product}
                onClick={() => navigate(`/products/${product.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
