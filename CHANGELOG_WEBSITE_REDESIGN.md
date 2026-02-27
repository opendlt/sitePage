# Changelog - OpenDLT Website Redesign

## [2.0.0] - 2025-02-27

Complete website redesign expanding from 3 pages to 11 pages with a unified design system.

### Added

**Pages (8 new)**
- `/tooling/` - Tooling hub linking to SDKs, Studio, DevNet
- `/tooling/sdks/` - 5-language SDK comparison with real code examples (Python, JavaScript, Rust, Dart, C#)
- `/tooling/studio/` - Accumulate Studio feature page with "Open Studio" CTA
- `/tooling/devnet/` - DevNet Launcher with Docker quickstart
- `/projects/authrix/` - Authrix universal DID project page (adapted from Lattica)
- `/projects/infrix/` - Infrix WASM smart contracts project page
- `/projects/accuboard/` - Accuboard oracle & verifiable compute project page
- `/about/` - About OpenDLT with mission, values, contribution guide
- `/docs/` - Documentation hub linking to all SDK docs, tools, and protocol resources

**Design System**
- `styles/tokens.css` - Unified CSS custom properties (colors, spacing, typography, shadows, transitions)
- `styles/base.css` - CSS reset, typography defaults, focus styles, skip link, utilities
- `styles/layout.css` - Container, sections, grid patterns, footer layout
- `styles/nav.css` - Desktop navigation with dropdown menus, mobile hamburger menu
- Eliminated CSS variable name inconsistency (`--primary-color` vs `--primary` etc.)

**JavaScript Modules**
- `scripts/tabs.js` - Generic tab switcher scanning `.tab-group` containers
- `scripts/copy-code.js` - Code block copy-to-clipboard with feedback
- `scripts/mobile-menu.js` - Hamburger menu toggle and dropdown navigation

**Assets**
- 15+ new SVG icons in `assets/icons/` (csharp-logo, javascript-logo, studio-icon, devnet-icon, authrix-icon, infrix-icon, accuboard-icon, arrow-right, external-link, copy, check, menu, close, chevron-down, sdk-icon)
- 3 project logos in `assets/projects/` (authrix-logo, infrix-logo, accuboard-logo)

**Shared Components**
- `includes/_nav.html` - Canonical navigation markup reference
- `includes/_footer.html` - Canonical footer markup reference
- Navigation with Tooling and Projects dropdown menus
- 5-column footer with social links

**SEO**
- `robots.txt` with sitemap reference
- `sitemap.xml` with all 11 pages

**Accessibility**
- Skip-to-content link on all pages
- ARIA labels on navigation, dropdowns, and mobile menu
- Keyboard-navigable dropdowns (Escape to close)
- `prefers-reduced-motion` support in animations.css
- Focus-visible styles for keyboard users

**Documentation**
- `PLAN_WEBSITE_REDESIGN.md` - Comprehensive design and implementation plan

### Changed

**Pages (3 rewritten)**
- `/` (index.html) - Complete rewrite with hero, tooling triptych, 5-language quickstart, projects preview, community CTA
- `/projects/` - Rewritten from single-card page to 3-project hub with maturity badges and progress bars
- `/projects/lattica/` - Now a meta-refresh redirect to `/projects/authrix/`

**CSS Architecture**
- `styles/main.css` - Converted from 587-line monolith to import coordinator (`@import` for tokens, base, layout, nav, components, animations)
- `styles/components.css` - Complete rewrite using unified token variables
- `styles/animations.css` - Refactored with reduced-motion support, removed unused keyframes

**JavaScript**
- `scripts/main.js` - Rewritten: removed loading screen, moved inline AOS to module, added nav scroll class toggle and active link highlighting

**Branding**
- All "Lattica" references renamed to "Authrix"
- All `did:lattica` references changed to `did:authrix`
- API URLs updated from `api.lattica.id` to `api.authrix.id`

**SDK Code Examples**
- Replaced fictional placeholder code with real SDK imports and API calls from actual repositories

### Removed

- `/lattica/` directory (duplicate of projects/lattica)
- `/lattica-site/` directory (duplicate)
- `/sitePage/` directory (stale copy with own .git)
- Root `styles.css` (legacy light theme, unreferenced)
- Legacy image assets (`service1-6.png`, `logo1-3.png`, `mission.jpg`)
- Loading screen (1.5s artificial delay)
- External AOS library dependency (replaced with built-in IntersectionObserver)

### Fixed

- CSS variable name inconsistency between files (`--primary` vs `--primary-color`)
- SDK code examples were fictional/placeholder (now use real SDK API)
- Navigation hidden on mobile (now has hamburger menu)
