'use client';
import { useState } from 'react';
const links = [
  { href: '#services', label: 'Services' },
  { href: '#packages', label: 'Packages' },
  { href: '#stack', label: 'Tech' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30 border-b px-4 bg-slate-100 border-slate-300 text-slate-600">
      <div className="flex items-center justify-between h-16">
        <a href="#" className="font-semibold text-lg">
          Nord<span className="text-brand">Flash</span>
        </a>
        <button
          className="md:hidden py-1 px-2 border  rounded-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:text-brand hover:text-amber-600" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {open && (
        <div className="md:hidden border-t border-white">
          <ul className=" py-2 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  className="block py-2 hover:text-brand text-center "
                  href={l.href}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
