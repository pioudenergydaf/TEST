export type CookieConsent = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const COOKIE_CONSENT_STORAGE_KEY = "pioud-cookie-consent";
export const COOKIE_CONSENT_OPEN_EVENT = "pioud:open-cookie-settings";
export const COOKIE_CONSENT_UPDATED_EVENT = "pioud:consent-updated";

export const defaultCookieConsent: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
};
