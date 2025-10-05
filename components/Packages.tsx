import { Check, Minus } from "lucide-react";

type FeatureKey =
  | "responsive"
  | "contact"
  | "pictures"
  | "gallery"
  | "maps"
  | "ga4"
  | "auth"
  | "crud"
  | "db"
  | "emails"
  | "events"
  | "admin"
  | "maintenance";

const FEATURES: Record<FeatureKey, string> = {
  responsive: "Responsive design + navbar",
  contact: "Contact / socials",
  pictures: "Static Image Gallery",
  gallery: "Editable Gallery (Sanity / Cloudinary)",
  maps: "Google Maps location",
  ga4: "GA4 analytics (basic)",
  auth: "Authentication (Clerk / Next-Auth)",
  crud: "CRUD screens",
  db: "Database (Neon/Postgres or MongoDB)",
  emails: "Email notifications",
  events: "Tracked events (key actions)",
  admin: "Admin area / roles",
  maintenance: "Deployment & setup on Vercel",
};

function FeatureItem({
  label,
  included,
}: {
  label: string;
  included: boolean;
}) {
  return (
    <li
      className={`flex items-start gap-2 ${
        included ? "text-slate-700 font-medium" : "text-slate-400 line-through"
      }`}
    >
      {included ? (
        <Check className="mt-[2px] h-4 w-4 text-emerald-600 shrink-0" />
      ) : (
        <Minus className="mt-[2px] h-4 w-4 text-slate-300 shrink-0" />
      )}
      <span>{label}</span>
    </li>
  );
}

export default function Packages() {
  return (
    <section
      id="packages"
      className="section border-b border-slate-300 pb-10 text-slate-700"
    >
      <h2 className="section-title text-2xl text-amber-600 text-center">
        Packages
      </h2>
      <p className="section-sub text-center">
        Simple, transparent pricing. Mobile-friendly, fast delivery.
      </p>

      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Simple Landing */}
          <div className="relative h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white shadow">
              Intro Offer
            </div>

            <h3 className="text-xl font-semibold text-center">
              Simple Landing
            </h3>
            <p className="mt-2 text-slate-500 text-center">
              Coffee shops, restaurants, trainers, portfolios.
            </p>

            <p className="mt-4 text-3xl font-bold text-center text-amber-600">
              6 000 <span className="text-base font-medium">NOK</span>
            </p>
            <p className="text-center text-xs text-slate-500">
              Intro offer ·{" "}
              <span className="text-sm line-through decoration-amber-400/60">
                8 000 NOK
              </span>{" "}
              normal price
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <FeatureItem label={FEATURES.responsive} included />
              <FeatureItem label={FEATURES.contact} included />
              <FeatureItem label={FEATURES.pictures} included />
              <FeatureItem label={FEATURES.maintenance} included />
              <FeatureItem label={FEATURES.auth} included={false} />
              <FeatureItem label={FEATURES.db} included={false} />
              <FeatureItem label={FEATURES.crud} included={false} />
              <FeatureItem label={FEATURES.maps} included={false} />
              <FeatureItem label={FEATURES.admin} included={false} />
              <FeatureItem label={FEATURES.emails} included={false} />
              <FeatureItem label={FEATURES.ga4} included={false} />
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center border-t border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-amber-600 hover:text-amber-600"
            >
              Simple Package
            </a>
          </div>

          {/* Full-Stack Starter (Featured) */}
          <div className="relative h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white shadow">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold text-center">
              Full-Stack Starter
            </h3>
            <p className="mt-2 text-slate-500 text-center">
              Auth + database (Prisma &amp; Neon/Postgres or MongoDB).
            </p>

            <p className="mt-4 text-3xl font-bold text-center text-sky-600">
              10 000 <span className="text-base font-medium">NOK</span>
            </p>
            <p className="text-center text-xs text-slate-500">
              Intro offer ·{" "}
              <span className="text-sm line-through decoration-sky-400/60">
                16 000 NOK
              </span>{" "}
              normal price
            </p>

            <ul className="mt-4 space-y-2 text-sm">
              <FeatureItem label={FEATURES.responsive} included />
              <FeatureItem label={FEATURES.contact} included />
              <FeatureItem label={FEATURES.gallery} included />
              <FeatureItem label={FEATURES.maintenance} included />
              <FeatureItem label={FEATURES.auth} included />
              <FeatureItem label={FEATURES.db} included />
              <FeatureItem label={FEATURES.crud} included />
              <FeatureItem label={FEATURES.maps} included />
              <FeatureItem label={FEATURES.admin} included />
              <FeatureItem label={FEATURES.emails} included />
              <FeatureItem label={FEATURES.ga4} included />
            </ul>

            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center border-t border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-sky-600 hover:text-sky-600"
            >
              Start Full-Stack
            </a>
          </div>

          {/* Full Application (Hourly) */}
          <div className="relative h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition">
            {/* Custom Projects badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
              Custom Projects
            </div>

            <h3 className="text-xl font-semibold text-center">
              Full Application
            </h3>
            <p className="mt-2 text-slate-500 text-center">
              Built for complex or custom projects that go beyond standard
              packages.
            </p>

            <p className="mt-4 text-3xl font-bold text-center text-emerald-600">
              500 <span className="text-base font-medium">NOK / hour</span>
            </p>
            <p className="text-center text-xs text-slate-500">
              Planned standard rate:{" "}
              <span className="text-sm line-through decoration-emerald-400/60">
                700 NOK / hour
              </span>
            </p>

            <div className="mt-4 text-sm text-slate-600 space-y-3">
              <p>
                Includes all features from previous packages — websites,
                full-stack apps, authentication, databases, analytics, and
                dashboards — customized to fit your specific business needs.
              </p>
              <p>
                Ideal for advanced web applications, admin systems, API
                integrations, automations, and ongoing development partnerships.
              </p>
              <p>
                Optional <strong>maintenance plans</strong> available after
                launch for updates, monitoring, and continuous improvements.
              </p>
              <p className="text-xs text-slate-500">
                Estimated scope discussed together before starting. Typical
                projects take 20h+ with milestone planning and regular demos.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex w-full items-center justify-center border-t border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600"
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
