import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewport, setViewport] = useState("sm"); // 'sm' | 'md' | 'lg'

  const categories = [
    { id: "all", name: "All" },
    { id: "live", name: "Live Session" },
    { id: "project", name: "Project Work" },
    { id: "event", name: "Events & Workshops" },
  ];

  // dataset gambar
  const images = [
    { id: 1, category: "live", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qZ4u6BwemyVq1FJcCq6Sy4yuEPUAi6K9NA&s" },
    { id: 2, category: "live", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qZ4u6BwemyVq1FJcCq6Sy4yuEPUAi6K9NA&s" },
    { id: 3, category: "project", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qZ4u6BwemyVq1FJcCq6Sy4yuEPUAi6K9NA&s" },
    { id: 4, category: "project", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qZ4u6BwemyVq1FJcCq6Sy4yuEPUAi6K9NA&s" },
    { id: 5, category: "event", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qZ4u6BwemyVq1FJcCq6Sy4yuEPUAi6K9NA&s" },
    { id: 6, category: "event", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3qZ4u6BwemyVq1FJcCq6Sy4yuEPUAi6K9NA&s" },
  ];

  // breakpoint listener untuk menentukan viewport state
  useEffect(() => {
    const getVp = (w) => {
      if (w >= 1024) return "lg";
      if (w >= 768) return "md";
      return "sm";
    };

    const handleResize = () => {
      setViewport(getVp(window.innerWidth));
    };

    // set initial
    if (typeof window !== "undefined") {
      setViewport(getVp(window.innerWidth));
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") window.removeEventListener("resize", handleResize);
    };
  }, []);

  // filter berdasarkan kategori
  const filtered = activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  // batasi jumlah item sesuai viewport:
  // lg -> 3x2 = 6, md -> 2x2 = 4, sm -> 1x1 = 1
  const maxItems = viewport === "lg" ? 6 : viewport === "md" ? 4 : 1;
  const visible = filtered.slice(0, maxItems);

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 max-w-3xl">
        <h2 className="font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-2">Gallery</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          A glimpse into our learning environment and student achievements
        </p>
      </div>

      {/* Grid responsive:
          - sm: 1 column (1x1 visible karena slice)
          - md: 2 columns (2x2 grid, slice -> 4 items)
          - lg: 3 columns (3x2 grid, slice -> 6 items)
      */}
      <div className="w-full max-w-6xl mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
              aria-hidden="false"
            >
              <img
                src={img.src}
                alt={`Gallery ${img.id}`}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keterangan jika kosong */}
      {visible.length === 0 && (
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">Belum ada gambar untuk kategori ini.</p>
      )}

      {/* Tombol Kategori */}
      <div className="flex gap-4 sm:gap-6 items-center justify-center flex-wrap">
        {categories.map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={active}
              className={`flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-colors duration-200 focus:outline-none
                ${active
                  ? "bg-blue-500 text-white dark:bg-blue-400 dark:text-gray-900 shadow"
                  : "text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 hover:text-blue-600 dark:hover:text-blue-300"
                }`}
            >
              <span className={`w-3 h-3 rounded-full ${active ? "bg-white/90 dark:bg-gray-900" : "bg-gray-300 dark:bg-gray-600"}`} />
              <span className="text-sm sm:text-base">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
