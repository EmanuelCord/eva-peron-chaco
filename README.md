# Agrupación Eva Perón – Sitio web

Sitio estático en HTML, JavaScript y Tailwind CSS. La hoja final se compila antes de desplegar; la galería necesita un servidor local y no carga al abrir `index.html` con doble clic.

## Desarrollo local

Requisitos: Node.js 22 o superior.

```sh
npm ci
npm run dev:css
```

Con Tailwind en modo observación, abrí `index.html` con Live Server. Para generar una hoja optimizada de producción, ejecutá `npm run build:css`.

```
agrupacion-eva-peron/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js        # preloader, menú, hero, contadores, formulario
│   ├── js/galeria.js     # carrusel cronológico con filtros por año
│   ├── data/galeria.json # fotos y videos por año (editar acá)
│   └── img/              # imágenes propias (ej. img/2026/foto1.jpg)
└── README.md
```

- Reemplazá los textos `[EDITAR]` por los oficiales.
- Galería: agregá un objeto en `galeria.json` por cada foto/video. Se ordenan por fecha y se muestran en grupos de hasta tres, con filtros por año. Tipos: `image`, `video` (YouTube/Vimeo), `video-local` (.mp4).
- Imágenes placeholder: picsum.photos. Cambialas por fotos reales o stock (Unsplash, Pexels).
- El despliegue de GitHub Pages compila Tailwind automáticamente al actualizar `main`.
