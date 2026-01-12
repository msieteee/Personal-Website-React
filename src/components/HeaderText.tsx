import styled, { CSSObject } from "styled-components";
import { Display } from "../common/cssenums";

type HeaderTextProps = {
  headerText: string;
  subHeaders?: string[];
  styles?: CSSObject;
};

type HeaderWrapperProps = {
  styles?: CSSObject;
};

const HeaderWrapper = styled.div(({ styles }: HeaderWrapperProps) => {
  return {
    ...styles,
  };
});

const HeaderLabel = styled.div({
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "20px",
});

const SubHeaderLabelWrapper = styled.div({
  display: Display.Flex,
  flexDirection: "column",
  gap: "10px",
  padding: "10px 0px",
});

const SubHeaderLabel = styled.h2({
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "14px",

  whiteSpace: "normal",
  overflowWrap: "break-word",
});

const HeaderText = ({ headerText, subHeaders }: HeaderTextProps) => {
  const SubHeaders = subHeaders ? (
    subHeaders.map((subHeader, index) => {
      return <SubHeaderLabel key={index}>{subHeader}</SubHeaderLabel>;
    })
  ) : (
    <></>
  );

  return (
    <HeaderWrapper>
      <HeaderLabel>{headerText}</HeaderLabel>
      <SubHeaderLabelWrapper>{SubHeaders}</SubHeaderLabelWrapper>
    </HeaderWrapper>
  );
};

export default HeaderText;
