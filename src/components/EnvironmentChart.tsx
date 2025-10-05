import { useContext } from "react";
import styled from "styled-components";
import {
  ENVIRONMENT_COLORS,
  ENVIRONMENT_TYPE,
  PREPEND,
} from "../common/common";
import { WHITE } from "../common/styles";
import LineChart from "../components/LineChart";
import { EnvironmentContext } from "../context/EnvironmentContext";

interface EnvironmentChartProps {
  dataSource: string;
}

const EnvironmentChartWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  paddingBottom: "20px",
});

const EnvironmentChartSubWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
});

const TableLabel = styled.div({
  // TextTransform: "uppercase",
  padding: "0px 0px 10px",
  textAlign: "center",
});

interface LineMarkerProps {
  color: string;
}

const LineMarker = styled.div(({ color }: LineMarkerProps) => {
  return {
    height: "4px",
    width: "20px",
    background: `${color}`,
    borderRadius: "4px",
  };
});

const SubItems = styled.div({
  display: "flex",
  fontSize: "14px",
  fontWeight: 400,
  fontColor: WHITE,
  alignItems: "center",

  margin: "2px 0px",

  gap: "5px",
});

const SubItemValues = styled.div({
  width: "100%",
  display: "flex",
});

const LabelWrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

const EnvironmentChart = ({ dataSource }: EnvironmentChartProps) => {
  const { WaterTemperature, Rainfall, Salinity, SoilPh } =
    useContext(EnvironmentContext);

  const dataMap = {
    Temperature: WaterTemperature,
    Rainfall: Rainfall,
    Salinity: Salinity,
    SoilpH: SoilPh,
  };

  const data = dataMap[dataSource] ?? SoilPh;

  const lineChartColors = Object.fromEntries(
    Object.entries(ENVIRONMENT_COLORS).map(([key, value]) => [
      key.charAt(0) + key.slice(1).toLowerCase(),
      value,
    ])
  );

  return (
    <EnvironmentChartWrapper>
      <EnvironmentChartSubWrapper>
        <LineChart
          data={data}
          dataHeader={"station"}
          dataKeys={Object.values(ENVIRONMENT_TYPE)}
          lineColors={lineChartColors}
          prepend={PREPEND[dataSource] ?? PREPEND["SoilpH"]}
        />
      </EnvironmentChartSubWrapper>
      <TableLabel>Station</TableLabel>

      <LabelWrapper>
        <SubItems>
          <LineMarker color={ENVIRONMENT_COLORS.BUGUEY} />
          <SubItemValues>
            <div>Buguey</div>
          </SubItemValues>
        </SubItems>
        <SubItems>
          <LineMarker color={ENVIRONMENT_COLORS.DASOL} />
          <SubItemValues>
            <div>Dasol</div>
          </SubItemValues>
        </SubItems>

        <SubItems>
          <LineMarker color={ENVIRONMENT_COLORS.GUBAT} />
          <SubItemValues>
            <div>Gubat</div>
          </SubItemValues>
        </SubItems>

        <SubItems>
          <LineMarker color={ENVIRONMENT_COLORS.LANAO} />
          <SubItemValues>
            <div>Lanao</div>
          </SubItemValues>
        </SubItems>
      </LabelWrapper>
    </EnvironmentChartWrapper>
  );
};

export default EnvironmentChart;
