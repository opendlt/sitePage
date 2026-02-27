/**
 * OpenDLT Visual Enhancements
 * - Animated counters [data-count-to]
 * - Staggered AOS [data-aos-stagger]
 * - Parallax [data-parallax]
 */
(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Animated Counters ──
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count-to'), 10);
    if (isNaN(target)) return;
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    var duration = 1600;
    var start = performance.now();

    if (prefersReduced) {
      el.textContent = prefix + target + suffix;
      return;
    }

    function tick(now) {
      var elapsed = now - start;
      var progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('[data-count-to]').forEach(function (el) {
    el.textContent = (el.getAttribute('data-count-prefix') || '') + '0' + (el.getAttribute('data-count-suffix') || '');
    counterObserver.observe(el);
  });

  // ── Staggered AOS ──
  document.querySelectorAll('[data-aos-stagger]').forEach(function (container) {
    var delay = parseInt(container.getAttribute('data-aos-stagger'), 10) || 100;
    var children = container.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (!child.hasAttribute('data-aos')) {
        child.setAttribute('data-aos', 'fade-up');
      }
      child.setAttribute('data-aos-delay', String(delay * i));
    }
    // Remove the container-level data-aos so it doesn't conflict
    container.removeAttribute('data-aos');
    container.removeAttribute('data-aos-delay');
  });

  // ── Parallax ──
  if (!prefersReduced) {
    var parallaxEls = document.querySelectorAll('[data-parallax]');
    if (parallaxEls.length > 0) {
      var ticking = false;
      window.addEventListener('scroll', function () {
        if (!ticking) {
          requestAnimationFrame(function () {
            var scrollY = window.pageYOffset;
            parallaxEls.forEach(function (el) {
              var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
              var rect = el.getBoundingClientRect();
              var offset = (rect.top + scrollY - window.innerHeight / 2) * speed;
              el.style.transform = 'translateY(' + offset + 'px)';
            });
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
  }
})();
