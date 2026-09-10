import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import aboutImg from "@/assets/about.jpg";
import dishImg from "@/assets/dish.jpg";
import heroImg from "@/assets/hero.jpg";
import { Reveal } from "./Reveal";

const images = [
  {
    src: heroImg,
    alt: "Una pizza artigianale viene infornata nel forno a legna",
    width: 1440,
    height: 1620,
  },
  {
    src: aboutImg,
    alt: "Le mani di un pizzaiolo preparano una base con pomodoro e mozzarella",
    width: 1200,
    height: 1500,
  },
  {
    src: dishImg,
    alt: "Pizza Margherita servita su un tavolo rustico",
    width: 1400,
    height: 1400,
  },
] as const;

const descriptionId = "forno-gallery-scroll-description";

export function GalleryRail() {
  const railRef = useRef<HTMLUListElement>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const update = () => {
      setHasMore(rail.scrollWidth - rail.clientWidth - rail.scrollLeft > 8);
    };
    const frame = window.requestAnimationFrame(update);
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const observer = "ResizeObserver" in window ? new ResizeObserver(update) : null;
    observer?.observe(rail);

    return () => {
      window.cancelAnimationFrame(frame);
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      observer?.disconnect();
    };
  }, []);

  return (
    <section id="galleria" aria-labelledby="galleria-heading" className="border-y border-border bg-secondary/30 py-16 md:py-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Uno sguardo dentro</p>
          <h2 id="galleria-heading" className="mt-4 text-4xl font-medium leading-[1.08] md:text-5xl">
            Forno, gesti e
            <br />
            <span className="italic text-terracotta">dettagli di tavola.</span>
          </h2>
        </Reveal>
        <p id={descriptionId} className="sr-only">
          Su schermi piccoli, scorri orizzontalmente per visualizzare tutte le immagini.
        </p>
        <div className="relative mt-10 min-w-0">
          <ul
            ref={railRef}
            tabIndex={0}
            aria-describedby={descriptionId}
            className="-mx-5 flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-5 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0"
          >
            {images.map((image, index) => (
              <Reveal
                as="li"
                key={image.src}
                delay={index * 70}
                className="w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card sm:w-[58%] md:w-auto"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </Reveal>
            ))}
          </ul>
          <div aria-hidden className={`pointer-events-none absolute inset-y-0 -right-5 w-16 bg-gradient-to-l from-secondary to-transparent transition-opacity duration-200 motion-reduce:transition-none md:hidden ${hasMore ? "opacity-100" : "opacity-0"}`} />
          <div aria-hidden className={`pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 transition-opacity duration-200 motion-reduce:transition-none md:hidden ${hasMore ? "opacity-100" : "opacity-0"}`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/90 text-terracotta shadow-[var(--shadow-soft)] backdrop-blur-sm">
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
