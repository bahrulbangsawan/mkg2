import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { testimonials } from "@/data/landing-content";

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative bg-muted py-16 sm:py-24">
      {/* Left Gradient */}
      <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[rgb(248,251,253)] to-transparent sm:w-48" />
      {/* Right Gradient */}
      <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[rgb(248,251,253)] to-transparent sm:w-48" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="relative z-20 mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mb-4 font-semibold text-3xl text-foreground leading-tight sm:text-4xl lg:text-5xl">
              Apa Kata Klien Kami
              <br />
              Tentang Layanan Kami
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Baca testimoni dari klien yang mencapai kesuksesan dengan layanan
              kami
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2 self-end sm:self-auto">
            <button
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-muted"
              onClick={() => scroll("left")}
              type="button"
            >
              <ChevronLeft className="size-6 text-foreground" />
            </button>
            <button
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center rounded-full border border-border bg-white transition-colors hover:bg-muted"
              onClick={() => scroll("right")}
              type="button"
            >
              <ChevronRight className="size-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:gap-6"
            ref={scrollRef}
          >
            {testimonials.map((testimonial) => (
              <div
                className="w-[85%] flex-shrink-0 snap-center sm:w-[45%] lg:w-[31%]"
                key={testimonial.id}
              >
                <div className="flex h-full flex-col items-center gap-4 rounded-xl border border-border bg-white p-6 text-center backdrop-blur">
                  {/* Avatar */}
                  <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                    <span className="font-semibold text-primary text-xl">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
