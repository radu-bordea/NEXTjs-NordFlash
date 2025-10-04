// components/Packages.tsx
export default function Packages() {
  return (
    <section
      id="packages"
      className="section border-b border-slate-400 pb-4  text-slate-600"
    >
      <h2 className="section-title text-2xl text-amber-600">Packages</h2>
      <p className="section-sub">
        Simple, transparent pricing. Mobile-friendly, fast delivery.
      </p>
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid centered */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-stretch">
          {/* Card 1 */}
          <div className="h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-center">
              Simple Landing
            </h3>
            <p className="mt-2 text-slate-500 text-center">
              Coffee shops, restaurants, trainers, portfolios.
            </p>
            <p className="mt-4 text-3xl font-bold text-center text-amber-600">
              6 000 <span className="text-base font-medium">NOK</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• One-page modern design</li>
              <li>• Mobile friendly</li>
              <li>• Contact / map / socials</li>
              <li>• Deployed on Vercel</li>
              <li>• Basic GA4 analytics</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center border-t border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-amber-600 hover:text-amber-600"
            >
              Simple Package
            </a>
          </div>

          {/* Card 2 */}
          <div className="h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-center">
              Full-Stack Starter
            </h3>
            <p className="mt-2 text-slate-500 text-center">
              Auth + database (Prisma &amp; Neon/Postgres or MongoDB).
            </p>
            <p className="mt-4 text-3xl font-bold text-center text-sky-600">
              10 000 <span className="text-base font-medium">NOK</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Secure auth (Clerk or Next-Auth)</li>
              <li>• CRUD screens & admin area</li>
              <li>• DB: Neon/Postgres or MongoDB</li>
              <li>• Email notifications (optional)</li>
              <li>• GA4 events for key actions</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center border-t-1  hover:border-sky-500 hover:text-sky-500 px-4 py-2 transition "
            >
              Start Full-Stack
            </a>
          </div>

          {/* Card 3 */}
          <div className="h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-center">
              Full Application
            </h3>
            <p className="mt-2 text-slate-500 text-center">
              Complex features, dashboards, integrations.
            </p>
            <p className="mt-4 text-3xl font-bold text-center text-emerald-600">
              600 <span className="text-base font-medium">NOK / hour</span>
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>• Scope together & milestone plan</li>
              <li>• Advanced auth/roles, webhooks</li>
              <li>• Emails, background jobs, dashboards</li>
              <li>
                • Typical project: <strong>20h+</strong>
              </li>
              <li>• Weekly report & demo</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center border-t border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
            >
              Discuss your scope
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500 text-center">
          * All prices for <strong>NordFlash</strong> (operated by Radu Bordea
          Digital Solutions ENK, Bodø). Domains, email, or paid services billed
          separately at cost.
        </p>
      </div>
    </section>
  );
}
