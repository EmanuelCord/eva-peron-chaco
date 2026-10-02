# Agrupación Eva Perón – Sitio web

HTML + CSS + JS (sin build). Abrir la carpeta en VS Code → clic derecho en `index.html` → **Open with Live Server** (necesario para que cargue la galería).

```
agrupacion-eva-peron/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js        # preloader, menú, hero, contadores, formulario
│   ├── js/galeria.js     # galería cronológica por año
│   ├── data/galeria.json # fotos y videos por año (editar acá)
│   └── img/              # imágenes propias (ej. img/2026/foto1.jpg)
└── README.md
```

- Reemplazá los textos `[EDITAR]` por los oficiales.
- Galería: agregá un objeto en `galeria.json` por cada foto/video. Tipos: `image`, `video` (YouTube/Vimeo), `video-local` (.mp4).
- Imágenes placeholder: picsum.photos. Cambialas por fotos reales o stock (Unsplash, Pexels).
