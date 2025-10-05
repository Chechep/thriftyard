import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-200 dark:bg-black text-black dark:text-white py-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Social Links */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-6 justify-center">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Contact Us Form */}
        <div className="w-full max-w-md mb-10">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="3"
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-black dark:bg-blue-200 text-white dark:text-black px-4 py-2 rounded-lg hover:opacity-80 transition"
            >
              Send
            </button>
          </form>
        </div>

        {/* Bottom Info */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 w-full">
          <p className="text-sm mb-2">
            &copy; {new Date().getFullYear()} Virgil-Thriftyard. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-300 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
