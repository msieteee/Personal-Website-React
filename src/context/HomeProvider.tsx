import { ReactNode, useEffect, useMemo, useState } from "react";
import { sortEntriesByDate, transformPortfolioData } from "../common/common";
import { HomeContext } from "./HomeContext";

export const FLAMELINK_SCHEMA = {
  EXPERIENCE: "experience",
  PORTFOLIO: "projectPortfolio",
};

export const HomeProvider = ({ children }: { children: ReactNode }) => {
  const [portfolioData, setPortfolioData] = useState({});

  const fetchGraphql = async (query, variables) => {
    const response = await fetch(`${process.env.GRAPHQL_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  };

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
