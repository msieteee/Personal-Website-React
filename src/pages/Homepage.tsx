import { useContext } from "react";
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import Resume from "../assets/resume.pdf";
import NavigationBar from "../components/NavigationBar";
import { HomeContext } from "../context/HomeContext";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Portfolio from "../sections/Portfolio";

const HomePage = styled.div({
  height: "100%",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: "Roboto",
});

const HomeWrapper = styled.div({
  height: "100%",
  width: "100%",

  display: "flex",

  flexDirection: "column",
  alignItems: "center",
});

const Main = styled.main({});

const Footer = styled.footer({});

const Homepage = () => {
  const { portfolioData } = useContext(HomeContext);

  console.log(portfolioData);

  const navigationTabs = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "work", href: "#work" },
    { label: "contact", href: "#contact" },
    {
      label: "download CV",
      href: Resume,
      downloadLink: "Sietereales-Miguel-Resume.pdf",
    },
  ];

  return (
    <HomePage>
      <HomeWrapper>
        <NavigationBar tabs={navigationTabs}></NavigationBar>
        <Main>
          <About />
          <Experience />
          <Portfolio />
        </Main>
        <Footer>
          <Contact />
        </Footer>
      </HomeWrapper>
    </HomePage>
  );
};

export default Homepage;
