import styled from "styled-components";
import {
  AlignItems,
  Cursor,
  Display,
  JustifyContent,
  Margin,
  Position,
  TextDecoration,
} from "../common/cssenums";
import { MATTE_BLACK } from "../common/styles";

interface Header {
  label: string;
  href?: string;
  downloadLink?: string;
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

  "@media (max-width: 720px)": {
    alignItems: AlignItems.Center,
    justifyContent: JustifyContent.Center,
  },
});

type HeaderTextLinkProp = {
  isDownloadable?: boolean;
};

const HeaderTextLink = styled.a(({ isDownloadable }: HeaderTextLinkProp) => {
  return {
    position: Position.Relative,
    color: MATTE_BLACK,

    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: "16px",

    textDecoration: TextDecoration.None,
    cursor: Cursor.Pointer,

    "::after": {
      content: '""',
      position: Position.Absolute,
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

    marginLeft: isDownloadable ? Margin.Auto : "0px",

    "@media (max-width: 720px)": {
      display: isDownloadable ? Display.None : Display.Inherit,
    },
  };
});

const createHeaderLinks = ({ label, href, downloadLink }: Header) => {
  return (
    <HeaderTextLink
      key={label}
      href={href}
      download={downloadLink}
      isDownloadable={Boolean(downloadLink)}
    >
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
