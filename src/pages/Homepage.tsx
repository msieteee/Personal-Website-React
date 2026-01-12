import styled from "styled-components";
import "../../public/fonts/Poppins/fonts.css";
import NavigationBar from "../components/NavigationBar";
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

const Homepage = () => {
  const navigationTabs = [
    { label: "about", onClick: "test" },
    { label: "experience", onClick: "test" },
    { label: "work", onClick: "test" },
    { label: "contact", onClick: "test" },
  ];

  return (
    <HomePage>
      <HomeWrapper>
        <NavigationBar tabs={navigationTabs}></NavigationBar>
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </HomeWrapper>
    </HomePage>
  );
};

export default Homepage;
