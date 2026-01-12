import styled from "styled-components";
import { Display, JustifyContent } from "../common/cssenums";
import { hexOpacity, TAUPE } from "../common/styles";

type HeaderImageProps = {
  imageUrl: string;
};

const ImageWrapper = styled.div({
  width: "100%",
  display: Display.Flex,
  justifyContent: JustifyContent.FlexEnd,
});

const StyledImage = styled.img({
  width: "100%",
  maxWidth: "400px",
  height: "auto",
  aspectRatio: "1 / 1.1",
  objectFit: "cover",
  objectPosition: "bottom",

  borderRadius: "50% 5% 50% 5%",

  boxShadow: `-15px -15px ${hexOpacity(TAUPE, 20)}`,

  "@media (max-width: 720px)": {
    width: "80%",
    height: "150px",
    objectPosition: "60% 70%",
  },
});

const HeaderImage = ({ imageUrl }: HeaderImageProps) => {
  return (
    <ImageWrapper>
      <StyledImage src={`${imageUrl}`}></StyledImage>
    </ImageWrapper>
  );
};

export default HeaderImage;
