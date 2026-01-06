import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect } from "react";

import { Toaster } from "@/components/ui/sonner";

import appCss from "../index.css?url";

// Lazy load devtools only in development to avoid production bundle bloat and forced reflows
const TanStackRouterDevtools = import.meta.env.DEV
  ? lazy(() =>
      import("@tanstack/react-router-devtools").then((module) => ({
        default: module.TanStackRouterDevtools,
      }))
    )
  : () => null;

const FAVICON_ACTIVE =
  "https://files.merahkaryagemilang.com/logo/mkg-fav/favicon.ico";
const FAVICON_INACTIVE =
  "https://files.merahkaryagemilang.com/logo/mkg-fav-white/favicon.ico";

const SITE_URL = "https://merahkaryagemilang.com";
const OG_IMAGE =
  "https://files.merahkaryagemilang.com/content/mkg-excavator-9.webp";
const OG_VIDEO =
  "https://files.merahkaryagemilang.com/content/mkg-exavator.mp4";
const OG_IMAGE_ALT = "Excavator Merah Karya Gemilang di proyek konstruksi";

// SEO structured data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Merah Karya Gemilang",
      description:
        "Layanan sewa alat berat profesional untuk proyek konstruksi, pertambangan, dan infrastruktur di Sulawesi.",
      url: SITE_URL,
      telephone: "+6281318000611",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Perumahan The Maple, Jl. Maple Way No. 5, Kel. Tanjung Merdeka, Kec. Tamalate",
        addressLocality: "Makassar",
        addressRegion: "Sulawesi Selatan",
        postalCode: "90224",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -5.1477,
        longitude: 119.4327,
      },
      areaServed: [
        // Kota (Cities)
        { "@type": "City", name: "Makassar" },
        { "@type": "City", name: "Parepare" },
        { "@type": "City", name: "Palopo" },
        // Kabupaten (Regencies)
        { "@type": "AdministrativeArea", name: "Kabupaten Bantaeng" },
        { "@type": "AdministrativeArea", name: "Kabupaten Barru" },
        { "@type": "AdministrativeArea", name: "Kabupaten Bone" },
        { "@type": "AdministrativeArea", name: "Kabupaten Bulukumba" },
        { "@type": "AdministrativeArea", name: "Kabupaten Enrekang" },
        { "@type": "AdministrativeArea", name: "Kabupaten Gowa" },
        { "@type": "AdministrativeArea", name: "Kabupaten Jeneponto" },
        { "@type": "AdministrativeArea", name: "Kabupaten Kepulauan Selayar" },
        { "@type": "AdministrativeArea", name: "Kabupaten Luwu" },
        { "@type": "AdministrativeArea", name: "Kabupaten Luwu Timur" },
        { "@type": "AdministrativeArea", name: "Kabupaten Luwu Utara" },
        { "@type": "AdministrativeArea", name: "Kabupaten Maros" },
        {
          "@type": "AdministrativeArea",
          name: "Kabupaten Pangkajene dan Kepulauan",
        },
        { "@type": "AdministrativeArea", name: "Kabupaten Pinrang" },
        { "@type": "AdministrativeArea", name: "Kabupaten Sidenreng Rappang" },
        { "@type": "AdministrativeArea", name: "Kabupaten Sinjai" },
        { "@type": "AdministrativeArea", name: "Kabupaten Soppeng" },
        { "@type": "AdministrativeArea", name: "Kabupaten Takalar" },
        { "@type": "AdministrativeArea", name: "Kabupaten Tana Toraja" },
        { "@type": "AdministrativeArea", name: "Kabupaten Toraja Utara" },
        { "@type": "AdministrativeArea", name: "Kabupaten Wajo" },
        // Province level
        { "@type": "State", name: "Sulawesi Selatan" },
      ],
      priceRange: "$$",
      openingHours: "Mo-Sa 08:00-17:00",
      image: OG_IMAGE,
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Merah Karya Gemilang",
      url: SITE_URL,
      logo: "https://files.merahkaryagemilang.com/logo/mkg-logo-2.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6281318000611",
        contactType: "customer service",
        availableLanguage: "Indonesian",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Alat berat apa saja yang tersedia untuk disewa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Merah Karya Gemilang menyediakan berbagai alat berat termasuk excavator, bulldozer, crane, dump truck, wheel loader, dan forklift. Kami menawarkan solusi yang disesuaikan untuk memenuhi kebutuhan spesifik proyek Anda.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana sistem sewa harian dan kontrak proyek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami menyediakan fleksibilitas sewa mulai dari harian hingga kontrak proyek jangka panjang. Harga disesuaikan dengan durasi sewa, jenis alat, dan kebutuhan tambahan seperti operator.",
          },
        },
        {
          "@type": "Question",
          name: "Apakah tersedia operator untuk alat berat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ya, kami menyediakan operator terlatih dan bersertifikat untuk semua jenis alat berat. Anda dapat memilih sewa unit saja atau lengkap dengan operator.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa lama waktu pengiriman alat berat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Waktu pengiriman tergantung lokasi proyek Anda. Untuk area Makassar dan sekitarnya, pengiriman dapat dilakukan dalam 24-48 jam. Untuk area Sulawesi Selatan, Bone, dan Sulawesi lainnya, estimasi 2-5 hari kerja.",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana dukungan teknis dan perawatan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kami menyediakan dukungan teknis 24/7 dan layanan perawatan berkala. Jika terjadi kerusakan, tim teknisi kami siap melakukan perbaikan di lokasi proyek Anda.",
          },
        },
      ],
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#image`,
      url: "https://files.merahkaryagemilang.com/content/mkg-excavator-1.webp",
      name: "Excavator Merah Karya Gemilang di Proyek Konstruksi",
      description:
        "Excavator modern dari armada Merah Karya Gemilang yang digunakan untuk proyek konstruksi, pertambangan, dan infrastruktur di Sulawesi.",
      width: 1920,
      height: 1080,
    },
  ],
};

// biome-ignore lint/suspicious/noEmptyInterface: TanStack Router context pattern - will be populated as needed
export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "color-scheme", content: "light only" },
      {
        title: "Merah Karya Gemilang - Sewa Alat Berat Terpercaya di Sulawesi",
      },
      {
        name: "description",
        content:
          "Merah Karya Gemilang menyediakan layanan sewa alat berat terpercaya di Sulawesi Selatan, Bone, dan sekitarnya. Excavator, bulldozer, crane, dan dump truck tersedia dengan harga kompetitif.",
      },

      // ============================================
      // OPEN GRAPH - BASIC METADATA (Required per ogp.me)
      // ============================================
      {
        property: "og:title",
        content:
          "Merah Karya Gemilang - Sewa Alat Berat Terpercaya di Sulawesi",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },

      // ============================================
      // OPEN GRAPH - OPTIONAL METADATA
      // ============================================
      {
        property: "og:description",
        content:
          "Layanan sewa alat berat profesional untuk proyek konstruksi, pertambangan, dan infrastruktur di Sulawesi.",
      },
      { property: "og:determiner", content: "" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:site_name", content: "Merah Karya Gemilang" },

      // ============================================
      // OPEN GRAPH - IMAGE STRUCTURED PROPERTIES (per ogp.me)
      // ============================================
      { property: "og:image:url", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: OG_IMAGE_ALT },

      // ============================================
      // OPEN GRAPH - VIDEO STRUCTURED PROPERTIES
      // ============================================
      { property: "og:video", content: OG_VIDEO },
      { property: "og:video:secure_url", content: OG_VIDEO },
      { property: "og:video:type", content: "video/mp4" },
      { property: "og:video:width", content: "1920" },
      { property: "og:video:height", content: "1080" },

      // ============================================
      // TWITTER/X CARDS (Complete)
      // ============================================
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@merahkaryagemilang" },
      { name: "twitter:creator", content: "@merahkaryagemilang" },
      {
        name: "twitter:title",
        content: "Merah Karya Gemilang - Sewa Alat Berat Terpercaya",
      },
      {
        name: "twitter:description",
        content: "Layanan sewa alat berat profesional di Sulawesi.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_IMAGE_ALT },

      // ============================================
      // PINTEREST
      // ============================================
      { name: "pinterest-rich-pin", content: "true" },

      // ============================================
      // ADDITIONAL SEO
      // ============================================
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Merah Karya Gemilang" },
      { name: "geo.region", content: "ID-SN" },
      { name: "geo.placename", content: "Makassar, Sulawesi Selatan" },

      // ============================================
      // THEME & PWA META TAGS
      // ============================================
      { name: "theme-color", content: "#dc2626" },
      { name: "application-name", content: "Merah Karya Gemilang" },
      { name: "apple-mobile-web-app-title", content: "Merah Karya Gemilang" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "format-detection", content: "telephone=no" },
      { name: "mobile-web-app-capable", content: "yes" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },

      // ============================================
      // PERFORMANCE: PRECONNECT TO CDN
      // Note: preconnect/dns-prefetch moved to static HTML or handled by browser heuristics
      // to avoid SSR/CSR hydration mismatches with crossOrigin attribute serialization
      // ============================================
      {
        rel: "preconnect",
        href: "https://files.merahkaryagemilang.com",
      },
      {
        rel: "dns-prefetch",
        href: "https://files.merahkaryagemilang.com",
      },

      // ============================================
      // FAVICON FOR SEARCH RESULTS & BROWSERS
      // ============================================
      {
        rel: "icon",
        href: "https://files.merahkaryagemilang.com/logo/mkg-fav/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "icon",
        href: "https://files.merahkaryagemilang.com/logo/mkg-fav/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        href: "https://files.merahkaryagemilang.com/logo/mkg-fav/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },

      // ============================================
      // APPLE TOUCH ICONS
      // ============================================
      {
        rel: "apple-touch-icon",
        href: "https://files.merahkaryagemilang.com/logo/mkg-fav/apple-touch-icon.png",
      },

      // ============================================
      // ANDROID/CHROME
      // ============================================
      {
        rel: "icon",
        href: "https://files.merahkaryagemilang.com/logo/mkg-fav/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        href: "https://files.merahkaryagemilang.com/logo/mkg-fav/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },

      // PWA manifest (served from public folder to avoid CORS issues)
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },

      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),

  component: RootDocument,
});

function RootDocument() {
  useEffect(() => {
    const updateFavicon = () => {
      const favicon = document.querySelector(
        'link[rel="icon"]'
      ) as HTMLLinkElement | null;
      if (favicon) {
        favicon.href = document.hidden ? FAVICON_INACTIVE : FAVICON_ACTIVE;
      }
    };

    document.addEventListener("visibilitychange", updateFavicon);
    return () => {
      document.removeEventListener("visibilitychange", updateFavicon);
    };
  }, []);

  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Toaster richColors />
        <Suspense fallback={null}>
          <TanStackRouterDevtools position="bottom-left" />
        </Suspense>
        <Scripts />
      </body>
    </html>
  );
}
