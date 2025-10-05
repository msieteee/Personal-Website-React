import { ReactNode, useMemo } from "react";
import { EnvironmentContext, StationData } from "./EnvironmentContext";

// Provider Component
export const EnvironmentProvider = ({ children }: { children: ReactNode }) => {
  const WaterTemperaturData: StationData[] = [
    { station: 1, Gubat: 29, Lanao: 29, Dasol: 31, Buguey: 29 },
    { station: 2, Gubat: 29, Lanao: 29, Dasol: 30, Buguey: 31 },
    { station: 3, Gubat: 30, Lanao: 30, Dasol: 30, Buguey: 31 },
    { station: 4, Gubat: 31, Lanao: 31, Dasol: 31, Buguey: 31 },
    { station: 5, Gubat: 29, Lanao: 29, Dasol: 32, Buguey: 32 },
    { station: 6, Gubat: 31, Lanao: 31, Dasol: 31, Buguey: 32 },
    { station: 7, Gubat: 30, Lanao: 30, Dasol: 30, Buguey: 31 },
    { station: 8, Gubat: 30, Lanao: 30, Dasol: 30, Buguey: 31 },
    { station: 9, Gubat: 28, Lanao: 28, Dasol: 30, Buguey: 32 },
    { station: 10, Gubat: 28, Lanao: 28, Dasol: 32, Buguey: 31 },
    { station: 11, Gubat: 29, Lanao: 29, Dasol: 30, Buguey: 31 },
    { station: 12, Gubat: 29, Lanao: 29, Dasol: 31, Buguey: 31 },
    { station: 13, Gubat: 29, Lanao: 29, Dasol: 30, Buguey: 32 },
    { station: 14, Gubat: 30, Lanao: 30, Dasol: 30, Buguey: 31 },
    { station: 15, Gubat: 29, Lanao: 29, Dasol: 31, Buguey: 31 },
    { station: 16, Gubat: 30, Lanao: 30, Dasol: 31, Buguey: 31 },
    { station: 17, Gubat: 30, Lanao: 30, Dasol: 32, Buguey: 31 },
    { station: 18, Gubat: 29, Lanao: 29, Dasol: 30, Buguey: 31 },
  ];

  const SalinityData = [
    { station: 1, Gubat: 32, Lanao: 31, Dasol: 25, Buguey: 18 },
    { station: 2, Gubat: 35, Lanao: 35, Dasol: 23, Buguey: 18 },
    { station: 3, Gubat: 35, Lanao: 30, Dasol: 24, Buguey: 18 },
    { station: 4, Gubat: 30, Lanao: 33, Dasol: 24, Buguey: 18 },
    { station: 5, Gubat: 34, Lanao: 34, Dasol: 0, Buguey: 18 },
    { station: 6, Gubat: 35, Lanao: 33, Dasol: 24, Buguey: 18 },
    { station: 7, Gubat: 30, Lanao: 34, Dasol: 24, Buguey: 18 },
    { station: 8, Gubat: 34, Lanao: 35, Dasol: 25, Buguey: 18 },
    { station: 9, Gubat: 32, Lanao: 34, Dasol: 25, Buguey: 18 },
    { station: 10, Gubat: 35, Lanao: 32, Dasol: 25, Buguey: 18 },
    { station: 11, Gubat: 23, Lanao: 32, Dasol: 17, Buguey: 18 },
    { station: 12, Gubat: 25, Lanao: 29, Dasol: 25, Buguey: 18 },
    { station: 13, Gubat: 29, Lanao: 31, Dasol: 37, Buguey: 18 },
    { station: 14, Gubat: 24, Lanao: 30, Dasol: 0, Buguey: 18 },
    { station: 15, Gubat: 32, Lanao: 35, Dasol: 25, Buguey: 18 },
    { station: 16, Gubat: 35, Lanao: 34, Dasol: 20, Buguey: 18 },
    { station: 17, Gubat: 30, Lanao: 30, Dasol: 22, Buguey: 18 },
    { station: 18, Gubat: 35, Lanao: 32, Dasol: 24, Buguey: 18 },
  ];

  const RainfallData = [
    { station: 1, Gubat: 7.2, Lanao: 2.1, Dasol: 0.9, Buguey: 3.7 },
    { station: 2, Gubat: 0.72, Lanao: 2.6, Dasol: 1.1, Buguey: 4.4 },
    { station: 3, Gubat: 4.4, Lanao: 1.6, Dasol: 1.1, Buguey: 4.3 },
    { station: 4, Gubat: 6.7, Lanao: 2.9, Dasol: 1.0, Buguey: 4.1 },
    { station: 5, Gubat: 1.9, Lanao: 1.5, Dasol: 0.0, Buguey: 3.6 },
    { station: 6, Gubat: 2.2, Lanao: 1.2, Dasol: 1.3, Buguey: 3.5 },
    { station: 7, Gubat: 7.5, Lanao: 2.5, Dasol: 0.7, Buguey: 4.4 },
    { station: 8, Gubat: 2.0, Lanao: 1.7, Dasol: 0.7, Buguey: 4.0 },
    { station: 9, Gubat: 5.9, Lanao: 2.2, Dasol: 0.5, Buguey: 4.3 },
    { station: 10, Gubat: 1.5, Lanao: 3.5, Dasol: 1.3, Buguey: 4.4 },
    { station: 11, Gubat: 5.1, Lanao: 1.3, Dasol: 0.5, Buguey: 2.5 },
    { station: 12, Gubat: 7.0, Lanao: 2.2, Dasol: 0.8, Buguey: 2.5 },
    { station: 13, Gubat: 1.9, Lanao: 1.8, Dasol: 0.7, Buguey: 4.2 },
    { station: 14, Gubat: 6.1, Lanao: 1.5, Dasol: 0.0, Buguey: 3.6 },
    { station: 15, Gubat: 5.2, Lanao: 2.3, Dasol: 1.4, Buguey: 4.9 },
    { station: 16, Gubat: 1.7, Lanao: 1.0, Dasol: 0.4, Buguey: 4.2 },
    { station: 17, Gubat: 5.5, Lanao: 1.3, Dasol: 1.0, Buguey: 4.2 },
    { station: 18, Gubat: 3.9, Lanao: 2.1, Dasol: 0.9, Buguey: 3.9 },
  ];

  const SoilPhData = [
    { station: 1, Gubat: 5.8, Lanao: 6.2, Dasol: 7.0, Buguey: 5.0 },
    { station: 2, Gubat: 5.8, Lanao: 6.3, Dasol: 7.0, Buguey: 5.0 },
    { station: 3, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.0 },
    { station: 4, Gubat: 5.8, Lanao: 6.3, Dasol: 7.0, Buguey: 5.0 },
    { station: 5, Gubat: 5.8, Lanao: 6.3, Dasol: 0.0, Buguey: 5.0 },
    { station: 6, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.0 },
    { station: 7, Gubat: 5.8, Lanao: 6.5, Dasol: 6.3, Buguey: 5.8 },
    { station: 8, Gubat: 5.8, Lanao: 6.7, Dasol: 6.7, Buguey: 5.8 },
    { station: 9, Gubat: 5.8, Lanao: 6.7, Dasol: 6.7, Buguey: 5.0 },
    { station: 10, Gubat: 5.8, Lanao: 6.3, Dasol: 6.0, Buguey: 5.4 },
    { station: 11, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.0 },
    { station: 12, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.0 },
    { station: 13, Gubat: 5.8, Lanao: 6.7, Dasol: 7.0, Buguey: 5.0 },
    { station: 14, Gubat: 5.8, Lanao: 6.5, Dasol: 0.0, Buguey: 5.0 },
    { station: 15, Gubat: 5.8, Lanao: 6.3, Dasol: 6.0, Buguey: 5.0 },
    { station: 16, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.0 },
    { station: 17, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.0 },
    { station: 18, Gubat: 5.8, Lanao: 6.5, Dasol: 7.0, Buguey: 5.8 },
  ];

  const memoizedData = useMemo(
    () => ({
      WaterTemperature: WaterTemperaturData,
      Salinity: SalinityData,
      Rainfall: RainfallData,
      SoilPh: SoilPhData,
    }),
    [] // no dependencies, so it won't change between renders
  );

  return (
    <EnvironmentContext.Provider value={memoizedData}>
      {children}
    </EnvironmentContext.Provider>
  );
};
