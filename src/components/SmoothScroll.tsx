import { ReactNode, useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function SmoothScroll({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return <>{children}</>;
}
export default SmoothScroll;
