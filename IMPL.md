# BioSense AirCare Website: Project Specification

Prepared by Hox Infotech · Draft v1 · 11 October 2026

## 1. Project overview

**Client:** BioSense AirCare Pvt Ltd, Pune, Maharashtra **Built by:** Hox Infotech Private Limited **Scope (per invoice):** UI/UX design and a responsive website (mobile, tablet, desktop). The domain, hosting and business email are already set up. **Site headline requested by the client:** "World's best aircare equipment sales and service" **Brand caption:** "Protecting what matters most" **What the client is known for:** temperature and RH (relative humidity) control. TASS is their own brand name for their product line.

**Goal of the site:** present the product lines, and let visitors build a quote list and send it to the client on WhatsApp. There is no online ordering and no payment.

**Phasing**

1. Phase 1 (now): landing page, built from the details received so far.
2. Phase 2: products page, product detail view, quote list, WhatsApp quote message. Content for products 3 and 4 arrives later.

## 2. Client details (as supplied)

| Item | Value |
| --- | --- |
| Name to use | BioSense AirCare Pvt Ltd (capital S and A, as the client asked) |
| Address (client's message) | #1382, 3rd Floor, Raji Nivas, Behind New Royal Inn Lodging, Navalakha Godown, Saswad Road, Pune – 412308, Maharashtra, India |
| Address (client's deck) | #1382, 3rd floor, Raji Nivas, Phursungi, Pune 412308 |
| Phones | +91 9175428563 / +91 9175164765 |
| Email | biosenseaircare@outlook.com |
| GST | 27AANCB6647A1ZN |
| WhatsApp number for quotes | +91 9175428563 |

**To confirm with the client:** which address wording to show, and whether the GeM and Import email IDs should appear. Their note said "ADD our 2 mail Id (GeM, Import) not required", which is ambiguous. Until confirmed, show only the Outlook address.

## 3. Brand and visual direction

- **Style:** liquid glassmorphism (frosted glass panels, soft light edges, layered depth) on a green gradient background.
- **Palette (assumed, please confirm):** the client's image labelled three swatches `#588157`, which can't be right. The matching standard palette is:

| Role | Hex |
| --- | --- |
| Dark green | #344E41 |
| Deep green | #3A5A40 |
| Fern green | #588157 |
| Sage | #A3B18A |
| Stone (light) | #DAD7CD |

- **Logo:** the supplied PNG is only about 70 px wide. It is a green three-circle network mark shaped like a "<", with three teal flowing air-stream lines to its right. It will be redrawn as a clean SVG (see the separate Design Brief).
- **Design brief:** a separate document, written to be pasted into another Claude chat.

## 4. Product lines

| # | Line | What it is | Site treatment |
| --- | --- | --- | --- |
| 1 | **Super Dry: Service & Support** | Imported (Netherlands) Super Dry drying cabinets by Totech. The client does **not** sell these. It services them. Not part of the TASS line. | Full card. Button reads **"Request service"**, never "Add to quote". |
| 2 | **TASS ceiling-mounted dehumidifiers** | The client's own TASS-branded dehumidifier range. | Full card with featured models. Button: "Add to quote". |
| 3 | Lab and atmosphere-control equipment | Equipment to maintain the atmosphere inside labs. | "Coming soon" placeholder until brochures arrive. |
| 4 | IoT-based products | Connected monitoring and control products. | "Coming soon" placeholder until brochures arrive. |

### Product 1: Super Dry service coverage

The client services the **SDB, SD, SD+ and HSD** ranges. Source: Totech 2019 product catalogue.

| Series | Positioning | Models | Capacity |
| --- | --- | --- | --- |
| SDB | Entry model, basic functions, hygrometer display | SDB 151-40, 1104-40, 1106-40 | 135 l, 1139 l, 1139 l |
| SD | Robust design, digital panel, humidity and door alarms | SD 151-21, 302-21, 502-21, 702-21, 1104-21, 1106-21, 1704-21 | 135, 320, 496, 680, 1139, 1139, 1700 l |
| SD+ | Precision drying, data logger, ethernet, dynamic regeneration | SD+ 302-22, 1104-22, 1106-22 | 320, 1139, 1139 l |
| HSD | Extra-fast drying, below 0.5% RH, 15 min recovery | HSD 1104-52, 1106-52, 1704-52 | 1179, 1179, 1700 l |

**Rules for product 1**

- Do not say "authorised" or "official" anywhere unless the client confirms a service-partner agreement with Totech.
- Do not use Totech or Super Dry logos. A small footnote such as "Super Dry® is a trademark of its respective owner" is recommended (confirm wording).
- Use only the two cabinet photos supplied. The third image is a walk-in dry room (SDR series), which is **not** in the service list. Do not use it for product 1 unless the client confirms.
- The Totech catalogue is third-party material. Using its photos and specs needs the client's confirmation that they may.

### Product 2: TASS ceiling-mounted dehumidifiers

The TASS deck groups the range as:

| Group | Models | Capacity | Airflow | Target use |
| --- | --- | --- | --- | --- |
| Compact | TASS-201E | 20 L/day | 200 m³/h | Micro-environments, isolation rooms |
| Standard | TASS-901E to TASS-1681E | 90 to 168 L/day | 900 to 2000 m³/h | Mid-size labs, standard OTs |
| Industrial | TASS-3881E to TASS-9681E | 360 to 960 L/day | 3500 to 8500 m³/h | Centralised hospital HVAC, pharma manufacturing |

**Common specs (from the datasheets):** humidity control 40% to 95% RH; working temperature 5 to 38 °C; hose drainage; eco-friendly R410a refrigerant (TASS-201E uses R134a); voltage and frequency customisable; OEM and ODM available. P-series models have 24 V dry contacts as standard, and other models can have them as an option.

**Featured on the landing page:** TASS-201E (compact, 20 L/day, 300 W, 220 V, ≤40 dB) and TASS-9681E (960 L/day, 12 kW, 380 V, 300 kg net).

**Needs checking before publishing**

- The datasheets list **many more models** than the deck's three groups: 140, 160, 230P, 350P, 500P, 500PL, 500PC, 15E, 201E, 502E, 503E, 901E, 1301E, 1381E, 1501E, 1681E, 2481E, 3881E, 4881E, 7281E and 9681E. Note the deck's "Standard" and "Industrial" groups skip 2481E. The full table is in Appendix A.
- Model names on the datasheets start with "DJDD-". The deck renames them "TASS-". This spec assumes TASS-\<number> for every model. Confirm.
- Capacity is quoted at **different test conditions** (27 °C and 60% RH, versus 30 °C and 80% RH) and in different units (pints/day versus litres/day). Always show the test condition next to the number.
- The deck's wording on certification and benefits ("every unit globally certified", "audit-readiness", "vibration-dampened casing", "ultra-quiet") is not backed by the datasheets, apart from ISO 9001, CE and SGS marks printed on them. Those marks belong to the manufacturer's datasheet. Use certification claims only after the client confirms they apply to TASS units.
- Product photos come from the supplier's datasheets, which carry the supplier's logo. Use cropped unit photos without it, and only if the client has the right to use them.

## 5. Phase 1: landing page

One scrolling page. Sections in order:

1. **Navigation bar** (sticky, glass): logo, links (Products, Service & Support, About, Contact), button "Request a Quote".
2. **Hero:** headline "World's best aircare equipment sales and service", caption "Protecting what matters most", TASS badge, buttons "Request a Quote" and "Explore Products". Visual: ceiling-mounted dehumidifier image with a decorative glass readout (for example "RH 60% · 22 °C").
3. **Temperature & RH specialists:** short intro, then four application cards: Laboratories, Pharmaceutical clean rooms, Operation theatres, ICUs.
4. **Product showcase:** four cards (see section 4). Products 3 and 4 show "Coming soon". Below the cards, two featured TASS models with key specs.
5. **Why choose us:** placeholder points until the client supplies real ones. Suggested: sales and service under one roof; custom voltage and frequency; engineering help with sizing and BMS interfacing.
6. **Contact and WhatsApp:** address, phones, email, a "Chat on WhatsApp" button, and a map link placeholder.
7. **Footer:** logo, caption, company name, GST, address, © 2026 BioSense AirCare Pvt Ltd, trademark footnote.

**Placeholder rule:** never invent numbers (years in business, installations, clients). Mark any such text "\[client to confirm\]" in the design and remove it before launch.

**Note on the headline:** "World's best" is a superlative marketing claim. It is fine as a slogan, as the client requested, but keep it out of any product or specification claims.

## 6. Phase 2: products and quotation

**Pages:** Home, Products, Quote List (cart), About, Contact. Product details open in a modal or expandable card rather than separate pages, unless a product needs a lot of specs.

**Flow**

1. Visitor browses products and clicks "Add to quote" (TASS products) or "Request service" (Super Dry).
2. Items go to a quote list with editable quantities. The list is kept in React state and `localStorage`, so it survives a refresh.
3. Visitor enters name, phone, and company or location.
4. "Send on WhatsApp" opens WhatsApp with the message pre-typed. **Nothing is sent from the site.** The visitor presses Send in WhatsApp.

**Link format:** `https://wa.me/919175428563?text=` followed by the URL-encoded message. The number has no plus sign or spaces.

**Message template**

```
Hello BioSense AirCare, I'd like a quotation for:
1. TASS-901E, Qty 2
2. TASS-3881E, Qty 1
Service request:
3. Super Dry SD+ 1106, Qty 1
Name: ...
Phone: ...
Company / Location: ...
```

Limit the list to about 20 items, because very long links fail in WhatsApp.

**Known limitation to tell the client:** because nothing is sent from the site, the client only sees requests that arrive on WhatsApp. They keep no record of abandoned or unsent quote lists.

## 7. Technical plan

| Layer | Choice |
| --- | --- |
| Framework | Next.js with static export (`output: 'export'`), TypeScript |
| Styling | Tailwind CSS |
| Product data | `products.json` in the repo (no database, no CMS) |
| Quote state | React Context + `localStorage` |
| Quote sending | `wa.me` link |
| Images | Pre-compressed WebP in `/public` (Next image optimisation does not work in static export) |
| Hosting | Cloudflare Pages or Netlify (free, commercial use allowed). Vercel's free Hobby plan is non-commercial, so avoid it. |
| Code | Private repo in Hox Infotech's GitHub organisation; auto-deploy on push to `main` |
| Config | WhatsApp number, phones and email in one config file, not scattered in components |

Product changes mean editing `products.json` and redeploying. If the client wants to edit products themselves, that needs a CMS and is extra scope.

## 8. Assets and status

| Asset | Status |
| --- | --- |
| Logo | PNG received (low resolution). To be redrawn as SVG. |
| Palette | Received, with a labelling error. Assumed values above. |
| Super Dry catalogue, 3 photos | Received. Third image is a dry room, so unusable for product 1. |
| TASS datasheets (21 models) and 10-slide deck | Received. |
| Products 3 and 4 brochures and images | Due tomorrow. |
| High-resolution product photos without supplier branding | Needed from client. |
| Real "why choose us" points, About text | Needed from client. |

## 9. Open questions for the client

1. Confirm the palette hex values.
2. Which address wording to show? Show GST in the footer?
3. Show the GeM and Import emails or not?
4. Is the company an authorised Super Dry service partner?
5. May the Totech and supplier photos and specs be used on the site?
6. Confirm TASS-\<number> naming for every model, and the certification wording.
7. Which models appear on the Products page (all 21 or a selection)?
8. Does the client want a quantity field only, or also a notes field per item?

## 10. Scope control

The package is INR 5,500, so fix these in writing before design starts:

- Number of pages (5) and number of design revision rounds (agree a number, for example 2).
- The client supplies content and images by an agreed date.
- Extras are quoted separately: SEO, blog, online payments, extra email accounts, CMS, maintenance.

## Appendix A: TASS model data (from the supplier datasheets)

Power is given per datasheet. Capacity condition: A = 27 °C 60% RH, B = 30 °C 80% RH. P = pint/day, L = litres/day.

| Model | Capacity | Cond. | Voltage | Power | Airflow m³/h | Noise | Net kg | Size L×W×H mm |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 140 | 140 P | A | 220-240V | 1.25 kW | 950 | ≤60 dB | 48 | 700×540×435 |
| 160 | 160 P | A | 220-240V | 1.35 kW | 1200 | ≤60 dB | 54 | 770×660×463 |
| 230P | 230 P | A | 220-240V | 1.6 kW | 1500 | ≤60 dB | 77 | 870×770×478 |
| 350P | 350 P | A | 220-240V | 2.2 kW | 2000 | ≤65 dB | 105 | 1100×820×605 |
| 500P | 500 P | A | 220-240V | 2.7 kW | 2800 | ≤65 dB | 140 | 1300×800×713 |
| 500PL | 500 P | A | 220V | 2.7 kW | 2800 | ≤65 dB | 158 | 1750×800×495 |
| 500PC | 500 P | A | 220-240V | 3.0 kW | 2000 (+1500 heat out) | ≤65 dB | 140 | 1400×930×820 |
| 15E | 720 P | A | 380V | 4.9 kW | 4500 | ≤70 dB | 250 | 1850×1060×793 |
| 201E | 20 L | B | 220V | 300 W | 200 | ≤40 dB | 18.5 | 700×310×210 |
| 502E | 30 L | B | 220V | 600 W | 500 | ≤48 dB | 26 | 880×360×235 |
| 503E | 50 L | B | 220V | 600 W | 500 | ≤50 dB | 29.3 | 458×737×325 |
| 901E | 90 L | B | 220V | 1.2 kW | 900 | ≤50 dB | 56 | 625×940×472 |
| 1301E | 130 L | B | 220V | 1.3 kW | 900 | ≤50 dB | 56 | 625×940×472 |
| 1381E | 138 L | A | 220V | 1.5 kW | 1000 | ≤60 dB | 56 | 625×940×472 |
| 1501E | 150 L | A | 220V | 1.8 kW | 1200 | ≤60 dB | 56 | 625×940×472 |
| 1681E | 168 L | A | 380V | 3.0 kW | 2000 | ≤60 dB | 112 | 1100×940×500 |
| 2481E | 240 L | B | 380V | 4.0 kW | 2400 | ≤60 dB | 112 | 1100×940×500 |
| 3881E | 360 L | B | 380V | 5.5 kW | 3500 | ≤65 dB | 183 | 1490×1195×710 |
| 4881E | 480 L | B | 380V | 6.5 kW | 4000 | ≤65 dB | 183 | 1490×1195×710 |
| 7281E | 720 L | B | 380V | 10 kW | 7000 | ≤60 dB | 283 | 1960×1200×700 |
| 9681E | 960 L | B | 380V | 12 kW | 8500 | ≤70 dB | 300 | 1960×1200×700 |

Common to all: 40% to 95% RH control, 5 to 38 °C working range, hose drainage, R410a refrigerant (201E: R134a), voltage and frequency customisable. The "Net kg" column is net weight. Model 500PL lists no gross weight, and 500PC lists none either.
