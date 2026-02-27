// OpenDLT - Main JavaScript
// AOS scroll reveal, nav scroll, smooth scroll, active link highlighting

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initAOS();
    initNavScroll();
    initSmoothScroll();
    initActiveLinks();
  }

  // ── AOS: Animate On Scroll ──
  function initAOS() {
    var elements = document.querySelectorAll('[data-aos]');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-aos-delay') || '0', 10);
          setTimeout(function () {
            entry.target.classList.add('aos-animate');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── Nav scroll effect ──
  function initNavScroll() {
    var nav = document.querySelector('.nav');
    if (!nav) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ── Smooth scroll for anchor links ──
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = this.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Active nav link highlighting ──
  function initActiveLinks() {
    var links = document.querySelectorAll('.nav-link[href]');
    if (!links.length) return;

    // Highlight based on current page path
    var path = window.location.pathname;
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && !href.startsWith('#')) {
        // Normalize both paths for comparison
        var linkPath = new URL(href, window.location.origin).pathname;
        if (path === linkPath || (linkPath !== '/' && path.startsWith(linkPath))) {
          link.classList.add('active');
        }
      }
    });
  }
})();
