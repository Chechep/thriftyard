import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import About from "../pages/About";

export default function Home() {
  return (
    <div className="bg-blue-200 dark:bg-black min-h-screen transition-colors">
      <Hero />
      <FeaturedProducts />
      <About />
      <section className="container mx-auto px-6 py-10 text-gray-800 dark:text-gray-200">
        <h2 className="text-2xl font-bold mb-4">Why Shop With Us?</h2>
        <p className="text-gray-600 dark:text-gray-300">
          We offer a wide range of products with unbeatable prices. Fast delivery, secure checkout, and excellent customer service are our top priorities.
        </p>
      </section>
    </div>
  );
}
