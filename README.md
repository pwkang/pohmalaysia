# POH Malaysia

This is a [Next.js](https://nextjs.org/) project for POH Malaysia, built with TypeScript, Tailwind CSS, and Payload CMS.

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Payload CMS v3
- **Database**: MongoDB
- **Linting & Formatting**: Biome.js
- **Package Manager**: pnpm

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:4317](http://localhost:4317) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `pnpm dev` - Starts the development server
- `pnpm build` - Builds the application for production
- `pnpm start` - Starts the production server
- `pnpm lint` - Runs Biome.js linter and formatter with auto-fix
- `pnpm lint:check` - Runs Biome.js linter and formatter in check mode (no fixes)
- `pnpm format` - Runs Biome.js formatter with auto-fix
- `pnpm format:check` - Runs Biome.js formatter in check mode (no fixes)
- `pnpm payload` - Runs Payload CMS commands

## Code Quality

This project uses [Biome.js](https://biomejs.dev/) for linting and formatting, which provides:

- Fast performance (written in Rust)
- Comprehensive TypeScript support
- Import sorting and organization
- Accessibility rules
- React-specific linting
- Tailwind CSS class sorting

Configuration is available in `biome.json`.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Payload CMS Documentation](https://payloadcms.com/docs) - learn about Payload CMS
- [Biome.js Documentation](https://biomejs.dev/) - learn about Biome.js linting and formatting
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
