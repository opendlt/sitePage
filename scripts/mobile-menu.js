// OpenDLT - Mobile Menu Toggle & Dropdown Nav

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initDropdowns();
  });

  function initMobileMenu() {
    var toggle = document.querySelector('.mobile-toggle');
    var menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  function initDropdowns() {
    var dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(function (dropdown) {
      var trigger = dropdown.querySelector('.nav-dropdown-trigger');
      if (!trigger) return;

      // Toggle on click for keyboard users
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = dropdown.classList.contains('open');

        // Close all other dropdowns
        dropdowns.forEach(function (d) { d.classList.remove('open'); });

        if (!isOpen) {
          dropdown.classList.add('open');
        }
      });

      // Keyboard: close on Escape
      dropdown.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          dropdown.classList.remove('open');
          trigger.focus();
        }
      });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(function (d) { d.classList.remove('open'); });
      }
    });
  }
})();
