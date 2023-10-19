import React, { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#EEEEEE] h-[100dvh] grid place-content-center">
      <div className="bg-white w-screen max-w-[435px] h-screen">{children}</div>
    </div>
  );
};

export default MainLayout;
