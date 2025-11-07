// Basic interactions + scroll reveal for timeline items
document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // IntersectionObserver to reveal timeline items on scroll
  const items = document.querySelectorAll('.timeline__item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(el => io.observe(el));
});
