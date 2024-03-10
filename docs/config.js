/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "HomeGenie",
    "subtitle": "Documentation",
    "language": "en",
    "baseUrl": "/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "https://zuixjs.github.io/zkit/lib/1.2/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "googleSiteId": "G-HZP6N3ZBW5",
    "cookiesConsent": true,
    "siteMapUrl": "https://homegenie.it/"
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
})();
