import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  mode: string;
  path: string;
  color?: string;
  children: ReactNode;
}

export default function NavigateButton(props: ButtonProps) {
  const { path, mode, children } = props;
  const color = props?.color || "primary-500";

  switch (mode) {
    case "btn-md-full":
      return (
        <Link
          to={path}
          className={`px-7 py-[10px] rounded-xl text-white bg-${color} font-semibold`}
        >
          {children}
        </Link>
      );
    case "btn-md-outline":
      return (
        <Link
          to={path}
          className={`px-7 py-[10px] rounded-xl text-${color} bg-white border-${color} border-2 font-semibold`}
        >
          {children}
        </Link>
      );
    case "btn-sm-full":
      return (
        <Link to={path} className={`px-4 py-[7px] rounded-xl text-white bg-${color} font-semibold`}>
          {children}
        </Link>
      );
    case "btn-sm-outline":
      return (
        <Link
          to={path}
          className={`px-4 py-[7px] rounded-xl text-${color} bg-white border-${color} border-2 font-semibold`}
        >
          {children}
        </Link>
      );
    default:
      return null;
  }
}
