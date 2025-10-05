import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    payment: "mpesa",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Order placed successfully!");
    console.log(formData);
  };

  return (
    // Full-page background div
    <div className="min-h-screen pt-24 pb-10 bg-blue-200 dark:bg-black text-gray-800 dark:text-gray-200 flex justify-center items-start py-10">
      
      {/* Centered form container */}
      <div className="w-full max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-blue-200 dark:bg-gray-900 rounded-lg p-6 space-y-6 shadow-md shadow-gray-500 dark:shadow-gray-400"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

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
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Delivery Address"
            required
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
          >
            <option value="mpesa">M-Pesa</option>
            <option value="card">Credit/Debit Card</option>
            <option value="cod">Cash on Delivery</option>
          </select>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white dark:text-blue-200 px-6 py-3 rounded-lg hover:bg-sky-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}
