import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";
import ShowHidePassword from "components/Auth/ShowHidePassword";
import SectionSeparator from "components/SectionSeparator";
import OAuthButton from "./OAuthButton";

import Loader from "components/Loader";
import { authServices } from "services/auth.services";
import "./Auth.css";

const defaultSignupForm = {
  username: "",
  email: "",
  password: "",
};

interface formInput {
  username: string;
  email: string;
  password: string;
}

export default function Signup() {
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
    if (!input.email || !input.password) return;

    (async () => {
      setLoading(true);
      try {
        const res = await authServices.handleUserSignup(input.email, input.password);
        console.log(res);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  };

  return (
    <div className="pb-10">
      {loading && <Loader />}
      <div className="w-full bg-[#FEF6E5] px-7 py-5 font-bold relative z-[1]">Sign Up</div>
      <div className="px-7 pt-7 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-3 right-0 w-24 z-0"
        />
        <p className="font-semibold relative z-[1]">Register for the better experience</p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-y-4 my-5 last:gap-y-0 relative z-[1]"
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
            className="input-field"
            onChange={handleInputChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
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
      <SectionSeparator additionalClassname="mt-6 mb-10" />
      <div className="flex flex-col items-center">
        <p className="mb-8">atau daftar dengan</p>
        <div className="grid grid-cols-3 gap-x-5">
          <OAuthButton />
        </div>
      </div>
    </div>
  );
}
