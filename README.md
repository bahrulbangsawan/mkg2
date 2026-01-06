# Merah Karya Gemilang

Official website for **Merah Karya Gemilang** - a trusted heavy equipment rental company serving Sulawesi Selatan and surrounding regions.

## About the Company

Merah Karya Gemilang provides professional heavy equipment rental services for construction, mining, and infrastructure projects. With a fleet of excavators, bulldozers, cranes, and dump trucks, we serve clients across all 24 cities and regencies in Sulawesi Selatan.

**Contact**: +62 813-1800-0611
**Location**: Makassar, Sulawesi Selatan
**Website**: [merahkaryagemilang.com](https://merahkaryagemilang.com)

## About This Repository

This repository contains the source code for the Merah Karya Gemilang landing page - a modern, SEO-optimized, and performant single-page application built with the latest web technologies.

### Features

- Responsive landing page with hero video
- Image carousel showcasing equipment fleet
- Client testimonials section
- SEO optimized with structured data (LocalBusiness, FAQPage)
- OpenGraph and Twitter Cards for social sharing
- Fast load times with asset preloading
- Mobile-first design

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | TanStack Start (SSR with TanStack Router) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| Build | Vite 7 + Turborepo |
| Deployment | Cloudflare Pages |
| Linting | Biome (via Ultracite) |

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) to view the app.

## Project Structure

```
mkg2/
├── apps/
│   └── web/                 # TanStack Start application
│       ├── src/
│       │   ├── components/  # React components
│       │   ├── routes/      # File-based routing
│       │   └── data/        # Content data
│       └── public/          # Static assets (sitemap, robots.txt)
├── packages/
│   ├── config/              # Shared configuration
│   └── env/                 # Environment variables
└── turbo.json               # Turborepo configuration
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start all apps in dev mode |
| `bun run build` | Build all applications |
| `bun run dev:web` | Start web app only |
| `bun run check-types` | TypeScript type checking |
| `bun x ultracite fix` | Format and lint code |

## Performance

- Lighthouse Score: 91+
- LCP: < 2.6s
- CLS: 0
- TBT: 0ms

## License

MIT
