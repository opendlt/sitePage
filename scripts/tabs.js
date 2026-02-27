// OpenDLT - Generic Tab Switcher
// Scans all .tab-group containers and wires up tab buttons to content panels

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initAllTabs);

  function initAllTabs() {
    // Support both .tab-group containers and standalone .tab-nav + .tab-content
    var groups = document.querySelectorAll('.tab-group');

    if (groups.length) {
      groups.forEach(initTabGroup);
    } else {
      // Fallback: treat the whole page as one tab group
      initPageTabs();
    }
  }

  function initTabGroup(group) {
    var buttons = group.querySelectorAll('.tab-btn');
    var contents = group.querySelectorAll('.tab-content');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var target = btn.getAttribute('data-tab');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        contents.forEach(function (c) { c.classList.remove('active'); });

        btn.classList.add('active');
        var panel = group.querySelector('#' + target) ||
                    group.querySelector('[data-content="' + target + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  }

  function initPageTabs() {
    var buttons = document.querySelectorAll('.tab-btn');
    var contents = document.querySelectorAll('.tab-content');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var target = btn.getAttribute('data-tab');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        contents.forEach(function (c) { c.classList.remove('active'); });

        btn.classList.add('active');
        var panel = document.getElementById(target) ||
                    document.querySelector('[data-content="' + target + '"]');
        if (panel) panel.classList.add('active');
      });
    });
  }
})();
