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
  "https://pub-17f88d70d25846449da0074c5635f63a.r2.dev/logo/mkg-fav/favicon.ico";
const FAVICON_INACTIVE =
  "https://pub-17f88d70d25846449da0074c5635f63a.r2.dev/logo/mkg-fav-white/favicon.ico";

// biome-ignore lint/suspicious/noEmptyInterface: TanStack Router context pattern - will be populated as needed
export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Merah Karya Gemilang - Sewa Alat Berat Terpercaya",
      },
      {
        name: "description",
        content:
          "Merah Karya Gemilang menyediakan layanan sewa alat berat terpercaya di Sulawesi Selatan, Gorontalo, dan sekitarnya. Excavator, bulldozer, crane, dan dump truck tersedia dengan harga kompetitif.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: FAVICON_ACTIVE,
        type: "image/x-icon",
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
