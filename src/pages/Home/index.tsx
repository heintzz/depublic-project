import Menu from "components/Carousel/Menu";
import Highlight from "components/Carousel/Highlight";
import UpcomingEvent from "components/Carousel/UpcomingEvent";
import MainLayout from "components/MainLayout";
import NavigateButton from "components/NavigateButton";
import SectionSeparator from "components/SectionSeparator";

import DepublicBrand from "assets/icons/depublic-brand.svg";
import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";

import { GrNext, GrPrevious } from "react-icons/gr";
import { BiSearch } from "react-icons/bi";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="bg-[#FEF6E5] px-7 pt-12 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-10 -right-10 w-60"
        />
        <div className="relative backdrop-blur-xl border-gray-300 border rounded-xl">
          <input
            type="text"
            placeholder="Search Activities"
            className="w-full focus:outline-none placeholder:text-gray-700 opacity-50 border border-red-50 pl-12 rounded-xl  pr-6 py-4 text-sm"
          />
          <div className="absolute left-5 top-[50%] translate-y-[-50%] hover:cursor-pointer">
            <BiSearch size="1.25em" fill="#A6A6A6" />
          </div>
        </div>
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
            <span> See All</span>
            <span className="event swiper-button-next rounded-full w-6 aspect-square bg-red-200 grid place-items-center">
              <GrNext />
            </span>
            <span className="event swiper-button-prev rounded-full w-6 aspect-square bg-red-200 grid place-items-center">
              <GrPrevious />
            </span>
          </p>
        </div>
        <div className="pt-7">
          <UpcomingEvent />
        </div>
      </div>
      <SectionSeparator />
      <div className="py-6">
        <div className="flex justify-between items-center px-7">
          <p className="font-semibold">Popular Blog</p>
          <p className="text-xs text-gray-400">See All</p>
        </div>
        <div className="pt-7">{/* <UpcomingEventCarousel /> */}</div>
      </div>
      <div className="px-7 py-12 bg-purple-900">
        <div className="flex gap-x-5">
          <div className="min-w-[200px]">
            <img src={DepublicBrand} width={160} />
          </div>
          <div className="flex w-full justify-between text-xs">
            <div className="">h</div>
            <div className="">min</div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
