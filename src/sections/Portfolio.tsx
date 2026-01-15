import styled from "styled-components";
import {
  AlignItems,
  Display,
  FlexDirection,
  JustifyContent,
  JustifyItems,
} from "../common/cssenums";
import { PORTFOLIO, SECTION_TEXT } from "../common/enum";
import { ALABASTER, STONE_GRAY } from "../common/styles";
import { ContentLimiter } from "../components/ContentLimiter";
import PortfolioCard from "../components/PortfolioCard";
import SectionHeader from "../components/SectionHeader";

const PortfolioWrapper = styled.section({
  height: "100%",
  width: "100%",
  minHeight: "50vh",
  padding: "50px 25px",

  display: Display.Flex,
  flexDirection: FlexDirection.Column,
  alignItems: AlignItems.Center,

  background: ALABASTER,
});

const WorkPortfolioWrapper = styled.div({
  width: "80%",

  display: Display.Grid,
  gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",

  margin: "50px auto 0 auto",
  justifyItems: JustifyItems.Center,

  gap: "25px",

  "@media (max-width: 720px)": {
    justifyContent: JustifyContent.Center,
  },
});

const Portfolio = () => {
  return (
    <PortfolioWrapper id="work">
      <ContentLimiter>
        <SectionHeader
          headerText={SECTION_TEXT.PORTFOLIO.HEADER}
          subHeaderText={SECTION_TEXT.PORTFOLIO.SUBHEADER}
          accentColor={STONE_GRAY}
        />
      </ContentLimiter>
      <WorkPortfolioWrapper>
        {PORTFOLIO.map((project) => {
          return (
            <PortfolioCard
              key={project.NAME}
              title={project.NAME}
              accentColor={STONE_GRAY}
              imageUrl={project.IMAGE}
              description={project.DESCRIPTION}
              href={project.URL}
            />
          );
        })}
      </WorkPortfolioWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;
