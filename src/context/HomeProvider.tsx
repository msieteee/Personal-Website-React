"use client";

import { ReactNode } from "react";
import { HomeContext, PortfolioDataType } from "../context/HomeContext";

export const HomeProvider = ({
  children,
  portfolioData,
}: {
  children: ReactNode;
  portfolioData: PortfolioDataType[];
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
