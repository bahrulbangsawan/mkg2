import { MapPin, Rocket } from "lucide-react";
import ShinyText from "@/components/shiny-text";
import { heroContent } from "@/data/landing-content";

export function HeroSection() {
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
                href="https://wa.me/+6285840066784"
                rel="noopener noreferrer"
                target="_blank"
              >
                {heroContent.primaryCta}
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-4 font-semibold text-foreground text-sm transition-colors hover:bg-muted sm:h-14 sm:px-8 sm:text-base"
                href="https://wa.me/+6285840066784"
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
              <video
                autoPlay
                className="size-full select-none object-cover"
                draggable={false}
                loop
                muted
                playsInline
              >
                <source
                  src="https://pub-17f88d70d25846449da0074c5635f63a.r2.dev/content/mkg-exavator.mp4"
                  type="video/mp4"
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
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
              <MapPin className="size-4 text-primary" />
              <span className="font-semibold text-foreground text-sm">
                Bone
              </span>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-8 border-border border-t pt-8 sm:mt-12 lg:mt-16">
          <p className="mb-6 text-center font-semibold text-lg text-muted-foreground sm:mb-8 sm:text-xl">
            {heroContent.trustedBy}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60 sm:gap-8 lg:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                className="flex h-10 w-16 items-center justify-center rounded bg-muted sm:w-32"
                key={i}
              >
                <span className="font-semibold text-muted-foreground text-xs sm:text-sm">
                  Partner {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
