import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Smartphone", price: 15000, image: "https://via.placeholder.com/300x200" },
      { id: 2, name: "Headphones", price: 2500, image: "https://via.placeholder.com/300x200" },
      { id: 3, name: "Laptop", price: 60000, image: "https://via.placeholder.com/300x200" },
      { id: 4, name: "Sneakers", price: 4500, image: "https://via.placeholder.com/300x200" },
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
