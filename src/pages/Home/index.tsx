import Highlight from "components/Carousel/Highlight";
import Menu from "components/Carousel/Menu";
import UpcomingEvent from "components/Carousel/UpcomingEvent";
import MainLayout from "components/MainLayout";
import NavigateButton from "components/NavigateButton";
import SectionSeparator from "components/SectionSeparator";

import DepublicBrand from "assets/icons/depublic-brand.svg";
import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";

import PopularBlog from "components/Carousel/PopularBlog";
import SearchBar from "components/SearchBar";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="bg-[#FEF6E5] px-7 pt-12 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-10 -right-10 w-60"
        />
        <SearchBar />
        <div className="w-[262px] mt-14 pb-28">
          <p className="text-3xl font-semibold mb-6">Tagline Hero Section</p>
          <NavigateButton path="#" cls="btn-full">
            Download Aplikasi
          </NavigateButton>
        </div>
        <div className="absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[50%] w-full px-7  h-24">
          <Menu />
        </div>
      </div>
      <SectionSeparator clsx="mt-20" />
      <div className="py-9">
        <Highlight />
      </div>
      <div className="pb-6">
        <div className="flex justify-between items-center px-7 ">
          <p className="font-semibold">Upcoming Event</p>
          <p className="text-xs text-gray-400 relative">
            <span>See All</span>
            <span className="event swiper-button-next rounded-full w-6 aspect-square bg-red-200 grid place-items-center">
              <GrNext />
            </span>
            <span className="event swiper-button-prev rounded-full w-6 aspect-square bg-red-200 grid place-items-center">
              <GrPrevious />
            </span>
          </p>
        </div>
        <UpcomingEvent />
      </div>
      <SectionSeparator />
      <div className="py-6">
        <div className="flex justify-between items-center px-7">
          <p className="font-semibold">Popular Blog</p>
          <p className="text-xs text-gray-400 relative">
            <span>See All</span>
            <span className="blog swiper-button-next rounded-full w-6 aspect-square bg-red-200 grid place-items-center">
              <GrNext />
            </span>
            <span className="blog swiper-button-prev rounded-full w-6 aspect-square bg-red-200 grid place-items-center">
              <GrPrevious />
            </span>
          </p>
        </div>
        <PopularBlog />
      </div>
      <div className="px-7 py-12 text-white bg-[#360146] text-xs">
        <div className="flex justify-between gap-x-5">
          <div className="flex flex-col w-[50%]">
            <img src={DepublicBrand} width={160} />
            <span className="mt-6 mb-9">"Tagline company"</span>
            <div className="flex gap-x-2">
              <div className="grid place-items-center w-10 aspect-square bg-[#6B028D] rounded-full"></div>
              <div className="grid place-items-center w-10 aspect-square bg-[#6B028D] rounded-full"></div>
              <div className="grid place-items-center w-10 aspect-square bg-[#6B028D] rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-between w-[50%]">
            {[1, 2].map((i) => {
              return (
                <div key={i} className="flex flex-col gap-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <p className="first:font-semibold first:mb-4 text-[11px]" key={i}>
                      Lorem ipsum
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <hr className="mt-10 mb-6 border-[#6B028D]" />
        <p className="text-center">copyright 2023 Depublic. All Rights Reserved</p>
      </div>
    </MainLayout>
  );
}
