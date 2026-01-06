import { Menu, X } from "lucide-react";
import { useState } from "react";
import { companyInfo, navLinks } from "@/data/landing-content";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a className="flex select-none items-center gap-2" href="/">
          <img
            alt="MKG Logo"
            className="size-8 select-none object-contain"
            draggable={false}
            height={32}
            src="https://files.merahkaryagemilang.com/logo/mkg-logo-2.png"
            width={32}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-foreground text-sm leading-tight sm:text-base">
              {companyInfo.name}
            </span>
            <span className="text-[10px] text-muted-foreground sm:text-xs">
              Penyewaan Alat Berat
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 font-semibold text-primary-foreground text-sm transition-colors hover:bg-primary/90"
            href="https://wa.me/6281318000611"
            rel="noopener noreferrer"
            target="_blank"
          >
            Hubungi Kami
          </a>
          <a
            className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-background px-6 font-semibold text-foreground text-sm transition-colors hover:bg-muted"
            href="https://wa.me/6281318000611"
            rel="noopener noreferrer"
            target="_blank"
          >
            Minta Penawaran
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          className="inline-flex size-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-border/40 border-t bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-4 py-2 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                href={link.href}
                key={link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-row gap-2">
              <a
                className="inline-flex h-10 flex-1 items-center justify-center rounded-full bg-primary px-4 font-semibold text-primary-foreground text-sm"
                href="https://wa.me/6281318000611"
                rel="noopener noreferrer"
                target="_blank"
              >
                Hubungi Kami
              </a>
              <a
                className="inline-flex h-10 flex-1 items-center justify-center rounded-full border border-border bg-background px-4 font-semibold text-foreground text-sm"
                href="https://wa.me/6281318000611"
                rel="noopener noreferrer"
                target="_blank"
              >
                Minta Penawaran
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
