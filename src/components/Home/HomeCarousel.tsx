import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./HomeCarousel.css";

import TicketIcon from "../../assets/images/ticket.png";
import RegistrationIcon from "../../assets/images/registration.png";
import BookingIcon from "../../assets/images/booking.png";
import StoreIcon from "../../assets/images/store.png";

interface Menu {
  name: string;
  image: string;
}

const menu = [
  {
    name: "Ticket",
    image: TicketIcon,
  },
  {
    name: "Registration",
    image: RegistrationIcon,
  },
  {
    name: "Booking",
    image: BookingIcon,
  },
  {
    name: "Store",
    image: StoreIcon,
  },
  {
    name: "Ticket",
    image: TicketIcon,
  },
  {
    name: "Registration",
    image: RegistrationIcon,
  },
  {
    name: "Booking",
    image: BookingIcon,
  },
  {
    name: "Store",
    image: StoreIcon,
  },
];

export default function HomeCarousel() {
  return (
    <>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          390: {
            slidesPerView: 4,
          },
        }}
        onInit={(swiper) => {
          swiper.allowSlidePrev = false;
        }}
        onSlideChange={(swiper) => {
          swiper.allowSlidePrev = swiper.activeIndex !== 0;
          swiper.allowSlideNext =
            swiper.activeIndex !== swiper.slides.length - swiper.slidesPerViewDynamic();
        }}
        className="h-full w-full bg-white rounded-2xl shadow-xl"
      >
        {menu.map((item: Menu, i) => (
          <SwiperSlide
            key={i}
            className="flex flex-col gap-y-2 justify-center items-center first:rounded-l-xl last:rounded-r-xl"
          >
            <img src={item.image} alt={item.name + "Icon"} className="w-12 aspect-square" />
            <p className="text-sm font-semibold">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
