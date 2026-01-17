import styled from "styled-components";
import AboutImage from "../assets/images/miguel-sietereales.jpg";
import {
  Display,
  FlexDirection,
  FlexWrap,
  MarginTop,
} from "../common/cssenums";
import { HEADER_TEXT, SUBHEADER_TEXT } from "../common/enum";
import { ContentLimiter } from "../components/ContentLimiter";
import HeaderImage from "../components/HeaderImage";
import HeaderText from "../components/HeaderText";

const AboutWrapper = styled.section({
  height: "100%",
  width: "100%",

  maxWidth: "1440px",

  padding: "50px 50px 100px",
});

const LimiterStyles = {
  display: Display.Flex,
  flexDirection: FlexDirection.Row,
  flexWrap: FlexWrap.Wrap,

  "@media (max-width: 720px)": {
    flexDirection: FlexDirection.ColumnReverse,

    gap: "25px",
  },

  "> div": {
    marginTop: MarginTop.Auto,
  },

  "> div:first-child": {
    flex: 3,
    marginRight: "75px",

    "@media (max-width: 720px)": {
      marginRight: "0px",
    },
  },

  "> div:not(:first-child)": {
    flex: 2,
  },
};

const About = () => {
  return (
    <AboutWrapper id="about">
      <ContentLimiter styles={LimiterStyles}>
        <HeaderText
          headerText={HEADER_TEXT}
          subHeaders={SUBHEADER_TEXT}
        ></HeaderText>
        <HeaderImage
          imageUrl={AboutImage}
          alt={"Miguel looking to the side on Avenue des Champs-Élysées, Paris"}
        />
      </ContentLimiter>
    </AboutWrapper>
  );
};

export default About;
