# Tech Spec — Highority Website

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | `^19.1` | UI framework |
| `react-dom` | `^19.1` | DOM renderer |
| `react-router-dom` | `^7.6` | Multi-page routing (19 routes) |
| `gsap` | `^3.13` | Animation engine (ScrollTrigger, SplitText, DrawSVG) |
| `@gsap/react` | `^2.1` | `useGSAP` hook for cleanup |
| `lenis` | `^1.3` | Smooth scroll |
| `three` | `^0.175` | 3D globe — lat/long pin placement, dot-matrix sphere |
| `@react-three/fiber` | `^9.1` | React renderer for Three.js |
| `@react-three/drei` | `^10.0` | OrbitControls, shader helpers |
| `lucide-react` | `^0.511` | Icon library |

GSAP plugins are free as of 2025 — ScrollTrigger, SplitText, DrawSVG bundled with `gsap`.

---

## Component Inventory

### Layout (shared across all routes)

| Component | Source | Notes |
|-----------|--------|-------|
| `Header` | Custom | Transparent → solid on scroll (100px threshold). Desktop: horizontal nav + mega menu dropdown. Mobile: hamburger → full-screen slide menu with services accordion. |
| `MobileActionBar` | Custom | Fixed bottom bar, visible <768px. 4-column: WhatsApp, Call, Email, ScrollTop. |
| `FloatingActions` | Custom | Fixed bottom-right, visible <768px. WhatsApp (56px, pulsing) + Call (48px) stacked vertically above action bar. |
| `Footer` | Custom | 4-column grid, dot-grid texture, animated gradient border line, bottom bar with copyright. |
| `PageLoader` | Custom | Full-screen overlay: letter-stagger "HIGHORITY" reveal → orange glow pulse → fade out (~2s). Mounts once at app root. |
| `ScrollToTop` | Custom | Scrolls to top on route change. Integrates with Lenis. |

### Sections (page-specific, used once each)

**Home (`/`):**
`HeroSection`, `TrustSection`, `ServicesSection`, `GlobalNetworkSection`, `WhyChooseUsSection`, `IndustriesSection`, `ClientsSection`, `QuoteFormSection`, `BlogSection`

**Services (`/services`):**
`ServicesHeroSection`, `ServicesGridSection`, `ServiceAccordionSection`, `CTASection`, `FAQSection`

### Reusable Components

| Component | Used By | Notes |
|-----------|---------|-------|
| `EyebrowLabel` | All sections | Orange caption with dot prefix. |
| `SectionHeading` | Most sections | Eyebrow + H2 + subheading, center or left aligned. |
| `GlassCard` | Service cards, stat cards, form, visual comp | Base glassmorphism: `backdrop-filter: blur(20px)`, animated border via `::before` conic-gradient. Supports "spotlight" mouse-tracking variant for industry cards. |
| `ServiceCard` | Home services, services grid | Extends GlassCard. 56–64px icon circle, title, description, "Learn More" arrow. |
| `StatCard` | Trust section, hero floating cards | Extends GlassCard. Animated counter (GSAP), orange glow pulse keyframes. |
| `PrimaryButton` | Global | Gradient fill, glow hover, arrow icon slide. |
| `SecondaryButton` | Global | Outline variant, orange border/text. |
| `Accordion` | Service detail section, FAQ | Single or multi-open mode. GSAP height animation, plus → X rotation. |
| `Counter` | Stat cards, global network | GSAP-driven, ScrollTrigger start, suffix support. |
| `LogoMarquee` | Clients section | CSS infinite scroll, two duplicate rows, pause on hover, edge gradient fade. |
| `BlogCard` | Blog section | Image + gradient overlay + category pill, hover lift/zoom. |
| `ScrollReveal` | Global wrapper | Reusable GSAP ScrollTrigger entrance pattern (fade-up + stagger). Used by nearly all content blocks. |

### Hooks

| Hook | Purpose |
|------|---------|
| `useLenis` | Initialize Lenus smooth scroll, expose instance for scroll-to actions |
| `useScrollReveal` | Apply standard GSAP ScrollTrigger entrance to a ref (eyebrow → heading → content stagger) |
| `useCounter` | GSAP ScrollTrigger-driven count-up with easing and suffix |
| `useHeaderScroll` | Scroll position listener for header background transition |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Page loader (letter stagger + glow + fade) | GSAP + SplitText | Timeline: SplitText splits into chars → `stagger` opacity/translateY → glow pulse via box-shadow tween → overlay fade. | Medium |
| Hero entrance sequence | GSAP + SplitText | Single master timeline: eyebrow (0s) → SplitText words with rotateX (0.2s) → subheading (0.8s) → CTAs (1.0s) → stat cards from right (0.6s) → cargo strip (1.2s). Plays after loader completes. | Medium |
| Hero parallax (bg 0.3x, cards 0.5x, grid 0.1x) | GSAP ScrollTrigger | `scrub: true` tweens on translateY per layer. Disabled on touch via `matchMedia`. | Low |
| Hero exit fade | GSAP ScrollTrigger | Scrub-linked opacity + translateY on content container as section scrolls out (progress 0.8–1.0). | Low |
| Scroll-triggered section reveals | GSAP ScrollTrigger | `ScrollReveal` wrapper: eyebrow/heading/content staggered fade-up. `start: "top 80%"`, `toggleActions: "play none none none"`. | Low |
| Counter animation | GSAP | `gsap.to` on proxy object, `onUpdate` writes to DOM. ScrollTrigger start. `power2.out` over 2s. | Low |
| Animated glowing border (rotating conic-gradient) | CSS `@property` | Register `--angle` property, `@keyframes rotate-border` animates to 360deg. `::before` pseudo-element with conic-gradient. Hover speeds animation via JS class toggle. | Medium |
| Neon route lines (marching ants) | CSS | SVG paths with `stroke-dasharray: 8 4`, `stroke-dashoffset` animated continuously. | Low |
| Digital pulse (concentric rings) | CSS | 3 absolutely positioned rings, `scale(0.5→2)` + `opacity(1→0)`, staggered `animation-delay`. | Low |
| Infinite logo marquee | CSS | Two identical flex rows, CSS `translateX(-50%)` animation, `30s linear infinite`. `animation-play-state: paused` on hover. | Low |
| Globe (3D dot-matrix sphere) | Three.js + R3F | Icosahedron geometry, custom shader material: dots sized by latitude density, individual color/pulse per pin vertex. Arc curves for route lines (DrawSVG or tube geometry). Camera slowly auto-rotates. | **High** 🔒 |
| Cargo ticker strip | CSS | Two identical inline blocks, `translateX(-50%)`, `30s linear infinite`. | Low |
| Scroll indicator bounce | CSS | `translateY` oscillation, `2s ease-in-out infinite`. | Low |
| Service accordion expand | GSAP | `gsap.to(el, { height: "auto", duration: 0.4 })` with `power3.inOut`. Content opacity fade with 0.1s delay. Single-open: track active index, close previous. | Medium |
| FAQ accordion expand | GSAP | Same height approach as service accordion. Multi-open: independent state per item. | Medium |
| Industry card spotlight | CSS + JS | `onMouseMove` updates CSS custom properties (`--x`, `--y`) on card. `::before` radial-gradient centered on mouse position. Pure CSS transition. | Low |
| Blog carousel | CSS | `overflow-x: auto`, `scroll-snap-type: x mandatory`, `scroll-behavior: smooth`. Arrow buttons call `scrollBy`. | Low |
| Header scroll transition | CSS + hook | Class toggle at 100px scroll threshold. CSS handles background, backdrop-filter, border transitions (`0.4s`). | Low |
| Mobile menu slide | GSAP | `translateX(100% → 0)`, `0.4s cubic-bezier(0.4, 0, 0.2, 1)`. Reverse on close. | Low |
| Form shake on validation | GSAP | `gsap.to` with sequential `x` keyframes: `0 → -8 → 8 → -4 → 4 → 0`, `0.4s`. | Low |
| Plus icon rotation | CSS | `transform: rotate(45deg)` on open state, `0.3s` transition. | Low |
| Nav link underline | CSS | `scaleX(0→1)` pseudo-element, `transform-origin: left`. | Low |
| Card hover lifts | CSS | `translateY` + `box-shadow` transitions, `0.4s cubic-bezier(0.4, 0, 0.2, 1)`. | Low |
| Footer border glow dot | CSS | Absolute-positioned dot, `translateX` animation across full width, `10s linear infinite`. | Low |
| Floating accent orb | CSS | `translateY(0 → -15px → 0)`, `4s ease-in-out infinite`. | Low |
| Mobile action bar pulse | CSS | Ring element with `scale(1→1.5)` + `opacity(1→0)`, `2s infinite`. | Low |

---

## State & Logic Plan

### Lenis ↔ GSAP ScrollTrigger Bridge

Lenis must drive GSAP's ScrollTrigger for consistent smooth-scroll behavior. On Lenis scroll events, call `ScrollTrigger.update()`. This is a one-time setup in the `useLenis` hook at app root — all ScrollTrigger instances automatically use the Lenis-smoothed scroll position.

### Page Loader → Hero Animation Orchestration

The loader and hero entrance are sequential across components. Approach:

1. `PageLoader` manages its own GSAP timeline (letter reveal → glow → fade).
2. On timeline complete, `PageLoader` calls a global callback (via React context or a ref-based signal) that triggers the hero entrance timeline in `HeroSection`.
3. Hero section checks a ref flag — if loader already finished, plays immediately; otherwise waits for signal.
4. `PageLoader` unmounts from DOM after fade-out completes (0.6s delay).

### 3D Globe Data Flow

The globe (Three.js via R3F) receives a static array of 12 location objects `{ lat, lng, label, isDirectOffice }`. Inside a `useFrame` loop:

- Convert lat/lng to Cartesian coordinates for pin placement.
- Update route line arc meshes (no re-calculation per frame — arcs are computed once).
- Drive pulse timing via `clock.elapsedTime` passed to shader uniform.

Camera auto-rotation is handled by `OrbitControls` with `autoRotate: true`, `enableZoom: false`, `enablePan: false`. A fixed polar angle keeps the view centered on the northern hemisphere where most pins are located.

---

## Other Key Decisions

### Vite + React Router (Multi-Page)

This is a 19-route static marketing site, not a single-page app. Use `react-router-dom` with `BrowserRouter`. Each route renders a page component that assembles its sections. For static deployment, configure a catch-all redirect to `index.html` so client-side routing works on page refresh.

### Raw CSS with CSS Variables

No Tailwind, no CSS-in-JS. All design tokens are CSS custom properties on `:root`. Component styles live in co-located `.css` files. The `@property` Houdini feature (for `--angle` animation) requires browser support targeting — provide a `@supports` fallback for static border glow on unsupported browsers.

### Three.js for Globe, Not Home Hero

The hero section's visual requirements (aerial port photo + CSS grid overlay + parallax) are achievable without WebGL. Three.js is reserved exclusively for the Global Network section's 3D dot-matrix globe. This isolates WebGL complexity to one component and keeps the rest of the site lightweight.
