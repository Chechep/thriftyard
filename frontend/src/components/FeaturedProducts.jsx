import { useNavigate } from "react-router-dom";
import ProductCardMinimal from "./ProductCardMinimal";
import products from "../data/products";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  // Select up to 9 featured products safely
  const featured = Array.isArray(products) ? products.slice(0, 9) : [];

  return (
    <section className="container mx-auto px-6 py-12 bg-blue-200 text-gray-800 dark:text-gray-200 dark:bg-black">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
        <button
          onClick={() => navigate("/products")}
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          View All
        </button>
      </div>

      {/* Product Grid */}
      {featured.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCardMinimal
              key={product.id}
              product={product}
              onClick={() => navigate(`/products/${product.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 dark:text-gray-400 mt-12">
          No featured products available.
        </div>
      )}
    </section>
  );
}
