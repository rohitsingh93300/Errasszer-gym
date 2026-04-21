// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const iconSpan = themeToggle.querySelector('.icon');

// Check localStorage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.setAttribute('data-theme', currentTheme);
  iconSpan.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
} else {
  // Default to dark theme for gym aesthetic
  body.setAttribute('data-theme', 'dark');
  iconSpan.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    iconSpan.textContent = '🌙';
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    iconSpan.textContent = '☀️';
  }
});

// Scroll Reveal Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Run once
    }
  });
}, observerOptions);

const animatedElements = document.querySelectorAll('.slide-up, .fade-in');
animatedElements.forEach(el => observer.observe(el));
