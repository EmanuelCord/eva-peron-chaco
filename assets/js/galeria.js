async function initGaleria() {
  const nav = document.getElementById('years-nav');
  const timeline = document.getElementById('timeline');
  const previous = document.getElementById('gallery-prev');
  const next = document.getElementById('gallery-next');
  const pageLabel = document.getElementById('gallery-page');
  let items, selectedYear = 'all', page = 0, pageSize = getPageSize(), lightbox;

  try {
    const response = await fetch('assets/data/galeria.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const years = await response.json();
    items = years.flatMap(({ year, items }) => items.map(item => ({ ...item, year })))
      .sort((a, b) => b.year - a.year || a.date.localeCompare(b.date));
  } catch (err) {
    timeline.innerHTML = '<p class="muted">No se pudo cargar la galería. Abrí el sitio con Live Server (no con doble clic).</p>';
    console.error('No se pudo cargar la galería:', err);
    return;
  }

  const years = [...new Set(items.map(item => item.year))].sort((a, b) => b - a);
  nav.innerHTML = ['all', ...years].map(year =>
    `<button class="year-btn${year === 'all' ? ' active' : ''}" data-year="${year}">${year === 'all' ? 'Todos' : year}</button>`
  ).join('');

  function render() {
    const filtered = selectedYear === 'all'
      ? items
      : items.filter(item => String(item.year) === selectedYear);
    const start = page * pageSize;
    const visible = filtered.slice(start, start + pageSize);

    timeline.innerHTML = visible.length
      ? `<div class="year-grid">${visible.map(card).join('')}</div>`
      : '<p class="muted">Todavía no hay imágenes para este año.</p>';
    pageLabel.textContent = filtered.length ? `${start + 1}–${start + visible.length} de ${filtered.length}` : '0 imágenes';
    previous.disabled = page === 0;
    next.disabled = start + pageSize >= filtered.length;

    lightbox?.destroy();
    lightbox = GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
  }

  nav.addEventListener('click', event => {
    const button = event.target.closest('.year-btn');
    if (!button) return;
    selectedYear = button.dataset.year;
    page = 0;
    nav.querySelectorAll('.year-btn').forEach(item => item.classList.toggle('active', item === button));
    render();
  });

  previous.addEventListener('click', () => {
    if (page === 0) return;
    page--;
    render();
  });

  next.addEventListener('click', () => {
    page++;
    render();
  });

  window.addEventListener('resize', () => {
    const newPageSize = getPageSize();
    if (newPageSize === pageSize) return;
    pageSize = newPageSize;
    page = 0;
    render();
  });

  render();
}

function getPageSize() {
  return window.innerWidth >= 1280 ? 3 : window.innerWidth >= 640 ? 2 : 1;
}

function card(item) {
  const video = item.type !== 'image';
  const type = item.type === 'video-local' ? 'video' : (video ? 'external' : 'image');
  const date = new Date(`${item.date}T12:00:00`).toLocaleDateString('es-AR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  return `<a href="${item.src}" class="glightbox gallery-item" data-gallery="gallery" data-type="${type}"
      data-title="${item.title}" data-description="${item.place} · ${date}">
    <img src="${item.thumb || item.src}" alt="${item.title}" loading="lazy">
    ${video ? '<span class="play"><i class="fa-solid fa-play"></i></span>' : ''}
    <div class="caption"><strong>${item.title}</strong><small>${item.place} · ${date}</small></div></a>`;
}
document.addEventListener('DOMContentLoaded', initGaleria);
