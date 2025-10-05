import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle Signup with Email and Password
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Account created successfully!");
      navigate("/");
    } catch (err) {
      setError("Failed to create account. Try again.");
    }
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError("Google sign-up failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-200 dark:bg-black transition-colors">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white flex items-center justify-center gap-2">
          <UserPlus className="text-sky-500" size={28} />
          Sign Up
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}
        {message && (
          <p className="text-green-500 text-sm mb-3 text-center">{message}</p>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
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
                placeholder="Enter password"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg dark:bg-gray-800 dark:border-gray-700 px-3">
              <Lock className="text-gray-400 dark:text-gray-500 mr-2" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm password"
                className="w-full py-2 bg-transparent outline-none dark:text-white"
              />
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-5">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="mx-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        {/* Google Signup */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100 flex items-center justify-center gap-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-sm text-center mt-5 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-sky-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
