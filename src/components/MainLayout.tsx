import React, { ReactNode } from "react";
import FloatingHeader from "./FloatingHeader";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-neutral-100 grid place-content-center">
      <FloatingHeader />
      <div className="bg-neutral-200 w-screen max-w-[485px] overflow-hidden min-h-[100dvh] relative pt-16">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
