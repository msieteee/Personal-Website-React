import { GlobalStyle } from "@/components/GlobalStyle";
import { HomeProvider } from "@/context/HomeProvider";
import {
  fetchGraphql,
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

  const variables = { schemaName: FLAMELINK_SCHEMA.PORTFOLIO };
  const result = await fetchGraphql(query, variables);

  const entries = result.data.entriesBySchema ?? [];

  const flattenResult = Object.values(entries).map((d: any) => ({
    id: d.id,
    ...d.data,
  }));

  const sortedData = sortEntriesByDate(flattenResult, "dateStarted");
  const transformedPortfolioData = transformPortfolioData(sortedData);

  return (
    <>
      <GlobalStyle />
      <HomeProvider portfolioData={transformedPortfolioData}>
        <Homepage />
      </HomeProvider>
    </>
  );
}
