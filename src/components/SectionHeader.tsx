import styled, { CSSObject } from "styled-components";
import { MATTE_BLACK } from "../common/styles";

type HeaderTextProps = {
  headerText: string;
  subHeaderText?: string;
  accentColor?: string;
  styles?: CSSObject;
};

type SectionHeaderWrapperProps = {
  styles?: CSSObject;
};

const SectionHeaderWrapper = styled.div(
  ({ styles }: SectionHeaderWrapperProps) => {
    return {
      width: "100%",
      ...styles,
    };
  }
);

const HeaderLabel = styled.h1({
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "18px",

  color: "MATTE_BLACK",

  textAlign: "center",
  textTransform: "uppercase",
});

type AccentLineProps = {
  accentColor: string;
};

const AccentLine = styled.div(({ accentColor }: AccentLineProps) => {
  return {
    width: "60px",
    height: "4px",
    backgroundColor: accentColor,
    margin: "10px auto 0 auto",
  };
});

const SubHeaderText = styled.h2({
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "1.5em",

  textAlign: "center",
  textWrap: "wrap",

  color: MATTE_BLACK,
  margin: "20px 15% 0 15%",
});

const SectionHeader = ({
  headerText,
  subHeaderText,
  accentColor,
}: HeaderTextProps) => {
  return (
    <SectionHeaderWrapper>
      <HeaderLabel>{headerText}</HeaderLabel>
      {accentColor && <AccentLine accentColor={accentColor} />}
      {subHeaderText && <SubHeaderText>{subHeaderText}</SubHeaderText>}
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
