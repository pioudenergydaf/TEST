import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Banknote,
  CheckCircle,
  ExternalLink,
  FileText,
  Landmark,
  MapPin,
  Receipt,
  Search,
  TrendingUp,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Aides & Subventions 2026",
  description:
    "Guide complet des aides à la rénovation énergétique 2026 : CEE, MaPrimeRénov', MaPrimeRénov' Rénovation d'ampleur, Éco-PTZ, TVA 5,5% et aides locales.",
};

function ExternalResourceLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1d4ed8] underline underline-offset-2"
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}

const usefulLinks = [
  { label: "MaPrimeRénov'", href: "https://www.maprimerenov.gouv.fr" },
  { label: "France Rénov' (conseiller gratuit)", href: "https://france-renov.gouv.fr" },
  {
    label: "Fiches CEE officielles",
    href: "https://www.ecologie.gouv.fr/politiques-publiques/operations-standardisees-deconomies-denergie",
  },
  { label: "Annuaire des professionnels RGE", href: "https://france-renov.gouv.fr/annuaire-rge" },
  {
    label: "Simulateur officiel Simul'aides",
    href: "https://www.maprimerenov.gouv.fr/prweb/PRAuth/app/AIDES_/BPNVwCpLW8TKW49zoQZpAw*/!DIFFALIASBEGIN_*!DIFFALIASEND_/DisplayHar498",
  },
  { label: "ANIL (aides locales)", href: "https://www.anil.org/aides-locales-travaux/" },
];

export default function AidesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Aides & Subventions"
        title="Aides & Subventions 2026 : le guide complet"
        description="Découvrez toutes les aides disponibles pour financer vos travaux de rénovation énergétique. CEE, MaPrimeRénov', Éco-PTZ, TVA réduite... PIOUD ENERGY vous aide à les cumuler pour réduire votre reste à charge au maximum."
        imageUrl="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1700&q=80"
        primaryCta={{ href: "/simulateur", label: "Simuler mes aides" }}
        secondaryCta={{ href: "/contact", label: "Être accompagné" }}
      />

      <section className="section-shell py-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#0F2B46]">Les principales aides en 2026</h2>
          <p className="mt-3 max-w-4xl text-lg text-slate-600">
            {"Chaque dispositif répond à une logique spécifique. Nous vous aidons à les combiner intelligemment pour optimiser votre plan de financement."}
          </p>
        </Reveal>

        <div className="mt-10 space-y-7">
          <Reveal>
            <article className="card-surface border-l-4 border-emerald-500 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <Award className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#0F2B46]">Primes CEE</h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  💚 Notre expertise
                </span>
              </div>

              <p className="mt-4 text-slate-700">
                {
                  "Les CEE sont des primes versées par les fournisseurs d'énergie (EDF, TotalEnergies, Engie...) pour financer vos travaux de rénovation. PIOUD ENERGY est mandataire CEE et vous accompagne dans l'obtention de ces primes."
                }
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Pour qui ?
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Tous les ménages, sans condition de revenus</li>
                    <li>• Propriétaires occupants et bailleurs</li>
                    <li>• Locataires (avec accord du propriétaire)</li>
                    <li>• Logement de plus de 2 ans en France métropolitaine</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Montants indicatifs
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• PAC air/eau : de 5 000€ à 12 000€ (avec Coup de pouce)</li>
                    <li>• Isolation combles : variable selon surface et zone climatique</li>
                    <li>• Chaudière biomasse : de 4 000€ à 5 000€ (avec Coup de pouce)</li>
                    <li>• Rénovation globale : montant calculé selon le gain énergétique</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Points clés
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>✅ Cumulable avec MaPrimeRénov&apos;, Éco-PTZ et TVA 5,5%</li>
                  <li>✅ Aucune condition de revenus</li>
                  <li>✅ Prime versée après travaux (ou déduite de la facture)</li>
                  <li>⚠️ Demande obligatoire AVANT la signature du devis</li>
                  <li>⚠️ Travaux réalisés par un professionnel RGE</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/particuliers" className="btn-primary">
                  Découvrir nos solutions CEE
                </Link>
                <ExternalResourceLink
                  href="https://www.ecologie.gouv.fr/politiques-publiques/operations-standardisees-deconomies-denergie"
                  label="En savoir plus sur les CEE (Ministère)"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.04}>
            <article className="card-surface border-l-4 border-blue-500 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Banknote className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold text-[#0F2B46]">MaPrimeRénov&apos;</h3>
              </div>

              <p className="mt-4 text-slate-700">
                {
                  "La principale aide de l'État pour la rénovation énergétique. Gérée par l'Anah (Agence nationale de l'habitat), elle finance l'isolation, le chauffage, la ventilation et la rénovation globale."
                }
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Pour qui ?
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Tous les ménages depuis la réouverture du 23 février 2026</li>
                    <li>• Propriétaires occupants et bailleurs</li>
                    <li>• Résidence principale uniquement</li>
                    <li>
                      {
                        "• Logement de plus de 15 ans (ou 2 ans pour remplacement chaudière fioul)"
                      }
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Ce qui change en 2026
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Guichet rouvert le 23 février 2026</li>
                    <li>• Budget : 3,6 milliards d&apos;euros</li>
                    <li>
                      {"• Isolation des murs : exclue en mono-geste (uniquement en rénovation d'ampleur)"}
                    </li>
                    <li>• Chaudière biomasse : exclue en mono-geste</li>
                    <li>
                      {
                        "• DPE obligatoire à partir de 2027 pour les demandes par geste"
                      }
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Montants (selon revenus)
                </h4>
                <div className="mt-3 overflow-x-auto">
                  <table className="min-w-[720px] divide-y divide-slate-200 text-sm">
                    <thead className="text-left">
                      <tr>
                        <th className="px-3 py-2 font-semibold text-slate-700">Travaux</th>
                        <th className="bg-blue-50 px-3 py-2 font-semibold text-blue-700">Bleu</th>
                        <th className="bg-amber-50 px-3 py-2 font-semibold text-amber-700">Jaune</th>
                        <th className="bg-violet-50 px-3 py-2 font-semibold text-violet-700">
                          Violet
                        </th>
                        <th className="bg-rose-50 px-3 py-2 font-semibold text-rose-700">Rose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">PAC air/eau</td>
                        <td className="px-3 py-2">5 000€</td>
                        <td className="px-3 py-2">4 000€</td>
                        <td className="px-3 py-2">3 000€</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">Poêle à granulés</td>
                        <td className="px-3 py-2">2 500€</td>
                        <td className="px-3 py-2">2 000€</td>
                        <td className="px-3 py-2">1 500€</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">Isolation combles</td>
                        <td className="px-3 py-2">Éligible</td>
                        <td className="px-3 py-2">Éligible</td>
                        <td className="px-3 py-2">Éligible</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">Chauffe-eau solaire</td>
                        <td className="px-3 py-2">4 000€</td>
                        <td className="px-3 py-2">3 000€</td>
                        <td className="px-3 py-2">2 000€</td>
                        <td className="px-3 py-2">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {
                    "Montants indicatifs parcours par geste 2026. Consultez le site officiel pour les montants exacts."
                  }
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Points clés
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>✅ Cumulable avec les CEE</li>
                  <li>✅ Cumulable avec l&apos;Éco-PTZ</li>
                  <li>
                    {"⚠️ Demande en ligne AVANT le début des travaux sur maprimerenov.gouv.fr"}
                  </li>
                  <li>⚠️ Professionnel RGE obligatoire</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <ExternalResourceLink
                  href="https://www.maprimerenov.gouv.fr"
                  label="Faire ma demande sur MaPrimeRénov'"
                />
                <ExternalResourceLink
                  href="https://www.service-public.fr/particuliers/vosdroits/F35083"
                  label="Vérifier mon éligibilité (Service Public)"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="card-surface border-l-4 border-violet-500 p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl bg-violet-50 p-3 text-violet-600">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-bold text-[#0F2B46]">
                    MaPrimeRénov&apos; Rénovation d&apos;ampleur
                  </h3>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  Le plus ambitieux
                </span>
              </div>

              <p className="mt-4 text-slate-700">
                {
                  "Pour les projets combinant plusieurs travaux avec un gain d'au moins 2 classes DPE. Accompagnement obligatoire par un Accompagnateur Rénov'. Réservé aux logements E, F ou G."
                }
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Pour qui ?
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Propriétaires occupants ou bailleurs</li>
                    <li>• Logements classés E, F ou G au DPE</li>
                    <li>• Accompagnement obligatoire par un Accompagnateur Rénov&apos;</li>
                    <li>
                      {
                        "• Rendez-vous préalable obligatoire avec un conseiller France Rénov'"
                      }
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Montants
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>
                      {
                        "• Taux de prise en charge de 30% à 90% selon revenus et gain de classes"
                      }
                    </li>
                    <li>• Plafond de travaux : jusqu&apos;à 70 000€ HT</li>
                    <li>
                      {
                        "• Écrêtage : le cumul des aides ne dépasse pas un certain % du montant total"
                      }
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Points clés
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>✅ Cumulable avec les CEE (prime Coup de pouce Rénovation d&apos;ampleur)</li>
                  <li>✅ Très forte prise en charge pour ménages modestes</li>
                  <li>⚠️ Audit énergétique obligatoire</li>
                  <li>⚠️ Délais d&apos;instruction longs (&gt; 6 mois)</li>
                </ul>
              </div>

              <div className="mt-6">
                <ExternalResourceLink
                  href="https://www.service-public.fr/particuliers/vosdroits/F35083"
                  label="En savoir plus (Service Public)"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="card-surface border-l-4 border-amber-500 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-amber-50 p-3 text-amber-600">
                  <Landmark className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold text-[#0F2B46]">Éco-PTZ</h3>
              </div>

              <p className="mt-4 text-slate-700">
                {
                  "Un prêt bancaire à taux zéro pour financer le reste à charge de vos travaux de rénovation énergétique. Aucun intérêt à rembourser."
                }
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Pour qui ?
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Propriétaires occupants ou bailleurs</li>
                    <li>• Pas de condition de revenus</li>
                    <li>• Logement de plus de 2 ans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Montants
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Jusqu&apos;à 15 000€ pour un geste seul</li>
                    <li>• Jusqu&apos;à 25 000€ pour 2 gestes</li>
                    <li>• Jusqu&apos;à 30 000€ pour 3 gestes ou plus</li>
                    <li>• Jusqu&apos;à 50 000€ pour une rénovation globale</li>
                    <li>• Remboursement sur 15 à 20 ans</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Points clés
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>✅ Cumulable avec CEE et MaPrimeRénov&apos;</li>
                  <li>✅ Taux 0% : vous ne payez aucun intérêt</li>
                  <li>⚠️ À demander auprès d&apos;une banque partenaire</li>
                  <li>⚠️ Professionnel RGE obligatoire</li>
                </ul>
              </div>

              <div className="mt-6">
                <ExternalResourceLink
                  href="https://www.service-public.fr/particuliers/vosdroits/F19905"
                  label="Liste des banques partenaires (Service Public)"
                />
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="card-surface border-l-4 border-slate-500 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-slate-100 p-3 text-slate-600">
                  <Receipt className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold text-[#0F2B46]">TVA à 5,5%</h3>
              </div>

              <p className="mt-4 text-slate-700">
                {
                  "Les travaux de rénovation énergétique bénéficient automatiquement d'une TVA réduite à 5,5% au lieu de 20%. Cette réduction est appliquée directement sur la facture par l'artisan."
                }
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Pour qui ?
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Tous les ménages</li>
                    <li>• Logement de plus de 2 ans</li>
                    <li>• Résidence principale ou secondaire</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Montant
                  </h4>
                  <ul className="mt-2 space-y-2 text-sm text-slate-700">
                    <li>• Économie automatique de 14,5% sur le montant TTC des travaux</li>
                    <li>• Appliquée directement par le professionnel sur la facture</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Points clés
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>✅ Automatique, pas de demande à faire</li>
                  <li>✅ Cumulable avec toutes les autres aides</li>
                  <li>⚠️ Attestation simplifiée à remplir (formulaire Cerfa)</li>
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.2}>
            <article className="card-surface border-l-4 border-orange-500 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex rounded-xl bg-orange-50 p-3 text-orange-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold text-[#0F2B46]">Aides locales & complémentaires</h3>
              </div>

              <p className="mt-4 text-slate-700">
                {
                  "En plus des aides nationales, de nombreuses collectivités locales (régions, départements, communes) proposent des subventions complémentaires pour la rénovation énergétique."
                }
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Exemples
                </h4>
                <ul className="mt-2 space-y-2 text-sm text-slate-700">
                  <li>• Aides régionales : certaines régions proposent des primes additionnelles</li>
                  <li>
                    {
                      "• Aides des communes : chèques énergie locaux, accompagnement spécifique"
                    }
                  </li>
                  <li>
                    {
                      "• Action Logement : aide de 20 000€ maximum pour les salariés du privé"
                    }
                  </li>
                  <li>
                    {
                      "• Caisses de retraite : aides pour l'adaptation et la rénovation des logements"
                    }
                  </li>
                  <li>• Chèque énergie : 48€ à 277€/an pour les ménages modestes</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <ExternalResourceLink
                  href="https://www.anil.org/aides-locales-travaux/"
                  label="Trouver les aides près de chez vous (ANIL)"
                />
                <ExternalResourceLink
                  href="https://france-renov.gouv.fr"
                  label="Contacter un conseiller France Rénov'"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#0F2B46]">
            Comment cumuler les aides : exemple concret
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            {
              "Exemple : Installation d'une PAC air/eau en remplacement d'une chaudière gaz (ménage aux revenus modestes, maison de 130m² en zone H1)."
            }
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card-surface mt-8 border border-emerald-200 bg-emerald-50/70 p-6 sm:p-8">
            <div className="overflow-x-auto">
              <table className="min-w-[640px] divide-y divide-emerald-200 text-sm">
                <tbody className="divide-y divide-emerald-100">
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-700">
                      MaPrimeRénov&apos; (Jaune)
                    </td>
                    <td className="px-3 py-2 text-right text-slate-700">4 000€</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-700">Prime CEE Coup de pouce x5</td>
                    <td className="px-3 py-2 text-right text-slate-700">5 800€</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-700">
                      Éco-PTZ (reste à charge)
                    </td>
                    <td className="px-3 py-2 text-right text-slate-700">
                      jusqu&apos;à 15 000€ à taux 0%
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-medium text-slate-700">TVA 5,5%</td>
                    <td className="px-3 py-2 text-right text-slate-700">appliquée automatiquement</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-base font-bold text-emerald-800">
                      Total des aides
                    </td>
                    <td className="px-3 py-2 text-right text-base font-bold text-emerald-800">
                      ~9 800€
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-base font-semibold text-slate-800">
                      Coût de la PAC
                    </td>
                    <td className="px-3 py-2 text-right text-base font-semibold text-slate-800">
                      ~15 500€ TTC
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-base font-bold text-[#0F2B46]">Reste à charge</td>
                    <td className="px-3 py-2 text-right text-base font-bold text-[#0F2B46]">
                      ~5 700€ (finançable par Éco-PTZ à 0%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-slate-600">
              {
                "Montants indicatifs. Le montant réel dépend de votre situation. Contactez PIOUD ENERGY pour une estimation personnalisée."
              }
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#0F2B46]">Tableau récapitulatif des aides</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card-surface mt-8 overflow-x-auto p-2">
            <table className="min-w-[900px] divide-y divide-slate-200 text-sm">
              <thead>
                <tr className="text-left text-slate-700">
                  <th className="px-4 py-3 font-semibold">Aide</th>
                  <th className="px-4 py-3 font-semibold">Qui peut en bénéficier</th>
                  <th className="px-4 py-3 font-semibold">Montant max</th>
                  <th className="px-4 py-3 font-semibold">Cumulable CEE</th>
                  <th className="px-4 py-3 font-semibold">Demande</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0F2B46]">CEE</td>
                  <td className="px-4 py-3">Tous, sans condition de revenus</td>
                  <td className="px-4 py-3">Variable (jusqu&apos;à 12 000€)</td>
                  <td className="px-4 py-3">—</td>
                  <td className="px-4 py-3">Avant devis</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0F2B46]">MaPrimeRénov&apos;</td>
                  <td className="px-4 py-3">Tous (depuis fév. 2026)</td>
                  <td className="px-4 py-3">Variable selon revenus</td>
                  <td className="px-4 py-3">✅ Oui</td>
                  <td className="px-4 py-3">En ligne avant travaux</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0F2B46]">
                    MaPrimeRénov&apos; Ampleur
                  </td>
                  <td className="px-4 py-3">E, F, G au DPE</td>
                  <td className="px-4 py-3">90% du coût</td>
                  <td className="px-4 py-3">✅ Oui</td>
                  <td className="px-4 py-3">En ligne + accompagnateur</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0F2B46]">Éco-PTZ</td>
                  <td className="px-4 py-3">Tous, sans condition</td>
                  <td className="px-4 py-3">50 000€</td>
                  <td className="px-4 py-3">✅ Oui</td>
                  <td className="px-4 py-3">Auprès d&apos;une banque</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0F2B46]">TVA 5,5%</td>
                  <td className="px-4 py-3">Tous, logement &gt; 2 ans</td>
                  <td className="px-4 py-3">-14,5% sur facture</td>
                  <td className="px-4 py-3">✅ Oui</td>
                  <td className="px-4 py-3">Automatique</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-[#0F2B46]">Aides locales</td>
                  <td className="px-4 py-3">Variable</td>
                  <td className="px-4 py-3">Variable</td>
                  <td className="px-4 py-3">✅ Souvent</td>
                  <td className="px-4 py-3">Selon collectivité</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#0F2B46]">L&apos;accompagnement PIOUD ENERGY</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            {
              "Nos experts vous accompagnent du diagnostic initial jusqu'au versement effectif des primes pour sécuriser vos démarches."
            }
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Reveal>
            <article className="card-surface p-6">
              <span className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Search className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#0F2B46]">
                Identification des aides
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                {
                  "Nous analysons votre situation et identifions toutes les aides auxquelles vous avez droit."
                }
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="card-surface p-6">
              <span className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#0F2B46]">Montage des dossiers</h3>
              <p className="mt-2 text-sm text-slate-700">
                {
                  "Nous constituons vos dossiers CEE et vous guidons pour les demandes MaPrimeRénov' et Éco-PTZ."
                }
              </p>
            </article>
          </Reveal>

          <Reveal delay={0.16}>
            <article className="card-surface p-6">
              <span className="inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#0F2B46]">
                Suivi jusqu&apos;au versement
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                {"Nous suivons vos dossiers jusqu'au versement effectif de toutes vos primes."}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20">
        <Reveal>
          <h2 className="text-4xl font-bold text-[#0F2B46]">Liens utiles</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {usefulLinks.map((resource, index) => (
            <Reveal key={resource.href} delay={(index % 2) * 0.06}>
              <article className="card-surface p-5">
                <ExternalResourceLink href={resource.href} label={`🔗 ${resource.label}`} />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pb-10">
        <Reveal>
          <div className="card-surface bg-gradient-to-r from-[#0F2B46] to-[#0E7B6D] p-8 text-white">
            <h2 className="text-3xl font-bold">Passez à l&apos;action avec un plan de financement clair</h2>
            <p className="mt-3 max-w-3xl text-white/90">
              {
                "Simulez vos aides et échangez avec un conseiller PIOUD ENERGY pour sécuriser vos démarches avant signature."
              }
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/simulateur"
                className="inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#0F2B46]"
              >
                Estimez toutes vos aides
              </Link>
              <Link href="/contact" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Parler à un conseiller PIOUD ENERGY
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
