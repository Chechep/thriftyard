import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = [
    { id: 1, name: "Smartphone", price: 15000, image: "https://via.placeholder.com/300x200" },
    { id: 2, name: "Headphones", price: 2500, image: "https://via.placeholder.com/300x200" },
    { id: 3, name: "Laptop", price: 60000, image: "https://via.placeholder.com/300x200" },
  ];

  return (
    <section className="container mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
        <a href="/products" className="text-indigo-600 hover:underline font-medium">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
