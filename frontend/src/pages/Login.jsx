import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { Mail, Lock, Eye, EyeOff, LogIn, Chrome } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError("Google sign-in failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 dark:bg-black transition-colors">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white flex items-center justify-center gap-2">
          <LogIn className="text-sky-500" size={28} />
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Email
            </label>
            <div className="flex items-center border rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3">
              <Mail className="text-gray-400 dark:text-gray-500 mr-2" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full py-2 bg-transparent outline-none dark:text-white"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Password
            </label>
            <div className="flex items-center border rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3">
              <Lock className="text-gray-400 dark:text-gray-500 mr-2" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full py-2 bg-transparent outline-none dark:text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition font-semibold"
          >
            Login
          </button>

          {/* Google Login */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Chrome className="text-red-500" size={20} />
            Login with Google
          </button>
        </form>

        <p className="text-sm text-center mt-4 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-sky-500 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
