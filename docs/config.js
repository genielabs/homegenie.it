/* eslint-disable quotes */
(function() {
  zuix.store('config', {
    "title": "HomeGenie",
    "subtitle": "Programmable smart home server.",
    "language": "en",
    "baseUrl": "/",
    "resourcePath": "/app/",
    "libraryPath": {
      "@lib": "/lib/1.1/",
      "@hgui": "https://genielabs.github.io/homegenie-web-ui/app/",
      "@cdnjs": "https://cdnjs.cloudflare.com/ajax/libs/"
    },
    "siteMapUrl": "https://zuixjs.org/",
    "googleSiteId": null
  });
  // Check that service workers are registered
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js');
    });
  }
})();
