"use client";

import { createContext } from "react";

export type PortfolioDataType = {
  name: string;
  image: string;
  url?: string;
  description: string;
};

export type HomeContextType = {
  portfolioData?: PortfolioDataType[];
};

export const HomeContext = createContext<HomeContextType>({});
