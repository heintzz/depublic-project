import { ChangeEvent, FormEvent, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useNavigate } from "react-router-dom";

import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";
import ShowHidePassword from "components/Auth/ShowHidePassword";
import SectionSeparator from "components/SectionSeparator";
import OAuthButton from "./OAuthButton";

import "./Auth.css";

const defaultSignupForm = {
  username: "",
  phoneNumber: "",
  password: "",
};

interface formInput {
  username: string;
  phoneNumber: string;
  password: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState<formInput>(defaultSignupForm);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev: formInput) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 3000);
  };

  return (
    <div className="pb-10">
      {loading && (
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
      )}
      <div className="w-full bg-[#FEF6E5] px-7 py-5 font-bold relative z-10">Sign Up</div>
      <div className="px-7 pt-7 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-3 right-0 w-24 z-0"
        />
        <p className="font-semibold relative z-20">Register for the better experience</p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-y-4 my-5 last:gap-y-0 relative z-20"
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="input-field"
            onChange={handleInputChange}
          />
          <input
            name="phoneNumber"
            type="text"
            placeholder="Phone Number"
            className="input-field"
            onChange={handleInputChange}
          />
          <div className="relative">
            <input
              name="password"
              value={input?.password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-field"
              onChange={handleInputChange}
            />
            <ShowHidePassword val={showPassword} setVal={setShowPassword} />
          </div>
          <button
            type="submit"
            className="w-full p-4 my-10 rounded-xl bg-[#A103D3] text-white font-semibold"
          >
            Create Account
          </button>
          <p className="text-center text-sm text-gray-400">
            Have an Account?{" "}
            <Link to="/login" className="text-[#A103D3] font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
      <SectionSeparator clsx="mt-6 mb-10" />
      <div className="flex flex-col items-center">
        <p className="mb-8">atau daftar dengan</p>
        <div className="grid grid-cols-3 gap-x-5">
          <OAuthButton />
        </div>
      </div>
    </div>
  );
}
