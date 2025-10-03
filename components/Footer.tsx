export default function Footer() {
  return (
    <footer className="border-t border-slate-600 py-8">
      <div className="text-sm text-slate-700 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} NordFlash — Operated by Radu Bordea Digital Solutions ENK (Bodø, Norway)</p>
        <div className="flex gap-4">
          <a className="hover:text-brand" href="#services">Services</a>
          <a className="hover:text-brand" href="#work">Work</a>
          <a className="hover:text-brand" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
