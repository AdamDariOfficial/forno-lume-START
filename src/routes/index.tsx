import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Leaf,
  Lightbulb,
  Flame,
  Wine,
  ChevronDown,
  ExternalLink,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useLayoutEffect, useState, type MouseEvent } from "react";
import { useRouterState } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import heroMobileImg from "@/assets/hero-mobile.jpg";
import aboutImg from "@/assets/about.jpg";
import dishImg from "@/assets/dish.jpg";
import { SITE_URL, site, mailLink, telLink, type ReviewsConfig } from "@/config/site";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ContactChoiceDialog } from "@/components/site/ContactChoiceDialog";
import { MapEmbed } from "@/components/site/MapEmbed";
import { GalleryRail } from "@/components/site/GalleryRail";
import { RevealDivider } from "@/components/site/RevealDivider";
import { scrollToSection } from "@/lib/nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forno Lume | Bistrot e pizzeria a Padova" },
      {
        name: "description",
        content:
          "Cucina semplice, pizza e ingredienti selezionati in un bistrot contemporaneo a Padova. Scopri il menu e prenota il tuo tavolo.",
      },
      {
        property: "og:title",
        content: "Forno Lume | Bistrot e pizzeria a Padova",
      },
      {
        property: "og:description",
        content:
          "Cucina semplice, pizza e ingredienti selezionati in un bistrot contemporaneo a Padova. Scopri il menu e prenota il tuo tavolo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: site.brand.name,
              description: site.brand.description,
              inLanguage: "it-IT",
            },
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}#webpage`,
              url: SITE_URL,
              name: "Forno Lume — Demo Hospitality START",
              description: "Concept dimostrativo Tretnix per un sito Hospitality START.",
              inLanguage: "it-IT",
              isPartOf: { "@id": `${SITE_URL}#website` },
            },
          ],
        }).replace(/</g, "\\u003c"),
      },
    ],
  }),
  component: HomePage,
});

const offerIcons = [Leaf, Flame, Wine];
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function HomePage() {
  const scrollTo = useRouterState({
    select: (s) => s.location.state.scrollTo,
  });

  useIsomorphicLayoutEffect(() => {
    if (!scrollTo) return;
    scrollToSection(scrollTo, "auto");
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <OfferSection />
        <MenuPreview />
        <MethodSection />
        <AboutSection />
        <GalleryRail />
        <PracticalInfo />
        <FAQSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────── Hero ─────────── */
function Hero() {
  const navigate = useNavigate();

  const handleMenuClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    void navigate({
      to: ".",
      hash: "menu",
      resetScroll: false,
      hashScrollIntoView: false,
    }).then(() => scrollToSection("menu"));
  };

  return (
    <section className="hero-shell">
      <div aria-hidden className="hero-desktop-glow" />

      <div className="hero-layout">
        <div className="hero-media">
          <div aria-hidden className="hero-media-glow" />
          <picture className="hero-picture">
            <source media="(max-width: 1099px)" srcSet={heroMobileImg} />
            <img
              src={heroImg}
              alt="Una pizza artigianale viene infornata nel forno a legna"
              width={1440}
              height={1620}
              fetchPriority="high"
            />
          </picture>
          <div aria-hidden className="hero-mobile-overlay" />
          <div className="hero-status">
            <span aria-hidden className="hero-status-dot" />
            <span className="hero-status-kicker">Stasera</span>
            <span className="hero-status-copy">Forno acceso alle 18:30</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow fade-up">{site.brand.kicker}</p>
          <h1 className="hero-title fade-up" style={{ animationDelay: "80ms" }}>
            <span className="hero-title-line hero-title-line-1">Cucina semplice,</span>
            <span className="hero-title-line hero-title-line-2 italic text-terracotta">
              atmosfera calda,
            </span>
            <span className="hero-title-line hero-title-line-3">dettagli curati.</span>
          </h1>

          <p className="hero-description fade-up" style={{ animationDelay: "160ms" }}>
            {site.brand.description}
          </p>

          <div className="hero-actions fade-up" style={{ animationDelay: "240ms" }}>
            <ContactChoiceDialog kind="booking">
              <button type="button" className="hero-primary-cta motion-cta">
                <MessageCircle aria-hidden className="h-4 w-4" />
                Prenota un tavolo
              </button>
            </ContactChoiceDialog>
            <a href="#menu" onClick={handleMenuClick} className="hero-menu-cta motion-cta group">
              Scopri il menu
              <span aria-hidden className="menu-scroll-hover">
                <ChevronDown className="menu-scroll-cue h-4 w-4" />
              </span>
            </a>
          </div>

          <div className="hero-meta fade-up" style={{ animationDelay: "320ms" }}>
            <div className="hero-meta-item">
              <strong>
                <Clock aria-hidden className="h-3.5 w-3.5 text-terracotta" />
                Orari
              </strong>
              <span>Mar–Dom · 18:30–23:00</span>
            </div>
            <div className="hero-meta-item">
              <strong>
                <MapPin aria-hidden className="h-3.5 w-3.5 text-terracotta" />
                Dove
              </strong>
              <a
                href={site.contact.mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm transition-colors hover:text-terracotta"
                aria-label={`${site.contact.area}, apri su Google Maps`}
              >
                {site.contact.area}
              </a>
            </div>
            <div className="hero-meta-item hero-meta-advice">
              <strong>
                <Lightbulb aria-hidden className="h-3.5 w-3.5 text-terracotta" />
                Consiglio
              </strong>
              <span>Prenota prima</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Experience anchor section (offering intro) ─────────── */
function ExperienceSection() {
  return (
    <section id="esperienza" className="container-page pt-16 pb-12 md:pt-20 md:pb-16 min-[1100px]:pt-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            <p className="eyebrow">L'esperienza</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.1] md:text-5xl">
              Poche cose,
              <br />
              <span className="italic text-terracotta">scelte bene.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:pt-4">
          <Reveal delay={80}>
            <p className="text-base text-muted-foreground md:text-lg">
              Un piccolo rifugio urbano: menu stagionale, impasti curati, vini scelti e un servizio
              informale.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Offer / three cards ─────────── */
function OfferSection() {
  return (
    <section className="container-page pb-6 md:pb-10 min-[1100px]:pb-12">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 min-[1100px]:grid-cols-3">
        {site.offer.map((o, i) => {
          const Icon = offerIcons[i] ?? Leaf;
          const wideTabletCard = i === site.offer.length - 1;

          return (
            <Reveal
              key={o.title}
              as="article"
              delay={i * 120}
              className={wideTabletCard ? "sm:col-span-2 min-[1100px]:col-span-1" : ""}
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-8 ${
                  wideTabletCard
                    ? "sm:grid sm:grid-cols-[auto_minmax(0,1fr)] sm:gap-x-6 min-[1100px]:block"
                    : ""
                }`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <Icon className="h-5 w-5" />
                </div>
                <div className={wideTabletCard ? "sm:min-w-0" : ""}>
                  <h3
                    className={`mt-6 font-display text-2xl leading-tight ${
                      wideTabletCard ? "sm:mt-0 min-[1100px]:mt-6" : ""
                    }`}
                  >
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground md:text-[15px]">{o.body}</p>
                </div>
                <div
                  className={`mt-8 flex items-center gap-2 border-t border-border pt-4 text-xs uppercase tracking-widest text-muted-foreground ${
                    wideTabletCard ? "sm:col-span-2 sm:mt-6 min-[1100px]:mt-8" : ""
                  }`}
                >
                  <span className="h-px w-6 bg-terracotta" />
                  {o.detail}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* ─────────── Menu preview ─────────── */
function MenuPreview() {
  return (
    <section id="menu" className="relative pt-16 pb-12 md:pt-20 md:pb-14 min-[1100px]:pb-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/50 to-transparent"
      />
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">Anteprima menu</p>
            <h2 className="mt-4 text-4xl font-medium md:text-5xl">Una piccola selezione</h2>
          </Reveal>
          <Reveal delay={80} className="mt-5">
            <p className="text-sm text-muted-foreground md:text-[15px]">
              Una selezione essenziale tra cucina, lievitati e piccoli assaggi della serata.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <ul className="md:col-span-7 divide-y divide-border/70">
            {site.menu.map((m, i) => (
              <Reveal
                key={m.name}
                as="li"
                delay={i * 70}
                className="grid grid-cols-[1fr_auto] items-baseline gap-4 py-5"
              >
                <div className="min-w-0">
                  <p className="font-display text-xl leading-tight">{m.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                </div>
                <span className="shrink-0 font-display text-lg text-terracotta">€{m.price}</span>
              </Reveal>
            ))}
          </ul>

          <div className="md:col-span-5">
            <div className="sticky top-24">
              <Reveal className="overflow-hidden rounded-3xl border border-border">
                <img
                  src={dishImg}
                  alt="Pizza Margherita servita su un tavolo rustico"
                  loading="lazy"
                  width={1400}
                  height={1400}
                  className="h-72 w-full object-cover md:h-[440px]"
                />
                <div className="bg-card p-6">
                  <p className="text-sm text-muted-foreground">
                    Scopri la proposta della serata e prenota il tuo tavolo.
                  </p>
                  <ContactChoiceDialog kind="booking">
                    <button
                      type="button"
                      className="motion-cta mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
                    >
                      <MessageCircle aria-hidden className="h-4 w-4" />
                      Prenota un tavolo
                    </button>
                  </ContactChoiceDialog>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── About ─────────── */
function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="container-page pt-12 pb-16 md:pt-16 md:pb-16 min-[1100px]:pt-20 min-[1100px]:pb-20"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="order-2 md:order-1 md:col-span-6">
          <Reveal className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
            <img
              src={aboutImg}
              alt="Le mani di un pizzaiolo preparano una base con pomodoro e mozzarella"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-[420px] w-full object-cover md:h-[560px]"
            />
          </Reveal>
        </div>
        <div className="order-1 md:order-2 md:col-span-6 md:pt-6">
          <Reveal>
            <p className="eyebrow">Chi siamo</p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.1] md:text-5xl">
              Un locale piccolo,
              <br />
              <span className="italic text-terracotta">curato e sincero.</span>
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-6">
            <p className="text-base text-muted-foreground md:text-lg">
              Pochi elementi, scelti bene. Dall'impasto al servizio, ogni dettaglio è pensato per
              accogliere con semplicità.
            </p>
          </Reveal>
          <div className="relative mt-8 grid grid-cols-2 gap-6 border-t border-transparent pt-6">
            <RevealDivider className="inset-x-0 -top-px h-px bg-border" />
            <Reveal delay={160}>
              <p className="font-display text-3xl text-terracotta">01</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Un menu essenziale che cambia con le stagioni.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="font-display text-3xl text-terracotta">02</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Un servizio che accoglie, senza mai imporsi.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Method / 3 steps ─────────── */
function MethodSection() {
  return (
    <section id="come-funziona" className="border-y border-border bg-secondary/30">
      <div className="container-page py-16 min-[1100px]:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Come funziona</p>
          <h2 className="mt-4 text-3xl font-medium md:text-4xl">
            Da un messaggio al tavolo, in pochi minuti.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 min-[900px]:grid-cols-3 min-[900px]:gap-6">
          {site.experience.map((s, i) => (
            <Reveal key={s.step} delay={i * 140} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-4xl text-terracotta">{s.step}</span>
                {i < site.experience.length - 1 && (
                  <span aria-hidden className="hidden h-px flex-1 bg-border min-[900px]:block" />
                )}
              </div>
              <h3 className="mt-5 font-display text-2xl leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground md:text-[15px]">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Central CTA ─────────── */
function CTASection() {
  return (
    <section className="container-page pt-12 pb-14 md:pt-16 md:pb-20 min-[1100px]:pt-20">
      <div
        className="relative overflow-hidden rounded-[2rem] border border-border p-7 sm:p-10 md:p-14"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.30 0.05 40) 0%, oklch(0.42 0.10 40) 55%, oklch(0.55 0.13 45) 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/30 blur-3xl md:h-72 md:w-72"
        />
        <div className="relative max-w-2xl text-primary-foreground">
          <Reveal>
            <p className="eyebrow" style={{ color: "oklch(0.86 0.08 82)" }}>
              <span className="opacity-80">Prenota ora</span>
            </p>
          </Reveal>
          <Reveal delay={70} className="mt-4">
            <h2 className="text-4xl font-medium leading-[1.05] md:text-5xl">
              Vuoi riservare un tavolo
              <br />
              <span className="italic" style={{ color: "oklch(0.86 0.08 82)" }}>
                per questa sera?
              </span>
            </h2>
          </Reveal>
          <Reveal delay={140} className="mt-5">
            <p className="max-w-lg text-base opacity-85 md:text-lg">
              Contattaci: confermiamo disponibilità e orario in pochi passaggi.
            </p>
          </Reveal>
          <Reveal delay={210} className="mt-8">
            <div className="flex flex-wrap gap-3">
              <ContactChoiceDialog kind="booking">
                <button
                  type="button"
                  className="motion-cta inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground hover:opacity-90"
                >
                  <MessageCircle aria-hidden className="h-4 w-4" />
                  Prenota un tavolo
                </button>
              </ContactChoiceDialog>
              <ContactChoiceDialog kind="contact">
                <button
                  type="button"
                  className="motion-cta inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-primary-foreground hover:bg-white/10"
                >
                  <Mail aria-hidden className="h-4 w-4" />
                  Contattaci
                </button>
              </ContactChoiceDialog>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Practical info ─────────── */
function PracticalInfo() {
  return (
    <section id="info" className="container-page pt-12 pb-16 md:pt-16 md:pb-16 min-[1100px]:pt-20">
      <div className="grid gap-10 min-[1100px]:grid-cols-12">
        <div className="min-w-0 max-w-2xl min-[1100px]:col-span-5 min-[1100px]:max-w-none">
          <Reveal>
            <p className="eyebrow">Informazioni pratiche</p>
            <h2 className="mt-4 text-4xl font-medium md:text-5xl">Dove siamo</h2>
          </Reveal>
          <Reveal delay={80} className="mt-4">
            <p className="text-muted-foreground">
              Nel centro di Padova, vicino a Prato della Valle. Nel weekend è consigliata la
              prenotazione.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-8">
            <dl className="space-y-5">
              <InfoRow
                icon={MapPin}
                label="Indirizzo"
                value={site.contact.address}
                href={site.contact.mapExternalUrl}
              />
              <InfoRow icon={Clock} label="Orari" value={site.contact.hours} />
              <InfoRow icon={Phone} label="Telefono" value={site.contact.phone} href={telLink()} />
              <InfoRow icon={Mail} label="Email" value={site.contact.email} href={mailLink()} />
            </dl>
          </Reveal>
        </div>

        <div className="min-w-0 min-[1100px]:col-span-7">
          <Reveal delay={80}>
            <MapEmbed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="group">
      <dt className="flex items-start gap-4">
        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
          <Icon className="h-4 w-4" />
        </div>
        <span className="min-w-0 pt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </dt>
      <dd className="-mt-5 ml-14 text-[15px] text-foreground">
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block rounded-sm transition-colors hover:text-terracotta"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

/* ─────────── FAQ ─────────── */
function FAQSection() {
  return (
    <section id="faq" className="border-t border-border bg-secondary/30">
      <div className="container-page pt-12 pb-16 md:pt-16 md:pb-16 min-[1100px]:pt-16">
        <div className="grid gap-10 min-[1100px]:grid-cols-12 min-[1100px]:gap-12">
          <div className="max-w-2xl min-[1100px]:col-span-4 min-[1100px]:max-w-none">
            <Reveal>
              <p className="eyebrow">Domande frequenti</p>
              <h2 className="mt-4 text-4xl font-medium leading-[1.1] md:text-5xl">
                Le risposte più comuni.
              </h2>
            </Reveal>
            <Reveal delay={80} className="mt-4">
              <p className="text-muted-foreground">
                Hai un dubbio? Contattaci e ti rispondiamo appena possibile.
              </p>
            </Reveal>
          </div>
          <div className="min-[1100px]:col-span-8">
            <FAQList items={site.faq} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Synthetic portfolio demo reviews ─────────── */
function ReviewsSection({ config = site.reviews }: { config?: ReviewsConfig } = {}) {
  const reviews = config.reviews.slice(0, 3);

  if (!config.enabled || reviews.length === 0) return null;

  const authenticConfig = config.mode === "authentic" ? config : null;
  const averageRating = authenticConfig?.averageRating ?? 0;
  const reviewCount = authenticConfig?.reviewCount ?? 0;
  const roundedAverage = Math.round(averageRating);
  const hasSummary = averageRating > 0 || reviewCount > 0;

  return (
    <section
      id="recensioni"
      className="container-page pt-12 pb-6 md:pt-16 md:pb-8 min-[1100px]:pt-16 min-[1100px]:pb-10"
    >
      <div className="grid gap-7 min-[1100px]:grid-cols-12 min-[1100px]:items-end">
        <Reveal className="max-w-2xl min-[1100px]:col-span-7">
          <p className="eyebrow">
            {authenticConfig?.platform ? `Recensioni ${authenticConfig.platform}` : "Recensioni"}
          </p>
          <h2 className="mt-4 text-4xl font-medium leading-[1.08] md:text-5xl">
            Le parole di chi
            <br />
            <span className="italic text-terracotta">è stato qui.</span>
          </h2>
        </Reveal>

        {hasSummary && (
          <Reveal
            delay={80}
            className="min-[1100px]:col-span-5 min-[1100px]:justify-self-end"
          >
            <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-border bg-card px-4 py-3 text-sm shadow-[var(--shadow-soft)]">
              {averageRating > 0 && (
                <>
                  <span
                    className="flex items-center gap-0.5 text-terracotta"
                    aria-label={`${averageRating.toLocaleString("it-IT")} stelle su 5`}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        aria-hidden
                        className={`h-4 w-4 ${i < roundedAverage ? "fill-current" : "opacity-30"}`}
                      />
                    ))}
                  </span>
                  <strong className="font-display text-lg font-medium text-foreground">
                    {averageRating.toLocaleString("it-IT", {
                      minimumFractionDigits: 1,
                      maximumFractionDigits: 1,
                    })}
                  </strong>
                </>
              )}
              {reviewCount > 0 && (
                <span className="text-muted-foreground">
                  {reviewCount.toLocaleString("it-IT")} recensioni
                </span>
              )}
            </div>
          </Reveal>
        )}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 min-[1100px]:grid-cols-3">
        {reviews.map((review, i) => (
          <Reveal
            key={`${review.author}-${i}`}
            as="article"
            delay={i * 100}
            className={i === 2 ? "sm:col-span-2 min-[1100px]:col-span-1" : ""}
          >
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex items-center gap-0.5 text-terracotta"
                  aria-label={`${review.rating} stelle su 5`}
                >
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <Star
                      key={starIndex}
                      aria-hidden
                      className={`h-4 w-4 ${
                        starIndex < review.rating ? "fill-current" : "opacity-25"
                      }`}
                    />
                  ))}
                </span>
                <Quote aria-hidden className="h-6 w-6 text-terracotta/45" strokeWidth={1.5} />
              </div>

              <blockquote className="mt-6 font-display text-xl leading-relaxed text-foreground">
                “{review.text}”
              </blockquote>

              <div className="relative mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-transparent pt-6 text-sm">
                <RevealDivider className="inset-x-0 -top-px h-px bg-border" />
                <div>
                  <p className="font-medium text-foreground">{review.author}</p>
                  {review.dateLabel && (
                    <p className="mt-1 text-xs text-muted-foreground">{review.dateLabel}</p>
                  )}
                </div>
                {config.mode === "authentic" &&
                  "reviewUrl" in review &&
                  review.reviewUrl && (
                    <a
                      href={review.reviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 rounded-sm px-1 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      aria-label={`Apri la recensione di ${review.author}${config.platform ? ` su ${config.platform}` : " alla fonte"}`}
                    >
                      {config.platform ?? "Fonte"}
                      <ExternalLink aria-hidden className="h-3.5 w-3.5" />
                    </a>
                  )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {authenticConfig?.profileUrl && (
        <Reveal delay={140} className="mt-8">
          <a
            href={authenticConfig.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="motion-cta inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:border-terracotta/35 hover:text-terracotta"
          >
            Vedi tutte le recensioni{authenticConfig.platform ? ` su ${authenticConfig.platform}` : ""}
            <ExternalLink aria-hidden className="h-4 w-4" />
          </a>
        </Reveal>
      )}
    </section>
  );
}

function FAQList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [enhanced, setEnhanced] = useState(false);

  useEffect(() => setEnhanced(true), []);

  return (
    <dl className="divide-y divide-border">
      {items.map((f, i) => {
        const open = !enhanced || openIndex === i;
        const collapsed = enhanced && !open;
        const panelId = `faq-panel-${i}`;
        const btnId = `faq-btn-${i}`;
        return (
          <Reveal key={f.q} delay={i * 70}>
            <dt>
              <button
                id={btnId}
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors hover:text-terracotta"
              >
                <span className="font-display text-lg md:text-xl">{f.q}</span>
                <span
                  aria-hidden
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-terracotta transition-all duration-300 motion-reduce:transition-none ${
                    open ? "rotate-180 bg-terracotta/10" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
            </dt>
            <dd
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              aria-hidden={collapsed}
              inert={collapsed}
              className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="max-w-2xl text-[15px] text-muted-foreground">{f.a}</p>
              </div>
            </dd>
          </Reveal>
        );
      })}
    </dl>
  );
}
