import Highlight from "components/Carousel/Highlight";
import Menu from "components/Carousel/Menu";
import UpcomingEvent from "components/Carousel/UpcomingEvent";
import MainLayout from "components/MainLayout";
import NavigateButton from "components/NavigateButton";
import SectionSeparator from "components/SectionSeparator";

import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";

import PopularBlog from "components/Carousel/PopularBlog";
import Footer from "components/Footer";
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
      <Footer />
    </MainLayout>
  );
}
