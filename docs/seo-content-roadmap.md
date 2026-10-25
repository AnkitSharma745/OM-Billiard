# OM Billiard: content and search next steps

## Implemented in the local site

- Canonical URLs, page titles and descriptions, social sharing metadata, a branded sharing image, favicon, robots route and sitemap.
- Store and product structured data based on details already shown on the site. Product prices come from local catalog data; unknown stock, ratings, delivery promises and return policies are omitted.
- Product detail pages have server-generated metadata and stable catalog URLs. The legacy `/products/[productId]` URLs point to the corresponding `/pool-table/[productId]` canonical URL.
- Home and category pages now include more useful context, local images, internal links, and service and inquiry paths. No Supabase request is needed to render this content.

## Information to gather before the next content pass

1. **Product photography:** clear room shots, installation photos, finish and pocket details, and short clips for each actual table. Record the photographer's permission and descriptive alt text.
2. **Accurate variants:** a structured list of each model's available size, price, playing surface, finish, included items, lead time, and installation requirements. Several current records show only one size, and some description/specification fields disagree.
3. **Refurbished stock:** photos of the actual item, model, condition, work completed, price, and availability. Add a dated update process so sold pieces do not stay visible as available.
4. **Trust evidence:** verify the 700+ customer, 50+ product and 25+ year figures; collect permissioned customer stories, installation photos and any available business certifications. Do not publish ratings or endorsements without a real source.
5. **Local details:** confirm the public business name, postal address, opening hours, service areas, phone numbers and official social profiles. Keep the website and Google Business Profile consistent.
6. **Search operations:** connect Google Search Console, submit the sitemap, inspect indexing and rich-result reports, and monitor queries and page performance after deployment.

Google's guidance for AI search features emphasizes indexable, helpful, original content and the same technical foundations used for traditional search. There is no guaranteed ranking from structured data or an AI-specific text file. Prioritize accurate product facts and original visual proof of the work.

## Verification status

The supplied project brief prohibits builds, tests, deployment and other verification commands without permission. The current edits have been reviewed in source only. Before release, confirm mobile layouts, all route links, form behavior, metadata output, structured data and production URLs in a permitted verification pass.
