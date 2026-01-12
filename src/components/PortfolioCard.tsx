import styled from "styled-components";
import LinkIcon from "../../public/svg/link";
import {
  AlignContent,
  BackgroundPosition,
  BackgroundSize,
  Cursor,
  Display,
  FlexDirection,
  Overflow,
  Position,
} from "../common/cssenums";
import { hexOpacity, MATTE_BLACK, WHITE } from "../common/styles";

type PortfolioCardProps = {
  title: string;
  accentColor: string;
  imageUrl: string;
  description: string;
  href?: string;
};

type PortfolioCardContainerProps = {
  clickable?: boolean;
};

const PortfolioCardContainer = styled.div(
  ({ clickable }: PortfolioCardContainerProps) => {
    return {
      width: "100%",
      height: "270px",
      maxWidth: "330px",

      overflow: Overflow.Hidden,

      backgroundColor: WHITE,

      borderRadius: "10px",
      boxShadow: `0px 2px 3px 0px ${hexOpacity(MATTE_BLACK, 10)}`,

      ":hover": clickable
        ? {
            cursor: Cursor.Pointer,
            transition: "box-shadow 0.2s ease-in-out",
            boxShadow: `0px 4px 6px 0px ${hexOpacity(MATTE_BLACK, 12)}, 0px 8px 20px 0px ${hexOpacity(MATTE_BLACK, 8)}`,
          }
        : {},

      display: Display.Flex,
      flexDirection: FlexDirection.Column,
    };
  }
);

type PortfolioImageProps = {
  imageUrl: string;
};

const PortfolioImage = styled.div(({ imageUrl }: PortfolioImageProps) => {
  return {
    width: "100%",
    height: "200px",
    minHeight: "200px",

    position: Position.Relative,
    background: `url(${imageUrl})`,
    backgroundSize: BackgroundSize.Cover,
    backgroundPosition: BackgroundPosition.Center,

    "::after": {
      content: '""',
      position: Position.Absolute,
      bottom: "-1px",
      left: 0,
      width: "100%",
      height: "20%",
      background: "#fff",
      borderTopRightRadius: "80px",

      boxShadow: `inset 0px 2px 3px 0px ${hexOpacity(MATTE_BLACK, 10)}`,
    },
  };
});

const PortfolioContent = styled.div({
  display: Display.Flex,
  flexDirection: "column",

  color: MATTE_BLACK,

  zIndex: 100,
  gap: "7.5px",

  margin: "-15px 20px",
});

const PortfolioTitleWrapper = styled.div({
  display: Display.Flex,
  alignItems: AlignContent.Center,

  gap: "5px",
});

const PortfolioTitle = styled.h1({
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "14px",

  lineHeight: "18px",
});

const PortfolioSubDesciption = styled.span({
  fontFamily: "Open Sans",
  fontWeight: "400",
  fontSize: "14px",
});

type AccentLineProps = {
  accentColor: string;
};

const AccentLine = styled.div(({ accentColor }: AccentLineProps) => {
  return {
    width: "60px",
    height: "2px",
    backgroundColor: accentColor,
    margin: "0 auto 0 0",
  };
});

const PortfolioCard = ({
  title,
  accentColor,
  imageUrl,
  description,
  href,
}: PortfolioCardProps) => {
  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <PortfolioCardContainer clickable={!!href} onClick={handleClick}>
      <PortfolioImage imageUrl={imageUrl} />
      <PortfolioContent>
        <PortfolioTitleWrapper>
          <PortfolioTitle>{title}</PortfolioTitle>
          {!!href && <LinkIcon />}
        </PortfolioTitleWrapper>
        <AccentLine accentColor={accentColor} />
        <PortfolioSubDesciption>{description}</PortfolioSubDesciption>
      </PortfolioContent>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;
