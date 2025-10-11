// Main JavaScript for Lattica Website

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Initialize components
    initializeLoading();
    initializeNavigation();
    initializeScrollAnimations();
    initializeCounters();
    initializeCodeTabs();
    initializeParallax();
    initializeMobileMenu();

    // Hide loading screen after everything is loaded
    setTimeout(() => {
        hideLoadingScreen();
    }, 1500);
}

// Loading Screen
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');

    // Animate loading text
    const loadingTexts = [
        'Initializing Universal Identity...',
        'Connecting to Accumulate L0...',
        'Loading VDK Bridges...',
        'Preparing Cross-Chain Features...',
        'Ready for Universal DIDs!'
    ];

    const loadingTextElement = document.querySelector('.loading-text');
    let currentIndex = 0;

    const loadingInterval = setInterval(() => {
        if (currentIndex < loadingTexts.length) {
            loadingTextElement.textContent = loadingTexts[currentIndex];
            currentIndex++;
        } else {
            clearInterval(loadingInterval);
        }
    }, 300);
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');

    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Navigation
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll behavior for navbar
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class for styling
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Hide/show navbar on scroll
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile Menu
function initializeMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on links
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            disable: window.innerWidth < 768 ? true : false
        });
    }

    // Custom intersection observer for additional animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');

                // Stagger animations for child elements
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                staggerItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .stagger-container');
    animatedElements.forEach(el => observer.observe(el));
}

// Number Counters
function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60 FPS
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// Code Tabs
function initializeCodeTabs() {
    const codeTabs = document.querySelectorAll('.code-tab');
    const codeBlocks = document.querySelectorAll('.code-block');

    codeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;

            // Remove active class from all tabs and blocks
            codeTabs.forEach(t => t.classList.remove('active'));
            codeBlocks.forEach(block => block.classList.remove('active'));

            // Add active class to clicked tab and corresponding block
            tab.classList.add('active');
            const targetBlock = document.querySelector(`[data-content="${targetTab}"]`);
            if (targetBlock) {
                targetBlock.classList.add('active');
            }
        });
    });
}

// Parallax Effects
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Floating Elements Animation
function initializeFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');

    floatingElements.forEach((element, index) => {
        const speed = element.dataset.speed || 0.5;
        const delay = index * 1000; // Stagger the animations

        setTimeout(() => {
            element.style.animation = `float ${6000 * speed}ms ease-in-out infinite`;
        }, delay);
    });
}

// Button Animations
function initializeButtonAnimations() {
    const animatedButtons = document.querySelectorAll('.btn-animate');

    animatedButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Card Hover Effects
function initializeCardEffects() {
    const cards = document.querySelectorAll('.feature-card, .blockchain-item, .dev-feature');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth Page Transitions
function initializePageTransitions() {
    // Add smooth transitions between sections
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Performance Optimizations
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Throttle scroll events
    let ticking = false;

    function updateOnScroll() {
        // Update parallax and other scroll-dependent animations
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    });
}

// Accessibility Enhancements
function enhanceAccessibility() {
    // Add focus management
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    // Skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link visually-hidden';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-600);
        color: white;
        padding: 8px;
        border-radius: 4px;
        text-decoration: none;
        z-index: 100000;
        transition: top 0.3s;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // Keyboard navigation for tabs
    const tabElements = document.querySelectorAll('[role="tab"]');
    tabElements.forEach(tab => {
        tab.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tab.click();
            }
        });
    });
}

// Error Handling
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript error:', e.error);
        // Gracefully handle errors without breaking the user experience
    });

    // Handle promises rejections
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        e.preventDefault();
    });
}

// Analytics and Tracking (placeholder)
function initializeAnalytics() {
    // Add your analytics tracking code here
    // Example: Google Analytics, Mixpanel, etc.

    // Track button clicks
    const trackableButtons = document.querySelectorAll('[data-track]');
    trackableButtons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.track;
            console.log('Tracking:', action);
            // Send to analytics service
        });
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Device Detection
function detectDevice() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth > 768;

    document.body.classList.add(isMobile ? 'mobile' : 'desktop');
    if (isTablet) document.body.classList.add('tablet');

    return { isMobile, isTablet };
}

// Theme Management (for future dark mode)
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // Add theme toggle if needed
    const themeToggle = document.querySelector('[data-theme-toggle]');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

// Initialize everything
function startApplication() {
    detectDevice();
    enhanceAccessibility();
    handleErrors();
    optimizePerformance();
    initializeAnalytics();
    initializeTheme();

    console.log('🚀 Lattica website initialized successfully!');
}

// Start the application
document.addEventListener('DOMContentLoaded', startApplication);

// Export functions for external use
window.LatticeWebsite = {
    initializeWebsite,
    hideLoadingScreen,
    initializeScrollAnimations,
    initializeCounters
};