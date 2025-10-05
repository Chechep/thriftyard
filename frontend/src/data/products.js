import tshirt1 from "../assets/T-shirtA.jpg";
import tshirt2 from "../assets/T-shirtA1.jpg";
import tshirt3 from "../assets/T-shirtCH.jpg";

import trousers1 from "../assets/Trouser.jpg";
import trousers2 from "../assets/Trouser1.jpg";
import trousers3 from "../assets/Trouser2.jpg";

import jorts1 from "../assets/Jort.jpg";
import jorts2 from "../assets/Jort1.jpg";
import jorts3 from "../assets/Jort2.jpg";

import sneakers1 from "../assets/Sneaker.jpg";
import sneakers2 from "../assets/Sneaker1.jpg";
import sneakers3 from "../assets/Sneaker2.jpg";

import hoodie1 from "../assets/Hoodie.jpg";
import hoodie2 from "../assets/Hoodie1.jpg";
import hoodie3 from "../assets/HoodieB.jpg";

import jacket1 from "../assets/Jacket.jpg";
import jacket2 from "../assets/Jacket1.jpg";
import jacket3 from "../assets/JacketBW.jpg";

import cap1 from "../assets/Cap.jpg";
import cap2 from "../assets/Cap1.jpg";
import cap3 from "../assets/Caps.jpg";

import sandals1 from "../assets/Sandals1.jpg";
import sandals2 from "../assets/Sandals2.jpg";
import sandals3 from "../assets/Sandals3.jpg";

const products = [
  {
    id: 1,
    name: "T-Shirts",
    category: "Tops",
    price: 1500,
    images: [tshirt1, tshirt2, tshirt3],
    description: "Comfortable cotton t-shirts for everyday wear.",
  },
  {
    id: 2,
    name: "Trousers",
    category: "Bottoms",
    price: 4000,
    images: [trousers1, trousers2, trousers3],
    description: "Classic trousers suitable for formal and casual occasions.",
  },
  {
    id: 3,
    name: "Jorts",
    category: "Bottoms",
    price: 2500,
    images: [jorts1, jorts2, jorts3],
    description: "Trendy jean shorts perfect for warm weather.",
  },
  {
    id: 4,
    name: "Sneakers",
    category: "Footwear",
    price: 4500,
    images: [sneakers1, sneakers2, sneakers3],
    description: "Comfortable and stylish sneakers for daily wear.",
  },
  {
    id: 5,
    name: "Hoodies",
    category: "Outerwear",
    price: 3500,
    images: [hoodie1, hoodie2, hoodie3],
    description: "Warm and cozy hoodies for all seasons.",
  },
  {
    id: 6,
    name: "Jackets",
    category: "Outerwear",
    price: 7000,
    images: [jacket1, jacket2, jacket3],
    description: "Stylish jackets to keep you warm and fashionable.",
  },
  {
    id: 7,
    name: "Caps",
    category: "Accessories",
    price: 1200,
    images: [cap1, cap2, cap3],
    description: "Stylish caps to complete your casual look.",
  },
  {
    id: 8,
    name: "Sandals",
    category: "Footwear",
    price: 1800,
    images: [sandals1, sandals2, sandals3],
    description: "Light and comfy sandals for everyday use.",
  },
];

export default products;
