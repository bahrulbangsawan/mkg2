import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useEffect } from "react";

import { Toaster } from "@/components/ui/sonner";

import appCss from "../index.css?url";

const FAVICON_ACTIVE =
  "https://files.merahkaryagemilang.com/logo/mkg-fav/favicon.ico";
const FAVICON_INACTIVE =
  "https://files.merahkaryagemilang.com/logo/mkg-fav-white/favicon.ico";

const SITE_URL = "https://merahkaryagemilang.com";
const OG_IMAGE =
  "https://files.merahkaryagemilang.com/content/mkg-heavy-excavator-digging.webp";

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
        addressLocality: "Makassar",
        addressRegion: "Sulawesi Selatan",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -5.1477,
        longitude: 119.4327,
      },
      areaServed: [
        { "@type": "State", name: "Sulawesi Selatan" },
        { "@type": "State", name: "Bone" },
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
      {
        title: "Merah Karya Gemilang - Sewa Alat Berat Terpercaya di Sulawesi",
      },
      {
        name: "description",
        content:
          "Merah Karya Gemilang menyediakan layanan sewa alat berat terpercaya di Sulawesi Selatan, Bone, dan sekitarnya. Excavator, bulldozer, crane, dan dump truck tersedia dengan harga kompetitif.",
      },
      // Open Graph
      {
        property: "og:title",
        content:
          "Merah Karya Gemilang - Sewa Alat Berat Terpercaya di Sulawesi",
      },
      {
        property: "og:description",
        content:
          "Layanan sewa alat berat profesional untuk proyek konstruksi, pertambangan, dan infrastruktur di Sulawesi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "id_ID" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Merah Karya Gemilang" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Merah Karya Gemilang - Sewa Alat Berat Terpercaya",
      },
      {
        name: "twitter:description",
        content: "Layanan sewa alat berat profesional di Sulawesi.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      // Additional SEO
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Merah Karya Gemilang" },
      { name: "geo.region", content: "ID-SN" },
      { name: "geo.placename", content: "Makassar, Sulawesi Selatan" },
      // Theme color
      { name: "theme-color", content: "#dc2626" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: FAVICON_ACTIVE, type: "image/x-icon" },
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
        <TanStackRouterDevtools position="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
