import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";

export const metadata = {
  title: "Miguel Sietereales | Software Developer",
  description:
    "Miguel Sietereales – Software developer with 6+ years of experience in full-stack development. Explore my portfolio, projects, and creative coding work.",
  keywords: [
    "Sietereales Developer",
    "Miguel Sietereales",
    "Miguel Alphonzo Sietereales",
    "Oracle NetSuite",
    "Software Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Projects",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "Miguel Sietereales – Software Developer",
    description:
      "Developer for over 6 years with a knack for diverse tech projects. Previously a senior software engineer at Oracle NetSuite Philippines. Beyond coding, I'm drawn to design, travel, vintage autos, sneakers, and coffee.",
    url: "https://www.miguelsietereales.com/",
    images: [
      {
        url: "https://www.miguelsietereales.com/image-og.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ height: "100%", width: "100%", margin: 0, padding: 0 }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
