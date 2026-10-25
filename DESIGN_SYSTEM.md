# OM Billiard design system

## Visual direction

An editorial billiards-club experience: warm, composed, tactile, and product-led. Use generous whitespace, strong product photography, clear actions, restrained motion, and accessible contrast. Avoid generic sports-store styling and unsupported business claims.

## Theme tokens

| Token | Hex | Use |
| --- | --- | --- |
| `bg` | `#F2EDE5` | Warm canvas |
| `surface` | `#FFFCF7` | Cards and raised content |
| `surface-2` | `#E9E0D4` | Soft secondary surfaces |
| `sand` | `#C4A786` | Natural accent |
| `gold` | `#CB913C` | Small premium accents |
| `gold-dark` | `#986328` | Accessible gold actions/focus |
| `sage` | `#A4AE96` | Quiet secondary accents |
| `sage-dark` | `#66775B` | Accessible sage actions |
| `ink` | `#252320` | Main text |
| `muted` | `#776C60` | Supporting text |
| `line` | `#E5DCCF` | Dividers and borders |
| `error` | `#B85C4A` | Error state |
| `editorial-dark` | `#2D2923` | Dark editorial panels |
| `editorial-mid` | `#514332` | Dark panel midtone |
| `editorial-warm` | `#86653D` | Warm panel accent |
| `editorial-text` | `#FFF8EE` | Text on dark panels |
| `editorial-muted` | `#E1D2BC` | Secondary text on dark panels |

Theme values live in `tailwind.config.js` and matching CSS properties live in `app/globals.css`. Use semantic theme classes rather than one-off colors.

## Typography and layout

- Manrope is used for display and headings; DM Sans is used for body text and controls.
- Use the fluid heading scale, `px-gutter`, `py-section`, and `.page-shell` for responsive composition.
- Keep touch targets comfortable and keyboard focus visible.
- Honor `prefers-reduced-motion`.

## Media and loading

- Use `OptimizedImage` for local imagery to reserve layout space and show a warm shimmer while loading.
- The App Router `app/loading.tsx` provides a shared route skeleton. Reuse `Skeleton` for local loading states.
- Curated product and brand images remain in `src/assets`. Supabase Storage is a future option for frequently updated large media; no Supabase integration or asset database currently exists.
- Videos should use a poster and `preload="none"` if added later.

## Honest commerce behavior

Product actions send an inquiry through the existing EmailJS integration. There is no cart, checkout, inventory, or order management backend. Account forms are prototypes and do not authenticate or persist user data.
