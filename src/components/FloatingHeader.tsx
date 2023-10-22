import DepublicIcon from "assets/icons/depublic.svg";
import NavigateButton from "./NavigateButton";
import { useLocation } from "react-router-dom";
import { tokenServices } from "services/token.services";

export default function FloatingHeader() {
  const url = useLocation();
  const pathname = url.pathname;

  const isLogin = tokenServices.getAccessToken();
  const isAuthPage = ["/login", "/signup"].includes(pathname);

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white z-[3] flex justify-center shadow-sm">
      <div className="flex justify-between w-full max-w-[485px] px-7 py-2">
        <img src={DepublicIcon} alt="depublic icon" />
        {isAuthPage ? null : isLogin ? (
          <div className="flex items-center gap-x-3">
            <div className="grid place-items-center w-10 h-10 bg-[#6B028D] rounded-full"></div>
            <div className="grid place-items-center w-10 h-10 bg-[#6B028D] rounded-full"></div>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <NavigateButton path="/login" mode="btn-sm-outline">
              Sign In
            </NavigateButton>
            <NavigateButton path="/signup" mode="btn-sm-full">
              Sign Up
            </NavigateButton>
          </div>
        )}
      </div>
    </div>
  );
}
