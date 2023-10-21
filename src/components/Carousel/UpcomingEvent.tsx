import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

import { SlLocationPin } from "react-icons/sl";

import Maher from "assets/images/maher-zain.png";

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
        className="p-7"
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col p-4 w-[100%] max-w-[320px] min-h-[300px] rounded-xl bg-white shadow-md border">
              <img className="h-[150px] w-full bg-cover rounded-xl object-fill" src={Maher} />
              <div className="flex flex-col mt-5">
                <div className="text-xs flex gap-x-2">
                  <div className="flex gap-x-1 items-center">
                    <SlLocationPin size="1.25em" /> BANDUNG
                  </div>
                  | <span className="text-[#A103D3]">DAY, MON TANGGAL</span>
                </div>
                <div className="flex flex-col gap-y-1 mt-2">
                  <h1 className="font-bold text-lg">Judul Event</h1>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectet</p>
                </div>
                <div className="my-4 text-lg">
                  <span className="font-bold text-[#A103D3]">IDR 1.999.000</span>
                  <span>/ 1 Person</span>
                </div>
                <span className="p-[6px] text-[#0B640D] bg-[#EAF2E2] rounded-xl text-center font-semibold">
                  Tersedia
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
