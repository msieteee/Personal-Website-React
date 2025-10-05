import { useState } from "react";
import styled from "styled-components";
import { DARK_CHARCOAL, WHITE } from "../common/styles";
import EnvironmentChart from "../components/EnvironmentChart";
import TabNavigation from "../components/TabNavigation";
import { EnvironmentProvider } from "../context/EnvironmentProvider";

const HomePage = styled.div({
  height: "100%",
  width: "100%",
  minHeight: "100vh",
  background: `${DARK_CHARCOAL}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // horizontal center
  alignItems: "center", // vertical center

  fontFamily: "Roboto",
});

const Header = styled.div({
  padding: "25px",
  fontWeight: 600,
  fontSize: "24px",
});

const HomeWrapper = styled.div({
  width: "1024px",

  background: WHITE,

  borderRadius: "5px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // horizontal center
  alignItems: "center", // vertical center
});

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("Temperature");

  return (
    <HomePage>
      <EnvironmentProvider>
        <HomeWrapper>
          <Header>General Mangrove Data</Header>
          <TabNavigation
            tabs={[
              { label: "Temperature", value: "Temperature" },
              { label: "Rainfall", value: "Rainfall" },
              { label: "Salinity", value: "Salinity" },
              { label: "Soil pH", value: "Soil pH" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
            fullWidth
          />
          <EnvironmentChart dataSource={activeTab} />
        </HomeWrapper>
      </EnvironmentProvider>
    </HomePage>
  );
};

export default Homepage;
