import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Carousel.css";

import Concert from "assets/images/concert.png";

export default function PopularBlog() {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, FreeMode]}
        freeMode={true}
        slidesPerView={1.5}
        spaceBetween={15}
        navigation={{
          nextEl: ".blog.swiper-button-next",
          prevEl: ".blog.swiper-button-prev",
        }}
        className="p-7"
      >
        {[1, 2, 3, 4, 5].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col p-4 w-[100%] max-w-[280px] min-h-[300px] rounded-xl bg-white shadow-md border">
              <img className="h-[120px] w-full bg-cover rounded-xl object-fill" src={Concert} />
              <div className="flex flex-col mt-5">
                <span className="text-[#A103D3]">DAY, MON TANGGAL</span>
                <div className="flex flex-col gap-y-1 mt-2">
                  <h1 className="font-bold text-lg">Judul Blog</h1>
                  <p className="text-sm text-justify">
                    Lorem ipsum dolor sit amet consectetur. Porta morbi tincidunt phasellus ornare
                    maecenas fringilla arcu non.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
