import { projects } from "@/data/projects";
export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="section-title">Selected Work</h2>
        <p className="section-sub">A few real and demo projects I can show live.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((p) => (
            <div key={p.title} className="card">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => <span key={s} className="badge">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
