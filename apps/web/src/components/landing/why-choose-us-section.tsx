import { ArrowUpRight, Banknote, Clock, Cog, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { features, whyChooseUsContent } from "@/data/landing-content";

const iconMap = {
  ShieldCheck,
  Cog,
  Banknote,
  Clock,
} as const;

export function WhyChooseUsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-muted py-16 sm:py-24" id="tentang">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-xl font-semibold text-3xl text-foreground leading-tight sm:text-4xl lg:text-5xl">
            <span>{whyChooseUsContent.headline} </span>
            <span className="text-foreground">
              {whyChooseUsContent.headlineBold}
            </span>
            <span className="text-muted-foreground">
              {" "}
              {whyChooseUsContent.headlineEnd}
            </span>
          </h2>
          <div className="max-w-md">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {whyChooseUsContent.description}
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            // Determine if this card should be "active" (red/primary)
            // - If hovering a card, that hovered card is active
            // - If not hovering any card, the default highlighted card is active
            const isActive =
              hoveredId !== null
                ? hoveredId === feature.id
                : feature.highlighted;

            return (
              // biome-ignore lint/a11y/noNoninteractiveElementInteractions: Cards have hover effects for visual enhancement
              // biome-ignore lint/a11y/noStaticElementInteractions: Cards have hover effects for visual enhancement
              <div
                className={`flex flex-col gap-12 rounded-3xl border p-6 transition-all duration-300 ${
                  isActive
                    ? "-translate-y-1 border-primary/30 bg-primary text-primary-foreground shadow-lg"
                    : "border-border bg-white text-foreground"
                }`}
                key={feature.id}
                onMouseEnter={() => setHoveredId(feature.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Header with Icon and Arrow */}
                <div className="flex items-center justify-between">
                  <div
                    className={`flex size-12 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-primary-foreground/30 bg-primary-foreground/20"
                        : "border-border bg-muted"
                    }`}
                  >
                    <Icon
                      className={`size-6 transition-colors duration-300 ${
                        isActive ? "text-primary-foreground" : "text-foreground"
                      }`}
                    />
                  </div>
                  <ArrowUpRight
                    className={`size-6 transition-colors duration-300 ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className={`font-semibold text-xl transition-colors duration-300 ${
                      isActive ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-300 ${
                      isActive
                        ? "text-primary-foreground/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
