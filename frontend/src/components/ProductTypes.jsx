import { useState } from "react";
import ProductCardMinimal from "./ProductCardMinimal";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductTypes() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setSelectedProduct(null);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Filter by selected category
  const filteredProducts = products.filter((p) => p.name === selectedType);

  return (
    <div className="container mx-auto px-6 py-10 text-center">
      {!selectedType && (
        <>
          <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">
            Choose a Product Type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => handleTypeClick(product.name)}
                className="cursor-pointer bg-blue-200 dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transform hover:scale-105 transition"
              >
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedType && !selectedProduct && (
        <div className="mt-10">
          <button
            onClick={() => setSelectedType(null)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg mb-6"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold mb-6">
            {selectedType} Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts[0]?.images.map((img, index) => (
              <ProductCardMinimal
                key={index}
                product={{
                  ...filteredProducts[0],
                  images: [img],
                }}
                onClick={() => handleProductClick(filteredProducts[0])}
              />
            ))}
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="mt-10">
          <button
            onClick={() => setSelectedProduct(null)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg mb-6"
          >
            ← Back
          </button>
          <ProductCard product={selectedProduct} />
        </div>
      )}
    </div>
  );
}
