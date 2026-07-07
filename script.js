const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
