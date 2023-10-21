import Breadcrumbs from "components/Breadcrumbs";
import MainLayout from "components/MainLayout";
import SearchBar from "components/SearchBar";
import { SlLocationPin } from "react-icons/sl";
import { BsChevronDown } from "react-icons/bs";
import { FiSliders } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { PiTag } from "react-icons/pi";
import { useLocation } from "react-router-dom";

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
      </div>
    </MainLayout>
  );
}
