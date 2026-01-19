import { ReactNode, useEffect, useMemo, useState } from "react";
import { sortEntriesByDate, transformPortfolioData } from "../common/common";
import { FLAMELINK_SCHEMA, getEntriesBySchema } from "../lib/flamelink";
import { HomeContext } from "./HomeContext";

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [portfolioData, setPortfolioData] = useState({});

  useEffect(() => {
    const fetchPortfolio = async () => {
      const data = await getEntriesBySchema(FLAMELINK_SCHEMA.PORTFOLIO);

      setPortfolioData(sortEntriesByDate(data, "dateStarted"));
    };

    const fetchData = async () => {
      const query = `
        query ($schemaName: String!) {
          entriesBySchema(schemaName: $schemaName) {
            id
            data
          }
        }
      `;

      console.log("rx");

      const variables = { schemaName: FLAMELINK_SCHEMA.PORTFOLIO };

      const response = await fetch("/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();
      console.log(result);
    };

    fetchData();

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
