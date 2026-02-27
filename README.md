# OpenDLT Website

The official website for [OpenDLT](https://opendlt.org) - open-source tools and SDKs for the Accumulate Protocol.

## Live Site

**[opendlt.org](https://opendlt.org)**

## Site Structure

11-page static site deployed to GitHub Pages. Vanilla HTML/CSS/JS, no build tools.

```
opendlt-site/
├── index.html                    # Home
├── tooling/
│   ├── index.html                # Tooling Hub
│   ├── sdks/index.html           # SDK comparison (5 languages)
│   ├── studio/index.html         # Accumulate Studio
│   └── devnet/index.html         # DevNet Launcher
├── projects/
│   ├── index.html                # Projects Hub
│   ├── authrix/index.html        # Authrix - Universal DIDs (Alpha)
│   ├── infrix/index.html         # Infrix - WASM Contracts (Beta)
│   └── accuboard/index.html      # Accuboard - Oracle (Concept)
├── about/index.html              # About OpenDLT
├── docs/index.html               # Documentation Hub
├── styles/
│   ├── main.css                  # Import coordinator
│   ├── tokens.css                # Design tokens (colors, spacing, type)
│   ├── base.css                  # Reset, typography, utilities
│   ├── layout.css                # Container, sections, grid, footer
│   ├── nav.css                   # Navigation (desktop + mobile)
│   ├── components.css            # Buttons, cards, tabs, badges, etc.
│   └── animations.css            # Keyframes, AOS, reduced motion
├── scripts/
│   ├── main.js                   # AOS, nav scroll, smooth scroll
│   ├── tabs.js                   # Generic tab switcher
│   ├── copy-code.js              # Code block copy button
│   └── mobile-menu.js            # Hamburger menu + dropdowns
├── includes/
│   ├── _nav.html                 # Canonical nav markup (reference)
│   └── _footer.html              # Canonical footer markup (reference)
├── assets/
│   ├── icons/                    # SVG icons (UI + language logos)
│   ├── langs/                    # Language-specific icons
│   └── projects/                 # Project logos
├── CNAME                         # opendlt.org
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── PLAN_WEBSITE_REDESIGN.md      # Design & implementation plan
└── CHANGELOG_WEBSITE_REDESIGN.md # Redesign changelog
```

## Design System

| Token | Value |
|-------|-------|
| Primary | `#0ea5e9` |
| Secondary | `#8b5cf6` |
| Accent | `#10b981` |
| Dark | `#0f172a` |
| Font (body) | Inter |
| Font (code) | JetBrains Mono |

All tokens are defined in `styles/tokens.css` as CSS custom properties.

## SDKs

| Language | Install |
|----------|---------|
| Python | `pip install accumulate-sdk` |
| JavaScript | `npm install accumulate-sdk` |
| Rust | `cargo add accumulate-sdk` |
| Dart | `dart pub add accumulate_sdk` |
| C# | `dotnet add package Accumulate.SDK` |

## Local Development

```bash
git clone https://github.com/opendlt/opendlt-site.git
cd opendlt-site

# Serve locally (pick one)
python -m http.server 8000
npx serve .
```

Open `http://localhost:8000`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes and test at 320px, 768px, 1024px, 1440px
4. Submit a pull request

## License

MIT
