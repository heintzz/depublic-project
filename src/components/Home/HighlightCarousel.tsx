import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function HighlightCarousel() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={3}
        loop={true}
        spaceBetween={7}
        centeredSlides={true}
        initialSlide={3}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {Array.from({ length: 7 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-red-200 h-[200px] rounded-2xl"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
