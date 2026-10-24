# OM Billiard – Complete Website Documentation

> **Version:** 1.0.0 | **Stack:** React + Vite + TailwindCSS | **Deployed on:** Vercel

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Project Structure](#3-project-structure)
4. [Routing Map (Site Map)](#4-routing-map-site-map)
5. [Core Features](#5-core-features)
6. [Order Flow – End-to-End](#6-order-flow--end-to-end)
7. [Email System](#7-email-system)
8. [Product Catalogue](#8-product-catalogue)
9. [Pages Reference](#9-pages-reference)
10. [Components Reference](#10-components-reference)
11. [Data Files Reference](#11-data-files-reference)
12. [Contact & Business Info](#12-contact--business-info)
13. [FAQ Reference](#13-faq-reference)
14. [Services Offered](#14-services-offered)
15. [Business Stats](#15-business-stats)
16. [Social Media & Branding](#16-social-media--branding)

---

## 1. Project Overview

**OM Billiard** is a billiards and pool table e-commerce storefront built as a React SPA. Based in **Noida, Uttar Pradesh, India**. Sells:

- Premium pool/snooker tables
- Billiard ball sets
- Cue sticks
- Accessories (chalk, gloves, cloth, cases, etc.)
- Foosball tables

The website operates on an **inquiry-to-sale model** (no cart/payment gateway):

1. Customer browses products.
2. Clicks **"Order Now"** on any product detail page.
3. A modal form opens collecting contact details.
4. On submission, **two emails trigger via EmailJS**:
   - Admin notification email to the OM Billiard team.
   - Thank-you confirmation email to the customer.
5. Admin contacts customer directly to finalize and close the sale.

---

## 2. Tech Stack & Dependencies

| Category | Technology |
|---|---|
| Framework | React 18 (JSX) |
| Build Tool | Vite |
| Styling | TailwindCSS |
| Routing | React Router DOM v6 |
| Email Service | EmailJS (emailjs-com) |
| Animations | AOS (Animate On Scroll), Framer Motion |
| UI Primitives | Headless UI (@headlessui/react) |
| Icons | Heroicons, React Icons (FontAwesome) |
| Image Gallery | react-image-gallery |
| Carousel/Slider | react-slick |
| Styled Components | styled-components |
| SEO | react-helmet |
| Deployment | Vercel |

---

## 3. Project Structure

```
OM-Billiard/
+-- public/
|   +-- vite.svg
+-- src/
|   +-- AllRoutes/
|   |   +-- AllRoutes.jsx          # Centralized React Router route definitions
|   +-- Data/
|   |   +-- data.js                # Balls, Cues, Accessories, Foosball, Carousel data
|   |   +-- poolTable.js           # Pool table products with full specifications
|   +-- MyContext/                 # Context/global state (reserved for future use)
|   +-- assets/                    # All static images
|   |   +-- Balls/
|   |   +-- Carousel_Images/
|   |   +-- Cues/
|   |   +-- Accessories/
|   |   +-- Products/
|   |   +-- Product_Category/
|   |   +-- Services/
|   +-- components/
|   |   +-- NavBar.jsx             # Sticky top navigation bar
|   |   +-- Carousel.jsx           # Auto-sliding image carousel
|   |   +-- PoolTable.jsx          # Pool table product listing grid
|   |   +-- Balls.jsx              # Billiard balls product listing grid
|   |   +-- Stick.jsx              # Cue sticks product listing grid
|   |   +-- MoreProduct.jsx        # Additional product suggestions
|   |   +-- ProductDetail.jsx      # Full product detail page with gallery & Order Now
|   |   +-- OrderFormModal.jsx     # Order Now modal form (triggers dual emails)
|   |   +-- ContactUs.jsx          # Contact section with form and business details
|   |   +-- WhyChooseUs.jsx        # Value proposition section
|   |   +-- Counter.jsx            # Animated stats counter section
|   |   +-- FAQ.jsx                # Accordion FAQ section
|   |   +-- Footer.jsx             # Site footer with links and social icons
|   |   +-- UnderDevelopment.jsx   # Placeholder for upcoming features
|   +-- pages/
|   |   +-- Home.jsx               # Main landing/home page
|   |   +-- Services.jsx           # Services offered page
|   |   +-- Brands.jsx             # Brands page
|   |   +-- Login.jsx              # Login page (future auth feature)
|   |   +-- SignUp.jsx             # Sign-up page (future auth feature)
|   |   +-- productPage/
|   |       +-- Product.jsx        # All-products overview page
|   +-- email.js                   # EmailJS utility | dual-email logic
|   +-- App.jsx                    # Root app component
|   +-- App.css                    # Global app styles
|   +-- main.jsx                   # React DOM entry point
+-- index.html                     # HTML shell with meta tags
+-- vite.config.js
+-- tailwind.config.js
+-- sitemap.xml                    # SEO sitemap
+-- vercel.json                    # Vercel SPA redirect rules
+-- package.json
```

---

## 4. Routing Map (Site Map)

| Route | Component | Description |
|---|---|---|
| `/` | `Home` | Landing page – hero, categories, Why Choose Us, stats, contact, FAQ, footer |
| `/products` | `Product` | Full product listing page |
| `/pool-table` | `PoolTable` | Pool & snooker table listing |
| `/billiard-balls` | `Balls` | Billiard ball sets listing |
| `/billiard-cue` | `Stick` | Cue sticks listing |
| `/products/:productId` | `ProductDetail` | Individual product detail (balls, cues, accessories) |
| `/pool-table/:productId` | `ProductDetail` | Individual pool table detail |
| `/services` | `Services` | Services page |
| `/brands` | `Brands` | Brands showcase |

**NavBar links:** Products ? `/products` | Services ? `/services` | Brands ? `/brands`

---

## 5. Core Features

### Product Browsing
- Browse by category: Pool Tables, Billiard Balls, Cue Sticks, Accessories.
- Home page has 3 main category cards with **Explore** buttons.
- Each card shows: name, description, image, and a navigation link.

### Product Detail Page
- Multi-image gallery with thumbnails and fullscreen mode.
- Product title, selected size, current/original price, and savings.
- Size selector dropdown.
- **Order Now** button (triggers the Order Modal).
- Full product specification bullet list.

### Order Now Flow (Inquiry-Based Selling)
- No payment gateway or shopping cart.
- "Order Now" opens a modal form.
- Collects: First Name, Last Name, Email, Phone, Address.
- Terms & conditions toggle required before submit.
- On submit: dual email sent ? "Thank You" modal shown.
- Admin receives inquiry ? contacts customer ? closes sale offline.

### Contact Us Section
- On the Home page.
- Cards: Phone, Email, WhatsApp, Address, Working Hours.
- Standalone contact form with the same dual-email backend.
- Fields: First Name, Last Name, Email, Phone, Message.

### FAQ Section
- Accordion-style with 4 common questions.
- Topics: return policy, pan-India shipping, order tracking, order modification.

### Animated Stats Counter
- 3 count-up stats triggered on scroll via IntersectionObserver:
  - 700+ Happy Customers
  - 50+ Products Available
  - 25+ Years Experience

### Why Choose Us
- 5-card section: Quality, Variety, Service, Expertise, Support.

### Image Carousel / Slider
- Auto-playing hero slider (6 images, 3s interval, fade transition).
- Separate carousel component further down the Home page.

### Responsive Design
- Fully mobile responsive (TailwindCSS breakpoints).
- NavBar collapses to hamburger on mobile.
- All grids: single-column on mobile ? multi-column on desktop.

### Social Media Integration
- Facebook and Instagram links in footer.
- WhatsApp direct link with pre-filled message in Contact Us.

### SEO
- `react-helmet` for dynamic `<title>` and `<meta>` tags.
- `sitemap.xml` for search crawler discovery.

---

## 6. Order Flow – End-to-End

```
1. Customer visits OM Billiard website
2. Browses product categories (Pool Tables / Balls / Cues)
3. Clicks "Explore" on a category card
4. Views the product listing page
5. Clicks on a specific product card
6. Lands on ProductDetail page
   +- Views image gallery (multiple angles)
   +- Reads specs / bullet list of inclusions
   +- Sees current price vs. original price + savings
   +- Clicks [ Order Now ] button
7. Order Now modal opens
   +- Fills: First Name, Last Name, Email, Phone, Address
   +- Agrees to Terms & Conditions (toggle required)
   +- Clicks [ Submit Order ]
8. Two emails sent via EmailJS:
   +- ? Admin (askombilliard@gmail.com): inquiry with customer details
   +- ? Customer: thank-you/confirmation email
9. "Thank You" modal shown to customer
10. Admin receives email ? contacts customer (phone/email)
11. Both coordinate: delivery, pricing, customization
12. Sale closed offline
```

---

## 7. Email System

**File:** `src/email.js`

Powered by **EmailJS** (client-side, no backend server needed).

| Config Key | Value |
|---|---|
| Service ID | `service_le3gomv` |
| Admin Template ID | `template_khgcmoe` |
| User Thank-you Template ID | `template_1fxcnew` |
| Public Key | `g6nJ18KZwZ1ErDTHk` |

### Logic

```js
// sendEmails({ firstName, lastName, email, phone, message })

// Step 1: Admin notification
emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, { firstName, lastName, email, phone, message }, PUBLIC_KEY)

// Step 2: Customer thank-you
emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, { email, firstName }, PUBLIC_KEY)
```

- Returns `{ success: true, message: "Emails sent successfully!" }` on success.
- Returns `{ success: false, message: "Failed to send emails: ..." }` on failure.
- Used by both `OrderFormModal.jsx` and `ContactUs.jsx`.

---

## 8. Product Catalogue

### 8.1 Pool Tables – `src/Data/poolTable.js` | Route: `/pool-table`

#### 1. Premium Pool Table

| Field | Value |
|---|---|
| Size | 8ft x 4ft |
| Current Price | Rs. 49,999 |
| Original Price | Rs. 80,000 |
| Discount | Rs. 30,000 |
| Room Requirement | L 22 Ft x W 16 Ft |

**Inclusions:** Stone Slates Bed, Solid Hard Wood Body with Star Design Legs (Melamine Finish), Imported Cloth, Rubber Cushions with Laminated Top, Inner Leather Pockets, 1 Snooker Ball Set, 4 Ashwood Snooker Cues, Long Rest with Spider, Short Rest with Cross, Long Cue, Triangle, Table Brush, 4pc Dome Light Set, Cue Stand, 12pc Chalk Set, 12pc Cue Tip Set, Scoreboard, 6pc Level Adjusters, Dust Cover.

---

#### 2. American Pool Table

| Field | Value |
|---|---|
| Size | 4ft x 8ft |
| Current Price | Rs. 1.5 Lakhs |
| Original Price | Rs. 1,70,000 |
| Discount | Rs. 20,000 |

**Inclusions:** Authentic Stone Slates, Automatic Ball Return System (single-point collection), K55 Melin Rubber Cushion, 2¼ oz Pool Ball Set, 4 Pool Cues, Pool Triangle, Table Brush, Cue Stand, 3pc Rod Dome Light Set, 12pc Chalk Set, 12pc Cue Tip Set, Dust Cover.

---

#### 3. Royale Pool Table

| Field | Value |
|---|---|
| Size | 8ft x 4ft |
| Current Price | Rs. 1.5 Lakhs |
| Original Price | Rs. 1.6 Lakhs |
| Discount | Rs. 10,000 |
| Room Requirement | L 18 Ft x W 14 Ft |

**Inclusions:** Authentic Stone Slates, Solid Hard Wood Body with Premium V Design Legs, Premium Duco + PU Polish + Lacquer coat (colour of choice), American Style Pockets, Open Channel Ball Collection System, K55 Melin Rubber Cushion, Top Grade Speed Cloth (Red/Blue/Green/Black/Beige), 2¼ oz Pool Ball Set, 4 Pool Cues, Pool Triangle, Table Brush, Cue Stand, 3pc Rod Dome Light Set, 12pc Chalk Set, 12pc Cue Tip Set, Dust Cover.

---

#### 4. Club Pool Table

| Field | Value |
|---|---|
| Size | 8ft x 4ft |
| Current Price | Rs. 72,000 |
| Original Price | Rs. 80,000 |
| Discount | Rs. 8,000 |
| Room Requirement | L 22 Ft x W 16 Ft |

**Inclusions:** Stone Slates Bed, Solid Hard Wood Body with Star Design Legs (Melamine Finish), Imported Cloth, Rubber Cushions with Laminated Top, Inner Leather Pockets, 1 Snooker Ball Set, 4 Ashwood Snooker Cues, Long Rest with Spider, Short Rest with Cross, Long Cue, Triangle, Table Brush, 4pc Dome Light Set, Cue Stand, 12pc Chalk Set, 12pc Cue Tip Set, Scoreboard, 6pc Level Adjusters, Dust Cover.

---

#### 5. Snooker Pool Table (12x6)

| Field | Value |
|---|---|
| Size | 12ft x 6ft |
| Current Price | Rs. 1.2 Lakhs |
| Original Price | Rs. 1.3 Lakhs |
| Discount | Rs. 10,000 |
| Room Requirement | L 18 Ft x W 14 Ft |

**Inclusions:** Stone Slates Bed, Solid Hard Wood Body with Premium Designer Legs (Melamine Finish), British Style Cloth, Premium Rubber Cushions with Laminated Top, Leather Inner Pocket Set, Pool Ball Set, 4 Ashwood Pool Cues, Pool Triangle, Table Brush, 3pc Premium Dome Light Set, Cue Stand, 12pc Chalk Set, 12pc Cue Tip Set, 6pc Level Adjusters, Dust Cover.

---

#### 6. Premium Table Tennis (3-in-1)

| Field | Value |
|---|---|
| Size | 8ft x 4ft |
| Current Price | Rs. 17,999 |
| Original Price | Rs. 21,000 |
| Discount | Rs. 3,001 |
| Room Requirement | L 18 Ft x W 14 Ft |

**Inclusions (Pool + Table Tennis + Optional Poker):** Stone Slates Bed, Hard Wood Body with Designer Legs, Imported Cloth, Rubber Cushions, Leather Inner Pocket Set, Pool Ball Set, 4 Ashwood Pool Cues, Pool Triangle, Table Brush, 3pc Dome Light Set, Cue Stand, 12pc Chalk Set, 12pc Cue Tip Set, 6pc Level Adjusters, Dust Cover, **Table Tennis cum Dining Wooden Top**, **TT Net with Post and Clamp**, **2 TT Racquets**, **3 TT Balls**. Poker Top available at extra cost.

---

### 8.2 Billiard Balls – `src/Data/data.js` | Route: `/billiard-balls`

| ID | Name | Price |
|---|---|---|
| 1 | Xinkang (Resin tournament set) | Rs. 5,000 |
| 2 | Aramith Billiard Balls (Premium) | Rs. 10,000 |
| 3 | American Pool Balls (Standard) | Rs. 3,500 |
| 4 | Chinese Premium Balls (Top-quality resin) | Rs. 2,500 |
| 5 | Hong Tai (Marble design) | Rs. 1,600 |

---

### 8.3 Cue Sticks – `src/Data/data.js` | Route: `/billiard-cue`

| ID | Name | Price |
|---|---|---|
| 1 | Master 3/4 Cue for Snooker | Rs. 1,100 |
| 2 | Leadsuper 3/4 Joint Cue | Rs. 2,250 |
| 3 | Leadsuper Half Joint Cue 10mm | Rs. 1,200 |
| 4 | Omin Gunman Cue Stick | Rs. 20,000 |

---

### 8.4 Accessories – `src/Data/data.js`

| ID | Name | Price |
|---|---|---|
| 1 | Cue Case | Rs. 1,500 |
| 2 | Cue Tip | Rs. 200 |
| 3 | Chalk Box (12 pcs) | Rs. 300 |
| 4 | Billiard Gloves | Rs. 500 |
| 5 | Chalk Holder | Rs. 250 |
| 6 | Billiard Cloth | Rs. 2,000 |

---

### 8.5 Foosball Tables – `src/Data/data.js`

> Note: Image assets are placeholder paths – real images need to be added.

| ID | Name | Price |
|---|---|---|
| 1 | Deluxe Foosball Table | Rs. 12,000 |
| 2 | Compact Foosball Table | Rs. 8,000 |
| 3 | Tournament Foosball Table | Rs. 15,000 |
| 4 | Outdoor Foosball Table | Rs. 17,000 |

---

## 9. Pages Reference

### `Home.jsx` – `/`

Sections (in order):
1. Hero Slider – 6-image auto-playing carousel, "Game On!" headline, "Join Us" CTA
2. Latest Buzz – 3 product category cards (Pool Tables, Billiard Balls, Cue Sticks) with Explore buttons
3. Elevate Your Game – Promo banner with "Shop Now" CTA ? `/products`
4. Why Choose Us – 5-feature grid
5. Carousel – Image/testimonial showcase
6. Counter Show – Animated stats
7. Contact Us – Contact details + inquiry form
8. FAQ – Accordion section
9. Footer

---

### `Services.jsx` – `/services`

| Service | Description |
|---|---|
| Table Installation | Certified expert installation, precise leveling, secure assembly |
| Table Maintenance | Felt replacement, pocket repairs, comprehensive care |
| Custom Design | Personalized table design matching customer space and style |

---

### `Brands.jsx` – `/brands`

Displays the `brands` array from `data.js`. Currently placeholder brands (Brand A, B, C) – real brand data to be added.

---

### `Product.jsx` – `/products`

All-products overview page showing all product categories.

---

### `Login.jsx` & `SignUp.jsx`

Authentication pages exist in codebase but not yet routed. Planned for future user account feature.

---

## 10. Components Reference

| Component | File | Purpose |
|---|---|---|
| NavBar | NavBar.jsx | Sticky top nav – logo, Products/Services/Brands links, "Get Started" CTA, mobile hamburger |
| Carousel | Carousel.jsx | Image/showcase carousel on Home page |
| PoolTable | PoolTable.jsx | Pool table product grid from PoolTableData |
| Balls | Balls.jsx | Billiard ball product grid from poolTableBalls |
| Stick | Stick.jsx | Cue stick product grid from cueSticks |
| MoreProduct | MoreProduct.jsx | Additional product suggestions |
| ProductDetail | ProductDetail.jsx | Image gallery, price/discount, size selector, Order Now button, spec list |
| OrderFormModal | OrderFormModal.jsx | Order form modal – collects contact details, triggers dual emails, shows Thank You modal |
| ContactUs | ContactUs.jsx | Contact cards (phone/email/WhatsApp/address/hours) + general inquiry form |
| WhyChooseUs | WhyChooseUs.jsx | 5-card value proposition section |
| Counter | Counter.jsx | Scroll-triggered IntersectionObserver count-up animation |
| FAQ | FAQ.jsx | Accordion FAQ with 4 entries |
| Footer | Footer.jsx | Dark footer – brand tagline, quick links, Facebook + Instagram icons, copyright |
| UnderDevelopment | UnderDevelopment.jsx | Placeholder for under-construction routes |

---

## 11. Data Files Reference

### `src/Data/data.js`

| Export | Type | Contents |
|---|---|---|
| `brands` | Array | 3 brand entries (placeholder) |
| `accessories` | Array | 6 accessories with id, name, description, img, price |
| `foosballTables` | Array | 4 foosball tables |
| `cueSticks` | Array | 4 cue sticks |
| `poolTableBalls` | Array | 5 billiard ball sets |
| `placeholderProduct` | Array | 3 home page category cards |
| `images` | Array | 6 hero carousel images |

### `src/Data/poolTable.js`

Default export `PoolTableData` – Array of 6 pool table objects.

Each object structure:
```js
{
  id: Number,
  category: "Pool Table",
  name: String,
  description: String,
  img: ImportedImage,
  details: {
    title: String,
    images: [{ original, thumbnail }],   // react-image-gallery format
    size: [String],
    price: { current, original },
    discount: Number,
    information: [String]                // full inclusions/spec bullet list
  }
}
```

### `src/email.js`

Exports `sendEmails(formData)` – async function using EmailJS SDK.
Sends admin + customer emails. Returns `{ success: Boolean, message: String }`.

---

## 12. Contact & Business Info

| Channel | Details |
|---|---|
| Phone | +91 9810508355 |
| Email | askombilliard@gmail.com |
| WhatsApp | +91 81784 55277 |
| Address | Gali No. 2, Fng Vihar 2, near Garhi, Chokhandi, Sector 121, Noida, Uttar Pradesh 201309 |
| Google Maps | https://www.google.com/maps/search/?api=1&query=Gali+No.+2%2C+Fng+Vihar+2%2C+near+Garhi%2C+Chokhandi%2C+Sector+121%2C+Noida%2C+Uttar+Pradesh+201309 |
| Working Hours | Mon-Sat: 9AM - 7PM |

---

## 13. FAQ Reference

| Question | Answer |
|---|---|
| What is your return policy? | Damaged or inaccurate products returned within 24 hours |
| Do you offer pan India shipping? | Yes, free delivery on orders above Rs. 5,000 within 10km |
| How can I track my order? | Email update sent with product status |
| Can I change my order after placing? | Changes allowed within 24 hours of order placement |

---

## 14. Services Offered

| Service | Description |
|---|---|
| Table Installation | Certified team, precise leveling, secure assembly |
| Table Maintenance | Felt replacement, pocket repairs, life-extension care |
| Custom Design | Classic or modern table design tailored to customer specs |

---

## 15. Business Stats

| Metric | Value |
|---|---|
| Happy Customers | 700+ |
| Products Available | 50+ |
| Years of Experience | 25+ |

---

## 16. Social Media & Branding

| Platform | Link |
|---|---|
| Facebook | https://www.facebook.com/Ombilliardofficial |
| Instagram | https://www.instagram.com/ombilliardofficial/ |
| WhatsApp | https://wa.me/918178455277 |

**Tagline:** *"Quality that fits your style. Crafting comfort and elegance for your play."*

**Developer:** Developed & Maintained by Ankit Sharma – https://ankitsharma745.github.io

---

*© 2024 OM Billiards. All rights reserved.*
