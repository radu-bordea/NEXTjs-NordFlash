export type Project = { title: string; desc: string; stack: string[]; link?: string; };

export const projects: Project[] = [
  { title: "House Rental Site", desc: "Sanity CMS, gallery, Airbnb links, contact info.", stack: ["Next.js","Sanity","Vercel"] },
  { title: "Beehive Live Dashboard", desc: "Sensor data app with cron jobs & API polling.", stack: ["Next.js","MongoDB","Vercel Cron"] },
  { title: "Landing Page — Local Café", desc: "Menu, hours, map, GA4 events for 'Call' and 'Book'.", stack: ["Next.js","Tailwind","GA4"] },
  { title: "Portfolio v1", desc: "Personal portfolio with projects & contact.", stack: ["Next.js","TypeScript"] },
  { title: "Restaurant Menu Editor (Demo)", desc: "Editable menu app with Prisma + Neon.", stack: ["Next.js","Prisma","Neon"] },
  { title: "Analytics Starter (Demo)", desc: "Looker Studio dashboard fed by GA4.", stack: ["GA4","Looker Studio"] },
  { title: "Auth Starter (Demo)", desc: "Clerk + protected /admin area.", stack: ["Next.js","Clerk"] },
  { title: "Booking Widget (Prototype)", desc: "Simple slot picker (no payments).", stack: ["Next.js"] },
  { title: "Email/SMS Reminders (Demo)", desc: "Vercel cron job triggers notifications.", stack: ["Vercel Cron"] }
];
