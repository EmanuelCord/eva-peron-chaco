// Preloader
window.addEventListener('load', () => document.getElementById('preloader').classList.add('hide'));

// Navbar y botón "volver arriba"
const nav = document.getElementById('nav'), toTop = document.getElementById('toTop');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 80);
  toTop.classList.toggle('show', scrollY > 400);
}, { passive: true });

// Menú móvil
const burger = document.getElementById('burger'), menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// Hero slider (fundido automático cada 5 s)
const slides = [...document.querySelectorAll('.slide')], dots = document.getElementById('dots');
let cur = 0, timer;
slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Ir a la diapositiva ' + (i + 1));
  b.onclick = () => { go(i); restart(); };
  dots.appendChild(b);
});
function go(i) {
  slides[cur].classList.remove('active'); dots.children[cur].classList.remove('on');
  cur = i; slides[cur].classList.add('active'); dots.children[cur].classList.add('on');
}
function restart() { clearInterval(timer); timer = setInterval(() => go((cur + 1) % slides.length), 5000); }
go(0); restart();

// Aparición al scroll, contadores y barras de progreso
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target; io.unobserve(el);
  if (el.classList.contains('reveal')) el.classList.add('in');
  if (el.classList.contains('bar')) el.classList.add('go');
  if (el.classList.contains('counter')) {
    const end = +el.dataset.n, t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 2000, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick); else el.textContent = end + '+';
    })(t0);
  }
}), { threshold: .4 });
document.querySelectorAll('.reveal,.bar,.counter').forEach(el => io.observe(el));

// Formulario "Sumate" (validación básica; conectá Formspree o Google Forms)
document.getElementById('join-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, msg = document.getElementById('join-msg');
  if (!f.nombre.value.trim() || !f.contacto.value.trim()) { msg.textContent = 'Completá tu nombre y un medio de contacto.'; return; }
  msg.textContent = '¡Gracias, ' + f.nombre.value.trim() + '! Te vamos a contactar.'; f.reset();
});
