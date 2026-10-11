# BioSense AirCare website

Next.js (static export), TypeScript, Tailwind v4. Design: Liquid Glass, see `DESIGN.md`. Spec: `IMPL.md`.

```bash
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

- `src/lib/config.ts`: phone, email, WhatsApp number, GST, quote limits (one place).
- `src/data/products.json`: the 21 TASS models. Super Dry series are in `src/lib/products.ts`.
- `src/app/design.css`: tokens and glass components ported from the design mockup.
- Quote list: `src/lib/quote.tsx` (context + localStorage), message and `wa.me` link in `src/lib/whatsapp.ts`.
