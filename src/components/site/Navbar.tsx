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

  // Close drawer when resizing to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          onClick={close}
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
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/70 backdrop-blur md:hidden"
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${
              open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        aria-hidden
        onClick={close}
        className={`fixed inset-0 top-16 z-40 bg-ink/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden absolute inset-x-0 top-full z-50 origin-top overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open
            ? "max-h-[80vh] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="container-page pb-6 pt-2">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-warm)]">
            <nav className="flex flex-col">
              {site.nav.map((n, i) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={close}
                  style={{ transitionDelay: `${open ? i * 40 : 0}ms` }}
                  className={`border-b border-border/60 py-4 text-base transition-all duration-300 last:border-b-0 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                  }`}
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <a
              href={waLink(site.contact.whatsappReserveMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-warm)]"
            >
              Prenota un tavolo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
