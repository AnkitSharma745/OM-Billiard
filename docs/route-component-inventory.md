# UI/UX Revamp: Route and Component Inventory

## Audit scope and constraints

- The application is Next.js App Router with strict TypeScript and Tailwind CSS.
- The supplied public reference URL returned no readable page content through the available text browser; the pasted master prompt's tokens are the visual source of truth.
- Repository instructions: no `AGENTS.md` was found in the project.
- No builds, tests, deployment commands, destructive operations, or dependency installation are authorized during this revamp. Changes will be reviewed from source only; verification remains pending.

## Route inventory

| Route | Current screen / components | Existing behavior and data | Main redesign opportunity | Regressions to prevent |
| --- | --- | --- | --- | --- |
| `/` | `Home`; `WhyChooseUs`, `CounterShow`, `ContactUs`, `FAQ`; shared `NavBar`/`Footer` | Local imagery/catalog; 700/50/25 trust metrics supplied in existing UI; EmailJS contact form; FAQ disclosures | Editorial trust story, animated metrics, brand/refurbished features and clear service discovery | Keep metrics user-supplied and inquiry/contact behavior working |
| `/products` | `Product`; `PoolTable`, `Balls`, `Stick`, `MoreProduct` | Static local catalog with current/original prices and recorded table sizes; EmailJS inquiries; refurbished availability inquiry | Curated catalog, offer comparisons and refurbished-stock inquiry | Preserve recorded prices/sizes and inquiry action; variant-specific pricing and refurbished item records are not present in local data |
| `/pool-table` | `PoolTable` | Local pool-table items; detail button stores selected detail data then routes | Add category context, refined cards and accurate dimensions/prices where data exists | Preserve data and detail navigation; avoid treating foosball as a pool table category without explaining the distinction |
| `/pool-table/[productId]` | `ProductDetail` | Reads product details from session storage; image gallery, size selection, price/discount display and inquiry modal | Build product-focused editorial gallery and readable spec/purchase panel | Keep actual variants/pricing and inquiry action; support direct links/reloads by resolving the existing product ID rather than requiring transient session state |
| `/products/[productId]` | `ProductDetail` | Same detail component and session-state dependency | Same detail template, with route-aware category context | Preserve both established detail URL patterns |
| `/billiard-balls` | `Balls`, `OrderNowModal` | Static ball catalog; inquiry modal | Use product-appropriate image crops, readable product info and consistent card geometry | Do not invent ratings, inventory, or discounts |
| `/billiard-cue` | `Stick`, `OrderNowModal` | Static cue catalog and inquiry modal | Cue-focused editorial imagery and clear names/prices | Keep listed data and inquiry behavior; do not invent cue specs missing from data |
| `/brands` | `Brands` | Three local logos for Aramith, Wiraka and Talisman | Editorial brand discovery, category context and contact path | Do not imply official partnerships or unsupported catalog availability |
| `/services` | `Services` | Local images and existing descriptions for installation, maintenance and custom design | Service detail stories, a customer journey, refurbished-table inquiry and contact CTA | Do not add prices, guarantees, service areas or promises absent from current content |
| `/login` | `Login` | Formik/Yup validation; no connected authentication | Honest prototype presentation | Do not imply persistence or authentication |
| `/signup` | `SignUp` | Formik/Yup validation; no connected account creation | Honest prototype presentation | Do not imply persistence or authentication |
| `/_not-found` | Branded `app/not-found.tsx` | Unknown-route recovery links to home/products | Warm editorial recovery path | Keep working paths back into the store |

### Routes/features not present

No cart, mini-cart, checkout/payment, search/autocomplete, wishlist, customer account persistence, order history, tracking, inventory API, Supabase client, product filter/sort API, analytics integration, or reviews are present in the application. Those must not be simulated as if they were operational.

## Component inventory

| Component | Current use | Notes / design direction |
| --- | --- | --- |
| `NavBar` | Root layout, all routes | Warm ivory sticky header with responsive navigation to implemented routes. Sign-in entry removed because no real account feature exists. |
| `Footer` | Root layout, all routes | Shared footer with business contact details and route links. |
| `OptimizedImage` | Product, brand and service imagery | Keep responsive sizing, local static imports and blur/shimmer behavior; ensure layout reserves space and alt text remains meaningful. |
| `Skeleton` / `app/loading.tsx` | Route loading | Restyle to warm surfaces and restrained shimmer; honor reduced motion. |
| `DeferredVideo` | Not currently used | No video files or video sections exist. Keep ready for later real media; do not add a fake video section. |
| `PoolTable`, `Balls`, `Stick`, `MoreProduct` | Catalog sections/pages | Consolidate card visual language while retaining category-specific image ratios, product data, prices, and inquiry behavior. |
| `ProductDetail` | Both detail URL patterns | Rework presentation and resolve route data robustly while preserving actual detail fields and inquiry flow. |
| `OrderNowModal` | Product cards/detail | Sends EmailJS inquiry fields; it does not create an order or payment. Keep this integration and avoid confirming a purchase. Make dialog scrollable on short screens and keyboard accessible. |
| `ContactUs` | Home | Editorial split contact/inquiry panel with phone, email, WhatsApp, address, consent and EmailJS submission. |
| `Carousel` | Home | Local image carousel with custom arrows and Slick dependencies. Review mobile controls and motion/reduced-motion behavior. |
| `FAQ` | Home | Individually surfaced, numbered Headless UI disclosures grouped by buying/delivery/care/refurbishment topics. |
| `WhyChooseUs` | Home | Three trust pillars grounded in catalog selection and the services offered. |
| `CounterShow` / `Counter` | Home | Reinstated user-provided 700/50/25 metrics with reduced-motion-aware count-up. |
| `UnderDevelopment` | Unused | No route currently references it; do not expose a dead route. |
| `src/Data/data.ts`, `poolTable.ts` | Catalog and homepage content | Local, hard-coded product/media data. Preserve current fields and imagery; do not replace with demo records. |
| `src/lib/navigation.tsx` | Existing route compatibility | Uses Next navigation and session storage for legacy location state. Detail page should prefer stable product-ID lookup while retaining old links. |
| `src/email.ts` | Contact and inquiry forms | EmailJS is the only external business integration found. Preserve service/template IDs and payload shape. |

## Shared design foundation

Implemented the supplied warm theme in `app/globals.css`, `tailwind.config.js`, and `DESIGN_SYSTEM.md`: canvas `#F2EDE5`, ivory `#FFFCF7`, espresso `#252320`, antique gold `#CB913C`, accessible gold `#986328`, sage `#A4AE96`, dark sage `#66775B`, sand `#C4A786`, line `#E5DCCF`, muted `#776C60`, and error `#B85C4A`, with dark editorial and state tokens. Typography uses the existing Manrope and DM Sans variable font packages. Shared button, page intro, product card, image shimmer, route loading and price formatting patterns are in place. All catalog content remains local/static; no Supabase calls were added.

## Implementation status

1. **Done:** Warm theme tokens and design system documentation.
2. **Done:** Shared button, field, product card, image, and loading patterns.
3. **Done:** Global sticky navigation/footer, responsive mobile navigation, and branded not-found recovery.
4. **Done:** Editorial homepage and truthful product/service/contact content.
5. **Done:** Category listings and product cards using existing data and inquiry action.
6. **Done:** Product detail lookup by route ID with existing product data and inquiry action.
7. **Done:** Brands, services, login, signup, contact, FAQ, and inquiry modal presentations. Existing EmailJS/Formik behavior is retained; account screens remain clearly non-persistent prototypes.
8. **Source review only:** The brief explicitly prohibits builds, lint, tests, screenshot QA/runtime verification, and package installs. These checks have not been run.

## Current UI and search pass

- Homepage opener now has three local photographic views, accessible controls, a clear product action and service action, and reduced-motion-aware visual movement.
- Interactive table discovery presents pool, snooker and multi-use examples from the actual local catalog. Category and product-detail routes have additional photography and contextual navigation.
- Mobile category/featured collections use horizontal snap browsing. The header switches to its compact menu at tablet widths, and touch actions have at least 44px height.
- The former clipped circular corner accents were replaced with restrained rails or gradients. Dark surfaces use an explicit high-contrast button variant.
- Canonicals, route metadata, social previews, favicon, sitemap, robots, Store schema, Product schema and product breadcrumbs are implemented. See `docs/seo-content-roadmap.md` for the factual content still needed before a stronger local search campaign.
