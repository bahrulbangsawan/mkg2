import { testimonials } from "@/data/landing-content";

export function TestimonialsSection() {
  return (
    <section className="bg-muted py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 font-semibold text-3xl text-foreground leading-tight sm:text-4xl lg:text-5xl">
            Apa Kata Klien Kami
            <br />
            Tentang Layanan Kami
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Baca testimoni dari klien yang mencapai kesuksesan dengan layanan
            kami
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-white p-6 text-center backdrop-blur"
              key={testimonial.id}
            >
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
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            href="#testimoni"
          >
            Lihat Semua Testimoni
          </a>
        </div>
      </div>
    </section>
  );
}
