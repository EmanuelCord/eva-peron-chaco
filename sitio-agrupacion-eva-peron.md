# Sitio web – Agrupación Eva Perón

Guía de desarrollo para VS Code. Replica la estructura, funcionalidades y animaciones de la plantilla **Politian – Election Home** (https://wpocean.com/html/tf/politian/index-2.html), adaptada a la Agrupación Eva Perón, con **visión y misión** y una **galería cronológica por año**.

> ⚠️ La plantilla de wpOceans es comercial. Esta guía replica **estructura y comportamiento** con código propio; no copies sus archivos CSS/JS/imágenes. Los textos marcados como `[EDITAR]` son borradores para que los reemplaces por los oficiales.

---

## 1. Stack y estructura

**Stack:** HTML5 + CSS3 + JavaScript vanilla (sin build). Todas las librerías por CDN.

```
agrupacion-eva-peron/
├── index.html
├── galeria.html              # galería completa por año
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── js/galeria.js
│   ├── data/galeria.json     # fotos y videos por año
│   └── img/                  # imágenes propias (cuando las tengas)
└── README.md
```

**Librerías (CDN):**

| Función | Librería |
|---|---|
| Layout / grid / navbar | Bootstrap 5.3 |
| Íconos | Font Awesome 6 |
| Animaciones al scroll (equivale a WOW.js) | AOS |
| Slider hero y carruseles | Swiper 11 |
| Contadores animados | CountUp.js + IntersectionObserver |
| Lightbox fotos/videos | GLightbox |
| Fuentes | Google Fonts (Poppins + Playfair Display) |

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
<link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" rel="stylesheet">
```

---

## 2. Identidad visual

```css
:root {
  --celeste: #4aa3df;     /* identidad peronista */
  --azul:    #12304f;
  --blanco:  #ffffff;
  --dorado:  #d9a441;     /* acentos / botones */
  --gris:    #f4f6f8;
  --texto:   #2b2f36;
}
```

Tipografías: títulos *Playfair Display*, cuerpo *Poppins*. **[EDITAR]** ajustá la paleta al manual de marca de la agrupación si lo tienen.

---

## 3. Secciones (orden de `index.html`)

Equivalencia con la plantilla original:

| # | Sección | Plantilla Politian | Adaptación |
|---|---|---|---|
| 1 | Preloader | Logo con fade-out al cargar | Logo de la agrupación |
| 2 | Top bar + Navbar sticky | Teléfono, e-mail, idioma, botón *Donate* | Teléfono, e-mail, redes, botón **“Sumate”** |
| 3 | Hero slider | “Wisdom. Freedom. Hope.” + botón | Lema `[EDITAR]` + botón “Sumate a la agrupación” |
| 4 | 4 tarjetas de ejes | Economía, empleo, industria, transporte | Ejes de trabajo (ver §4) |
| 5 | Sobre nosotros | Imagen + año 1998 + texto + firma | Quiénes somos + año de fundación |
| 6 | **Misión y Visión** | Páginas de servicios | Dos bloques destacados (ver §5) |
| 7 | Actividades / Encuentros | 3 tarjetas con barra de progreso | Próximos encuentros (fecha, lugar, botón) |
| 8 | Testimonios | Slider con avatares | Voces de militantes y vecinos |
| 9 | Contadores | 4 cifras animadas | Militantes, barrios, actividades, años |
| 10 | Video | Fondo con botón play (YouTube) | Video institucional |
| 11 | Equipo | 4 miembros con redes | Referentes / mesa de conducción |
| 12 | **Galería cronológica** | *(nueva)* | Línea de tiempo por año (ver §6) |
| 13 | Novedades | 3 notas de blog | Últimas novedades |
| 14 | Sumate / Donación | Banner “$10 Donation” | Banner “Sumate como voluntario/a” |
| 15 | Aliados | Carrusel de logos | Organizaciones hermanas |
| 16 | Footer | Contacto, links, misión, newsletter | Idem + redes |

---

## 4. Contenido borrador (`[EDITAR]`)

**Hero (3 slides rotativas, autoplay 5 s, fade):**
1. “Memoria, justicia y futuro.” — *Construimos una patria con oportunidades para todos y todas.*
2. “Donde hay una necesidad, nace un derecho.” — *Trabajo territorial en cada barrio.*
3. “La Patria es el otro.” — *Organización, participación y compromiso.*

**Ejes de trabajo (tarjetas):**
- Trabajo y producción
- Educación y juventud
- Salud y comunidad
- Mujeres y derechos
- Cultura y deporte

---

## 5. Misión y Visión

```html
<section id="mision-vision" class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5" data-aos="fade-up">
      <span class="subtitle">Nuestra identidad</span>
      <h2>Misión y Visión</h2>
    </div>
    <div class="row g-4">
      <div class="col-lg-6" data-aos="fade-right">
        <div class="mv-card">
          <i class="fa-solid fa-bullseye"></i>
          <h3>Nuestra Misión</h3>
          <p>[EDITAR] Organizar y acompañar a la comunidad, promoviendo la participación,
             la justicia social y el acceso a derechos, con presencia permanente en el territorio.</p>
        </div>
      </div>
      <div class="col-lg-6" data-aos="fade-left">
        <div class="mv-card">
          <i class="fa-solid fa-eye"></i>
          <h3>Nuestra Visión</h3>
          <p>[EDITAR] Una sociedad más justa, solidaria e inclusiva, donde cada persona
             tenga oportunidades reales de desarrollo, trabajo y dignidad.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.mv-card{background:#fff;border-radius:16px;padding:2.5rem;height:100%;
  border-top:5px solid var(--celeste);box-shadow:0 10px 30px rgba(0,0,0,.08);
  transition:transform .35s, box-shadow .35s}
.mv-card:hover{transform:translateY(-8px);box-shadow:0 18px 40px rgba(0,0,0,.14)}
.mv-card i{font-size:2.5rem;color:var(--dorado);margin-bottom:1rem}
```

---

## 6. Galería cronológica por año

### 6.1 Datos – `assets/data/galeria.json`

Para agregar contenido solo editás este archivo; el sitio se arma solo.

```json
[
  {
    "year": 2026,
    "items": [
      { "type": "image", "src": "https://picsum.photos/seed/ep2026a/1200/800",
        "title": "Encuentro de militancia", "place": "Resistencia, Chaco", "date": "2026-05-17" },
      { "type": "video", "src": "https://www.youtube.com/watch?v=VIDEO_ID",
        "thumb": "https://picsum.photos/seed/ep2026v/1200/800",
        "title": "Acto 26 de julio", "place": "Barranqueras", "date": "2026-07-26" }
    ]
  },
  {
    "year": 2025,
    "items": [
      { "type": "image", "src": "https://picsum.photos/seed/ep2025a/1200/800",
        "title": "Jornada solidaria", "place": "Puerto Vilelas", "date": "2025-08-10" }
    ]
  },
  {
    "year": 2024,
    "items": [
      { "type": "image", "src": "https://picsum.photos/seed/ep2024a/1200/800",
        "title": "Primer encuentro del año", "place": "Sáenz Peña", "date": "2024-03-09" }
    ]
  }
]
```

Tipos admitidos: `image`, `video` (YouTube/Vimeo) y `video-local` (archivo `.mp4`).

### 6.2 HTML

```html
<section id="galeria" class="py-5">
  <div class="container">
    <div class="text-center mb-4" data-aos="fade-up">
      <span class="subtitle">Nuestra historia</span>
      <h2>Galería de encuentros</h2>
    </div>

    <!-- Filtro por año (se genera por JS) -->
    <div id="years-nav" class="years-nav" data-aos="fade-up"></div>

    <!-- Línea de tiempo -->
    <div id="timeline" class="timeline"></div>
  </div>
</section>
```

### 6.3 JavaScript – `assets/js/galeria.js`

```js
async function initGaleria() {
  const res  = await fetch('assets/data/galeria.json');
  const data = (await res.json()).sort((a, b) => b.year - a.year);

  const nav = document.getElementById('years-nav');
  const tl  = document.getElementById('timeline');

  nav.innerHTML = `<button class="year-btn active" data-year="all">Todos</button>` +
    data.map(y => `<button class="year-btn" data-year="${y.year}">${y.year}</button>`).join('');

  tl.innerHTML = data.map(y => `
    <div class="year-block" id="year-${y.year}" data-year="${y.year}" data-aos="fade-up">
      <div class="year-badge">${y.year}</div>
      <div class="year-grid">
        ${y.items.map(it => card(it, y.year)).join('')}
      </div>
    </div>`).join('');

  GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });

  nav.addEventListener('click', e => {
    const btn = e.target.closest('.year-btn'); if (!btn) return;
    nav.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const y = btn.dataset.year;
    tl.querySelectorAll('.year-block').forEach(b =>
      b.style.display = (y === 'all' || b.dataset.year === y) ? '' : 'none');
    AOS.refresh();
  });
}

function card(it, year) {
  const isVideo = it.type !== 'image';
  const thumb   = it.thumb || it.src;
  const type    = it.type === 'video-local' ? 'video' : (isVideo ? 'external' : 'image');
  return `
    <a href="${it.src}" class="glightbox gallery-item" data-gallery="g-${year}"
       data-type="${type}" data-title="${it.title}"
       data-description="${it.place} · ${new Date(it.date).toLocaleDateString('es-AR')}">
      <img src="${thumb}" alt="${it.title}" loading="lazy">
      ${isVideo ? '<span class="play"><i class="fa-solid fa-play"></i></span>' : ''}
      <div class="caption"><strong>${it.title}</strong><small>${it.place}</small></div>
    </a>`;
}
document.addEventListener('DOMContentLoaded', initGaleria);
```

### 6.4 CSS

```css
.years-nav{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-bottom:2rem;
  position:sticky;top:70px;z-index:10;background:#fff;padding:.75rem 0}
.year-btn{border:2px solid var(--celeste);background:#fff;color:var(--azul);font-weight:600;
  padding:.4rem 1.2rem;border-radius:50px;transition:.25s}
.year-btn:hover,.year-btn.active{background:var(--celeste);color:#fff}

.timeline{position:relative;padding-left:2.5rem;border-left:3px solid var(--celeste)}
.year-block{margin-bottom:3rem;position:relative}
.year-badge{position:absolute;left:-4.4rem;top:0;background:var(--azul);color:#fff;
  font:700 1.1rem 'Playfair Display',serif;padding:.4rem .9rem;border-radius:8px}
.year-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:1rem}

.gallery-item{position:relative;overflow:hidden;border-radius:12px;aspect-ratio:4/3;display:block}
.gallery-item img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.gallery-item:hover img{transform:scale(1.1)}
.gallery-item .caption{position:absolute;inset:auto 0 0 0;padding:1rem;color:#fff;
  background:linear-gradient(transparent,rgba(0,0,0,.8));transform:translateY(100%);transition:.35s}
.gallery-item:hover .caption{transform:translateY(0)}
.caption small{display:block;opacity:.85}
.play{position:absolute;inset:0;display:grid;place-items:center;font-size:2.2rem;color:#fff;
  background:rgba(0,0,0,.3)}

@media (max-width:768px){
  .timeline{padding-left:1rem}
  .year-badge{position:static;display:inline-block;margin-bottom:.75rem}
}
```

**Cómo cargar contenido real:** subí las fotos a `assets/img/2026/…` y reemplazá `src` por la ruta local (`"assets/img/2026/encuentro1.jpg"`). Para videos largos, usá YouTube/Vimeo (no subas `.mp4` pesados al hosting).

---

## 7. Animaciones y funcionalidades a replicar

| Efecto | Implementación |
|---|---|
| Preloader | `window.onload` → fade-out 0.6 s y `display:none` |
| Navbar sticky con cambio de color | Clase `.scrolled` al pasar 80 px de scroll |
| Hero slider con zoom lento | Swiper `effect:'fade'`, `autoplay:5000`; `transform:scale(1.1)` animado en la imagen activa |
| Textos del hero con entrada escalonada | Clases `animate-1/2/3` con `@keyframes fadeInUp` y `animation-delay` |
| Reveal al scroll | `AOS.init({duration:900, once:true, offset:80})` |
| Contadores | CountUp.js disparado con `IntersectionObserver` |
| Barras de progreso | `width` animada de 0 al % al entrar en viewport |
| Hover de tarjetas | `translateY(-8px)` + sombra |
| Carrusel testimonios / aliados | Swiper con `loop`, `autoplay`, paginación |
| Video modal | GLightbox sobre botón play del bloque de video |
| Botón “volver arriba” | Aparece a los 400 px, `scrollTo({top:0,behavior:'smooth'})` |
| Menú móvil | Bootstrap `navbar-toggler` (offcanvas) |
| Newsletter / contacto | `<form>` con validación; enviar a Formspree o Google Forms |

```js
// main.js (base)
AOS.init({ duration: 900, once: true, offset: 80 });

window.addEventListener('load', () => document.getElementById('preloader')?.classList.add('hide'));

window.addEventListener('scroll', () => {
  document.querySelector('.navbar').classList.toggle('scrolled', scrollY > 80);
  document.getElementById('toTop').classList.toggle('show', scrollY > 400);
});

new Swiper('.hero-swiper', { effect: 'fade', loop: true, autoplay: { delay: 5000 },
  pagination: { el: '.swiper-pagination', clickable: true } });

// Contadores
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      new countUp.CountUp(e.target, +e.target.dataset.n, { duration: 2.5 }).start();
      io.unobserve(e.target);
    }
  });
}, { threshold: .5 });
document.querySelectorAll('.counter').forEach(el => io.observe(el));
```

---

## 8. Imágenes stock

Para el desarrollo usá **placeholders** y reemplazalos luego por fotos reales de la agrupación.

- **Placeholders directos (sin registro):** `https://picsum.photos/seed/PALABRA/1600/900` (cambiá `PALABRA` para obtener otra imagen estable).
- **Stock libre (descargar y guardar en `assets/img/`):**
  - Unsplash: https://unsplash.com/s/photos/community-meeting
  - Pexels: https://www.pexels.com/search/community%20gathering/
  - Pixabay: https://pixabay.com/images/search/volunteers/

| Uso | Búsqueda sugerida | Tamaño |
|---|---|---|
| Hero | `crowd`, `community gathering`, `argentina flag` | 1920×900 |
| Sobre nosotros | `community leader`, `people talking` | 800×900 |
| Actividades | `meeting`, `workshop`, `volunteers` | 800×600 |
| Equipo | `portrait professional` | 600×700 |
| Video | `group of people outdoors` | 1920×1080 |

Revisá la licencia de cada imagen y no uses fotos de personas reales como si fueran integrantes de la agrupación.

---

## 9. SEO, accesibilidad y rendimiento

- `<title>`, `meta description`, Open Graph (para compartir en WhatsApp/Facebook).
- `alt` descriptivo en cada imagen; `loading="lazy"` fuera del hero.
- Contraste mínimo AA en textos sobre imágenes (overlay oscuro).
- `lang="es-AR"` en `<html>`.
- Imágenes en WebP, máx. 200 KB para miniaturas.

---

## 10. Hosting y flujo en VS Code

**Extensiones recomendadas:** Live Server, Prettier, HTML CSS Support, Auto Rename Tag, GitHub Copilot / Claude Code.

1. Abrí la carpeta en VS Code → clic derecho en `index.html` → **Open with Live Server**.
2. Desarrollá sección por sección siguiendo el §3.
3. Publicá gratis en **Netlify**, **GitHub Pages** o **Cloudflare Pages**.

---

## 11. Prompt para Copilot / Claude Code

> Leé este archivo y generá el proyecto completo: `index.html`, `galeria.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/js/galeria.js` y `assets/data/galeria.json`. Seguí el orden de secciones del §3, la paleta del §2, incluí Misión y Visión (§5) y la galería cronológica por año (§6). Usá Bootstrap 5, AOS, Swiper, CountUp y GLightbox por CDN, con imágenes placeholder de picsum.photos. El sitio debe ser responsive, en español rioplatense y listo para abrir con Live Server.

---

## 12. Checklist de entrega

- [ ] Reemplazar textos `[EDITAR]` (lema, misión, visión, fundación)
- [ ] Logo y paleta oficial
- [ ] Datos de contacto y redes reales
- [ ] Cargar fotos/videos reales en `galeria.json`
- [ ] Reemplazar imágenes stock
- [ ] Probar en celular
- [ ] Publicar y conectar dominio
