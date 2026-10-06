// ===== Mobile menu =====
const nav = document.getElementById('nav');
const menuBtn = document.querySelector('.menu-btn');
function setMenu(open) {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
}
menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

// ===== Scroll reveal (cards fade in once) =====
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  items.forEach(el => io.observe(el));
} else items.forEach(el => el.classList.add('in'));

// ===== Gallery lightbox (only runs on gallery.html) =====
const lb = document.getElementById('lightbox');
if (lb) {
  const thumbs = [...document.querySelectorAll('.g-item')];
  const big = lb.querySelector('img');
  let current = 0;
  const show = i => {
    current = (i + thumbs.length) % thumbs.length;
    big.src = thumbs[current].dataset.full;
    big.alt = thumbs[current].dataset.alt;
  };
  const close = () => { lb.hidden = true; thumbs[current].focus(); };
  thumbs.forEach((t, i) => t.addEventListener('click', () => { show(i); lb.hidden = false; lb.querySelector('.lb-close').focus(); }));
  lb.querySelector('.lb-close').addEventListener('click', close);
  lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
}

// ===== Contact form (NOT connected: see README) =====
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const note = document.getElementById('form-note');
    note.textContent = form.checkValidity()
      ? 'This form is not connected yet, so nothing was sent. Please use the phone, email or WhatsApp details on this page.'
      : 'Please fill in your name, a valid email and a message.';
  });
}
