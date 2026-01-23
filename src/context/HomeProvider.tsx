import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  fetchGraphql,
  sortEntriesByDate,
  transformPortfolioData,
} from "../common/common";
import { FLAMELINK_SCHEMA } from "../common/enum";
import { HomeContext } from "./HomeContext";

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    const fetchPortfolio = async () => {
      const query = `
        query ($schemaName: String!) {
          entriesBySchema(schemaName: $schemaName) {
            id
            data
          }
        }
      `;

      const variables = { schemaName: FLAMELINK_SCHEMA.PORTFOLIO };

      fetchGraphql(query, variables).then((result) => {
        const flattenResult = Object.values(result.data.entriesBySchema).map(
          (d: any) => {
            return {
              id: d.id,
              ...d.data,
            };
          },
        );
        setPortfolioData(sortEntriesByDate(flattenResult, "dateStarted"));
      });
    };

    fetchPortfolio();
  }, []);

  const transformedPortfolioData = useMemo(() => {
    return transformPortfolioData(Object.values(portfolioData));
  }, [portfolioData]);

  return (
    <HomeContext.Provider
      value={{
        portfolioData: transformedPortfolioData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
