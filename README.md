# Bitácora Stack

Tecnología explicada desde la práctica. Blog universitario de **Christian Alfredo Rincon De La Cruz**, estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital.

La [especificación maestra](docs/PROJECT_SPEC.md) es la fuente de verdad. Esta base implementa navegación, diseño responsive, categorías, buscador, filtros, la ficha real de CodeTrainer y la plantilla de artículo con TOC, progreso, copia y compartir. El cluster fundamentos-web reúne cuatro artículos reales: conexión HTML/CSS/JS, HTML semántico, Flexbox y DOM; las guías siguen sin publicaciones. No hay contenido editorial ficticio.

## Ejecutar localmente

Desde la carpeta del proyecto:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Abrir [el inicio local](http://localhost:8000/). Detener con Ctrl+C. No abrir mediante `file://`: puede impedir los módulos y `fetch()` de JSON. No requiere npm, bundler ni dependencias de la aplicación.

## Stack y estructura

HTML5, CSS3, JavaScript Vanilla con ES Modules, JSON y Git. Páginas HTML reales con navegación y contenido estáticos; JavaScript mejora la experiencia.

- `index.html`, `404.html`: inicio y recuperación.
- `articulos/`, las seis categorías, `guias/`, `proyectos/`, `acerca/`: páginas públicas.
- `proyectos/codetrainer/`: ficha del proyecto conocido.
- `assets/css/`: tokens, base, layout, componentes, páginas y responsive.
- `assets/js/`: inicialización, navegación, datos, búsqueda, filtros y utilidades de cards.
- `assets/data/`: configuración y catálogos. Artículos: cuatro registros reales; guías: `[]`; CodeTrainer: registro real.
- `scripts/check_integrity.py`: validación local de contratos, relaciones y enlaces.

## Validar

```powershell
python scripts/check_integrity.py
python scripts/article_metrics.py
```

Comprobar además menú móvil, Escape, foco, modal, filtros y consola en navegador. No hay frameworks ni dependencias de Node. Las pruebas de navegador usan herramientas externas a la aplicación.

## Sitio publicado

[Bitácora Stack](https://allofmexd.github.io/bitacora-stack/) · [Repositorio público](https://github.com/Allofmexd/bitacora-stack)

- Deployment: GitHub Pages
- Branch: main
- Source: /

## GitHub Pages y pendientes

Cada página declara `data-site-root` según su profundidad. Rutas estáticas y carga de datos respetan el prefijo de repositorio. Para probar un prefijo local, servir desde la carpeta padre y abrir la carpeta del proyecto en la URL.

**404:** declara la base pública absoluta con `/bitacora-stack/`, por lo que recursos y enlaces funcionan desde cualquier ruta inexistente, incluso sin JS. Antes de cargar recursos, un script limitado a localhost adapta la base al origen local: raíz `/` o el prefijo público si se sirve bajo ese mismo prefijo. Para probar otro prefijo o sin JS localmente, el servidor de pruebas debe sustituir el `<base>` en la respuesta; el archivo de producción conserva la base real. No se deduce la raíz contando segmentos de la URL inexistente.

`siteUrl` contiene la URL pública real. Las 16 páginas indexables tienen canonical y og:url propios; los cuatro artículos incorporan BlogPosting y BreadcrumbList. Sitemap incluye esas 16 páginas y excluye 404. Robots permite crawling. El repositorio de CodeTrainer permanece en `null`. Quedan pendientes favicon/iconos, manifest con activos reales y una imagen raster social; no hay og:image SVG, Analytics ni Search Console con valores falsos.

La primera publicación conserva Montserrat en el stack tipográfico con fallback del sistema: evita dependencia externa y descargas adicionales. Su distribución definitiva queda pendiente; no se incorpora Google Fonts ni una fuente sin verificar licencia. El SVG de CodeTrainer es una composición de tecnologías previstas, no captura, mockup funcional ni cover final. Se reemplazará cuando exista un activo definitivo.

La rama de publicación es `main`. El archivo vacío `.nojekyll` permite servir el sitio estático desde la raíz sin procesamiento Jekyll. El remoto `origin` apunta al repositorio público indicado arriba. No hay workflow personalizado ni sistema de compilación. Las carpetas de imágenes vacías no se versionan hasta tener recursos reales. Los cuatro artículos están en `desarrollo/`, enlazados de forma contextual y con hasta tres relacionados calculados desde el catálogo. Las guías siguen vacías. El destacado se elige por fecha descendente y, en empate, ID ascendente entre los registros featured. Para recalcular el tiempo y sincronizar JSON/HTML: `python scripts/article_metrics.py --write`.
