import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const testimonials = [
  {
    name: "Muhammad Alfon",
    batch: "Batch 2",
    text: "Yang saya suka dari Codac adalah suasana belajarnya fun tapi tetap profesional. Kita belajar, bikin project, dan bisa berbagi dengan teman lain. Rasanya seperti keluarga.",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Alvin Wanoesh",
    batch: "Batch 3",
    text: "Belajar di Codac benar-benar pengalaman yang berbeda. Tidak hanya teori, tapi langsung praktik membuat project nyata. Mentor juga selalu terbuka dan suportif.",
    image: "https://via.placeholder.com/200",
  },
  {
    name: "Leonardo D'Caprio",
    batch: "Batch 4",
    text: "Sebelum ikut Codac, saya tidak tahu banyak soal web development. Sekarang saya bisa membuat desain dan kode yang sudah dipakai untuk mini project kampus!",
    image: "https://via.placeholder.com/200",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full bg-white dark:bg-dark py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 tracking-wider uppercase mb-2">
            Testimonials
          </p>
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-3 sm:mb-4">
            What our students say
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Setiap program yang kami jalankan selalu membawa cerita unik dari para peserta. Inilah pengalaman nyata mereka bersama Codac.
          </p>
        </div>

        {/* Swiper wrapper to prevent horizontal scroll */}
        <div className="relative w-full mx-auto overflow-x-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="pb-8"
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 12 },
              640: { slidesPerView: 1.05, spaceBetween: 14 },
              768: { slidesPerView: 1.25, spaceBetween: 16 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 2.4, spaceBetween: 24 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="flex justify-center px-2">
                <article
                  className="w-full max-w-[720px] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm dark:shadow-none p-4 sm:p-6 flex flex-col md:flex-row gap-4 md:gap-6 transition-all"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  <div className="flex-shrink-0 w-16 md:w-24">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-auto aspect-square rounded-lg object-cover"
                      decoding="async"
                    />
                  </div>

                  <div className="flex flex-col justify-between flex-grow text-gray-800 dark:text-gray-200">
                    <div>
                      <span className="text-2xl sm:text-3xl text-blue-400 dark:text-blue-300 leading-none">"</span>
                      <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-200 mt-2 mb-3">
                        {t.text}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold italic text-gray-900 dark:text-white text-sm sm:text-base">
                        {t.name}
                      </h3>
                      <p className="text-xs sm:text-sm italic text-blue-600 dark:text-blue-400 font-medium">
                        {t.batch}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <FaAngleLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <FaAngleRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
