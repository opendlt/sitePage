# OpenDLT Website

Modern, responsive website showcasing OpenDLT's ecosystem of decentralized ledger technologies and developer tools.

## 🚀 Live Site

Visit: [opendlt.org](https://opendlt.github.io/opendlt-site)

## ✨ Features

- **Modern Design**: Clean, developer-focused aesthetics with dark theme
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Scroll-based animations using AOS library
- **Interactive Components**: Tabbed SDK showcase, code examples, modals
- **Performance Optimized**: Lazy loading, efficient animations, mobile-first approach
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Custom SVG icon system
- **Hosting**: GitHub Pages
- **Build**: Static site generation

## 📁 Project Structure

```
opendlt-site/
├── index.html              # Main website page
├── styles/
│   ├── main.css            # Core styles and layout
│   ├── animations.css      # Animation definitions
│   └── components.css      # UI component styles
├── scripts/
│   └── main.js            # Interactive functionality
├── assets/
│   └── icons/             # SVG icon collection
├── favicon.ico            # Site favicon
└── README.md             # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: `#0ea5e9` (Sky Blue)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#22c55e` (Green)
- **Background**: `#0f172a` (Dark Blue)
- **Text Primary**: `#e2e8f0` (Light Gray)
- **Text Secondary**: `#94a3b8` (Medium Gray)

### Typography
- **Primary Font**: Inter (Sans-serif)
- **Code Font**: JetBrains Mono (Monospace)

## 🚀 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/opendlt/opendlt-site.git
   cd opendlt-site
   ```

2. Serve locally:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using Live Server (VS Code extension)
   # Right-click index.html -> "Open with Live Server"
   ```

3. Open `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🔧 Customization

### Adding New SDKs

To add a new programming language SDK:

1. Add language logo to `assets/icons/`
2. Update the SDK tabs in `index.html`
3. Add corresponding tab content with code examples
4. Include language-specific styling if needed

### Modifying Animations

Animations are defined in `styles/animations.css`. Key animation classes:

- `.fade-in-up` - Fade in with upward motion
- `.slide-in-left/right` - Slide animations
- `.typing-animation` - Typewriter effect
- `.pulse-animation` - Pulsing effect
- `.hover-lift` - Hover lift effect

### Color Customization

Update CSS custom properties in `styles/main.css`:

```css
:root {
  --primary-color: #0ea5e9;
  --secondary-color: #8b5cf6;
  --accent-color: #22c55e;
  /* ... other colors */
}
```

## 📊 Performance Features

- **Lazy Loading**: Images load when entering viewport
- **Optimized Animations**: Respect `prefers-reduced-motion`
- **Efficient JavaScript**: Debounced scroll events
- **Minimal Dependencies**: Only AOS library for animations
- **Compressed Assets**: Optimized SVG icons

## 🌐 SEO & Meta Tags

The site includes comprehensive meta tags for:
- Open Graph (social sharing)
- Twitter Cards
- SEO optimization
- Mobile viewport configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- **Main Site**: [opendlt.org](https://opendlt.github.io/opendlt-site)
- **GitHub**: [github.com/opendlt](https://github.com/opendlt)
- **Lattica Project**: [lattica.id](https://opendlt.github.io/lattica-site)

---

Built with ❤️ by the OpenDLT team