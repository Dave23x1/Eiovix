import React from "react";

import { ReactNode } from "react";
import Navbar from "@/components/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-[200px]">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
