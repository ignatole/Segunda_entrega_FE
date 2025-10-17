# Proyecto: Portalverse (TP) — Grupo 6

Descripción
-----------
Proyecto SPA desarrollado con React + Vite. Presenta una portada del equipo, páginas individuales por integrante, una bitácora, una sección que consume la API pública de Rick and Morty (personajes) y una sección que muestra datos locales desde un archivo JSON.

Características principales
-------------------------
- SPA con rutas (React Router).
- Sidebar lateral fijo con navegación.
- Portal visual (imagen + anillos animados) que aparece al cambiar de sección.
- Efecto de sonido al abrir el portal (archivo en `public/assets/portal-sound.mp3` o fallback sintetizado).
- Consumo de API Rick and Morty (buscador por nombre) y traducción de campos relevantes al español.
- Datos locales renderizados desde `src/data/data.json`.

Estructura del proyecto
-----------------------
```
/ (root)
├─ public/
│  ├─ assets/
│  │  ├─ pic_1.jpg
│  │  ├─ pic_2.png
│  │  ├─ pic_3.jpg
│  │  ├─ pic_4.jpg
│  │  ├─ rickAndMortyPortal.png   # imagen del portal
│  │  └─ portal-sound.mp3        # sonido del portal (opcional)
│  └─ index.html
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles/
│  │  ├─ App.css
│  │  └─ index.css
│  ├─ components/
│  │  ├─ Sidebar.jsx
│  │  ├─ Sidebar.css
│  │  ├─ Footer.jsx
│  │  ├─ Footer.css
│  │  ├─ Portal.jsx
│  │  └─ Card.jsx
│  ├─ pages/
│  │  ├─ portada/Portada.jsx
│  │  ├─ portada/Portada.css
│  │  ├─ integrantes/Integrantes.jsx
│  │  ├─ integrantes/Integrantes.css
│  │  ├─ Bitacora.jsx
│  │  ├─ Bitacora.css
│  │  ├─ APIData.jsx
│  │  ├─ APIData.css
│  │  ├─ JSONData.jsx
│  │  └─ JSONData.css
│  ├─ hooks/
│  │  └─ useFetch.js
│  ├─ services/
│  │  └─ rickAndMorty.js
│  ├─ utils/
│  │  └─ translate.js
│  └─ data/
│     └─ data.json
├─ package.json
└─ vite.config.js
```

Cómo ejecutar (desarrollo)
-------------------------
Desde la raíz del proyecto:

```bash
npm install
npm run dev
```

Abre el navegador en la URL que indique Vite (por defecto `http://localhost:5173`).

Build de producción
-------------------
```bash
npm run build
npm run preview
```

Rutas disponibles
-----------------
- `/` → Portada (index.html en la raíz)
- `/bitacora` → Bitácora del proyecto
- `/integrantes` → Páginas de integrantes (vínculos desde la portada)
- `/api-data` → Sección que consume la API de Rick and Morty (buscador por nombre)
- `/json-data` → Datos leídos desde `src/data/data.json`

Notas técnicas y decisiones
---------------------------
- Organización: estilos globales en `src/styles/`; CSS de páginas en `src/pages/` junto a su componente; componentes independientes en `src/components/`.
- API: las llamadas a Rick and Morty están modularizadas en `src/services/rickAndMorty.js` y el consumo en `src/pages/APIData.jsx` usa un hook `useFetch` en `src/hooks/useFetch.js`.
- Traducciones: `src/utils/translate.js` traduce campos como `status`, `species` y `gender` al español.
- Portal: `src/components/Portal.jsx` renderiza la imagen `public/assets/rickAndMortyPortal.png`, añade anillos animados por CSS y reproduce `public/assets/portal-sound.mp3` (si existe). Hay fallback a síntesis por WebAudio si el navegador bloquea autoplay.

Cambiar el sonido del portal
---------------------------
- Reemplaza `public/assets/portal-sound.mp3` con tu archivo (mp3, ogg o wav).
- Alternativamente, edita `src/components/Portal.jsx` para ajustar parámetros del sintetizador (tipo de onda, frecuencia, envolvente) o para reproducir otro recurso.

Buenas prácticas y recomendaciones
---------------------------------
- No subir `node_modules/` al repositorio (está en `.gitignore`).
- Mantener `index.html` y `public/` en la raíz (Vite espera esa estructura).
- Commits: usar mensajes claros (feat:, fix:, chore:, docs:).
- Documentar en `README.md` cambios relevantes en la bitácora.

Contacto / Integrantes
----------------------
Ver la `Portada` para los enlaces a las páginas individuales de cada integrante.

---
