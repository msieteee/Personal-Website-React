"use client";

import { ReactNode } from "react";
import { HomeContext } from "../context/HomeContext";

export const HomeProvider = ({
  children,
  portfolioData,
}: {
  children: ReactNode;
  portfolioData: [];
}) => {
  return (
    <HomeContext.Provider
      value={{
        portfolioData: portfolioData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
