import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
        <App />
        {/* Global Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            // Default styling
            className: "rounded-xl shadow-lg font-medium",
            style: {
              background: "#f0f9ff",
              color: "#1e3a8a",
            },
            success: {
              style: {
                background: "#dbeafe", // light blue
                color: "#1e40af", // dark blue text
              },
              iconTheme: {
                primary: "#1e40af", // deep blue
                secondary: "#ffffff",
              },
            },
            error: {
              style: {
                background: "#fee2e2", // light red
                color: "#991b1b", // dark red
              },
              iconTheme: {
                primary: "#991b1b",
                secondary: "#ffffff",
              },
            },
          }}
        />
      </CartProvider>
    </ThemeProvider>
  </BrowserRouter>
);
