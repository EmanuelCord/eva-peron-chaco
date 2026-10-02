// Galería cronológica: se arma sola a partir de assets/data/galeria.json
async function initGaleria() {
  const nav = document.getElementById('years-nav'), tl = document.getElementById('timeline');
  let data;
  try {
    data = (await (await fetch('assets/data/galeria.json')).json()).sort((a, b) => b.year - a.year);
  } catch (err) {
    tl.innerHTML = '<p class="muted">No se pudo cargar la galería. Abrí el sitio con Live Server (no con doble clic).</p>';
    return;
  }
  nav.innerHTML = '<button class="year-btn active" data-year="all">Todos</button>' +
    data.map(y => `<button class="year-btn" data-year="${y.year}">${y.year}</button>`).join('');
  tl.innerHTML = data.map(y => `
    <div class="year-block" data-year="${y.year}">
      <div class="year-badge">${y.year}</div>
      <div class="year-grid">${y.items.map(i => card(i, y.year)).join('')}</div>
    </div>`).join('');

  GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });

  nav.addEventListener('click', e => {
    const btn = e.target.closest('.year-btn'); if (!btn) return;
    nav.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tl.querySelectorAll('.year-block').forEach(b =>
      b.style.display = (btn.dataset.year === 'all' || b.dataset.year === btn.dataset.year) ? '' : 'none');
  });
}

function card(i, year) {
  const video = i.type !== 'image';
  const type = i.type === 'video-local' ? 'video' : (video ? 'external' : 'image');
  const fecha = new Date(i.date + 'T12:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'long' });
  return `<a href="${i.src}" class="glightbox gallery-item" data-gallery="g-${year}" data-type="${type}"
      data-title="${i.title}" data-description="${i.place} · ${fecha} de ${year}">
    <img src="${i.thumb || i.src}" alt="${i.title}" loading="lazy">
    ${video ? '<span class="play"><i class="fa-solid fa-play"></i></span>' : ''}
    <div class="caption"><strong>${i.title}</strong><small>${i.place}</small></div></a>`;
}
document.addEventListener('DOMContentLoaded', initGaleria);
