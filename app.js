document.addEventListener('DOMContentLoaded', () => {
  // === Theme Toggle (Light / Dark Mode) ===
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply initial theme
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('light-mode');
      const theme = document.documentElement.classList.contains('light-mode') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
    });
  }

  // === Sticky Header on Scroll ===
  const header = document.querySelector('header');
  const checkScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check immediately in case page was reloaded scrolled down

  // === Scroll Reveal Animation ===
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});
