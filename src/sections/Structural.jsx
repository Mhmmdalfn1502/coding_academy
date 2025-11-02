import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Style/AboutUs.css";
import Man from "../assets/images/Man1.jpg";
import alfan from "../assets/alfan.jpg";
import adrian from "../assets/adrian.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export default function Structural() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // ✅ Data Slide 2
  const teamLeaders = [
    {
      name: "M. Subhan Rizky Afiat",
      position: "Founder",
      image: Man,
    },
    {
      name: "Nagasa Anandes",
      position: "Co-Founder",
      image: Man,
    },
    {
      name: "Adrian Adhari",
      position: "Project Manager",
      image: adrian,
    },
    {
      name: "Muhammad Alfan",
      position: "UI/UX Designer",
      image: alfan,
    },
  ];

  // ✅ Data Slide 3
  const teamDevelopers = [
    {
      name: "Mahesa Alghifari",
      position: "Frontend Developer",
      image: Man,
    },
    {
      name: "Risma Handayani",
      position: "Backend Developer",
      image: Man,
    },
    {
      name: "Ibrahim",
      position: "Mobile Developer",
      image: Man,
    },
    {
      name: "Andin",
      position: "AI Engineer",
      image: Man,
    },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // komponen struktural
  const TeamSection = ({ members }) => (
    <section className="w-screen h-screen flex items-center justify-center bg-transparent text-dark dark:text-white">
      <div className="grid grid-cols-2 gap-6 md:flex md:flex-row md:gap-8 md:justify-between">
        {members.map((member, i) => (
          <div key={i} className="flex flex-col items-center gap-3 text-center md:text-left">
            {i % 2 === 0 ? (
              <div className="flex flex-col gap-2">
                <div className="w-[140px] md:w-[250px]">
                  <img src={member.image} alt={member.name} className="object-cover rounded-3xl w-full h-auto" />
                </div>
                <div className="">
                  <p className="text-[13px] md:text-[14px] font-semibold">{member.name}</p>
                  <p className="text-[14px] md:text-[16px] italic font-light">{member.position}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-[13px] md:text-[14px] font-semibold">{member.name}</p>
                  <p className="text-[14px] md:text-[16px] italic font-light">{member.position}</p>
                </div>
                <div className="w-[140px] md:w-[250px]">
                  <img src={member.image} alt={member.name} className="object-cover rounded-3xl w-full h-auto" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <section data-aos="fade-up" id="structural">
      <div className="w-screen h-screen py-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-full"
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <section className="w-screen h-screen px-[60px] flex xl:flex-row flex-col gap-6 items-center justify-center text-4xl font-bold">
              <div className="xl:w-[800px] w-[300px]">
                <img src={Man} alt="" className="object-cover rounded-3xl" />
              </div>
              <div className="flex flex-col gap-6 justify-center text-dark dark:text-white">
                <span className="italic text-[12px] xl:text-[22px] font-medium tracking-widest leading-4 xl:leading-16 xl:text-start text-center">
                  "At CODAC, we believe that technology is not just about coding — it's about creating opportunities, building communities, and shaping the future together."
                </span>
                <div className="flex flex-row gap-2 xl:justify-start justify-center text-[14px]">
                  <span>- M. Subhan Rizky Afiat,</span>
                  <span className="italic font-medium">Founder</span>
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <TeamSection members={teamLeaders} />
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide>
            <TeamSection members={teamDevelopers} />
          </SwiperSlide>
        </Swiper>

        {/* Custom tombol panah */}
        <div className="flex w-screen justify-center items-center">
          <div className="flex flex-row w-[140px] justify-between items-center">
            <button ref={prevRef} className="flex justify-center items-center border-2 border-dark dark:border-white p-2 rounded-full z-10 hover:scale-110 transition-all">
              <FaAngleLeft size={12} />
            </button>
            <button ref={nextRef} className="flex justify-center items-center border-2 border-dark dark:border-white p-2 rounded-full z-10 hover:scale-110 transition-all">
              <FaAngleRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
