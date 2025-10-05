import * as d3 from "d3";
import { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import styled from "styled-components";
import LineChartTooltip from "./LineChartTooltip";

// Styled container for your chart
const ChartWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 1024px;
  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center;

  svg {
    font-family: sans-serif;
    font-size: 12px;
  }

  .grid line {
    stroke: #ccc;
    stroke-opacity: 0.7;
    shape-rendering: crispEdges;
    stroke-dasharray: 4; /* dashed / broken lines */
  }

  .grid path {
    stroke-width: 0;
  }
`;

type LineDataColor = {
  [key: string]: string;
};

interface LineChartProp {
  data: any[];
  dataHeader: string;
  dataKeys: string[];
  lineColors: LineDataColor;
  prepend: string;
}

const LineChart = ({
  data,
  dataHeader,
  dataKeys,
  lineColors,
  prepend,
}: LineChartProp) => {
  const ref = useRef<SVGSVGElement | null>(null);

  const seriesKeys = dataKeys;

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 1000;
    const height = 400;
    const margin = { top: 20, right: 100, bottom: 40, left: 50 };

    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d[`${dataHeader}`]) as [number, number])
      .range([margin.left, width - margin.right]);

    const yMin = d3.min(data, (d) =>
      d3.min(seriesKeys, (key) => d[key] as number)
    )!;
    const yMax = d3.max(data, (d) =>
      d3.max(seriesKeys, (key) => d[key] as number)
    )!;

    const y = d3
      .scaleLinear()
      .domain([yMin - 1, yMax + 1])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = (key: string) =>
      d3
        .line<any>()
        .x((d) => x(d[`${dataHeader}`]))
        .y((d) => y(d[key] as number));

    // X-axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(data.length)
          .tickFormat((d) => `${d}`)
      );

    // Y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickFormat((d) => `${d} ${prepend}`)); // Check
    // X gridlines
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(data.length)
          .tickSize(-(height - margin.top - margin.bottom))
          .tickFormat(() => "")
      );

    // Y gridlines
    svg
      .append("g")
      .attr("class", "grid")
      .attr("transform", `translate(${margin.left},0)`)
      .call(
        d3
          .axisLeft(y)
          .ticks(10)
          .tickSize(-(width - margin.left - margin.right))
          .tickFormat(() => "")
      );

    // Draw lines with animation
    Object.keys(lineColors).forEach((key, i) => {
      const path = svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", lineColors[key])
        .attr("stroke-width", 2)
        .attr("d", line(key));

      const totalLength = (path.node() as SVGPathElement).getTotalLength();

      const duration = 1500 + i * 500; // e.g. 2000ms, 2500ms, 3000ms, 3500ms

      path
        .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    });

    // Draw circles on each data point
    Object.keys(lineColors).forEach((key) => {
      svg
        .selectAll(`.dot-${key}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("class", `dot-${key}`)
        .attr("cx", (d) => x(d[`${dataHeader}`]))
        .attr("cy", (d) => y(d[key] as number))
        .attr("r", 0) // start invisible
        .style("fill", "white") // inside white
        .style("stroke", lineColors[key]) // outline in series color
        .style("stroke-width", 2)
        .transition()
        .delay((_, i) => i * 125) // stagger appearance
        .attr("r", 4); // final size
    });

    // Shared tooltip (for all series at the same station)
    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "rgba(0, 0, 0, 0.7)")
      .style("color", "#fff")
      .style("border-radius", "6px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0);

    // Transparent overlay to capture mouse movements, correctly aligned
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg
      .append("rect")
      .attr("x", margin.left)
      .attr("y", margin.top)
      .attr("width", innerWidth)
      .attr("height", innerHeight)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("mousemove", (event) => {
        // pointer relative to entire SVG coordinate space
        const [mouseX] = d3.pointer(event, svg.node());

        // Find nearest station (round to nearest integer)
        const stationValue = Math.round(x.invert(mouseX));
        const nearest = data.find((d) => d[`${dataHeader}`] === stationValue);
        const stationX = x(stationValue);

        if (nearest && Math.abs(mouseX - stationX) < 8) {
          tooltip
            .style("opacity", 1)
            .html(
              ReactDOMServer.renderToString(
                <LineChartTooltip
                  header={`Station ${nearest.station}`}
                  data={[
                    {
                      name: "Gubat",
                      value: nearest.Gubat,
                      color: `${lineColors["Gubat"]}`,
                      prepend: prepend,
                    },
                    {
                      name: "Lanao",
                      value: nearest.Lanao,
                      color: `${lineColors["Lanao"]}`,
                      prepend: prepend,
                    },
                    {
                      name: "Dasol",
                      value: nearest.Dasol,
                      color: `${lineColors["Dasol"]}`,
                      prepend: prepend,
                    },
                    {
                      name: "Buguey",
                      value: nearest.Buguey,
                      color: `${lineColors["Buguey"]}`,
                      prepend: prepend,
                    },
                  ]}
                />
              )
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 28 + "px");
        } else {
          tooltip.style("opacity", 0);
        }
      })
      .on("mouseout", () => tooltip.style("opacity", 0));

    return () => {
      d3.selectAll(".chart-tooltip").remove(); // remove ALL tooltips
      svg.selectAll("*").remove(); // clear SVG
    };
  }, [data]);

  return (
    <ChartWrapper>
      <svg ref={ref} width={920} height={400}></svg>
    </ChartWrapper>
  );
};

export default LineChart;
