import { companyInfo, footerContent } from "@/data/landing-content";

export function FooterSection() {
  return (
    <footer className="bg-foreground" id="kontak">
      {/* Banner CTA */}
      <div className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-3xl text-background leading-tight sm:text-4xl lg:text-5xl">
                {footerContent.banner.headline}
              </h2>
              <p className="max-w-xl text-background/80 text-lg">
                {footerContent.banner.description}
              </p>
            </div>
            <a
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full border border-border bg-background px-8 font-semibold text-foreground transition-colors hover:bg-muted"
              href="#penawaran"
            >
              {footerContent.banner.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-background/10 border-t px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-lg bg-background">
                  <span className="font-bold text-foreground text-sm">MK</span>
                </div>
                <span className="font-semibold text-background">
                  {companyInfo.name}
                </span>
              </div>
              <p className="max-w-xs text-background/70 leading-relaxed">
                {companyInfo.description}
              </p>
            </div>

            {/* Link Columns */}
            {footerContent.columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 font-semibold text-background">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        className="text-background/70 transition-colors hover:text-background"
                        href={link.href}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-background/10 border-t pt-8 sm:flex-row">
            <p className="text-background/50 text-sm">
              {footerContent.copyright}
            </p>
            <div className="flex gap-6">
              {footerContent.legal.map((link) => (
                <a
                  className="text-background/50 text-sm transition-colors hover:text-background/70"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
