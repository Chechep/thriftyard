import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleSignUp}
          className="mt-4 w-full flex items-center justify-center border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        <p className="mt-6 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
