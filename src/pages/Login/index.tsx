import { ChangeEvent, FormEvent, useState } from "react";
import { BsApple, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { PiEyeClosedLight, PiEyeLight } from "react-icons/pi";

import TwoBubbleOrnament from "../../assets/ornaments/two-bubble.svg";
import { Link } from "react-router-dom";

const inputStyle = "w-full p-4 focus:outline-none border-b-[1px] border-b-gray-400 bg-transparent";

const defaultLoginForm = {
  username: "",
  password: "",
};

interface formInput {
  username: string;
  password: string;
}

export const Login = () => {
  const [input, setInput] = useState<formInput>(defaultLoginForm);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev: formInput) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="bg-[#EEEEEE] h-[100dvh] grid sm:place-content-center">
      <div className="bg-white w-screen max-w-[1080px] h-screen">
        <div className="w-full bg-[#FEF6E5] px-7 py-5 font-bold relative z-10">Sign In</div>
        <div className="px-7 pt-12 relative">
          <img
            src={TwoBubbleOrnament}
            alt="bubble ornament"
            className="absolute -top-3 right-0 w-24 z-0"
          />
          <p className="font-semibold">Welcome back!</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-4 my-5 last:gap-y-0">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className={inputStyle}
              onChange={handleInputChange}
            />
            <div className="relative">
              <input
                name="password"
                value={input?.password}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={inputStyle}
                onChange={handleInputChange}
              />
              <span
                className="absolute right-5 top-[50%] translate-y-[-50%] hover:cursor-pointer"
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <PiEyeClosedLight size="1.75em" fill="#A6A6A6" />
                ) : (
                  <PiEyeLight size="1.75em" fill="#A6A6A6" />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full p-4 my-10 rounded-xl bg-[#A103D3] text-white font-semibold"
            >
              Create Account
            </button>
            <p className="text-center text-gray-400">
              Don't have an Account?{" "}
              <Link to="/signup" className="text-[#A103D3] font-bold">
                Register
              </Link>
            </p>
          </form>
        </div>
        <div className="h-3 bg-gray-100 mt-16 mb-20"></div>
        <div className="flex flex-col items-center">
          <p className="mb-10">atau login dengan</p>
          <div className="flex gap-x-5">
            <div className="w-20 h-20 grid place-items-center bg-white p-6 rounded-[20px] drop-shadow-[2px_4px_4px_rgba(0,0,0,0.07)]">
              <BsApple size="2.25em" />
            </div>
            <div className="w-20 h-20 grid place-items-center bg-white p-6 rounded-[20px] drop-shadow-[2px_4px_4px_rgba(0,0,0,0.07)]">
              <FcGoogle size="2.25em" />
            </div>
            <div className="w-20 h-20 grid place-items-center bg-white p-6 rounded-[20px] drop-shadow-[2px_4px_4px_rgba(0,0,0,0.07)]">
              <BsFacebook size="2.25em" fill="#0866FF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
