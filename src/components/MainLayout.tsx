import React, { ReactNode } from "react";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#EEEEEE] grid place-content-center">
      <div className="bg-white w-screen max-w-[485px] overflow-hidden min-h-[100dvh] relative">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
