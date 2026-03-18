/**
 * WildDevon Cookie Consent
 * ─────────────────────────
 * Drop-in GDPR/UK PECR cookie consent banner.
 * Add <script src="cookie-consent.js"></script> before </body> on any page.
 *
 * GA4 integration: define window.GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
 * in a <script> tag in the <head> before loading this file.
 * GA4 will only load if the visitor clicks "Accept".
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'wilddevon_cookie_consent';
  var CONSENT_VERSION = '1'; // bump this to re-ask on policy changes

  // ── Load GA4 ──────────────────────────────────────────────────────────────
  function loadGA4() {
    var id = window.GA_MEASUREMENT_ID;
    if (!id || id === 'G-XXXXXXXXXX' || document.getElementById('wd-ga4')) return;

    var script = document.createElement('script');
    script.id = 'wd-ga4';
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id, { anonymize_ip: true });
  }

  // ── Check existing consent ────────────────────────────────────────────────
  function getSavedConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (data.version !== CONSENT_VERSION) return null; // re-ask if version changed
      return data.choice; // 'accepted' | 'declined'
    } catch (e) {
      return null;
    }
  }

  function saveConsent(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        choice: choice,
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString()
      }));
    } catch (e) { /* localStorage may be blocked */ }
  }

  // ── Banner HTML & styles ──────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('wd-cookie-styles')) return;
    var style = document.createElement('style');
    style.id = 'wd-cookie-styles';
    style.textContent = [
      '#wd-cookie-banner {',
      '  position: fixed;',
      '  bottom: 0; left: 0; right: 0;',
      '  z-index: 9999;',
      '  background: #1c2b2e;',
      '  color: rgba(242,234,216,0.88);',
      '  padding: 1.1rem 1.5rem;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  gap: 1.25rem;',
      '  flex-wrap: wrap;',
      '  font-family: "DM Sans", sans-serif;',
      '  font-size: 0.88rem;',
      '  line-height: 1.5;',
      '  box-shadow: 0 -4px 20px rgba(0,0,0,0.35);',
      '  transform: translateY(100%);',
      '  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);',
      '}',
      '#wd-cookie-banner.wd-visible { transform: translateY(0); }',
      '#wd-cookie-banner p { margin: 0; flex: 1; min-width: 220px; }',
      '#wd-cookie-banner a { color: #2d7d8a; text-decoration: underline; }',
      '#wd-cookie-banner a:hover { color: #f2ead8; }',
      '.wd-cookie-btns { display: flex; gap: 0.65rem; flex-shrink: 0; flex-wrap: wrap; }',
      '.wd-cookie-btn {',
      '  padding: 0.55rem 1.2rem;',
      '  border: none;',
      '  border-radius: 6px;',
      '  font-family: "DM Sans", sans-serif;',
      '  font-size: 0.85rem;',
      '  font-weight: 600;',
      '  cursor: pointer;',
      '  transition: background 0.2s, transform 0.15s;',
      '  white-space: nowrap;',
      '}',
      '.wd-cookie-btn:hover { transform: translateY(-1px); }',
      '.wd-cookie-btn.accept { background: #c8903a; color: #fff; }',
      '.wd-cookie-btn.accept:hover { background: #b57e30; }',
      '.wd-cookie-btn.decline { background: rgba(255,255,255,0.1); color: rgba(242,234,216,0.8); }',
      '.wd-cookie-btn.decline:hover { background: rgba(255,255,255,0.18); }',
      '@media (max-width: 560px) {',
      '  #wd-cookie-banner { padding: 1rem; }',
      '  .wd-cookie-btns { width: 100%; justify-content: flex-end; }',
      '}'
    ].join('');
    document.head.appendChild(style);
  }

  function showBanner() {
    injectStyles();

    var banner = document.createElement('div');
    banner.id = 'wd-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<p>🍪 We use cookies for analytics and advertising. ' +
      'See our <a href="/privacy-policy.html">Privacy Policy</a> for details.</p>' +
      '<div class="wd-cookie-btns">' +
      '  <button class="wd-cookie-btn decline" id="wd-decline">Decline</button>' +
      '  <button class="wd-cookie-btn accept" id="wd-accept">Accept All</button>' +
      '</div>';

    document.body.appendChild(banner);

    // Slide up after a short delay
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        banner.classList.add('wd-visible');
      });
    });

    document.getElementById('wd-accept').addEventListener('click', function () {
      saveConsent('accepted');
      hideBanner(banner);
      loadGA4();
    });

    document.getElementById('wd-decline').addEventListener('click', function () {
      saveConsent('declined');
      hideBanner(banner);
    });
  }

  function hideBanner(banner) {
    banner.classList.remove('wd-visible');
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 450);
  }

  // ── Init ──────────────────────────────────────────────────────────────────
  function init() {
    var existing = getSavedConsent();

    if (existing === 'accepted') {
      loadGA4();
      return;
    }

    if (existing === 'declined') {
      return; // respect their choice, no banner, no GA
    }

    // No previous decision — show banner
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showBanner);
    } else {
      showBanner();
    }
  }

  init();

})();
