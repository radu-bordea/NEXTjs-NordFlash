export default function Contact() {
  const subject = encodeURIComponent("Project inquiry — NordFlash");
  const body = encodeURIComponent("Hi Radu,\n\nI’d like help with...\n\n— Name\n— Company\n— Budget\n— Timeline");
  const mailto = `mailto:radubordea.digitalsolutions@gmail.com?subject=${subject}&body=${body}`;
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-sub">Tell me what you want to build — I’ll reply within 24 hours.</p>
        <div className="card mt-8">
          <a className="btn" href={mailto}>Email me</a>
          <p className="text-slate-400 mt-3">radubordea.digitalsolutions@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
