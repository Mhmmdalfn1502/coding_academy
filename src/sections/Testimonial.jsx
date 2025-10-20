import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Muhammad Alfon",
    batch: "Batch 2",
    text: "Yang saya suka dari Codac adalah suasana belajarnya fun tapi tetap profesional. Kita belajar, bikin project, dan bisa berbagi dengan teman lain. Rasanya seperti keluarga.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Alvin Wanoesh",
    batch: "Batch 3",
    text: "Belajar di Codac benar-benar pengalaman yang berbeda. Tidak hanya teori, tapi langsung praktik membuat project nyata. Mentor juga selalu terbuka dan suportif.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Leonardo D'Caprio",
    batch: "Batch 4",
    text: "Sebelum ikut Codac, saya tidak tahu banyak soal web development. Sekarang saya bisa membuat desain dan kode yang sudah dipakai untuk mini project kampus!",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center max-w-2xl mb-12">
        <p className="text-lg text-gray-500 tracking-wider uppercase mb-2">
          Testimonials
        </p>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-800 mb-4">
          What our student say
        </h1>
        <p className="text-gray-600">
          Setiap program yang kami jalankan selalu membawa cerita unik dari para
          peserta. Inilah pengalaman nyata mereka bersama Codac.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative w-full max-w-6xl overflow-visible">
        {" "}
        {/* biar sisi kanan kiri terlihat */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={2.5}
          centeredSlides={true}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="pb-10"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="bg-white border border-gray-100 shadow-sm rounded-2xl 
                           p-6 flex flex-row items-center gap-6 transition-all duration-300 
                           hover:shadow-lg w-[640px] h-[249px]"
              >
                {/* Foto */}
                <div className="flex-shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>

                {/* Teks */}
                <div className="flex flex-col justify-between h-full text-left">
                  <div>
                    <span className="text-3xl text-blue-400 leading-none">
                      “
                    </span>
                    <p className="text-gray-700 text-sm md:text-base mb-4">
                      {t.text}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold italic text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-sm italic text-blue-500 font-medium">
                      {t.batch}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigasi Custom */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
        >
          ←
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
