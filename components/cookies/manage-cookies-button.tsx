"use client";

import { COOKIE_CONSENT_OPEN_EVENT } from "@/lib/cookie-consent";

export function ManageCookiesButton() {
  const openBanner = () => {
    window.dispatchEvent(new Event(COOKIE_CONSENT_OPEN_EVENT));
  };

  return (
    <button
      type="button"
      onClick={openBanner}
      className="text-slate-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
    >
      Gestion des cookies
    </button>
  );
}
