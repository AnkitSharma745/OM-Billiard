# OM Billiard design system

## Visual direction

Use a premium billiards-club feel: confident and calm, with craft details from the game rather than a generic sports-store look. Keep layouts spacious, product photography prominent, controls clear, and motion restrained.

## Palette

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#102033` | Main text, dark surfaces, strong contrast |
| `ink-soft` | `#24374A` | Secondary headings and dark supporting surfaces |
| `ink-muted` | `#667789` | Supporting text and metadata |
| `felt` | `#126B5B` | Primary actions and selected states |
| `felt-dark` | `#0C5147` | Hover and pressed action states |
| `felt-light` | `#E4F1ED` | Soft selected and informational surfaces |
| `brass` | `#B88A45` | Small premium accents, badges, and focus rings |
| `brass-light` | `#F2E8D7` | Warm accent backgrounds |
| `canvas` | `#F6F7F5` | Main page background |
| `surface` | `#FFFFFF` | Cards and content surfaces |
| `line` | `#E1E6E8` | Dividers and subtle borders |

Use the semantic Tailwind names in `tailwind.config.js`; avoid adding one-off hex values to page components.

## Type and layout

- **Manrope Variable** for headings and display text.
- **DM Sans Variable** for body text, labels, and controls.
- Use the fluid `text-fluid-*` and `spacing.gutter` / `spacing.section` tokens for responsive sizing.
- Use `.page-shell` for consistent responsive page width and gutters.
- Keep interactive targets comfortable on touch screens and preserve visible keyboard focus.
- Respect `prefers-reduced-motion` for all animation and transitions.

## Media and loading

- Use `OptimizedImage` for page imagery. It uses Next.js image optimization, responsive `sizes`, blur placeholders for imported images, and a shimmer while assets load.
- The App Router `app/loading.tsx` supplies the shared route transition skeleton. Reuse the `Skeleton` component for page-specific loading states.
- Keep curated, versioned product and brand images in `src/assets`.
- Put frequently updated large images and video in **Supabase Storage**, and keep only their path, alt text, and display metadata in the database. Do not store binary media in database rows.
- Set `NEXT_PUBLIC_SUPABASE_URL` when remote Storage media is introduced. `next.config.ts` then allows optimized images only from that project's public Storage paths.
- Videos should use a poster image and `preload="none"` so opening a page does not fetch full video files before playback.
