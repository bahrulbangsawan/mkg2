// biome-ignore lint/style/useFilenamingConvention: TanStack Router requires $.tsx for catch-all routes
import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, MapPin, Phone, Wrench } from "lucide-react";

import { FooterSection } from "@/components/landing/footer-section";
import { Navbar } from "@/components/landing/navbar";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: "Halaman Tidak Ditemukan - Merah Karya Gemilang" },
      {
        name: "description",
        content:
          "Halaman yang Anda cari tidak ditemukan. Kembali ke beranda Merah Karya Gemilang untuk melihat layanan sewa alat berat kami.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16">
        {/* 404 Heading */}
        <h1 className="font-bold text-8xl text-primary sm:text-9xl">404</h1>

        {/* Error Message */}
        <h2 className="mt-4 text-center font-semibold text-2xl text-foreground sm:text-3xl">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mt-3 max-w-md text-center text-muted-foreground">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan kembali ke beranda atau gunakan menu navigasi di atas.
        </p>

        {/* CTA Button */}
        <Link
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:h-14 sm:px-8"
          to="/"
        >
          <Home className="size-5" />
          Kembali ke Beranda
        </Link>

        {/* Quick Links */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="font-medium text-muted-foreground text-sm">
            Atau kunjungi halaman lainnya:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-foreground text-sm transition-colors hover:bg-muted"
              hash="tentang"
              to="/"
            >
              <MapPin className="size-4" />
              Tentang Kami
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-foreground text-sm transition-colors hover:bg-muted"
              hash="layanan"
              to="/"
            >
              <Wrench className="size-4" />
              Layanan
            </Link>
            <Link
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-foreground text-sm transition-colors hover:bg-muted"
              hash="kontak"
              to="/"
            >
              <Phone className="size-4" />
              Kontak
            </Link>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
