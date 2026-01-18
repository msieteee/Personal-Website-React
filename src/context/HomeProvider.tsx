import { ReactNode } from "react";
import { FLAMELINK_SCHEMA, getEntriesBySchema } from "../lib/flamelink";
import { HomeContext } from "./HomeContext";

// Provider Component
export const HomeProvider = ({ children }: { children: ReactNode }) => {
  console.log(getEntriesBySchema(FLAMELINK_SCHEMA.PORTFOLIO));

  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
};
