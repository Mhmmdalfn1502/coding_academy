import React, { useState } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("live");

  const categories = [
    { id: "live", name: "Live Session" },
    { id: "project", name: "Project Work" },
    { id: "event", name: "Events & Workshops" },
  ];

  // Contoh dataset semua gambar
  const images = [
    { id: 1, category: "live", src: "https://via.placeholder.com/400" },
    { id: 2, category: "live", src: "https://via.placeholder.com/400" },
    { id: 3, category: "live", src: "https://via.placeholder.com/400" },
    { id: 4, category: "live", src: "https://via.placeholder.com/400" },
    { id: 5, category: "live", src: "https://via.placeholder.com/400" },
    { id: 6, category: "live", src: "https://via.placeholder.com/400" },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-2">
          Gallery
        </h1>
        <p className="text-gray-600">
          A glimpse into our learning environment and student achievements
        </p>
      </div>

      {/* Grid 3x2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mb-12">
        {images.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 w-[380px] h-[249px]"
          >
            <img
              src={img.src}
              alt="Gallery"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* Tombol Kategori */}
      <div className="flex gap-8 items-center justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition font-medium"
          >
            <span
              className={`w-3 h-3 rounded-full ${
                activeCategory === cat.id ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
            {cat.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
