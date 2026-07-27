import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import heroImg from "../assets/hero.jpg";
import { SITE_URL } from "../config/site";
import { reportLovableError } from "../lib/lovable-error-reporting";

import { Navbar } from "../components/site/Navbar";

const SOCIAL_IMAGE_URL = new URL(heroImg, SITE_URL).href;

function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-lg text-center">
          <p className="eyebrow justify-center">Errore 404</p>
          <h1 className="mt-5 text-4xl font-medium sm:text-5xl">
            Questa pagina non è nel menu.
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            Torniamo alla sala principale.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition hover:opacity-90"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-medium">Qualcosa non ha caricato</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Puoi riprovare o tornare alla home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Riprova
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition hover:bg-secondary"
          >
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Forno Lume | Bistrot e pizzeria contemporanea a Padova" },
      {
        name: "description",
        content:
          "Un piccolo locale contemporaneo con cucina semplice, ingredienti selezionati, pizza curata e atmosfera calda. Prenota su WhatsApp.",
      },
      { name: "theme-color", content: "#f5efe1" },
      { name: "robots", content: "noindex, follow" },
      {
        property: "og:title",
        content: "Forno Lume | Bistrot e pizzeria contemporanea a Padova",
      },
      {
        property: "og:description",
        content:
          "Un piccolo locale contemporaneo con cucina semplice, ingredienti selezionati, pizza curata e atmosfera calda. Prenota su WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Forno Lume" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Forno Lume | Bistrot e pizzeria contemporanea a Padova" },
      { name: "twitter:description", content: "Un piccolo locale contemporaneo con cucina semplice, ingredienti selezionati, pizza curata e atmosfera calda. Prenota su WhatsApp." },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "alternate icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
