import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./HighlightCarousel.css";

import Btob from "../../assets/images/btob.png";
import Maher from "../../assets/images/maher-zain.png";

const highlight = [
  {
    name: "BTOB",
    image: Btob,
  },
  {
    name: "Maher Zain",
    image: Maher,
  },
  {
    name: "BTOB",
    image: Btob,
  },
  {
    name: "Maher Zain",
    image: Maher,
  },
  {
    name: "BTOB",
    image: Btob,
  },
];

export default function HighlightCarousel() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        loop={true}
        pagination={{ clickable: true, dynamicMainBullets: 2 }}
        slidesPerView="auto"
        initialSlide={3}
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
        }}
      >
        {highlight.map((item, index) => (
          <SwiperSlide key={index} className=" relative  h-[200px] max-w-[calc(100%-54px)] mb-12">
            {({ isActive }) => (
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                className={` ${
                  isActive ? "h-[200px]" : "h-[180px] mt-[10px]"
                } rounded-2xl bg-cover`}
              ></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
