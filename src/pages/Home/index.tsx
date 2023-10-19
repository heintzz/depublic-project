import MainLayout from "../../components/MainLayout";
import { BiSearch } from "react-icons/bi";
import NavigateButton from "../../components/NavigateButton";

import TwoBubbleOrnament from "../../assets/ornaments/two-bubble.svg";
import DepublicBrand from "../../assets/icons/depublic-brand.svg";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="bg-[#FEF6E5] px-7 pt-12 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-10 -right-10 w-60"
        />
        <div className="relative">
          <input
            type="text"
            placeholder="Search Activities"
            className="w-full focus:outline-none border backdrop-blur-xl opacity-50 border-red-50 rounded-xl pl-12 pr-6 py-2 text-sm"
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
        <div className="absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[50%] w-[90%] rounded-2xl py-4 bg-red-200 h-24">
          <div className="flex justify-evenly items-end">
            <div className="grid gap-y-2">
              <p>gambar</p>
              <p>ticket</p>
            </div>
            <div className="grid gap-y-2">
              <p>gambar</p>
              <p>ticket</p>
            </div>
            <div className="grid gap-y-2">
              <p>gambar</p>
              <p>ticket</p>
            </div>
            <div className="grid gap-y-2">
              <p>gambar</p>
              <p>ticket</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-3 bg-gray-100 mt-20"></div>
      <div className="px-7 py-9 flex justify-center">
        <div className="bg-red-200 h-[200px] w-full"></div>
      </div>
      <div className="px-7 last:pl-7 pb-6">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Upcoming Event</p>
          <p className="text-xs text-gray-400">See All</p>
        </div>
        <div className="pt-6">
          <div className="w-[180px] h-[150px] bg-red-200 rounded-xl">miaw</div>
        </div>
      </div>
      <div className="h-3 bg-gray-100"></div>
      <div className="px-7 last:pl-7 py-6">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Upcoming Event</p>
          <p className="text-xs text-gray-400">See All</p>
        </div>
        <div className="pt-6">
          <div className="w-[180px] h-[150px] bg-red-200 rounded-xl">miaw</div>
        </div>
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