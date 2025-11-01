# OptimusLab — Static site (Astro + Tailwind)

Sitio estático informativo para OptimusLab. Datos contenidos en JSON bajo `src/data/` para que el contenido se pueda actualizar sin tocar código; en el futuro se podrá cambiar la fuente a una API vía `src/services/dataClient.ts`.

## Stack
- Astro (SSG)
- Tailwind CSS + PostCSS
- TypeScript (opcional)
- esbuild (para compilar scripts cliente)
- Vitest / Playwright (tests sugeridos)

## Requisitos
- Node.js >= 18
- npm o pnpm

## Instalación
```bash
npm install
```

## Comandos
- npm run dev        # Development server
- npm run build      # Production build
- npm run preview    # Preview build locally
- npm run lint       # ESLint + Prettier (si configurado)
- npm run test       # Vitest (si configurado)
- npm run build:scripts # Compilar scripts cliente (esbuild) — opcional

## Estructura relevante
- public/               -> assets estáticos (images, scripts compilados)
- src/
  - data/               -> JSON editable (services.json, doctors.json, promos.json)
  - components/         -> UI components reutilizables
  - layouts/            -> Layout.astro (SEO + Header/Footer)
  - pages/              -> Rutas `.astro`
  - services/           -> dataClient.ts (capa de abstracción para JSON / API)
  - styles/             -> global.css (Tailwind imports)
  - scripts/            -> source scripts TS/JS (build => public/scripts)

## Data-driven workflow
- Edita `src/data/*.json` para cambiar contenido (no tocar vistas).
- Las páginas usan `src/services/dataClient.ts` para leer JSON; en producción se podrá apuntar a una API cambiando una env var (API_URL).

## Desarrollo y buenas prácticas
- Nombres en inglés para archivos/variables.
- Comentarios y docs en español.
- Evitar atributos `key` en elementos HTML (Astro).
- Mantener frontmatter `---` al inicio de cada `.astro`.

## Contribuir
1. Fork → branch feature/xxx → PR
2. Ejecutar linters y tests antes de push

## Autor
Walter Jehovanny Carranza Maradiaga — OptimusLab

## Licencia
MIT
