import { companyInfo, footerContent } from "@/data/landing-content";

export function FooterSection() {
  return (
    <footer className="bg-foreground" id="kontak">
      {/* Banner CTA */}
      <div className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-6 sm:items-center sm:gap-8 sm:text-center">
            <h2 className="font-semibold text-2xl text-background leading-tight sm:text-4xl lg:text-5xl">
              {footerContent.banner.headline}
            </h2>
            <p className="max-w-xl text-background/80 text-base sm:text-lg">
              {footerContent.banner.description}
            </p>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 font-semibold text-foreground transition-colors hover:bg-muted"
              href="https://wa.me/+6285840066784"
              rel="noopener noreferrer"
              target="_blank"
            >
              {footerContent.banner.cta}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-background/10 border-t px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            {/* Logo & Info */}
            <div className="flex select-none items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-background">
                <img
                  alt="MKG Logo"
                  className="size-6 select-none object-contain"
                  draggable={false}
                  height={24}
                  src="https://pub-17f88d70d25846449da0074c5635f63a.r2.dev/logo/mkg-logo-2.png"
                  width={24}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-background">
                  {companyInfo.name}
                </span>
                <span className="text-background/60 text-xs">
                  Penyewaan Alat Berat
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerContent.columns[0].links.map((link) => (
                <a
                  className="text-background/70 text-sm transition-colors hover:text-background"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
              {footerContent.legal.map((link) => (
                <a
                  className="text-background/70 text-sm transition-colors hover:text-background"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 border-background/10 border-t pt-6 text-center">
            <p className="text-background/50 text-sm">
              {footerContent.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
