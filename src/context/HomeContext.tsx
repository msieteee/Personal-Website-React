// src/context/UserContext.tsx
import { createContext } from "react";

export type PortfolioDataType = {
  name: string;
  image: string;
  url?: string;
  description: string;
};

export type HomeContextType = {
  test?: string;
  portfolioData?: PortfolioDataType[];
};

// Create Context
export const HomeContext = createContext<HomeContextType>({});
