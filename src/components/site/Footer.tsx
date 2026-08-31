import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { site, mailLink, telLink, waLink } from "@/config/site";
import { HomeLogo } from "./HomeLogo";

const footerLinkClass =
  "inline-flex w-fit items-center rounded-sm transition-colors hover:text-terracotta";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.8fr]">
          <div>
            <HomeLogo className="text-2xl" />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {site.brand.tagline}
            </p>
          </div>

          <div className="text-sm">
            <p className="eyebrow">Contatti</p>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li>
                <a className={footerLinkClass} href={mailLink()}>
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a className={footerLinkClass} href={telLink()}>
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  className={footerLinkClass}
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className={footerLinkClass}
                  href={site.contact.mapExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.contact.locationLabel}, apri su Google Maps`}
                >
                  {site.contact.locationLabel}
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="eyebrow">Orari</p>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li>{site.contact.hoursClosed}</li>
              <li>{site.contact.hoursOpen}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>
              © {new Date().getFullYear()} {site.legal.company}. Tutti i diritti riservati.
            </p>
            <Link className={footerLinkClass} to="/privacy">
              Privacy
            </Link>
            <Link className={footerLinkClass} to="/cookie">
              Cookie
            </Link>
          </div>

          <p>
            <span className="opacity-70">Progettato e sviluppato da</span>{" "}
            <a
              aria-label="Tretnix, si apre in una nuova scheda"
              className="inline-flex items-center gap-1 rounded-sm underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-terracotta hover:decoration-terracotta focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              href="https://tretnix.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tretnix
              <ArrowUpRight aria-hidden="true" className="h-3 w-3 shrink-0" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
