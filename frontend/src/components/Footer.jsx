export default function Footer() {
  return (
    <footer className="w-full bg-blue-200 dark:bg-black text-black dark:text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Virgil-Thriftyard</p>

        {/* Right side */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
