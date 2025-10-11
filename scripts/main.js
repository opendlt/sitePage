// OpenDLT Simple Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 OpenDLT JavaScript loaded');

    // Hide loading screen
    hideLoadingScreen();

    // Initialize tabs FIRST
    initializeTabs();

    // Initialize animations
    initializeAOS();

    // Initialize navigation
    initializeNavigation();

    console.log('✅ All systems initialized');
});

// Loading Screen Management
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
}

// Simple AOS Initialization
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
}

// Tab System for SDKs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    console.log('Tab buttons found:', tabButtons.length);
    console.log('Tab contents found:', tabContents.length);

    tabButtons.forEach((btn, index) => {
        console.log(`Tab button ${index}:`, btn.getAttribute('data-tab'));
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetTab = btn.getAttribute('data-tab');
            console.log('Tab clicked:', targetTab);

            // Remove active class from all buttons and contents
            tabButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            console.log('Target content:', targetContent);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('Content activated for:', targetTab);
            } else {
                console.error('No content found for tab:', targetTab);
            }
        });
    });
}

// Simple Navigation
function initializeNavigation() {
    const nav = document.querySelector('.nav');

    if (!nav) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            nav.style.background = 'rgba(15, 23, 42, 0.9)';
        }
    });

    // Smooth scroll ONLY for hash links (internal navigation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Console styling for developers
console.log('%c🚀 OpenDLT', 'color: #0ea5e9; font-size: 24px; font-weight: bold;');
console.log('%cBuilding the decentralized future', 'color: #8b5cf6; font-size: 14px;');