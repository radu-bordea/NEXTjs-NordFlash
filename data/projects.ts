// data/projects.ts
export type Project = {
  title: string;
  desc: string;
  stack: string[];
  link?: string;
  image?:
    | "panoramax"
    | "beehives"
    | "expensetracker"
    | "itportfolio"
    | "model"
    | "seasafety"; // image key
};

export const projects: Project[] = [
  {
    title: "House Rental Site",
    desc: "Sanity CMS for gallery and contact, Airbnb links, contact info.",
    stack: ["Next.js", "Typescript", "TailwindCSS", "Sanity", "Vercel"],
    image: "panoramax",
    link: "https://www.panorama-x-lofoten.com/",
  },
  {
    title: "Beehive Live Dashboard",
    desc: "Sensor data app with cron jobs & API polling, live charts, maps, admin dashboard",
    stack: [
      "Next.js",
      "MongoDB",
      "Next Auth",
      "API routes",
      "Vercel Cron Jobs",
    ],
    image: "beehives",
    link: "https://bidata.site/scales/GWOO29",
  },
  {
    title: "Expense Tracker",
    desc: "Website tracking expenses, where every user has its own expenses",
    stack: ["NextJs", "Typescript", "Prisma", "Neon", "Clerk"],
    image: "expensetracker",
    link: "https://nextjs-expense-tracker-seven.vercel.app/",
  },
  {
    title: "Portfolio IT",
    desc: "Personal portfolio with projects & contact.",
    stack: ["Next.js", "TailwindCSS"],
    image: "itportfolio",
    link: "https://my-it-portfolio.netlify.app/",
  },
  {
    title: "Modeling Portfolio",
    desc: "Fitness and modeling portfolio built with React and Styled Components, showcasing style, health, and elegance.",
    stack: ["React", "Styled Components"],
    image: "model",
    link: "https://radu-3dportfolio.netlify.app/",
  },
  {
    title: "Sea Safety",
    desc: "Sea Safety website built for users to access training materials and embedded YouTube videos.",
    stack: ["Next.js", "Typescript", "TailwindCSS", "Prisma", "Neon"],
    image: "seasafety",
    link: "https://nex-tjs-sea-safety.vercel.app/login",
  },
  // add more as needed...
];
