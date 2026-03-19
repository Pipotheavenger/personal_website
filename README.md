# Portfolio Profesional — Next.js (Static Export)

Portfolio minimalista orientado a conversión para **AI Engineer & Data Scientist**, construido con Next.js (App Router), TailwindCSS y exportación estática compatible con **GitHub Pages**.

---

## Estructura del proyecto

```
personal_website/
├── app/
│   ├── layout.tsx      # Layout raíz, fuentes, metadata SEO
│   ├── page.tsx        # Página principal (todas las secciones)
│   └── globals.css     # Estilos globales y Tailwind
├── components/
│   ├── Header.tsx      # Header simple (sin menú)
│   ├── Hero.tsx        # Landing con foto y CTA
│   ├── Metrics.tsx     # Estadísticas tipo enterprise
│   ├── About.tsx       # Perfil profesional
│   ├── Skills.tsx      # Data & AI, Engineering, Tools, Research
│   ├── Experience.tsx  # Experience + Projects (cards)
│   ├── Certifications.tsx  # Diplomas y certificaciones
│   ├── NewsHighlight.tsx # Mini-sección de noticia destacada
│   └── Contact.tsx     # Email y LinkedIn
├── lib/
│   └── content.ts      # Contenido centralizado (nombre, métricas, textos)
├── public/
│   └── assets/
│       ├── header.png        # Imagen principal (Hero)
│       ├── diplomas/         # PDFs de diplomas y certificados
│       ├── sinfo.png         # Imagen noticia (NewsHighlight)
│       ├── gallery/          # Galería de fotos (página /hobbies)
│       └── hobbies/          # Imágenes legacy (no usadas actualmente)
├── next.config.js      # output: 'export', imágenes unoptimized
├── tailwind.config.ts
├── package.json
└── README.md
```

---

## Cómo correr en local

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Modo desarrollo**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000).

3. **Build estático (producción)**
   ```bash
   npm run build
   ```
   La salida queda en la carpeta **`out/`**.

4. **Probar la versión estática en local** (opcional)
   ```bash
   npx serve out
   ```

---

## Deploy en GitHub Pages

### Opción A: Repositorio `username.github.io` (sitio en la raíz)

1. En `next.config.js` no uses `basePath` (o déjalo vacío).
2. Build:
   ```bash
   npm run build
   ```
3. Sube el contenido de la carpeta **`out/`** a la rama `main` (o `master`) del repo `username.github.io`.
   - Puedes usar [gh-pages](https://www.npmjs.com/package/gh-pages):
     ```bash
     npx gh-pages -d out
     ```
   - O configurar un GitHub Action que ejecute `npm run build` y suba `out/` a la rama que use GitHub Pages.

### Opción B: Repo tipo `username.github.io/repo-name` (subruta) — recomendado

1. Crea el repo (ej. `personal_website`).
2. Este repo ya incluye un workflow (`.github/workflows/deploy-gh-pages.yml`) que:
   - hace `next build` (static export)
   - publica `out/` en la rama `gh-pages`
3. En GitHub: **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages**
   - Folder: **/(root)**
4. La URL final será: `https://username.github.io/personal_website/` (ajusta `personal_website` por el nombre real del repo).

---

## Personalización

- **Contenido**: Edita `lib/content.ts` (nombre, tagline, métricas, about, skills, experience, certificaciones, portfolio, CVs, hobbies, email, LinkedIn).
- **Imagen principal (Hero)**: Sustituye `public/assets/header.png`.
- **Diplomas/certificados**: Añade PDFs en `public/assets/diplomas/` y actualiza el array `certifications` en `content.ts`.
- **Galería (/hobbies)**: Imágenes en `public/assets/gallery/` y textos en `hobbiesGallery` dentro de `content.ts`.

---

## Requerimientos técnicos cubiertos

- Next.js 14 con **App Router**
- **Static export** (`output: 'export'` en `next.config.js`)
- Compatible con **GitHub Pages**
- **TailwindCSS** para estilos
- Componentes reutilizables y responsive
- SEO básico (metadata en `layout.tsx`)
- Estética minimalista: blanco, negro, grises, mucho espacio en blanco

Si quieres, el siguiente paso puede ser configurar un GitHub Action que haga el build y el deploy a `gh-pages` automáticamente en cada push.
