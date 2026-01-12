import styled from "styled-components";
import { JOB_EXPERIENCE, SECTION_TEXT } from "../common/enum";
import { ALMOND, STONE_GRAY } from "../common/styles";
import { ContentLimiter } from "../components/ContentLimiter";
import ExperienceGroup from "../components/ExperienceGroup";
import SectionHeader from "../components/SectionHeader";

const ExperienceWrapper = styled.section({
  height: "100%",
  width: "100%",
  minHeight: "50vh",
  padding: "50px 25px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  background: ALMOND,
});

const JobExperienceWrapper = styled.div({
  width: "80%",

  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",

  margin: "50px auto 0 auto",

  gap: "25px",

  "@media (max-width: 720px)": {
    gap: "35px",
  },
});

const Experience = () => {
  const ExperienceGroups = JOB_EXPERIENCE.map((data, index) => {
    return (
      <ExperienceGroup
        key={`${data.TITLE}-${index}`}
        imageUrl={data.IMAGE}
        jobTitle={data.TITLE}
        jobDescription={data.DESCRIPTION}
        companyName={data.COMPANY}
        workingYear={data.YEAR}
      />
    );
  });

  return (
    <ExperienceWrapper id="experience">
      <ContentLimiter>
        <SectionHeader
          headerText={SECTION_TEXT.EXPERIENCE.HEADER}
          subHeaderText={SECTION_TEXT.EXPERIENCE.SUBHEADER}
          accentColor={STONE_GRAY}
        />
        <JobExperienceWrapper>{ExperienceGroups}</JobExperienceWrapper>
      </ContentLimiter>
    </ExperienceWrapper>
  );
};

export default Experience;
