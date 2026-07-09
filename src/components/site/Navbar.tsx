import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site, waLink } from "@/config/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-xl tracking-tight sm:text-2xl"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-terracotta" />
          {site.brand.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-foreground/80 transition-colors hover:text-terracotta"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(site.contact.whatsappReserveMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:inline-flex"
        >
          Prenota un tavolo
        </a>

        <button
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 backdrop-blur md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container-page pb-6 pt-2">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
              <nav className="flex flex-col">
                {site.nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border/60 py-3 text-base last:border-b-0"
                  >
                    {n.label}
                  </a>
                ))}
              </nav>
              <a
                href={waLink(site.contact.whatsappReserveMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Prenota un tavolo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
