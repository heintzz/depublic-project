import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "./Carousel.css";

import TicketIcon from "assets/images/ticket.png";
import RegistrationIcon from "assets/images/registration.png";
import BookingIcon from "assets/images/booking.png";
import StoreIcon from "assets/images/store.png";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

interface Menu {
  name: string;
  image: string;
  path: string;
}

const menu = [
  {
    name: "Ticket",
    image: TicketIcon,
    path: "/ticket",
  },
  {
    name: "Registration",
    image: RegistrationIcon,
    path: "/registration",
  },
  {
    name: "Booking",
    image: BookingIcon,
    path: "/booking",
  },
  {
    name: "Store",
    image: StoreIcon,
    path: "/store",
  },
  {
    name: "Ticket",
    image: TicketIcon,
    path: "/ticket",
  },
  {
    name: "Registration",
    image: RegistrationIcon,
    path: "/registration",
  },
  {
    name: "Booking",
    image: BookingIcon,
    path: "/booking",
  },
  {
    name: "Store",
    image: StoreIcon,
    path: "/store",
  },
];

export default function Menu() {
  return (
    <>
      <span className="home swiper-button-next rounded-full w-8 aspect-square bg-red-200 grid place-items-center">
        <GrNext />
      </span>
      <span
        className="home swiper-button-prev rounded-full w-8
       aspect-square bg-red-200 grid place-items-center"
      >
        <GrPrevious />
      </span>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".home.swiper-button-next",
          prevEl: ".home.swiper-button-prev",
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
        allowSlidePrev={false}
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
            <Link to={item.path}>
              <img src={item.image} alt={item.name + "Icon"} className="w-12 aspect-square" />
            </Link>
            <p className="text-sm font-semibold">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
