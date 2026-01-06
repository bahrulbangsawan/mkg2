import { companyInfo, footerContent } from "@/data/landing-content";

export function FooterSection() {
  return (
    <footer className="bg-foreground" id="kontak">
      {/* Banner CTA */}
      <div className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Background Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-semibold text-2xl text-background leading-tight sm:text-3xl lg:text-4xl">
            {footerContent.banner.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-background/70 text-sm sm:text-base">
            {footerContent.banner.description}
          </p>
          <a
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-background px-6 font-medium text-foreground text-sm transition-colors hover:bg-background/90"
            href="https://wa.me/6281318000611"
            rel="noopener noreferrer"
            target="_blank"
          >
            {footerContent.banner.cta}
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="border-background/10 border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Company Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-background">
                  <img
                    alt="MKG Logo"
                    className="size-5 select-none object-contain"
                    decoding="async"
                    draggable={false}
                    height={20}
                    loading="lazy"
                    src="https://files.merahkaryagemilang.com/logo/mkg-logo-2.png"
                    width={20}
                  />
                </div>
                <span className="font-semibold text-background">
                  {companyInfo.name}
                </span>
              </div>
              <p className="mt-3 max-w-xs text-background/60 text-sm leading-relaxed">
                Penyewaan alat berat terpercaya untuk proyek konstruksi,
                pertambangan, dan infrastruktur di Sulawesi.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-medium text-background text-sm">
                Menu Cepat
              </h3>
              <nav className="mt-3 flex flex-col gap-2">
                {footerContent.quickLinks.map((link) => (
                  <a
                    className="text-background/60 text-sm transition-colors hover:text-background"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-medium text-background text-sm">Alamat</h3>
              <address className="mt-3 text-background/60 text-sm not-italic leading-relaxed">
                Perumahan The Maple
                <br />
                Jl. Maple Way No. 5
                <br />
                Kel. Tanjung Merdeka, Kec. Tamalate
                <br />
                Kota Makassar, Sulawesi Selatan 90224
              </address>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-background/10 border-t pt-6">
            <p className="text-center text-background/50 text-xs sm:text-sm">
              ©{" "}
              <span suppressHydrationWarning>
                {footerContent.copyrightYear}
              </span>{" "}
              {footerContent.copyrightText}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
