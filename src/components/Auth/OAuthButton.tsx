import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <>
      {[BsApple, FcGoogle, BsFacebook].map((Icon, index) => {
        return (
          <div
            key={index}
            className="w-20 h-20 grid place-items-center bg-white p-6 rounded-[20px] drop-shadow-[2px_4px_4px_rgba(0,0,0,0.07)]"
          >
            <Icon size="2.25em" fill={index < 2 ? "inherit" : "#0866FF"} />
          </div>
        );
      })}
    </>
  );
};

export default OAuth;
