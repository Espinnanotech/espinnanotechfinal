# E-SPIN NANOTECH

A Next.js 15 website for E-SPIN NANOTECH, a nanofiber technology solutions company.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion, React Spring
- **Particles**: tsParticles
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod
- **Language**: TypeScript

## Structure

- `app/` - Next.js App Router pages (home, about, contact, products, media, publications)
- `components/` - Shared UI components including Header and Footer
- `lib/constants/` - Data constants (products, detailed-products, membrane-products)
- `lib/` - Utility functions
- `hooks/` - Custom React hooks
- `public/` - Static assets

## Product Routing

All product pages use the dynamic route system:
- `/products/[category]` - Category page (e.g., nanofibermembrane)
- `/products/[category]/[subcategory]` - Subcategory page, renders either product grid or dedicated membrane detail
- `/products/[category]/[subcategory]/[productId]` - Individual product detail

Membrane subcategories (e.g., airfiltrationmembrane) are defined in `lib/constants/membrane-products.ts` and rendered via `components/products/MembraneDetailClient.tsx` through the `SubcategoryClient` component.

## Running the App

```bash
npm run dev    # Development server on port 5000
npm run build  # Production build (static export for Vercel)
npm run start  # Production server on port 5000
```

## Configuration

- Dev server runs on port 5000, bound to 0.0.0.0 (required for Replit preview)
- Static export mode enabled (`output: 'export'` in next.config.js) for Vercel compatibility
- Vercel-specific packages (analytics, speed insights) removed from layout
- Workflow: "Start application" runs `npm run dev`
