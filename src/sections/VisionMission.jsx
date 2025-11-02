import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import VisionSlide from "./VisionSlide";
import MissionSlide from "./MissionSlide";

import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionMission() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section data-aos="fade-up" id="vision-mission" className="py-6 sm:py-8 lg:py-10 w-full">
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full !pt-2 !pb-8"
          style={{
            "--swiper-pagination-color": "#666",
          }}
        >
          <SwiperSlide className="!h-auto w-full">
            <VisionSlide />
          </SwiperSlide>
          <SwiperSlide className="!h-auto w-full">
            <MissionSlide />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
