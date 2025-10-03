const tech = [
  "Next.js","TypeScript","TailwindCSS","Prisma","Neon/Postgres","Clerk","Next-Auth","MongoDB (later)","Zustand (later)","Vercel"
];
export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-sub">Modern tools — simple, maintainable, and fast.</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {tech.map(t => <span key={t} className="badge">{t}</span>)}
        </div>
      </div>
    </section>
  );
}
