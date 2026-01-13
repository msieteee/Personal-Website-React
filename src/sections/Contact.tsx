import styled from "styled-components";
import { Position, TextDecoration } from "../common/cssenums";
import { SECTION_TEXT } from "../common/enum";
import { MATTE_BLACK, TAUPE, WHITE } from "../common/styles";
import { ContentLimiter } from "../components/ContentLimiter";
import SectionHeader from "../components/SectionHeader";

const ContactWrapper = styled.section({
  height: "100%",
  width: "100%",
  padding: "50px 25px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  background: WHITE,
});

const ContactSubHeaderText = styled.h2({
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "1.5em",

  textAlign: "center",
  textWrap: "wrap",

  color: MATTE_BLACK,
  margin: "20px 0 0 0",
});

const ContactMailLink = styled.a({
  color: MATTE_BLACK,
  textDecoration: TextDecoration.None,

  position: Position.Relative,

  "::after": {
    content: '""',
    position: Position.Absolute,
    left: 0,
    bottom: "-3px",
    width: "0%",
    height: "1px",
    backgroundColor: MATTE_BLACK,
    transition: "width 200ms ease",
  },

  ":hover::after": {
    width: "100%",
  },
});

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContentLimiter>
        <SectionHeader
          headerText={SECTION_TEXT.CONTACT.HEADER}
          accentColor={TAUPE}
        />
        <ContactSubHeaderText>
          {SECTION_TEXT.CONTACT.SUBHEADER}
          <ContactMailLink href="mailto:miguel.sietereales@gmail.com">
            miguel.sietereales@gmail.com
          </ContactMailLink>
        </ContactSubHeaderText>
        <ContactSubHeaderText>
          {"Hoping to work with you soon!"}
        </ContactSubHeaderText>
      </ContentLimiter>
    </ContactWrapper>
  );
};

export default Contact;
