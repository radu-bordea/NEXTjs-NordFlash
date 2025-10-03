import { Code, ChartBar, Shield, Layers } from "lucide-react";

const items = [
  {
    icon: Code,
    title: "Websites & Apps",
    desc: "Next.js, TypeScript, Tailwind — fast, responsive, modern.",
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    desc: "Next.js with Prisma & Neon or MongoDB — complete CRUD apps with secure data layers.",
  },
  {
    icon: Shield,
    title: "Auth & Accounts",
    desc: "Clerk or Next-Auth, protected admin areas, role-based access.",
  },
  {
    icon: ChartBar,
    title: "Analytics & Dashboards",
    desc: "GA4 setup, custom charts.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section text-slate-600 border-y-1 border-slate-400 mb-4 py-4">
      <h2 className="section-title text-2xl text-amber-600">Services</h2>
      <p>
        Small to medium projects with clear scope and fast delivery.
      </p>
      <div className="grid md:grid-cols-4 gap-8 md:gap-32 mt-10">
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
