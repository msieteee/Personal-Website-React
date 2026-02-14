export const formatDateRange = (
  start: Date | string | number,
  end: Date | string | number,
) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    console.warn("Invalid date range:", start, end);
    return "";
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

  if (formatter.format(startDate) === formatter.format(endDate)) {
    return `${formatter.format(startDate)}`;
  } else return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
};

export const sortEntriesByDate = <T extends Record<string, any>>(
  data: T[],
  dateFieldName: string,
): T[] => {
  return data.sort((a, b) => {
    return (
      new Date(b[dateFieldName]).getTime() -
      new Date(a[dateFieldName]).getTime()
    );
  });
};

export const transformPortfolioData = (portfolioData) => {
  return portfolioData.map((data) => {
    return {
      name: data["name"],
      image: data["imageUrl"],
      url: data["link"] ?? "",
      description: formatDateRange(data["dateStarted"], data["dateFinished"]),
    };
  });
};

export const fetchGraphql = async (query, variables) => {
  const response = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Internal-Request": "true",
    },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
};
