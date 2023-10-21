import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  cls: string;
  path: string;
  color?: string;
  children: ReactNode;
}

export default function NavigateButton(props: ButtonProps) {
  const { path, cls, children } = props;
  const color = props?.color || "#A103D3";

  if (cls === "btn-full")
    return (
      <Link
        to={path}
        className={`px-7 py-[10px] rounded-xl text-white bg-[${color}] font-semibold`}
      >
        {children}
      </Link>
    );
  else if (cls === "btn-outline")
    return (
      <Link
        to={path}
        className={`px-7 py-[10px] rounded-xl text-[${color}] bg-white outline-[${color}] font-semibold`}
      >
        {children}
      </Link>
    );
}
