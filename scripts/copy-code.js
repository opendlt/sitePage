// OpenDLT - Code Block Copy-to-Clipboard

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', initCopyButtons);

  function initCopyButtons() {
    document.querySelectorAll('.code-block').forEach(function (block) {
      // Skip if already has a copy button
      if (block.querySelector('.copy-btn')) return;

      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('aria-label', 'Copy code');
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy';

      btn.addEventListener('click', function () {
        var code = block.querySelector('pre');
        if (!code) return;

        var text = code.textContent || code.innerText;

        navigator.clipboard.writeText(text).then(function () {
          btn.classList.add('copied');
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Copied!';

          setTimeout(function () {
            btn.classList.remove('copied');
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg> Copy';
          }, 2000);
        });
      });

      block.appendChild(btn);
    });
  }
})();
