import { ReactNode } from "react";

export default function ModalBox(props: { children: ReactNode }) {
  const { children } = props;
  return (
    <div className="absolute top-0 bottom-0 z-30 backdrop-blur w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center relative w-[90%] px-5 pb-5 rounded-2xl bg-white min-h-[200px] max-w-[800px] mb-60 drop-shadow-lg">
        {children}
      </div>
    </div>
  );
}
