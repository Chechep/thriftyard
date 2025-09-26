import { useNavigate } from "react-router-dom";
import ProductCardMinimal from "../components/ProductCardMinimal";
import products from "../data/products";
import { ArrowLeft } from "lucide-react";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200 pt-24 pb-10 flex justify-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center pt-24 pb-10 text-black dark:text-white hover:underline"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
      </button>

      <div className="container max-w-6xl px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCardMinimal
              key={product.id}
              product={product}
              onClick={() => navigate(`/products/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
