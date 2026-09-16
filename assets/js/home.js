// Reuse the site's existing GA4 property. Never collect input values or URL parameters.
document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || typeof window.gtag !== 'function') return;
  const destination = new URL(link.href, location.href);
  const section = link.closest('section');
  if (destination.hostname === 'apps.apple.com') {
    window.gtag('event', 'app_store_click', { app_id: destination.pathname.match(/id\d+/)?.[0] || '', placement: section?.id || 'navigation' });
  } else if (destination.origin === location.origin && destination.pathname !== location.pathname) {
    window.gtag('event', 'content_select', { content_path: destination.pathname, placement: section?.id || 'navigation' });
  }
});
