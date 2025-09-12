import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔑 Replace with real authentication later (Firebase/Flask API)
    if (formData.email && formData.password) {
      alert("✅ Logged in successfully!");
      navigate("/"); // redirect to homepage
    } else {
      alert("❌ Please enter your credentials.");
    }
  };

  return (
    <div className="bg-blue-200 dark:bg-black min-h-screen flex items-center justify-center text-gray-800 dark:text-gray-200 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-900 text-white dark:text-blue-200 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
