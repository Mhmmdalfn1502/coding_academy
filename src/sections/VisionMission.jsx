import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import VisionSlide from "./VisionSlide";
import MissionSlide from "./MissionSlide";

export default function VisionMission() {
    return (
        <section id="vision-mission" className="py-6 sm:py-8 lg:py-10 w-full">
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