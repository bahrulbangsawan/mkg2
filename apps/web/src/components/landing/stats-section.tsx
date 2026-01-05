import { TrendingUp } from "lucide-react";
import { statsContent } from "@/data/landing-content";

export function StatsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
              {/* Placeholder for stats image */}
              <div className="flex size-full items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/10">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex size-20 items-center justify-center rounded-2xl bg-foreground">
                    <span className="font-bold text-3xl text-background">
                      MK
                    </span>
                  </div>
                  <p className="font-medium text-muted-foreground">
                    Stats Image Placeholder
                  </p>
                </div>
              </div>
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
                    <p className="font-semibold text-foreground text-sm">
                      MKG-EXC-001
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Jakarta → Bandung
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
              <span className="font-semibold text-foreground text-sm">
                {statsContent.badge}
              </span>
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
              {statsContent.stats.map((stat, index) => (
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
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
