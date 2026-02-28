import { NextResponse } from "next/server";

const CATALOG_URL =
  "https://www.ecologie.gouv.fr/politiques-publiques/operations-standardisees-deconomies-denergie";
const ALLOWED_HOST = "www.ecologie.gouv.fr";

function isAllowedEcologieUrl(raw: string) {
  try {
    const parsed = new URL(raw);
    return parsed.protocol === "https:" && parsed.hostname === ALLOWED_HOST;
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const target = url.searchParams.get("url");

  if (!target || !isAllowedEcologieUrl(target)) {
    return NextResponse.redirect(CATALOG_URL);
  }

  try {
    const probe = await fetch(target, {
      method: "HEAD",
      redirect: "follow",
      cache: "no-store",
    });

    if (probe.ok) {
      return NextResponse.redirect(target);
    }

    // Fallback catalogue uniquement sur indisponibilité explicite du document.
    if (probe.status === 404 || probe.status === 410) {
      return NextResponse.redirect(CATALOG_URL);
    }

    // Pour les autres statuts (403/405/5xx), on laisse le navigateur tenter l'URL PDF.
    return NextResponse.redirect(target);
  } catch {
    // En cas d'erreur réseau côté serveur, on laisse le navigateur tenter l'URL PDF.
    return NextResponse.redirect(target);
  }
}
