# mkg2

A modern TypeScript monorepo built with React 19, TanStack Start, and Tailwind CSS.

## Tech Stack

- **Framework**: TanStack Start (SSR with TanStack Router)
- **UI**: React 19 + Tailwind CSS v4 + shadcn/ui
- **Data**: TanStack Query + TanStack Form
- **Build**: Vite + Turborepo
- **Linting**: Biome (via Ultracite)

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
│   └── web/              # TanStack Start application
├── packages/
│   ├── config/           # Shared configuration
│   └── env/              # Environment variables
└── turbo.json            # Turborepo configuration
```

## Scripts

| Command              | Description                    |
|---------------------|--------------------------------|
| `bun run dev`       | Start all apps in dev mode     |
| `bun run build`     | Build all applications         |
| `bun run dev:web`   | Start web app only             |
| `bun run check-types` | TypeScript type checking     |
| `bun x ultracite fix` | Format and lint code         |

## License

MIT
