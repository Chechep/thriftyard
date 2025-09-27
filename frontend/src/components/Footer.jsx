import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-200 dark:bg-black text-black dark:text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: Contact + Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Us Form */}
          <div>
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

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Info Links */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Virgil-Thriftyard. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
