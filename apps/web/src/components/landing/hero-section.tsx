import { Rocket } from "lucide-react";
import { heroContent } from "@/data/landing-content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5">
              <Rocket className="size-4 text-foreground" />
              <span className="font-semibold text-foreground text-sm">
                {heroContent.badge}
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-6">
              <h1 className="font-semibold text-4xl text-foreground leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {heroContent.headline}
              </h1>
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">
                {heroContent.subheadline}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                href="#kontak"
              >
                {heroContent.primaryCta}
              </a>
              <a
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-background px-8 font-semibold text-foreground transition-colors hover:bg-muted"
                href="#layanan"
              >
                {heroContent.secondaryCta}
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted lg:aspect-[4/3]">
              {/* Placeholder for hero image */}
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-24 items-center justify-center rounded-2xl bg-foreground">
                    <span className="font-bold text-4xl text-background">
                      MK
                    </span>
                  </div>
                  <p className="font-medium text-muted-foreground">
                    Hero Image Placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-4 right-4 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
              <span className="font-semibold text-foreground text-sm">
                Jawa Barat
              </span>
            </div>
            <div className="absolute bottom-4 left-4 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
              <span className="font-semibold text-foreground text-sm">
                Kalimantan
              </span>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mt-16 border-border border-t pt-12 lg:mt-24">
          <p className="mb-8 text-center font-semibold text-muted-foreground text-xl">
            {heroContent.trustedBy}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 lg:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                className="flex h-10 w-20 items-center justify-center rounded bg-muted sm:w-32"
                key={i}
              >
                <span className="font-semibold text-muted-foreground text-sm">
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
