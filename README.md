# Portfolio Profesional — Next.js (Static Export)

Portfolio enterprise minimalista para **AI Engineer & Data Scientist**, construido con Next.js (App Router), TailwindCSS y exportación estática compatible con **GitHub Pages**.

---

## Estructura del proyecto

```
personal_website/
├── app/
│   ├── layout.tsx      # Layout raíz, fuentes, metadata SEO
│   ├── page.tsx        # Página principal (todas las secciones)
│   └── globals.css     # Estilos globales y Tailwind
├── components/
│   ├── Header.tsx      # Navegación y menú móvil
│   ├── Hero.tsx        # Landing con foto y CTA
│   ├── Metrics.tsx     # Estadísticas tipo enterprise
│   ├── About.tsx       # Perfil profesional
│   ├── Skills.tsx      # Data & AI, Engineering, Tools, Research
│   ├── Experience.tsx  # Proyectos y impacto
│   ├── Certifications.tsx  # Diplomas y certificaciones
│   ├── Portfolio.tsx   # Showcase visual de proyectos
│   ├── CVSection.tsx   # Descarga de CVs
│   ├── Hobbies.tsx     # Sección más humana
│   └── Contact.tsx     # Email y LinkedIn
├── lib/
│   └── content.ts      # Contenido centralizado (nombre, métricas, textos)
├── public/
│   └── assets/
│       ├── profile.jpg       # Foto de perfil (Hero)
│       ├── cv/               # PDFs de CV (Research, Data_Science, IQUIM)
│       ├── diplomas/         # PDFs de diplomas y certificados
│       ├── projects/         # Imágenes de proyectos (portfolio)
│       └── hobbies/         # Imágenes de hobbies
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

### Opción B: Repo tipo `username.github.io/repo-name` (subruta)

1. Crea el repo (ej. `personal_website`).
2. Configura basePath para producción. Crea o edita `.env.production`:
   ```
   GITHUB_PAGES_BASE=/personal_website
   ```
   Y en `next.config.js` (ya está preparado):
   - `basePath: process.env.GITHUB_PAGES_BASE || ''`
   - `assetPrefix: process.env.GITHUB_PAGES_BASE || ''`
3. Build:
   ```bash
   npm run build
   ```
4. Sube el **contenido** de `out/` a la rama `gh-pages` del repo (o la rama que tengas configurada en GitHub Pages).
   - En GitHub: **Settings → Pages → Source**: rama `gh-pages` / carpeta root (o la carpeta donde hayas subido el contenido de `out/`).
5. La URL final será: `https://username.github.io/personal_website/`.

---

## Personalización

- **Contenido**: Edita `lib/content.ts` (nombre, tagline, métricas, about, skills, experience, certificaciones, portfolio, CVs, hobbies, email, LinkedIn).
- **Foto de perfil**: Sustituye `public/assets/profile.jpg`.
- **CVs**: Añade o reemplaza PDFs en `public/assets/cv/` (Research, Data_Science, IQUIM) y actualiza la lista en `content.ts` si cambias nombres o categorías.
- **Diplomas/certificados**: Añade PDFs en `public/assets/diplomas/` y actualiza el array `certifications` en `content.ts`.
- **Portfolio**: Imágenes en `public/assets/projects/`; títulos, descripciones y años en `content.ts`.
- **Hobbies**: Imágenes en `public/assets/hobbies/` y textos en `content.ts`.

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
