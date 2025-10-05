import { Code, ChartBar, Shield, Layers, Server } from "lucide-react";

const items = [
  {
    icon: Code,
    title: "Websites & Landing Pages",
    desc: "Modern, responsive sites for businesses, cafés, restaurants, and personal portfolios — built with Next.js, TypeScript, and Tailwind. Includes social links, contact forms, image galleries, and optimized performance.",
  },
  {
    icon: Layers,
    title: "Full-Stack Web Applications",
    desc: "Custom apps powered by Next.js with Prisma and Neon or MongoDB — secure CRUD systems with admin dashboards, editable content, and data management tools.",
  },
  {
    icon: Shield,
    title: "Authentication & User Accounts",
    desc: "Integrated user login and access control using Clerk or Next-Auth. Includes protected routes, admin areas, and role-based permissions.",
  },
  {
    icon: ChartBar,
    title: "Analytics & Dashboards",
    desc: "Google Analytics 4 setup or custom data dashboards to track visits, user actions, and business KPIs — turning data into clear insights.",
  },
  {
    icon: Server,
    title: "Maintenance & Hosting",
    desc: "Continuous updates, bug fixes, and secure hosting on Vercel or your preferred platform. Optional monthly plans to keep your site fast and reliable.",
  },
];



export default function Services() {
  return (
    <section
      id="services"
      className="section text-slate-600 border-y-1 border-slate-200 mb-4 py-4"
    >
      <h2 className="section-title text-2xl text-amber-600">Services</h2>
      <p>Small to medium projects with clear scope and fast delivery.</p>
      <div className="grid md:grid-cols-5 gap-8 md:gap-32 mt-10">
        {items.map((it) => (
          <div key={it.title} className="card">
            <it.icon className="w-7 h-7 text-brand" />
            <h3 className="text-xl font-semibold mt-4">{it.title}</h3>
            <p className="mt-2">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
