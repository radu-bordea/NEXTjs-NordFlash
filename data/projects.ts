// data/projects.ts
export type Project = {
  title: string;
  desc: string;
  stack: string[];
  link?: string;
  image?: "panoramax" | "beehives" | "itportfolio"; // image key
};

export const projects: Project[] = [
  {
    title: "House Rental Site",
    desc: "Sanity CMS, gallery, Airbnb links, contact info.",
    stack: ["Next.js", "Sanity", "Vercel"],
    image: "panoramax",
    link: "https://www.panorama-x-lofoten.com/",
  },
  {
    title: "Beehive Live Dashboard",
    desc: "Sensor data app with cron jobs & API polling.",
    stack: ["Next.js", "MongoDB", "Vercel Cron"],
    image: "beehives",
    link: "https://bidata.site/scales/GWOO29",
  },
  {
    title: "Portfolio v1",
    desc: "Personal portfolio with projects & contact.",
    stack: ["Next.js", "TypeScript"],
    image: "itportfolio",
    link: "https://my-it-portfolio.netlify.app/",
  },
  // add more as needed...
];
