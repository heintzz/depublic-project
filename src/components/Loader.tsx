import { Player } from "@lottiefiles/react-lottie-player";

export default function Loader() {
  return (
    <div className="absolute top-0 bottom-0 z-30 backdrop-blur w-full grid place-items-center">
      <div className="w-[90%] px-5 pb-5 rounded-2xl bg-white min-h-[200px] max-w-[800px] mb-60 drop-shadow-lg flex flex-col items-center justify-center">
        <Player
          autoplay
          loop
          src="https://lottie.host/e2d476b5-f5af-4c83-bd96-45fd69a0cffd/s2KiGcK87D.json"
          style={{ height: "100px", width: "250px" }}
        />
        <p className="font-bold">Being Processed</p>
        <p className="text-xs">Wait a moment...</p>
      </div>
    </div>
  );
}
