# BioSense AirCare Landing Page: Design Brief (Liquid Glass)

Oct 12, 2026 · @HOX

A five-page website for BioSense AirCare Pvt Ltd (Home, Products, Quote list, About, Contact) in a light Liquid Glass style: frosted white glass over slow sky, mint and lavender shapes, slate text and deep-teal actions. Structure, features and copy are locked; this brief covers the visual layer, and from the Phase 2 section on, the products and quotation pages.

| Item | Detail |
| --- | --- |
| Client | BioSense AirCare Pvt Ltd, Pune. Temperature and relative-humidity (RH) specialists |
| Product line | TASS (own range of ceiling-mounted dehumidifiers), plus Super Dry® service |
| Headline | World's best aircare equipment sales and service |
| Caption | Protecting what matters most |
| Chosen direction | Liquid Glass, light. The dark and light-green versions are kept for reference |
| Delivered | Desktop mockups of all five pages, plus a product-details state and an empty quote list, the logo set, and a tokens and components board |
| Target build | Next.js, TypeScript and Tailwind (the mockup is raw CSS) |
| Status | Mockup done for all five pages. Photos are in for the 21 TASS models and the Super Dry cabinet. Open: map, team photo, Super Dry series photos, Lab and IoT products, and the client confirmations |

## What the page must do

BioSense AirCare sells and services equipment that holds temperature and relative humidity inside tight limits. The page has three jobs:

1. Show who BioSense serves: laboratories, pharmaceutical clean rooms, operation theatres and intensive care units.
2. Present TASS ceiling-mounted dehumidifiers (20 to 960 litres per day) and Super Dry service, with two featured TASS models and their specifications.
3. Move the visitor to one action: Request a Quote, Request service, Add to quote, or Chat on WhatsApp (+91 9175428563).

The copy speaks to people who equip or maintain those four kinds of site.

## Locked content rules

These come from the client brief and do not change with the visual style.

- No invented statistics or certifications. The four Why choose us tiles carry a "\[client to confirm\]" tag until the client approves them.
- Never describe Super Dry as "authorised" or "official".
- Super Dry is shown as a service ("Request service"), not as a product BioSense sells. The footnote "Super Dry® is a trademark of its respective owner." appears under the product cards and in the footer.
- No Super Dry or Totech logos. Any label visible on a supplied photo is removed.
- Use only supplied photos. Where none exists, use a clearly labelled placeholder. The two Coming soon cards use icons, not images.
- Do not use the walk-in dry room image.
- Indian English throughout.

## Page structure

The landing page has seven sections, top to bottom. None was added, removed or reworded for the Liquid Glass version. Its navigation and buttons now link to the Phase 2 pages, described after this table.

| # | Section | Content | Main action |
| --- | --- | --- | --- |
| 1 | Navigation | Sticky glass pill with logo, Products, Service & Support, About, Contact. On mobile a menu button opens a glass sheet | Request a Quote |
| 2 | Hero | TASS badge, headline, caption, one supporting line, Super Dry cabinet photo on a glass card with floating readout chips | Request a Quote, Explore Products |
| 3 | Specialists | Laboratories, Pharmaceutical clean rooms, Operation theatres, Intensive care units, one line each | None |
| 4 | Products | Four cards: Super Dry: Service & Support, TASS Ceiling-Mounted Dehumidifiers, Lab Environment Equipment and IoT Monitoring & Control (both Coming soon). Then the featured TASS-201E and TASS-9681E with specifications | Request service, Add to quote |
| 5 | Why choose us | Four tiles, each tagged "\[client to confirm\]" | None |
| 6 | Contact | Company, address, two phone numbers, email, WhatsApp button, map placeholder, Get directions | Chat on WhatsApp |
| 7 | Footer | Logo, caption, GST 27AANCB6647A1ZN, address, © 2026, trademark footnote | None |

## Phase 2: products and quotation

Four more pages join the landing page: Products, Quote list, About and Contact. They share its navigation, footer, tokens and components, and obey the locked content rules. Product details are not a separate page: the Details button opens an expanded card in place. Each page is a board in the Liquid Glass canvas, and the pages link to each other.

| Page | Content | Main action |
| --- | --- | --- |
| Products | Header with "to confirm" tags. A strip of four common specs. The TASS range: group tabs, search and a four-column grid of 21 model cards. Super Dry service: a photo panel and four series cards. Two Coming soon panels | Add to quote, Request service |
| Products, details open | The same page with TASS-901E open: an expanded card above its row with the photo, up to 13 specification rows, Add to quote, View quote list and Close | Add to quote |
| Quote list | Items with thumbnail, name, type tag, quantity stepper and remove. Beside them a details form, a live WhatsApp message preview and the send button | Send on WhatsApp |
| Quote list, empty | The empty state (see below) | Browse products |
| About | Intro with a photo placeholder, four figure placeholders, what we do, the four application cards, Why choose us, a help-me-choose band | Request a Quote |
| Contact | Company details, address, two phones, email, WhatsApp button, map placeholder, and a three-step explainer of how to request a quote | Chat on WhatsApp |

### Quote flow

1. Add to quote (TASS) or Request service (Super Dry) puts the item in the list. The button changes to "Added x2, add more", and a count badge appears on the nav's Request a Quote button (a cart icon with a badge under 640 px).
2. The list is saved in the browser (localStorage), so it survives a refresh and a change of page. It holds up to 20 lines, because a longer WhatsApp link can fail. At the limit a notice says so.
3. On the Quote list page each line has a stepper (1 to 99) and a remove button. Clear list empties it.
4. The visitor enters name and phone (both needed) and company or location (optional).
5. Send on WhatsApp opens https://wa.me/919175428563 with the message below already typed. Nothing is sent from the site; the visitor presses Send in WhatsApp. Until the list has an item and the name and phone are filled, the button is the dashed disabled style with a one-line reason.

Message template (Super Dry lines go under "Service request:", numbering continues, and the number carries no plus sign or spaces):

```
Hello BioSense AirCare, I'd like a quotation for:
1. TASS-901E, Qty 2
2. TASS-3881E, Qty 1
Service request:
3. Super Dry SD+ 1106-22, Qty 1
Name: ...
Phone: ...
Company / Location: ...
```

Known limit to tell the client: because nothing is sent from the site, they only see requests that arrive on WhatsApp. They keep no record of abandoned or unsent lists.

### Product data rules

- **21 TASS models** from the supplier datasheets, named TASS-\<number> (to confirm). The datasheets' "DJDD-" prefix and supplier logos are not shown.
- **Groups.** Compact: 201E. Standard: 901E, 1301E, 1381E, 1501E, 1681E. Industrial: 3881E, 4881E, 7281E, 9681E. Eleven models are in none of the deck's groups (140, 160, 230P, 350P, 500P, 500PL, 500PC, 15E, 502E, 503E, 2481E). They carry a dashed "Group to confirm" pill and their own filter tab.
- **Capacity always shows its test condition** (27 °C, 60% RH or 30 °C, 80% RH) and keeps the datasheet's unit, pints per day or litres per day. Nothing is converted.
- **Common specs** appear once, in the strip: 40% to 95% RH control, 5 to 38 °C, hose drainage, R410a (TASS-201E: R134a), voltage and frequency customisable, OEM and ODM. 24 V dry contacts are standard on P-series models (230P, 350P, 500P, 500PL, 500PC) and optional on the others.
- **No certification or benefit claims** (ISO 9001, CE, SGS, "ultra-quiet", "audit-readiness") until the client confirms they apply to TASS units.
- **Photos** are catalogue cut-outs without supplier marks. Two pairs share a photo (901E and 1301E, 3881E and 4881E), and 500PL shows the unit with its panel open. Use depends on the client's right to use supplier photos.
- **Super Dry** shows four series from the Totech 2019 catalogue: SDB (3 models), SD (7), SD+ (3) and HSD (3). Capacity is the cabinet volume in litres. There is one cabinet photo; each series has a labelled photo placeholder. Never "authorised" or "official", no logos, and the trademark footnote stays.

### Empty states and placeholders

Every place that waits on content has a designed empty state, so nothing looks broken and nothing is invented.

| Where | What shows |
| --- | --- |
| Lab and atmosphere-control equipment | A dim, dashed glass panel with a Coming soon pill and three ghost cards. Each has a "\[product photo\]" frame, "\[product name\]", "\[spec line\]" and a disabled button. Swap in real cards when the brochures arrive |
| IoT-based products | The same panel and ghost cards |
| No model matches the filter or search | Dim panel, search icon, "No models match" and a Clear filter and search button |
| Quote list is empty | Dim panel, cart icon, a short explanation, Browse products and Request Super Dry service. The form fields are disabled, the preview says the message appears once a product is added, and the send button is disabled |
| Super Dry series photos | A labelled frame, for example "Photo: SDB" |
| Service line in the quote list | A small "Photo" placeholder in place of a thumbnail |
| About | A team or facility photo placeholder, and four figure tiles (years, installations, clients, cities) showing "00" with "\[client to confirm\]". No real numbers appear |
| Contact | Map placeholder, and "\[address wording to confirm\]" and "\[opening hours: client to confirm\]" tags |

## Visual direction

Light, airy and clinical, like purified air. Four layers, back to front:

1. **Canvas.** White fading to ice blue (#F5F9FC).
2. **Liquid.** An animated mesh gradient plus six morphing shapes in sky, mint and lavender that drift slowly behind every section. Glass only reads over colour, so these are what the panes show through.
3. **Glass.** White panes at 55% opacity (72% where text sits over busy colour) with a 24 px blur. Each has a 1 px white edge, a faint slate ring so the pane still shows on white, and a highlight along the top-left edge.
4. **Content.** Slate text, deep-teal buttons and a few solid accents.

The only solid colours on the page are the teal buttons, the dark TASS badge and the WhatsApp button. Everything else is glass.

## Colour tokens and contrast

Every text colour passes WCAG AA (4.5 : 1) on white and on glass over the lightest and darkest shape behind it.

| Token | Hex | Use | Contrast |
| --- | --- | --- | --- |
| canvas-0 | #FFFFFF | Page top |  |
| canvas-1 | #F5F9FC | Page bottom, ice blue |  |
| sky-200 | #BAE6FD | Liquid shapes |  |
| mint-100 | #CCFBF1 | Liquid shapes |  |
| lav-100 and lav-300 | #F5F3FF and #DDD6FE | Liquid shapes. lav-300 is a deeper tint of ours, so lavender shows |  |
| ink | #0F172A | Headings and body | 17.85 : 1 on white |
| ink-2 | #334155 | Supporting copy | 10.35 : 1 on white |
| ink-3 | #475569 | Captions, spec labels | 7.58 : 1 on white |
| teal-700 | #0F766E | Button fill, eyebrows, icons | 5.47 : 1 with white text |
| teal-800 | #115E59 | Button hover | 7.58 : 1 with white text |
| cyan-600 | #0284C7 | Focus ring | 4.10 : 1 on white (3 : 1 needed) |
| cyan-700 | #0369A1 | Text links | 5.93 : 1 on white |
| WhatsApp green | #25D366 | Chat button, with #052E16 text | 7.52 : 1 |

The first brief named #0D9488 and #0284C7 for buttons. White text on them is 3.74 : 1 and 4.10 : 1, below the AA bar, so button fills use #0F766E. The brighter teal and cyan stay for glows and rings. The lowest text-on-glass result is 4.83 : 1 (teal-700 over a sky shape).

## Type

Manrope for headings and Inter for text, both from Google Fonts (Manrope 600, 700, 800; Inter 400, 500, 600).

| Role | Font | Size / line height | Weight |
| --- | --- | --- | --- |
| Hero title | Manrope | 68 / 1.04 (38 on mobile) | 800, tracking -0.02em |
| Section title | Manrope | 36 / 1.15 (30 on mobile) | 700 |
| Hero caption | Manrope | 28 / 1.3, teal-700 | 600 |
| Featured model name | Manrope | 28 | 800 |
| Card title | Manrope | 20 to 22 / 1.25 | 700 |
| Body | Inter | 17 / 1.6 | 400 and 500 |
| Button | Inter | 16 | 600 |
| Eyebrow | Inter | 13, capitals, tracking 0.16em | 600 |
| Pill | Inter | 12, capitals, tracking 0.08em | 600 |

## Components and states

| Component | Spec | States |
| --- | --- | --- |
| Glass card | White 55%, 24 px blur, 28 px radius | Hover: rises 6 px, grows 1.2%, brighter edge, one light sweep |
| Strong glass | White 72%. Nav pill, hero card, contact panel, floating chips | No hover on chips and nav |
| Dim glass | White 38%, dashed edge. Coming soon cards | No hover |
| Primary button | Teal-700, white text, 48 px high, full pill | Hover: teal-800, lifts 2 px, grows 4%, shine sweep. Pressed: shrinks to 97%. Focus: 3 px cyan ring |
| Glass button | White 60%, slate text | Hover: white 85% |
| Disabled button | Dashed edge, "Coming soon" | Not clickable |
| WhatsApp button | #25D366 with dark green text | Hover: lighter green |
| Pill | 28 px high, white 65%, capitals | None |
| TASS badge | Dark slate pill, white letters | None |
| Icon tile | 56 px (52 px in Why choose us), mint-white gradient, teal icon | Tilts 6 degrees and grows 12% with its card |
| Photo frame | Light stage, cut-out photo with drop shadow. Hero is square; product cards are 168 px high | Photo grows 6% on card hover |
| Placeholder | Dashed frame with a cross and a label. Used for the map | None |
| Spec row | 132 px label column, value beside it, 1 px divider | None |
| Filter tab | 44 px pill, white 55%, with a count chip | Hover: lifts 2 px. Selected: teal-700 fill, white text. Exposed as a pressed toggle |
| Form field | 52 px, 16 px radius, white 85%, visible label above, slate placeholder | Focus: 3 px cyan ring and white fill. Disabled: dashed edge, 35% white |
| Quantity stepper | Pill with minus, value, plus. 44 px buttons, range 1 to 99 | Hover: mint fill. At a limit the button is greyed and disabled |
| Product card | Glass card, 164 px photo stage, model name, group pill, three spec lines, Add to quote and Details buttons | Added: the button turns glass and reads "Added x2, add more". Open: 2 px teal ring |
| Expanded detail card | Strong glass, full row width, photo left, two-column spec list right | Opens above the row of the clicked card. Closes with the X, Close or Hide details |
| Group to confirm pill | Pill with a dashed edge, sentence case | None. Removed once the client confirms the group |
| Ghost card | Empty-state product card: dim glass, dashed edge, labelled photo frame, "\[product name\]", "\[spec line\]", disabled button | No hover, not clickable |
| Quote count badge | White pill with teal-800 number inside the nav button (teal pill on the cart icon under 640 px) | Hidden when the list is empty |
| Message preview | Mint bubble, 18 px radius, the exact text that will open in WhatsApp | Updates as quantities and fields change |
| Icon button | 44 px round glass button with an icon and an accessible name (remove, close) | Hover: grows 10%, white fill, teal icon |

## Motion

Slow loops in the background, quick springs on touch. Only transform and border-radius are animated, so nothing reflows.

| Name | What moves | Time and easing |
| --- | --- | --- |
| Liquid shapes | Border-radius morphs while the shape drifts, turns and scales | 22 to 42 s, ease-in-out, endless |
| Mesh gradient | Five soft colour patches slide behind everything | 46 s, ease-in-out, back and forth |
| Card hover | Lift 6 px, scale 1.012, brighter fill and edge, wider blue shadow | 500 ms, cubic-bezier(0.2, 0.8, 0.2, 1) |
| Light sweep | A diagonal highlight crosses the card once | 900 ms, same curve |
| Button hover and press | Lift 2 px, scale 1.04, shine sweep. Press scales to 0.97 | 350 ms spring, cubic-bezier(0.34, 1.56, 0.64, 1) |
| Icon tile | Tilts 6 degrees and grows 12% when its card is hovered | 500 ms spring |
| Floating chips | Hero chips bob 9 px, each on its own timing | 6 to 8.5 s, ease-in-out |
| Live dot | The readout dot sends out a ring | 2.2 s, ease-out, endless |
| Hero entrance | Content fades up and settles | 900 ms, same curve as cards |
| Menu sheet | Mobile menu drops in | 400 ms, same curve |
| Link underline | Contact links draw an underline left to right | 350 ms, same curve |

With "reduce motion" set, every loop and transform stops.

## Imagery

Only supplied photos are used. Each was cut out from its background so it sits on the light stage inside the glass frame.

| Slot | Photo | Treatment |
| --- | --- | --- |
| Hero | Super Dry six-door cabinet, supplied render | Cut out, "SUPER DRY" label removed, mark at the bottom corner cropped. Square frame |
| Super Dry card | Super Dry six-door cabinet, second supplied photo | Cut out, label removed, wheels cropped so it sits flat |
| TASS card | TASS DJDD-9681E with wall controller, from the ceiling-dehumidifier catalogue | Cut out. The unit carries no brand mark |
| Lab Equipment and IoT cards | Icons only | Per the client brief |
| Contact map | Labelled placeholder | Needs a real map |
| TASS cards (21) | One cut-out per model from the ceiling-dehumidifier catalogue | Cut out, catalogue branding absent. 901E and 1301E share a photo, as do 3881E and 4881E; 500PL shows an open panel. Ask for one clean photo per model |
| Super Dry service panel | The six-door cabinet render used in the hero | Same cut-out. The four series cards use labelled photo placeholders until series photos arrive |
| Lab and IoT product lines | Ghost cards (Products page); icons only on the landing page | Labelled placeholders until brochures and photos arrive |
| About photo | Team or facility photo | Labelled placeholder, client to supply |

The supplied cabinet photos are small (the hero cut-out is 512 × 723 px). They look sharp at this size and will soften on large or high-density screens, so ask the client for originals.

## Responsive behaviour and accessibility

**Breakpoints**

- 1280 px and wider: four product cards in a row.
- 1024 to 1279 px: two cards per row.
- Under 1024 px: hero stacks (text, then photo), the nav links collapse into a menu button that opens a glass sheet.
- Under 640 px: one column, hero title drops to 38 px, the nav Request a Quote button moves into the menu sheet, buttons wrap their text.

**Accessibility**

- All text meets AA (see the contrast table).
- Focus ring: 3 px cyan-600 with a 3 px offset on every link and button.
- Touch targets are 44 px or taller (buttons are 48 px).
- The hero photo and chips are decorative and hidden from screen readers. Product photos carry alt text.
- "Reduce motion" stops all animation. "Reduce transparency", and browsers without backdrop-filter, get near-opaque white panes (94 to 96%), so contrast never depends on the blur.

**Phase 2 pages**

- Product grid: four columns from 1280 px, two from 640 px, one below. The expanded card is inserted above the row of the clicked card, using the column count at that width, and its photo and specs stack under 1024 px (specs to one column under 640 px).
- Quote list: items and form side by side from 1024 px, stacked below. Under 640 px a line's stepper and remove button drop under its name.
- Contact and About grids go to one column under 1024 px (steps under 640 px).
- Every field has a visible label. The quantity value is announced when it changes, steppers have names, and filter tabs are pressed toggles.
- Disabled states (send button, form fields, Coming soon buttons) are shown by a dashed edge as well as by colour, and always carry a reason in words.

## Build notes

The mockup is raw CSS. The Components board in the Liquid Glass canvas holds copy-paste code: the CSS variables, a Tailwind theme.extend block and the keyframes.

- Put the tokens in CSS variables on :root. In Tailwind, theme.extend carries colours, blur, radius, shadows, easing and keyframes.
- The liquid shapes are radial gradients, not blur filters, which paints faster. Animate transform and border-radius only.
- Backdrop-filter is costly on low-end phones. Keep the blur at 24 px, avoid stacking more than two panes, and test on a mid-range Android phone.
- A scroll-driven entrance (animation-timeline: view()) is optional. It is left out of the mockup so no section starts hidden. Add it behind an @supports check.
- Page state is small: the mobile menu on every page; on Products, the group filter, search text and open card; and the quote list, shared between pages through localStorage (see Phase 2).
- Serve photos as WebP with transparency, and at twice the display size once originals arrive.

## Open questions

- [ ] Hero chips: "RH control 40–95%" and "20–960 L/day" are TASS dehumidifier figures, and the TASS badge sits above the headline, but the hero photo is now a Super Dry cabinet. Keep, change or remove them?
- [ ] Can the client send original-resolution cabinet photos?
- [ ] Does the client confirm the four Why choose us statements? Once they do, the "\[client to confirm\]" tags come off.
- [ ] Map: embed a live map, or use an image of the Phursungi location? Where should Get directions go?
- [ ] Quote flow: now designed as a quote list that opens WhatsApp (see Phase 2). Does the client want a quantity field only, or also a notes field per item?
- [ ] Which address wording to show: the full one from the client's message, or the shorter one from the deck? Show GST in the footer?
- [ ] Show the GeM and Import email IDs, or only the Outlook address (the current design)?
- [ ] Is BioSense an authorised Super Dry service partner? Until the client says yes the pages never use that word.
- [ ] May the Totech and supplier photos and specs be used on the site?
- [ ] Confirm TASS-\<number> naming for every model, and the certification wording.
- [ ] Show all 21 models or a selection? Which group do the 11 ungrouped models belong to?
- [ ] Send us one clean photo per TASS model, and photos for each Super Dry series.
- [ ] Real About text, years in business and other figures. Until then the About page shows labelled placeholders.

## Files

The Liquid Glass canvas holds the landing page and the Phase 2 pages (Products, product details, Quote list with and without items, About, Contact), the logo set, and a tokens and components board. The other canvases hold the landing page only. All are private until shared.

- [Liquid Glass, all pages (chosen direction)](https://claude.ai/artifact/7qCsYb86auqtBAhk4phvd4)
- [Light green version](https://claude.ai/artifact/2jGy6Giy2KosSwhLydDy6H)
- [Dark green version](https://claude.ai/artifact/GSMQe9aZy2UppPVW3erahY), and the [original](https://claude.ai/artifact/126MLKvzu5d5bd4SzyfV76), which is the same design

The logo was redrawn as vectors from Bio\_Logo\_5.png: the mark, horizontal lockups for light and dark grounds, two single-colour marks, a favicon and the TASS badge.
