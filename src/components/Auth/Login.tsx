import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import TwoBubbleOrnament from "assets/ornaments/two-bubble.svg";
import ShowHidePassword from "components/Auth/ShowHidePassword";
import SectionSeparator from "components/SectionSeparator";
import OAuthButton from "./OAuthButton";

import useUserStore from "stores/user-store";
import "./Auth.css";

const defaultLoginForm = {
  username: "",
  password: "",
};

interface formInput {
  username: string;
  password: string;
}

const Login = () => {
  const [login] = useUserStore((state) => [state.login]);
  const navigate = useNavigate();
  const [input, setInput] = useState<formInput>(defaultLoginForm);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prev: formInput) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await login(input.username);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="pb-10">
      <div className="w-full bg-[#FEF6E5] px-7 py-5 font-bold relative z-10">Sign In</div>
      <div className="px-7 pt-7 relative">
        <img
          src={TwoBubbleOrnament}
          alt="bubble ornament"
          className="absolute -top-3 right-0 w-24 z-0"
        />
        <p className="font-semibold relative z-20">Welcome back!</p>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col relative z-20 gap-y-4 my-5 last:gap-y-0"
        >
          <input
            name="username"
            type="text"
            placeholder="Username"
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
            Sign In
          </button>
          <p className="text-center text-sm text-gray-400">
            Don't have an Account?{" "}
            <Link to="/signup" className="text-[#A103D3] font-bold">
              Register
            </Link>
          </p>
        </form>
      </div>
      <SectionSeparator clsx="mt-6 mb-10" />
      <div className="flex flex-col items-center">
        <p className="mb-8">atau login dengan</p>
        <div className="grid grid-cols-3 gap-x-5">
          <OAuthButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
