// lib/gtag.js
export const GA_TRACKING_ID = 'G-C5N1N0R3FT'; // substitua pelo seu ID

// Envia evento para o GA
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};
