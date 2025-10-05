export default function About() {
  return (
    <section
      id="about"
      className="section text-slate-600 border-b border-slate-200 pb-6 pt-6"
    >
      <div className="w-full mx-auto">
        <h2 className="section-title text-2xl text-amber-600 mb-4">About Me</h2>

        <p className="section-sub text-lg text-neutral-600 leading-relaxed">
          I’m <strong>Radu Bordea</strong> — a freelance web developer based in{" "}
          <strong>Bodø, Norway</strong>. I build small to medium{" "}
          <strong>full-stack applications</strong> and websites using
          <strong>
            {" "}
            Next.js, Prisma, Neon/Postgres, TypeScript, TailwindCSS
          </strong>
          , and secure authentication with <strong>Clerk</strong> or{" "}
          <strong>Next-Auth</strong>.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          I graduated in <strong>2024</strong> from{" "}
          <strong>Åland University of Applied Sciences </strong>
          in Mariehamn, Finland. Along the way, I developed a strong passion for
          combining 
          <strong> clean design</strong> with{" "}
          <strong>efficient data solutions</strong>.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          I speak <strong>English</strong>, <strong>Swedish</strong>, and{" "}
          <strong>Romanian</strong>, and enjoy connecting with clients and teams
          from different backgrounds.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed">
          I’m a <strong>positive, social, and curious</strong> person — always
          learning new tools and technologies. Currently, I’m expanding my
          skills in <strong>data engineering</strong> (Python, Power BI,
          Snowflake) to combine <strong>analytics and app development</strong>{" "}
          for smarter business insights.
        </p>

        <p className="mt-5 text-neutral-600 leading-relaxed italic">
          My goal is to build modern, reliable digital products that help people
          and businesses grow.
        </p>
      </div>
    </section>
  );
}
