import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";

import profile1 from "../assets/adrian.JPG";

const testimonials = [
  {
    name: "Muhammad Alfan",
    batch: "Batch 2",
    text: "Yang saya suka dari Codac adalah suasana belajarnya fun tapi tetap profesional. Kita belajar, bikin project, dan bisa berbagi dengan teman lain. Rasanya seperti keluarga.",
    image: profile1,
  },
  {
    name: "Alvin Wanoesh",
    batch: "Batch 3",
    text: "Belajar di Codac benar-benar pengalaman yang berbeda. Tidak hanya teori, tapi langsung praktik membuat project nyata. Mentor juga selalu terbuka dan suportif.",
    image: profile1,
  },
  {
    name: "Leonardo D'Caprio",
    batch: "Batch 4",
    text: "Sebelum ikut Codac, saya tidak tahu banyak soal web development. Sekarang saya bisa membuat desain dan kode yang sudah dipakai untuk mini project kampus!",
    image: profile1,
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

    useEffect(() => {
      AOS.init({ duration: 800, once: true });
    }, []);

  return (
    <section data-aos="fade-up" className="w-full bg-white dark:bg-transparent px-6 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto sm:mb-12">
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

        {/* Swiper Slider */}
        <div className="rounded-xl">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            centeredSlides
            loop={true}                // ✅ memastikan looping aktif
            rewind={false}             // ✅ pastikan tidak rewind
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="pb-8"
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 1.1, spaceBetween: 28 },
              1024: { slidesPerView: 1.3, spaceBetween: 32 },
              1280: { slidesPerView: 1.6, spaceBetween: 36 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="py-8">
                <div
                  className="flex flex-col justify-center items-center w-full lg:w-[800px] max-w-[100%] md:flex-row mx-auto bg-white dark:bg-transparent border border-gray-100 dark:border-gray-700 rounded-2xl shadow-md dark:shadow-none p-4 sm:p-6 gap-4 md:gap-6 transition-all"
                  aria-label={`Testimonial from ${t.name}`}
                >
                  {/* Image */}
                  <div className="w-40 lg:w-[500px] h-40 md:h-56">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full rounded-lg object-cover"
                      decoding="async"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between items-center lg:items-start text-gray-800 dark:text-gray-200">
                    <div className="flex flex-col justify-center items-center lg:items-start">
                      <span className="text-3xl text-blue-400 dark:text-blue-300 leading-none">
                        "
                      </span>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-2 mb-3 lg:text-start text-center">
                        {t.text}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold italic text-gray-900 dark:text-white text-sm sm:text-base">
                        {t.name}
                      </h3>
                      <p className="text-xs sm:text-sm italic text-blue-600 dark:text-blue-400 font-medium text-center lg:text-start">
                        {t.batch}
                      </p>
                    </div>
                  </div>
                </div>
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
