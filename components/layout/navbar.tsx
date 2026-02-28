"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [professionalsMenuOpen, setProfessionalsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProfessionalsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#0F2B46] transition-shadow ${
        isScrolled ? "shadow-2xl shadow-[#04121f]/35" : "shadow-md shadow-[#04121f]/20"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="inline-flex flex-col leading-tight">
          <span className="text-2xl font-extrabold tracking-wide text-white">
            PIOUD ENERGY
          </span>
          <span className="text-xs font-medium text-slate-200">
            Certificats d&apos;Économies d&apos;Énergie
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isProfessionals = link.href === "/professionnels";
            const active = isProfessionals
              ? pathname.startsWith("/professionnels")
              : pathname === link.href;

            if (isProfessionals) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProfessionalsMenuOpen(true)}
                  onMouseLeave={() => setProfessionalsMenuOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={link.href}
                      className={`text-sm font-semibold transition ${
                        active ? "text-emerald-300" : "text-slate-200 hover:text-white"
                      } focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/40`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Ouvrir le menu Professionnels"
                      onClick={() => setProfessionalsMenuOpen((open) => !open)}
                      className="rounded p-1 text-slate-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </div>

                  <AnimatePresence>
                    {professionalsMenuOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-3 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15"
                      >
                        <Link
                          href="/professionnels/tertiaire"
                          className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                            pathname === "/professionnels/tertiaire"
                              ? "bg-slate-100 text-[#0F2B46]"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          Tertiaire
                        </Link>
                        <Link
                          href="/professionnels/industrie"
                          className={`mt-1 block rounded-lg px-3 py-2 text-sm font-medium transition ${
                            pathname === "/professionnels/industrie"
                              ? "bg-slate-100 text-[#0F2B46]"
                              : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          Industrie
                        </Link>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition ${
                  active ? "text-emerald-300" : "text-slate-200 hover:text-white"
                } focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white/40`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/simulateur"
            className="inline-flex items-center rounded-full bg-[#10B981] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-500"
          >
            Simulateur
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/30 p-2 text-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/15 bg-[#0B2238] px-6 pb-6 pt-4 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                if (link.href === "/professionnels") {
                  return (
                    <div key={link.href} className="space-y-2">
                      <Link
                        href={link.href}
                        className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                          pathname === link.href || pathname.startsWith("/professionnels")
                            ? "bg-white/10 text-emerald-300"
                            : "text-slate-100 hover:bg-white/10"
                        } focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}
                      >
                        {link.label}
                      </Link>
                      <div className="ml-3 space-y-2 border-l border-white/20 pl-3">
                        <Link
                          href="/professionnels/tertiaire"
                          className={`block rounded-lg px-3 py-2 text-sm transition ${
                            pathname === "/professionnels/tertiaire"
                              ? "bg-white/10 text-emerald-300"
                              : "text-slate-200 hover:bg-white/10"
                          }`}
                        >
                          Tertiaire
                        </Link>
                        <Link
                          href="/professionnels/industrie"
                          className={`block rounded-lg px-3 py-2 text-sm transition ${
                            pathname === "/professionnels/industrie"
                              ? "bg-white/10 text-emerald-300"
                              : "text-slate-200 hover:bg-white/10"
                          }`}
                        >
                          Industrie
                        </Link>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      pathname === link.href
                        ? "bg-white/10 text-emerald-300"
                        : "text-slate-100 hover:bg-white/10"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/simulateur"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[#10B981] px-6 py-3 font-semibold text-white transition hover:bg-emerald-500"
              >
                Accéder au simulateur
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Nous écrire
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
