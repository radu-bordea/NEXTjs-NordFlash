'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import me from "../public/assets/me.png"

export default function Hero() {
  return (
    <header className="relative borderoverflow-hidden my-4 text-slate-600 pb-8">
      <div className="section">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Fast Web Apps & Data Dashboards.
            </motion.h1>
            <p className="mt-4 max-w-xl">
              I’m a Next.js developer building small to medium full‑stack
              projects (Next.js, Prisma, Neon, TypeScript, Tailwind) with
              optional auth (Clerk/Next‑Auth) and analytics.
            </p>
            <div className="mt-8 flex gap-4">
              <a className="btn" href="#contact">
                Get a quote
              </a>
              <a className="btn-outline" href="#work">
                See my work
              </a>
            </div>
          </div>
          <div className="relative mx-auto">
            <Image
              
              src={me}
              width={500}
              height={500}
              alt="My Picture"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
