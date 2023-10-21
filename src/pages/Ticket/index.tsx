import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import SearchBar from "components/SearchBar";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { PiTag } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { useLocation } from "react-router-dom";

import Maher from "assets/images/maher-zain.png";

import Footer from "components/Footer";
import { ISOToDateString } from "utils/helper";

export default function TicketPage() {
  const path = useLocation();
  const paths = path.pathname.split("/");
  paths.splice(0, 1);

  return (
    <MainLayout>
      <div className="py-10 px-7">
        <Breadcrumbs elements={paths} />
        <div className="grid grid-cols-11 items-center gap-x-2 my-8">
          <SearchBar clsx="col-span-7" />
          <div className="flex justify-center gap-x-2 items-center col-span-4 min-h-[40px] bg-[#FFF0CC] py-2 rounded-xl">
            <SlLocationPin color="#D49600" strokeWidth="1.5" />
            <span className="font-medium text-sm">Location</span>
            <BsChevronDown color="#D49600" strokeWidth="0.5" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-md">All Event</h2>
          <div className="flex gap-x-2">
            <div className="flex items-center justify-center gap-x-[6px] p-2 border-2 border-[#EEEEEE] rounded-[40px] min-w-[80px]">
              <FiSliders color="#6B028D" />
              <span className="font-semibold text-sm">Filter</span>
            </div>
            <div className="flex items-center justify-center gap-x-[6px] p-2 border-2 border-[#EEEEEE] rounded-[40px] min-w-[80px]">
              <AiOutlineCalendar color="#6B028D" />
              <span className="font-semibold text-sm">Date</span>
            </div>
            <div className="flex items-center justify-center gap-x-[6px] p-2 border-2 border-[#EEEEEE] rounded-[40px] min-w-[80px]">
              <PiTag color="#6B028D" />
              <span className="font-semibold text-sm">Price</span>
            </div>
          </div>
        </div>
        <hr className="mt-5" />
        <p className="text-xs my-6 text-[#4D4D4D]">60 Event on result</p>
        <div className="grid gap-x-2 gap-y-6 grid-cols-2 mb-20">
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <div
                key={index}
                className="text-xs col-span-1 flex flex-col p-2 shadow-sm max-h-[330px] rounded-xl bg-white"
              >
                <img className="h-[100px] w-full bg-cover rounded-xl object-fill" src={Maher} />
                <div className="flex flex-col mt-3">
                  <div className="text-xs flex items-center gap-x-2">
                    <div className="flex gap-x-1 items-center">
                      <SlLocationPin size="1.25em" /> BOGOR
                    </div>
                    |{" "}
                    <span className="text-[#A103D3]">
                      {ISOToDateString("2023-10-21T10:13:08.115Z")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-1 mt-2">
                    <h1 className="font-bold text-base line-clamp-1">Judul Event</h1>
                    <p className="text-xs line-clamp-1">Lorem ipsum dolor sit amet consectet</p>
                  </div>
                  <div className="flex flex-wrap items-end my-4">
                    <span className="font-bold text-[#A103D3] text-base">IDR 1.999.000</span>
                    <span>/ 1 Person</span>
                  </div>
                  <span className="p-[6px] text-[#0B640D] bg-[#EAF2E2] rounded-xl text-center font-semibold">
                    Tersedia
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
}
