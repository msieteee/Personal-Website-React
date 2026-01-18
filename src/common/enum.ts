import BBDO from "../assets/images/bbdo.png";
import Infor from "../assets/images/infor.png";
import Oracle from "../assets/images/oracle-netsuite.png";

import AGPCI from "../assets/images/portfolio/agpci.jpg";
import Crabtech from "../assets/images/portfolio/crabtech.jpg";
import GreenGuide from "../assets/images/portfolio/greenguide.jpg";
import LSCS from "../assets/images/portfolio/lscs.jpg";
import Playstreet from "../assets/images/portfolio/playstreet.jpg";
import Snickers from "../assets/images/portfolio/snickers.jpg";
import ViaHere from "../assets/images/portfolio/viahere.jpg";

export const Breakpoint = {
  mobile: "(max-width: 375px)",
  tablet: "(max-width: 768px)",
  desktop: "(min-width: 1200px)",
};

export const HEADER_TEXT = "miguel sietereales 😎";

export const SUBHEADER_TEXT = [
  "Developer for over 6 years with a knack for diverse tech projects.",
  "Previously a senior software engineer at Oracle NetSuite Philippines.",
  "Beyond coding, I'm drawn to design, travel, vintage autos, sneakers, and coffee. Always seeking new tech, adventure, and great conversations.",
];

export const SECTION_TEXT = {
  EXPERIENCE: {
    HEADER: "Experience",
    SUBHEADER:
      "In the last 6 years, my focus on customer-centric development has involved addressing pain points, staying tech-savvy, fostering collaboration, and maintaining efficient systems.",
  },
  PORTFOLIO: {
    HEADER: "Worked Works Work",
    SUBHEADER:
      "As a dedicated developer skilled in translating UX and Art Design concepts into dynamic websites, I had a few projects to showcase my expertise in creating visually compelling and user-friendly websites.",
  },
  CONTACT: {
    HEADER: "Contact",
    SUBHEADER:
      "For inquiries and collaborations, feel free to shoot me an email at ",
  },
};

export const JOB_EXPERIENCE = [
  {
    IMAGE: Oracle,
    ALT: "Oracle Logo",
    TITLE: "Senior Software Engineer I",
    COMPANY: "Oracle NetSuite",
    YEAR: "2024 - 2025",
    DESCRIPTION:
      "Led legacy app migration to React.js with TypeScript to boost performance and maintainability, served as Scrum Master for a 10-person team, optimized Git workflows, implemented CI/CD with QA and DevOps, and contributed reusable UX components in Figma.",
  },
  {
    TITLE: "Software Engineer",
    COMPANY: "Oracle NetSuite",
    YEAR: "2021 - 2024",
    DESCRIPTION:
      "Built responsive, data-driven web applications using Test-Driven Development to ensure high-quality, user-centric experiences, while bridging front-end development and UX design through Figma prototypes to accelerate design-to-development workflows and improve UI consistency.",
  },
  {
    IMAGE: Infor,
    ALT: "Infor Logo",
    TITLE: "Software Engineer",
    COMPANY: "Infor PSSC Inc.",
    YEAR: "2020 - 2021",
    DESCRIPTION:
      "Designed and implemented low- to mid-priority enhancements for the Infor M3 Procurement Module, and analyzed performance metrics using Sumo Logic to resolve concurrency issues, improving system stability, responsiveness, and user efficiency.",
  },
  {
    TITLE: "Software Engineer, Associate",
    COMPANY: "Infor PSSC Inc.",
    YEAR: "2018 - 2020",
    DESCRIPTION:
      "Developed low- to mid-priority enhancements for Infor M3 ERP to improve user experience, resolved internal and external maintenance issues to ensure system reliability, and earned promotion to Mid-level Software Engineer within 18 months.",
  },
  {
    IMAGE: BBDO,
    ALT: "BBDO Guerrero Logo",
    TITLE: "Digital Trainee",
    COMPANY: "BBDO Guerrero",
    YEAR: "2018",
    DESCRIPTION:
      "Delivered user-focused website UI/UX, transforming wireframes into responsive, high-performance designs, and was named Top 7 Adobo Creative Rankings – Digital Producer in 2019.",
  },
];

/** Force Import Images */
export const IMAGES = [
  AGPCI,
  GreenGuide,
  Crabtech,
  LSCS,
  ViaHere,
  Playstreet,
  Snickers,
];
