"use client";

import { MapPin, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import ShinyText from "@/components/shiny-text";
import { heroContent } from "@/data/landing-content";

// All cities and regions in Sulawesi Selatan
const SULAWESI_SELATAN_LOCATIONS = [
  "Makassar",
  "Parepare",
  "Palopo",
  "Bone",
  "Gowa",
  "Maros",
  "Bulukumba",
  "Bantaeng",
  "Jeneponto",
  "Takalar",
  "Sinjai",
  "Barru",
  "Pangkep",
  "Pinrang",
  "Enrekang",
  "Luwu",
  "Luwu Utara",
  "Luwu Timur",
  "Tana Toraja",
  "Toraja Utara",
  "Wajo",
  "Soppeng",
  "Sidrap",
  "Selayar",
];

export function HeroSection() {
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationIndex(
        (prev) => (prev + 1) % SULAWESI_SELATAN_LOCATIONS.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5">
              <Rocket className="size-4 text-foreground" />
              <ShinyText
                className="font-semibold text-sm"
                color="oklch(0.439 0.01 286)"
                shineColor="oklch(0.504 0.217 27)"
                speed={3}
                text={heroContent.badge}
              />
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="font-semibold text-3xl text-foreground leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                {heroContent.headline}
              </h1>
              <p className="max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
                {heroContent.subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-4 font-semibold text-primary-foreground text-sm transition-colors hover:bg-primary/90 sm:h-14 sm:px-8 sm:text-base"
                href="https://wa.me/6281318000611"
                rel="noopener noreferrer"
                target="_blank"
              >
                {heroContent.primaryCta}
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-4 font-semibold text-foreground text-sm transition-colors hover:bg-muted sm:h-14 sm:px-8 sm:text-base"
                href="https://wa.me/6281318000611"
                rel="noopener noreferrer"
                target="_blank"
              >
                {heroContent.secondaryCta}
              </a>
            </div>
          </div>

          {/* Hero Video */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted lg:aspect-[4/3]">
              {/* Decorative background video - muted with no meaningful audio */}
              <video
                autoPlay
                className="size-full select-none object-cover"
                draggable={false}
                loop
                muted
                playsInline
                poster="https://files.merahkaryagemilang.com/content/mkg-excavator-1.webp"
                preload="auto"
              >
                <source
                  src="https://files.merahkaryagemilang.com/content/mkg-exavator.mp4"
                  type="video/mp4"
                />
                <track
                  default
                  kind="captions"
                  label="No dialogue"
                  src="data:text/vtt,WEBVTT"
                  srcLang="id"
                />
              </video>
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
              <MapPin className="size-4 text-primary" />
              <span className="font-semibold text-foreground text-sm">
                Sulawesi Selatan
              </span>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm transition-all duration-300">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span
                className="whitespace-nowrap font-semibold text-foreground text-sm"
                key={locationIndex}
              >
                {SULAWESI_SELATAN_LOCATIONS[locationIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
