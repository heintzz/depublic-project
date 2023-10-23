import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

import { Link } from "react-router-dom";
import { EventType } from "src/types/highlight.type";

// NOTE: dummy data
// const highlight = [
//   {
//     name: "BTOB",
//     image: Btob,
//   },
//   {
//     name: "Maher Zain",
//     image: Maher,
//   },
//   {
//     name: "BTOB",
//     image: Btob,
//   },
//   {
//     name: "Maher Zain",
//     image: Maher,
//   },
// ];

interface HighlightProps {
  loading: boolean;
  data: EventType[];
}

export default function Highlight(props: HighlightProps) {
  if (props.loading) {
    return <p className="px-7">....</p>;
  }

  return (
    <div className="py-9">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
        }}
        className="rounded-2xl"
      >
        {props.data.map((item, index) => (
          <SwiperSlide key={index} className="h-[200px] max-w-[calc(100%-54px)] mb-12">
            {({ isActive }) => (
              <Link to={`/ticket/${item.id}`}>
                <div
                  className={` ${
                    isActive ? "h-[200px]" : "h-[180px] mt-[10px]"
                  } rounded-2xl bg-cover`}
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
