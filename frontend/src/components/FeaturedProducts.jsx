import { useNavigate } from "react-router-dom";
import ProductCardMinimal from "./ProductCardMinimal";
import products from "../data/products";

export default function FeaturedProducts() {
  const navigate = useNavigate();

  const featured = products.slice(0, 3); // just take first 3 for demo

  return (
    <section className="container mx-auto px-6 py-10 bg-blue-200 text-gray-800 dark:text-gray-200 dark:bg-black">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <a href="/products" className="text-blue-600 hover:underline font-medium">
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCardMinimal
            key={product.id}
            product={product}
            onClick={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
