import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

export default function UpcomingEvent() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, FreeMode]}
        freeMode={true}
        slidesPerView={1.25}
        spaceBetween={10}
        navigation={{
          nextEl: ".event.swiper-button-next",
          prevEl: ".event.swiper-button-prev",
        }}
        className="px-7"
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100%] max-w-[320px] min-h-[300px] bg-red-200 rounded-xl"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
