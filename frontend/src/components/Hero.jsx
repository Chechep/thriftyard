import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-200 text-white dark:from-black dark:to-gray-700 py-20 transition-colors">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to <span className="text-yellow-300 dark:text-yellow-400">Virgil-Thriftyard</span>
          </h1>
          <p className="text-lg mb-6">
            Discover amazing products at the best prices. Shop electronics, fashion, and more.
          </p>
          <Link
            to="/products"
            className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 dark:text-gray-800 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 dark:hover:bg-yellow-400 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Right side image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://via.placeholder.com/500x350"
            alt="Shopping illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
