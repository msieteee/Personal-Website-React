import styled from "styled-components";
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
        </ContactSubHeaderText>
        <ContactSubHeaderText>
          {"Hoping to work with you soon!"}
        </ContactSubHeaderText>
      </ContentLimiter>
    </ContactWrapper>
  );
};

export default Contact;
