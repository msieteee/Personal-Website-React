import styled from "styled-components";
import { MATTE_BLACK } from "../common/styles";

interface Header {
  label: string;
  onClick: string;
}

type NavigationBarProps = {
  tabs?: Header[];
};

const HeaderContainer = styled.nav({
  height: "100%",
  width: "100%",

  maxWidth: "1440px",

  padding: "25px 50px",
});

const HeaderTabs = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  alignItems: "flex-start",
});

const HeaderTextLink = styled.a({
  position: "relative",
  color: MATTE_BLACK,
  fontFamily: "Poppins",
  fontWeight: "500",
  fontSize: "16px",

  textTransform: "lowercase",
  textDecoration: "none",
  cursor: "pointer",

  "::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-3px",
    width: "0%",
    height: "2px",
    backgroundColor: MATTE_BLACK,
    transition: "width 200ms ease",
  },

  ":hover::after": {
    width: "100%",
  },
});

const createHeaderLinks = ({ label, onClick }: Header) => {
  return (
    <HeaderTextLink key={label} href={`#${label}`}>
      {label}
    </HeaderTextLink>
  );
};

const NavigationBar = ({ tabs }: NavigationBarProps) => {
  return (
    <HeaderContainer>
      <HeaderTabs>{tabs.map((tab) => createHeaderLinks(tab))}</HeaderTabs>
    </HeaderContainer>
  );
};

export default NavigationBar;
