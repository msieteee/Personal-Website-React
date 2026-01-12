import { ReactElement, createContext, useState } from "react";

interface AppProviderProps {
  children: ReactElement[];
}

const AppContext = createContext({});

const AppProvider = ({ children }: AppProviderProps) => {
  const [value, setValue] = useState("Initial Value");

  return (
    <AppContext.Provider value={{ value, setValue }}>
      {...children}
    </AppContext.Provider>
  );
};

export default AppProvider;
