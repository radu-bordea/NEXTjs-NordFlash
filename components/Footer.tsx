export default function Footer() {
  return (
    <footer className="py-6">
      <div className="text-sm text-slate-600 flex flex-col md:flex-row items-center justify-center gap-2">
        <p>© {new Date().getFullYear()} NordFlash — Operated by Radu Bordea Digital Solutions ENK (Bodø, Norway)</p>
      </div>
    </footer>
  );
}
