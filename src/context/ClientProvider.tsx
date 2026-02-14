import { ReactNode } from "react";
import { HomeProvider } from "./HomeProvider";

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <HomeProvider>{children}</HomeProvider>;
};

export default ClientProvider;
