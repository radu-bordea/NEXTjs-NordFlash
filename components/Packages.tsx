export default function Packages() {
  return (
    <section id="packages" className="section">
      <div className="container">
        <h2 className="section-title">Packages</h2>
        <p className="section-sub">Transparent, fixed-scope offers.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="card">
            <h3 className="text-xl font-semibold">Starter Site</h3>
            <p className="text-slate-300 mt-2">One-page site, mobile-friendly, contact/CTA, basic analytics.</p>
            <ul className="text-slate-300 mt-4 list-disc list-inside space-y-1">
              <li>Next.js + Tailwind</li><li>Deployed to Vercel</li><li>GA4 installed</li>
            </ul>
            <p className="mt-6 text-brand font-semibold">From NOK 7,000</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Pro Web App</h3>
            <p className="text-slate-300 mt-2">Small app with database & auth (Prisma + Neon, Clerk/Next‑Auth).</p>
            <ul className="text-slate-300 mt-4 list-disc list-inside space-y-1">
              <li>CRUD screens</li><li>Protected admin area</li><li>Email notifications</li>
            </ul>
            <p className="mt-6 text-brand font-semibold">From NOK 18,000</p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Analytics Add‑On</h3>
            <p className="text-slate-300 mt-2">Events, dashboards, monthly report.</p>
            <ul className="text-slate-300 mt-4 list-disc list-inside space-y-1">
              <li>GA4 events</li><li>Looker Studio / Power BI</li><li>Optional Python ETL</li>
            </ul>
            <p className="mt-6 text-brand font-semibold">From NOK 12,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
