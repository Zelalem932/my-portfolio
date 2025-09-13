// src/data/testimonials.js
// Resolve asset URLs from src/assets at build time
const assetUrlByPath = import.meta.glob("../assets/*", { eager: true, as: "url" });
const getAssetUrl = (fileName) => assetUrlByPath[`../assets/${fileName}`] || "";

const sampleTestimonials = [
  {
    id: "t1",
    name: "Amanuel Bekele",
    role: "Product Manager",
    avatar: getAssetUrl("avatar.png"),
    rating: 5,
    message:
      "Hailu built a clean, fast prototype for our store and deployed it quickly. Great communication and high-quality work.",
    date: "2024-11-10",
  },
  {
    id: "t2",
    name: "Yeti Fashion",
    role: "E-commerce Store",
    avatar: getAssetUrl("avatar.png"),
    rating: 5,
    message:
      "Delivered an e-commerce theme and custom plugin for WordPress — the site runs smoothly and conversions improved.",
    date: "2024-07-21",
  },
  {
    id: "t3",
    name: "Face Scan Attendance",
    role: "Attendance System",
    avatar: getAssetUrl("avatar.png"),
    rating: 5,
    message:
      "Implemented face-scan attendance integration and a backend dashboard. Solid engineering and practical suggestions.",
    date: "2025-02-02",
  },
];

export default sampleTestimonials;
