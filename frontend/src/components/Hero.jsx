import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import welcomeImg from "../assets/welcome.png";

export default function Hero() {
  return (
    <section className="text-white py-28 md:py-32 transition-colors flex flex-col items-center justify-center text-center">
      {/* Animated Welcome Image */}
      <motion.img
        src={welcomeImg}
        alt="Welcome"
        className="w-[250px] md:w-[350px] mb-8"
        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.9, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          rotate: [0, -5, 5, -5, 5, 0],
          transition: { duration: 0.4 },
        }}
      />

      {/* Hero Text */}
      <div className="max-w-2xl">
        <p className="text-lg mb-8 text-black dark:text-white">
          Discover amazing trendy fashion at unbeatable prices from our store.  <br />
          Your style journey starts here
        </p>
        <Link
          to="/products"
          className="bg-yellow-400 dark:bg-yellow-500 text-gray-900 dark:text-gray-800 px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 dark:hover:bg-yellow-400 transition-all"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
