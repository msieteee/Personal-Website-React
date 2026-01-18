// src/context/UserContext.tsx
import { createContext } from "react";

export type HomeContextType = {
  test?: string;
};

// Create Context
export const HomeContext = createContext<HomeContextType>({});
