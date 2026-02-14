import styled, { CSSObject } from "styled-components";
import { Display } from "../lib/common/cssenums";

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

const HeaderLabel = styled.h1({
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

const HeaderEmoji = styled.span({});

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
      <HeaderLabel>
        {headerText}
        <HeaderEmoji aria-hidden="true"> 😎 </HeaderEmoji>
      </HeaderLabel>
      <SubHeaderLabelWrapper>{SubHeaders}</SubHeaderLabelWrapper>
    </HeaderWrapper>
  );
};

export default HeaderText;
