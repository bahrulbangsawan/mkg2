"use client";

import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import CountUp from "@/components/count-up";
import ShinyText from "@/components/shiny-text";
import { statsContent } from "@/data/landing-content";

// Regex for parsing numeric value and suffix from stat value like "500+"
const STAT_VALUE_REGEX = /^(\d+)(.*)$/;

// Carousel images
const CAROUSEL_IMAGES = [
  "https://files.merahkaryagemilang.com/content/mkg-excavator-1.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-2.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-3.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-4.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-5.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-6.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-7.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-8.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-9.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-10.webp",
  "https://files.merahkaryagemilang.com/content/mkg-excavator-11.webp",
];

// Helper to parse numeric value and suffix from stat value like "500+"
function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(STAT_VALUE_REGEX);
  if (match) {
    return { num: Number.parseInt(match[1], 10), suffix: match[2] };
  }
  return { num: 0, suffix: value };
}

export function StatsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-background py-16 sm:py-24" id="layanan">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
              <img
                alt="Excavator di lokasi proyek"
                className="size-full select-none object-cover transition-opacity duration-1000"
                draggable={false}
                height={800}
                key={currentImageIndex}
                src={CAROUSEL_IMAGES[currentImageIndex]}
                width={640}
              />
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {CAROUSEL_IMAGES.map((image, index) => (
                <button
                  aria-label={`Go to image ${index + 1}`}
                  className={`transition-all duration-300 ${
                    index === currentImageIndex
                      ? "h-2 w-8 bg-white"
                      : "h-2 w-2 bg-white/50 hover:bg-white/70"
                  }`}
                  key={image}
                  onClick={() => setCurrentImageIndex(index)}
                  type="button"
                />
              ))}
            </div>

            {/* Floating Card */}
            <div className="absolute top-6 left-6 hidden w-72 rounded-xl border border-border bg-white/95 p-4 shadow-lg backdrop-blur sm:block">
              <p className="mb-3 font-semibold text-foreground">Bulan Ini</p>
              <div className="mb-3 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground text-xs">
                  Aktif (5)
                </span>
                <span className="rounded-full border border-border bg-muted px-3 py-1 font-semibold text-foreground text-xs">
                  Dalam Perjalanan (10)
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-lg border border-border bg-muted p-2">
                  <div className="flex size-12 items-center justify-center rounded bg-white">
                    <span className="font-bold text-foreground text-xs">
                      EXC
                    </span>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Saat ini di</p>
                    <p className="font-semibold text-foreground text-sm leading-tight">
                      IUP PT. RIOTA JAYA LESTARI, Woitombo, Lasusua, Kolaka
                      Utara
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5">
              <TrendingUp className="size-4 text-foreground" />
              <ShinyText
                className="font-semibold text-sm"
                color="oklch(0.439 0.01 286)"
                shineColor="oklch(0.504 0.217 27)"
                speed={3}
                text={statsContent.badge}
              />
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-6">
              <h2 className="font-semibold text-3xl text-foreground leading-tight sm:text-4xl lg:text-5xl">
                {statsContent.headline}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {statsContent.description}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-3 gap-4 lg:gap-6">
              {statsContent.stats.map((stat, index) => {
                const { num, suffix } = parseStatValue(stat.value);
                return (
                  <div
                    className={`flex flex-col gap-2 ${
                      index < statsContent.stats.length - 1
                        ? "border-border border-r pr-4 lg:pr-6"
                        : ""
                    }`}
                    key={stat.label}
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-3 rounded-full bg-primary" />
                      <span className="font-semibold text-2xl text-foreground sm:text-3xl">
                        <CountUp duration={2} from={0} to={num} />
                        {suffix}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
