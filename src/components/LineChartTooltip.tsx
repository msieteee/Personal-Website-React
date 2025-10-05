import styled from "styled-components";
import { WHITE } from "../common/styles";

const LineTooltipWrapper = styled.div({
  width: "125px",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Roboto",
  padding: "10px 15px",
});

const TitleHeader = styled.div({
  fontSize: "12px",
  fontWeight: 600,
  fontColor: "#FFF",

  marginBottom: "5px",
});

const SubItems = styled.div({
  display: "flex",
  width: "100%",
  fontSize: "11px",
  fontWeight: 400,
  fontColor: WHITE,
  alignItems: "center",

  margin: "2px 0px",

  gap: "5px",
});

const SubItemValues = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const LineMarker = styled.div(({ color }) => {
  return {
    height: "2px",
    width: "10px",
    background: `${color}`,
    borderRadius: "2px",
  };
});

interface LineChartTooltipData {
  name: string;
  value: number;
  color?: string;
  prepend?: string;
}

interface LineChartTooltipProps {
  header: string;
  data: LineChartTooltipData[];
}

const LineChartTooltip = ({ header, data }: LineChartTooltipProps) => {
  const TooltipData = data.map((tooltipData: LineChartTooltipData) => {
    const { name, value, color, prepend } = tooltipData;

    return (
      <SubItems>
        <LineMarker color={color} />
        <SubItemValues>
          <div>{name}</div>
          <div>
            {value}
            {prepend}
          </div>
        </SubItemValues>
      </SubItems>
    );
  });

  return (
    <LineTooltipWrapper>
      <TitleHeader>{header}</TitleHeader>
      {...TooltipData}
    </LineTooltipWrapper>
  );
};

export default LineChartTooltip;
