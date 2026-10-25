# OM Billiard

OM Billiard is built with Next.js App Router, React, and TypeScript. Existing screen components, styles, and assets have been kept in place while routes use Next.js file-based routing.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint.

## Project structure

- `app/` contains the Next.js route pages and root layout.
- `src/screens/` contains the existing route-level UI.
- `src/components/` contains shared UI components.
- `src/Data/` contains product and content data.
- `src/assets/` contains the existing product and brand imagery.

The TypeScript compiler runs in strict mode. New application files should use `.ts` or `.tsx` extensions.
