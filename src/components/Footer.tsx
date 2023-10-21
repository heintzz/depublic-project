import DepublicBrand from "assets/icons/depublic-brand.svg";

export default function Footer() {
  return (
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
  );
}
