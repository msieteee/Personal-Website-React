import { GlobalStyle } from "@/components/GlobalStyle";
import { HomeProvider } from "@/context/HomeProvider";
import {
  fetchDirectGraphql,
  sortEntriesByDate,
  transformPortfolioData,
} from "@/lib/common/common";
import { FLAMELINK_SCHEMA } from "@/lib/common/enum";
import Homepage from "./Homepage";

export default async function Page() {
  const query = `
    query ($schemaName: String!) {
      entriesBySchema(schemaName: $schemaName) {
        id
        data
      }
    }
  `;

  let transformedPortfolioData = [];

  try {
    const variables = { schemaName: FLAMELINK_SCHEMA.PORTFOLIO };
    const result = await fetchDirectGraphql(query, variables);

    if (result && result.data) {
      const flattenResult = Object.values(result.data.entriesBySchema).map(
        (d: any) => ({ id: d.id, ...d.data }),
      );

      const sortedData = sortEntriesByDate(flattenResult, "dateStarted");

      transformedPortfolioData = transformPortfolioData(sortedData);
    }
  } catch (err) {
    console.warn("Skipping GraphQL fetch during build", err);
  }

  return (
    <>
      <GlobalStyle />
      <HomeProvider portfolioData={transformedPortfolioData}>
        <Homepage />
      </HomeProvider>
    </>
  );
}
