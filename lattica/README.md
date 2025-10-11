# Lattica Universal DID Website

![Lattica Logo](assets/lattica-logo.svg)

**The World's First Universal Cross-Chain Identity System**

This is the official website for Lattica Universal DIDs - a revolutionary identity system that enables any blockchain address to become a universal `did:lattica` identity, working seamlessly across Bitcoin, Ethereum, Base, Solana, and 50+ blockchains.

## 🌟 Features

- **Universal Onboarding**: Any blockchain address instantly becomes a universal DID
- **Cross-Chain Synchronization**: Real-time identity sync across all supported blockchains
- **Privacy-Preserving Credentials**: Selective disclosure with BBS+ signatures and zero-knowledge proofs
- **Enterprise Security**: HSM integration, threat detection, and comprehensive compliance
- **Lightning Fast**: Sub-50ms DID resolution with multi-layer caching
- **No Smart Contract Risk**: VDK bridge architecture eliminates vulnerabilities

## 🚀 Live Website

Visit the live website at: **[https://opendlt.github.io/lattica-site/](https://opendlt.github.io/lattica-site/)**

## 🏗️ Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript**: Vanilla JS with scroll animations and interactive features
- **AOS**: Animate On Scroll library for smooth animations
- **SVG**: Scalable vector graphics for logos and icons
- **GitHub Pages**: Static site hosting

## 📁 Project Structure

```
lattica-site/
├── index.html              # Main website page
├── styles/
│   ├── main.css            # Core styles and layout
│   ├── animations.css      # Animation definitions
│   └── components.css      # Component-specific styles
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── favicon.svg        # Site favicon
│   ├── lattica-logo.svg   # Main logo
│   └── chains/            # Blockchain logos
│       ├── bitcoin.svg
│       ├── ethereum.svg
│       ├── base.svg
│       ├── solana.svg
│       └── ...
└── README.md              # This file
```

## 🎨 Design Features

### Modern & Sleek Design
- Clean, minimalist interface with gradient accents
- Professional typography using Inter font family
- Responsive design optimized for all devices
- Smooth scroll animations and hover effects

### Interactive Elements
- Animated hero section with floating elements
- Scroll-triggered animations using AOS
- Interactive code examples with syntax highlighting
- Hover effects on cards and buttons

### Performance Optimized
- Lightweight vanilla JavaScript (no heavy frameworks)
- Optimized assets and efficient CSS
- Progressive enhancement for accessibility
- Fast loading times

## 🔧 Development

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/opendlt/lattica-site.git
   cd lattica-site
   ```

2. **Start a local server**:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

### Customization

#### Colors
The website uses CSS custom properties for easy theming:

```css
:root {
    --primary-500: #6366f1;    /* Primary brand color */
    --secondary-500: #ec4899;   /* Secondary accent */
    --accent-500: #06b6d4;     /* Tertiary accent */
    /* ... more colors */
}
```

#### Content Updates
- Edit `index.html` for content changes
- Modify `styles/main.css` for styling updates
- Update `js/main.js` for functionality changes

#### Adding New Blockchain Logos
1. Create SVG file in `assets/chains/`
2. Update the blockchain grid in `index.html`
3. Follow the existing naming convention

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus management

## 🌐 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobile**: iOS Safari 13+, Chrome Mobile 80+
- **Progressive Enhancement**: Basic functionality in older browsers

## 📊 Analytics

The website includes placeholder analytics integration. To add tracking:

1. Update `js/main.js` in the `initializeAnalytics()` function
2. Add your tracking code (Google Analytics, Mixpanel, etc.)
3. Configure event tracking for buttons and interactions

## 🚀 Deployment

### GitHub Pages (Automatic)

1. Push to the `main` branch
2. GitHub Pages automatically deploys from the root directory
3. Website is available at: `https://[username].github.io/lattica-site/`

### Manual Deployment

The website is static and can be deployed to any web server:

1. Upload all files to your web server
2. Ensure the root directory contains `index.html`
3. Configure your server for proper MIME types (SVG, etc.)

## 🔐 Security

- No server-side code or databases
- Static files only for maximum security
- HTTPS enabled via GitHub Pages
- No sensitive data or API keys

## 📄 License

This website is part of the Lattica Universal DID project. See the main project repository for licensing information.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Areas for Contribution

- **Design**: UI/UX improvements
- **Content**: Copy updates and improvements
- **Performance**: Optimization and loading speed
- **Accessibility**: A11y enhancements
- **Animation**: New interactive features

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/opendlt/lattica-site/issues)
- **Documentation**: [Lattica DID Docs](https://github.com/opendlt/lattica-did)
- **Community**: [Discord](https://discord.gg/lattica)

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Modern responsive website
- ✅ Interactive animations
- ✅ GitHub Pages deployment
- ✅ Accessibility features

### Phase 2 (Planned)
- 🔄 Interactive DID demo
- 🔄 Developer playground
- 🔄 Real-time blockchain status
- 🔄 Multi-language support

### Phase 3 (Future)
- 📋 Blog integration
- 📋 Community features
- 📋 Advanced animations
- 📋 PWA capabilities

---

**Made with ❤️ by the Lattica team**

Building the future of universal identity, one DID at a time.