// src/context/UserContext.tsx
import { createContext } from "react";

export type StationData = {
  station: number;
  Gubat: number;
  Lanao: number;
  Dasol: number;
  Buguey: number;
};

type EnvironmentContextType = {
  WaterTemperature: StationData[];
  Rainfall: StationData[];
  Salinity: StationData[];
  SoilPh: StationData[];
};

// Create Context
export const EnvironmentContext = createContext<EnvironmentContextType>({
  WaterTemperature: [],
  Rainfall: [],
  Salinity: [],
  SoilPh: [],
});
