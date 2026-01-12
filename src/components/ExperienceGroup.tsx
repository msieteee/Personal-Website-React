import styled, { CSSObject } from "styled-components";
import { Display, FlexWrap } from "../common/cssenums";
import { GREIGE, STONE_GRAY } from "../common/styles";

type ExperienceGroupProps = {
  imageUrl?: string;
  jobTitle: string;
  jobDescription: string;
  companyName: string;
  workingYear: string;
  styles?: CSSObject;
};

const ExperienceGroupContainer = styled.div({
  display: Display.Flex,

  "> div:first-child": {
    flex: 3,
  },

  "> div:not(:first-child)": {
    flex: 2,
  },
});

const ExperienceDetailsWrapper = styled.div({
  display: Display.Flex,
  alignItems: "flex-start",

  fontFamily: "Open Sans",
  gap: "15px",
});

const DescriptionWrapper = styled.div({
  display: Display.Flex,
  flexDirection: "column",
  alignSelf: "center",

  gap: "5px",
});

type JobTitleWrapperProps = {
  styles?: CSSObject;
};

const JobTitleWrapper = styled.div(({ styles }: JobTitleWrapperProps) => {
  return {
    display: Display.Flex,
    flexWrap: FlexWrap.Wrap,
    alignItems: "flex-end",

    lineHeight: "1rem",
    gap: "0.25rem",

    "@media (max-width: 720px)": {
      lineHeight: "1.25rem",
    },

    ...styles,
  };
});

const StyledImage = styled.img({
  width: "100%",
  maxWidth: "100px",
  height: "auto",
  aspectRatio: "1/1",
  objectFit: "cover",
});

const ImagePlaceholder = styled.div({
  width: "100%",
  maxWidth: "100px",
  aspectRatio: "1 / 1",
  display: Display.Flex,
  alignItems: "center",
  justifyContent: "center",
});

const Divider = styled.div({
  width: "5px",
  height: "100%",

  minWidth: "5px",
  maxHeight: "100px",

  display: Display.Flex,
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: STONE_GRAY,
});

const JobTitle = styled.h1({
  fontWeight: "700",
  fontSize: "18px",
});

const CompanySpan = styled.span({
  fontWeight: "600",
  fontSize: "16px",
});

const JobDescription = styled.p({
  fontWeight: "200",
  fontSize: "14px",

  whiteSpace: "normal",
  textWrap: "pretty",
  hyphens: "auto",

  lineHeight: "1.2rem",
});

const WorkingYearWrapper = styled.div({
  display: Display.Flex,
  alignSelf: "center",

  marginLeft: "auto",

  "@media (max-width: 720px)": {
    display: Display.None,
  },
});

const WorkingYearSpan = styled.span({
  width: "100%",

  fontFamily: "Open Sans",
  fontSize: "24px",
  fontWeight: "700",
  color: GREIGE,

  textAlign: "right",
});

const ExperienceGroup = ({
  imageUrl,
  jobTitle,
  jobDescription,
  companyName,
  workingYear,
}: ExperienceGroupProps) => {
  const hasImage = Boolean(imageUrl);

  return (
    <ExperienceGroupContainer>
      <ExperienceDetailsWrapper>
        {hasImage ? (
          <StyledImage src={imageUrl} />
        ) : (
          <>
            <ImagePlaceholder />
            <Divider />
          </>
        )}
        <DescriptionWrapper>
          <JobTitleWrapper>
            <JobTitle>{jobTitle}</JobTitle>
            <CompanySpan>at {companyName}</CompanySpan>
          </JobTitleWrapper>
          <JobDescription>{jobDescription}</JobDescription>
        </DescriptionWrapper>
      </ExperienceDetailsWrapper>
      <WorkingYearWrapper>
        <WorkingYearSpan>{workingYear}</WorkingYearSpan>
      </WorkingYearWrapper>
    </ExperienceGroupContainer>
  );
};

export default ExperienceGroup;
