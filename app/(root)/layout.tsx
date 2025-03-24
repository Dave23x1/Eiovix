import React from "react";

import { ReactNode } from "react";
import Navbar from "@/components/navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-50">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
