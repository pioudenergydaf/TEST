"use client";

import { useEffect, useState } from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_UPDATED_EVENT,
  defaultCookieConsent,
  type CookieConsent,
} from "@/lib/cookie-consent";

function readConsentFromStorage(): CookieConsent {
  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!raw) return defaultCookieConsent;

  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsent>;
    return {
      essential: parsed.essential ?? true,
      analytics: parsed.analytics ?? false,
      marketing: parsed.marketing ?? false,
      updatedAt: parsed.updatedAt ?? "",
    };
  } catch {
    return defaultCookieConsent;
  }
}

export function useConsent() {
  const [consent, setConsent] = useState<CookieConsent>(defaultCookieConsent);

  useEffect(() => {
    setConsent(readConsentFromStorage());

    const onConsentUpdated = () => {
      setConsent(readConsentFromStorage());
    };

    const onStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_CONSENT_STORAGE_KEY) {
        setConsent(readConsentFromStorage());
      }
    };

    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, onConsentUpdated);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return consent;
}
