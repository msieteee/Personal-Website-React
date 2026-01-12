import styled, { CSSObject } from "styled-components";

type ContentLimiterProps = {
  styles?: CSSObject;
};

export const ContentLimiter = styled.div(({ styles }: ContentLimiterProps) => {
  return {
    maxWidth: "1440px",
    ...styles,
  };
});
