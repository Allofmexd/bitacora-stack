# Auditoría técnica de producción — Bitácora Stack

Fecha: 2026-10-04. Ventana de medición UTC: 2026-10-04T23:40:16.074Z → 2026-10-04T23:54:13.939Z.
Producción: [https://allofmexd.github.io/bitacora-stack/](https://allofmexd.github.io/bitacora-stack/). Repositorio: [Allofmexd/bitacora-stack](https://github.com/Allofmexd/bitacora-stack).

## Alcance y condiciones

Working tree inicial limpio, rama main y origin correctos. Baseline: commit `c104e7d`. Correcciones: commit `3c16516`, desplegado con estado built antes de volver a medir. No se crearon artículos, guías ni integraciones de analítica. PROJECT_SPEC permanece intacto: no surge una nueva arquitectura.

Lighthouse 13.5.0, Node 24.18.0, Windows, Edge 154.0.4258.53 basado en Chromium. Browser reportado: HeadlessChrome/154.0.0.0. Ejecuciones secuenciales, una pasada por URL/dispositivo/fase, con perfiles nuevos y limpieza de almacenamiento predeterminada. La corrida exploratoria inicial no forma parte de las tablas. Las mediciones comparadas se realizaron sin otras auditorías Chromium en paralelo; el CDN y la máquina local pueden introducir variación. No son medianas ni una garantía de rendimiento real.

Mobile: pantalla 412×823, DPR 1.75; simulación de RTT 150ms, throughput 1638.4Kbps y CPU ×4. Desktop: preset desktop, pantalla 1350×940, DPR 1; RTT 40ms, throughput 10240Kbps y CPU ×1. Se auditaron exactamente estas rutas:

- Inicio: https://allofmexd.github.io/bitacora-stack/
- Listado: https://allofmexd.github.io/bitacora-stack/articulos/
- Desarrollo: https://allofmexd.github.io/bitacora-stack/desarrollo/
- Conexión HTML/CSS/JS: https://allofmexd.github.io/bitacora-stack/desarrollo/conectar-html-css-javascript/
- DOM: https://allofmexd.github.io/bitacora-stack/desarrollo/dom-javascript/
- CodeTrainer: https://allofmexd.github.io/bitacora-stack/proyectos/codetrainer/
- 404: https://allofmexd.github.io/bitacora-stack/auditoria-ruta-inexistente/

La URL inexistente devuelve HTTP 404 real. Lighthouse inicialmente abortó por ERRORED_DOCUMENT_REQUEST; para medir su HTML se repitió exclusivamente esa URL con `--ignore-status-code`. No se cambió el HTTP ni noindex. Su SEO 50 y Best Practices 96 se explican por el estado/noindex esperado y la entrada de consola del documento 404; no se comparan con los objetivos de páginas indexables.

Herramientas, caché npm, scripts temporales y JSON originales permanecen fuera del repositorio. No se añade package.json, node_modules ni dependencia del sitio. Ejemplo reproducible, ejecutado desde una carpeta temporal:

```powershell
$env:CHROME_PATH = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
npx.cmd --yes lighthouse@13.5.0 https://allofmexd.github.io/bitacora-stack/ --chrome-flags='--headless=new --no-sandbox' --output=json --output-path=./inicio-mobile.json --quiet
```

Para escritorio añadir `--preset=desktop`; para la URL 404 añadir `--ignore-status-code`. Consultar [el manual de Lighthouse](https://github.com/GoogleChrome/lighthouse/blob/main/readme.md).

## Lighthouse antes

### Mobile

| Página | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Inicio | 100 | 100 | 96 | 100 |
| Listado | 97 | 100 | 96 | 100 |
| Desarrollo | 100 | 100 | 96 | 100 |
| Conexión HTML/CSS/JS | 100 | 100 | 96 | 100 |
| DOM | 100 | 100 | 96 | 100 |
| CodeTrainer | 100 | 100 | 96 | 100 |
| 404 | 100 | 100 | 96 | 50 |

### Desktop

| Página | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Inicio | 100 | 100 | 96 | 100 |
| Listado | 86 | 100 | 96 | 100 |
| Desarrollo | 100 | 100 | 96 | 100 |
| Conexión HTML/CSS/JS | 100 | 100 | 96 | 100 |
| DOM | 100 | 100 | 96 | 100 |
| CodeTrainer | 100 | 100 | 96 | 100 |
| 404 | 100 | 100 | 96 | 50 |

## Lighthouse después

### Mobile

| Página | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Inicio | 100 | 100 | 100 | 100 |
| Listado | 100 | 100 | 100 | 100 |
| Desarrollo | 100 | 100 | 100 | 100 |
| Conexión HTML/CSS/JS | 100 | 100 | 100 | 100 |
| DOM | 100 | 100 | 100 | 100 |
| CodeTrainer | 100 | 100 | 100 | 100 |
| 404 | 100 | 100 | 96 | 50 |

### Desktop

| Página | Performance | Accessibility | Best Practices | SEO |
|---|---:|---:|---:|---:|
| Inicio | 100 | 100 | 100 | 100 |
| Listado | 100 | 100 | 100 | 100 |
| Desarrollo | 100 | 100 | 100 | 100 |
| Conexión HTML/CSS/JS | 100 | 100 | 100 | 100 |
| DOM | 100 | 100 | 100 | 100 |
| CodeTrainer | 100 | 100 | 100 | 100 |
| 404 | 100 | 100 | 96 | 50 |

## Métricas de laboratorio

### Antes · Mobile

| Página | FCP (s) | LCP (s) | CLS | TBT (ms) | Speed Index (s) |
|---|---:|---:|---:|---:|---:|
| Inicio | 0.900 | 0.903 | 0.0401 | 0 | 0.900 |
| Listado | 0.911 | 0.911 | 0.1144 | 0 | 0.911 |
| Desarrollo | 0.847 | 0.847 | 0.0401 | 0 | 2.134 |
| Conexión HTML/CSS/JS | 0.942 | 0.942 | 0.0401 | 0 | 0.942 |
| DOM | 0.964 | 0.964 | 0.0401 | 0 | 0.964 |
| CodeTrainer | 0.861 | 0.861 | 0.0401 | 0 | 0.861 |
| 404 | 0.844 | 0.844 | 0.0394 | 0 | 0.945 |

### Después · Mobile

| Página | FCP (s) | LCP (s) | CLS | TBT (ms) | Speed Index (s) |
|---|---:|---:|---:|---:|---:|
| Inicio | 0.964 | 0.964 | 0.0000 | 0 | 1.202 |
| Listado | 0.887 | 0.905 | 0.0000 | 0 | 0.887 |
| Desarrollo | 0.912 | 0.912 | 0.0000 | 0 | 1.089 |
| Conexión HTML/CSS/JS | 0.972 | 0.976 | 0.0000 | 0 | 0.972 |
| DOM | 0.924 | 0.924 | 0.0000 | 0 | 0.924 |
| CodeTrainer | 0.883 | 0.883 | 0.0000 | 0 | 0.883 |
| 404 | 0.845 | 0.845 | 0.0000 | 0 | 0.845 |

### Antes · Desktop

| Página | FCP (s) | LCP (s) | CLS | TBT (ms) | Speed Index (s) |
|---|---:|---:|---:|---:|---:|
| Inicio | 0.251 | 0.251 | 0.0105 | 0 | 0.355 |
| Listado | 0.242 | 0.242 | 0.2712 | 0 | 0.277 |
| Desarrollo | 0.233 | 0.233 | 0.0016 | 0 | 0.278 |
| Conexión HTML/CSS/JS | 0.256 | 0.260 | 0.0016 | 0 | 0.310 |
| DOM | 0.250 | 0.250 | 0.0016 | 0 | 0.296 |
| CodeTrainer | 0.240 | 0.247 | 0.0016 | 0 | 0.276 |
| 404 | 0.233 | 0.233 | 0.0016 | 0 | 0.260 |

### Después · Desktop

| Página | FCP (s) | LCP (s) | CLS | TBT (ms) | Speed Index (s) |
|---|---:|---:|---:|---:|---:|
| Inicio | 0.249 | 0.249 | 0.0089 | 0 | 0.371 |
| Listado | 0.297 | 0.300 | 0.0000 | 0 | 0.470 |
| Desarrollo | 0.239 | 0.239 | 0.0000 | 0 | 0.326 |
| Conexión HTML/CSS/JS | 0.311 | 0.311 | 0.0000 | 0 | 0.410 |
| DOM | 0.251 | 0.253 | 0.0000 | 0 | 0.338 |
| CodeTrainer | 0.235 | 0.235 | 0.0000 | 0 | 0.300 |
| 404 | 0.233 | 0.233 | 0.0000 | 0 | 0.289 |

El beneficio comprobado es la eliminación de saltos de layout y errores inesperados, no una reducción uniforme de FCP/LCP en cada muestra. TBT es 0ms en todas las corridas. Los valores de tiempo varían ligeramente entre solicitudes; no se atribuye cualquier diferencia al cambio.

### Core Web Vitals de campo

La consulta anónima a PageSpeed Insights devolvió HTTP 429 por cuota. No se obtuvo dataset CrUX ni INP de usuarios reales; esto no demuestra ausencia de datos ni aprobación de Core Web Vitals. LCP y CLS de las tablas son de laboratorio, y TBT no sustituye INP. [Google distingue mediciones de laboratorio y campo](https://web.dev/articles/lab-and-field-data-differences); [Core Web Vitals incluye LCP, INP y CLS](https://web.dev/articles/vitals).

## Hallazgos y correcciones

### Críticos

Ninguno: las páginas y assets necesarios responden correctamente y no se hallaron enlaces internos rotos ni bloqueo accidental de indexación.

### Importantes

1. **Layout shift del listado.** Evidencia: Lighthouse atribuía 0.07435 del CLS móvil y 0.26961 del desktop al contenedor data-filter-results al aparecer tarde la barra. Total: 0.11443 móvil y 0.27121 escritorio, con Performance 97/86. Cambio: reserva del tamaño real de los controles ocultos durante inicialización y cuatro cards completas en el HTML estático con dimensiones de imagen; el renderer JSON conserva búsqueda y filtros. Resultado: consultar tablas posteriores; CLS del listado queda en 0 en ambos perfiles, con Performance 100. La lectura sin JS ofrece las cuatro cards.
2. **Nombre accesible de marca distinto de su texto.** Evidencia: axe/Lighthouse señalaba label-content-name-mismatch: el HTML concatenaba BITÁCORA y STACK sin separador, mientras aria-label sí lo contenía. Cambio: espacio real entre los nodos, manteniendo el nombre y la presentación. Resultado: regla aprobada en la medición posterior y revisión axe; no se añade ARIA redundante. La puntuación Accessibility ya era 100 porque esta regla experimental no tenía peso, por lo que no se atribuye una subida ficticia.

### Menores

3. **Salto de navbar al inicializar módulos.** Evidencia: el main se movía al contraerse la navegación móvil (CLS 0.04008); en escritorio aparecía tarde el botón Buscar. Cambio: marca temprana js en head y reserva CSS antes del primer paint. Si los módulos fallan, load elimina la marca y restaura la navegación HTML. Resultado: CLS móvil 0 en las siete URLs; controles y recuperación de error verificados.
4. **Favicon implícito fuera del prefijo.** Evidencia: Lighthouse registraba HTTP 404 en https://allofmexd.github.io/favicon.ico y Best Practices 96. Cambio: declaración explícita de icono vacío mediante data URI para impedir la petición automática mientras falta el activo definitivo. No se inventa favicon, logo ni archivo roto. Resultado: errores de consola inesperados eliminados y Best Practices 100 en las seis URLs indexables; el favicon visual sigue pendiente.

### Restricciones y recomendaciones que no justifican refactor

- GitHub Pages entrega cache-control de aproximadamente 600s. Lighthouse muestra una recomendación de caché y cadenas de recursos; con recursos pequeños, FCP/LCP bajos y objetivos alcanzados, no se introduce un bundler, carga diferida de CSS ni cambios de hosting para perseguir una puntuación.
- Los SVG locales pesan 890–1128 bytes; tienen dimensiones, alt y carga correctos. No requieren rasterización. Covers HTML/CSS decorativas están ocultas a tecnologías de asistencia.
- Manifest ausente, sin referencias a archivos inexistentes. Montserrat definitiva, favicon y OG raster continúan pendientes, sin nuevas fuentes o iconos.
- **robots en Project Pages:** /bitacora-stack/robots.txt devuelve 200, permite crawling y enumera el sitemap correcto, pero el protocolo consulta /robots.txt en la raíz del host. Esa raíz devuelve 404, que Google interpreta como ausencia de restricciones. El archivo bajo el prefijo no administra el rastreo del host ni garantiza descubrimiento del sitemap. Este repositorio no puede colocar archivos fuera de /bitacora-stack/; no se crea otro repositorio o dominio. Se enviará el sitemap en Search Console. [Ubicación y tratamiento de HTTP 404 según Google](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec).

## Archivos afectados

- Los 17 HTML existentes: marca temprana de mejoras, separador de marca y declaración que evita favicon implícito.
- articulos/index.html además entrega las cuatro cards completas como fallback estático.
- assets/css/components.css: reserva de controles y estado de navbar previo a módulos.
- assets/js/filters.js: marca filters-settled al resolver o fallar el catálogo, para liberar la reserva cuando hay error.
- docs/PRODUCTION_AUDIT.md: este registro y preparación de integraciones posteriores.

HTML modificados:

```text
404.html
acerca/index.html
articulos/index.html
bases-datos/index.html
desarrollo/conectar-html-css-javascript/index.html
desarrollo/dom-javascript/index.html
desarrollo/flexbox-css/index.html
desarrollo/html-semantico/index.html
desarrollo/index.html
guias/index.html
index.html
ingenieria-software/index.html
matematicas/index.html
programacion/index.html
proyectos/codetrainer/index.html
proyectos/index.html
redes-sistemas/index.html
```

No cambian contenido editorial, autor, títulos, descriptions, fechas, siteUrl, sitemap ni structured data. El catálogo sigue con cuatro artículos y cero guías.

## Validación técnica

- Validador local y article_metrics correctos: 17 HTML, cuatro JSON, seis categorías y tiempos coherentes.
- 238 navegaciones locales (17 páginas × siete anchos × raíz/prefijo). Anchos: 320, 375, 390, 768, 1024, 1440 y 1920. Sin overflow global; el código tiene scroll propio. Cards, covers, metadata, callouts, ancho de lectura y TOC sticky revisados.
- Modal y reduced motion probados en los siete anchos. Teclado, Escape y retorno de foco correctos. En producción, 44 pasos Tab/Shift+Tab no enfocan controles del fondo mientras el dialog está abierto; el comportamiento nativo permite pasar al chrome del navegador, por lo que no se exige un ciclo artificial dentro del modal. Axe revisa nombres, contraste, target-size y headings sin violaciones en las seis plantillas indexables; no equivale a certificación WCAG completa.
- Probados errores de módulos, fetch y Clipboard API: navegación y contenido estáticos disponibles, controles fallidos ocultos y copia manual explícita. Los cuatro ejemplos completos siguen funcionando.
- Producción: 16 páginas indexables HTTP 200, recursos CSS/JS/JSON/SVG HTTP 200 y dos rutas inexistentes HTTP 404 con nuestra página y enlaces funcionales. Sin petición accidental a /assets/ en la raíz del host.
- HTML público: lang es-MX, UTF-8, viewport, titles/descriptions únicos, canonicals HTTPS propios con slash final, og:url coincidente, og:title/description presentes, landmarks, skip links y headings sin saltos. Únicamente la 404 usa noindex; sin nofollow o X-Robots-Tag que bloquee contenido indexable.
- Rastreo HTTP de 71 enlaces internos distintos hacia 18 destinos: sin HTTP inesperado ni anchors rotos. Sitemap XML válido: 16 URLs canónicas sin duplicados, sin 404.html y lastmod real de los cuatro artículos.
- BlogPosting y BreadcrumbList de los cuatro artículos se contrastan con JSON y HTML: headline, description, autor, fechas, url y mainEntityOfPage correctos. Validación sintáctica y de coherencia propia; no se presenta como certificación del Rich Results Test ni garantía de resultados enriquecidos.
- Pruebas públicas en los siete anchos solicitados: búsqueda con/sin tildes, filtros, relacionados, menú, modal, TOC, progreso, copiar y compartir/fallback correctos. Inicio, artículos y 404 siguen legibles y navegables sin JS. Cero errores de aplicación JS y cero errores de consola inesperados; el documento intencional 404 genera su error HTTP esperado.

## Preparación de Google Search Console

Property recomendada: **URL-prefix**, https://allofmexd.github.io/bitacora-stack/.
Sitemap a enviar: https://allofmexd.github.io/bitacora-stack/sitemap.xml.

Pendiente únicamente la etiqueta/token real de verificación que proporcionará el usuario. No se escribe token inventado en HTML. Al recibir la línea exacta de google-site-verification, añadirla al head de index.html (homepage), sin cambiar sus otros metadatos. La verificación por meta requiere que Google encuentre la etiqueta en el HTML público. [Verificar propiedad](https://support.google.com/webmasters/answer/9008080), [propiedad URL-prefix](https://support.google.com/webmasters/answer/10432366).

Checklist posterior:

1. Añadir la etiqueta real al head de la homepage.
2. Validar, crear commit y push a main.
3. Esperar built y confirmar la meta en producción.
4. Verificar la propiedad URL-prefix en Search Console.
5. Enviar sitemap.xml por su URL real.
6. Inspeccionar la homepage mediante URL Inspection.
7. Solicitar indexación de las cuatro páginas principales de artículos.
8. Revisar Page Indexing posteriormente; no asumir indexación inmediata.

## Preparación de Google Analytics 4

Falta únicamente el Measurement ID real del usuario (formato orientativo G-XXXXXXXXXX). El identificador orientativo no aparece en HTML ni JavaScript. Con el ID real, instalar la integración de forma consistente en las 17 páginas y comprobar una sola inicialización por página y eventos esperados. No se instala Tag Manager ni analítica ficticia.

Antes de activar GA4 se debe revisar aviso de privacidad, uso real de cookies/almacenamiento, configuración de Analytics y requisitos aplicables al contexto. Determinar entonces si se necesita consentimiento o banner; no crear un banner automáticamente. Esta auditoría deja el checklist documentado, sin anticipar una decisión legal ni activar almacenamiento o tracking.

## Evidencia reproducible

Los JSON originales se identifican abajo por nombre, timestamp UTC y SHA-256. Se conservaron fuera del repositorio para no publicar capturas completas o trazas voluminosas. Las tablas anteriores se extraen directamente de esos archivos; no se redondean las métricas antes de calcularlas. Las puntuaciones se muestran sobre 100.

| Informe | Timestamp UTC | SHA-256 |
|---|---|---|
| audit-inicio-mobile-before.json | 2026-10-04T23:40:16.074Z | a0ab6404f5bc090c02b41fec068afa2adf3e44fcbf9144654443971a4f4d6e3c |
| audit-articulos-mobile-before.json | 2026-10-04T23:40:33.364Z | d1ae822a2602fd1e1654cf0a40ed17c0a2b7fa0cd674f55d3a2aac86503f317d |
| audit-desarrollo-mobile-before.json | 2026-10-04T23:40:49.415Z | 72d8bd8853dc99a51d5d81f202d73fc8aa35ad0baa5c240eddb18a25527c543d |
| audit-conexion-mobile-before.json | 2026-10-04T23:41:07.679Z | 795609fdaaf4ba484884372c189be01c5f7639f340dddc4fbb3c262cb9f88f9e |
| audit-dom-mobile-before.json | 2026-10-04T23:41:23.997Z | 3f04da4d39816e938697e9e75b5891388170ebe7df007c865f2b934207d9ee2f |
| audit-codetrainer-mobile-before.json | 2026-10-04T23:41:40.801Z | 095cc2994b4e0dc2b9102d2b01876212fa989081c8c993ad4d6b55607e55b3ff |
| audit-404-mobile-before.json | 2026-10-04T23:44:12.398Z | 39cdc4a6a370e7141a4ca7c2f07debb9efb5057d2a56fa5c36d354c1725ebed2 |
| audit-inicio-desktop-before.json | 2026-10-04T23:42:07.471Z | 6f6ca2622b1cf579e1005d006900ce1e784838b09ae47b240c8cfbaceb33abe5 |
| audit-articulos-desktop-before.json | 2026-10-04T23:42:24.606Z | b9a862a46c0ba9be6051533546391ccba8d78a7d619348ce8239e02055db27c5 |
| audit-desarrollo-desktop-before.json | 2026-10-04T23:42:42.207Z | d920e3e5f2de41f1918d6d4865b1adec71b2423e7bd74296cba2de5bd978d186 |
| audit-conexion-desktop-before.json | 2026-10-04T23:42:58.579Z | f7395b21cd7436efd3051da352bcb7ab4bf5e49d29fa6ce3d319a7b85390f87e |
| audit-dom-desktop-before.json | 2026-10-04T23:43:16.469Z | 0f335f47a39ca2fa35f4fc06069d6bb5e238811d0ad12da50aa2a646f4c9ee2b |
| audit-codetrainer-desktop-before.json | 2026-10-04T23:43:34.186Z | 22b784c8e05102bbbb67ff3fdd5f2e220f48bdbdbaa787451ce080f833be1d66 |
| audit-404-desktop-before.json | 2026-10-04T23:44:28.488Z | 9ec7178eaa4a89be6aa9d4a12088b733cf179981ec8120d2fc3ac1700ef3235e |
| audit-inicio-mobile-after.json | 2026-10-04T23:50:28.731Z | b5dda880b34dd862b891642c58ea3ec5f05caa4796c886d6e8bbc1fc38feae53 |
| audit-articulos-mobile-after.json | 2026-10-04T23:50:46.703Z | d9c6dbac716ace647cc061b25623775afa6f4e6b0bfe1eb2aefcd406987a6da6 |
| audit-desarrollo-mobile-after.json | 2026-10-04T23:51:03.010Z | 13391ad0fbe492b363dab22666a9dc2067e47810ab5cc01773ab648e6c8411e5 |
| audit-conexion-mobile-after.json | 2026-10-04T23:51:20.651Z | c6290e91342d69106a2563184abae638bb294a4b4af6959fb82489fadf0398c5 |
| audit-dom-mobile-after.json | 2026-10-04T23:51:37.424Z | 3e3a761a67996ede8b5534179f2eb410a87ef9de3b7aae13e4bd4c304ca59380 |
| audit-codetrainer-mobile-after.json | 2026-10-04T23:51:53.913Z | cfcaa8a6150f75362657f99b0e11ff241cb69cdafc04aec45ead458ccf3fa06a |
| audit-404-mobile-after.json | 2026-10-04T23:52:10.983Z | 7603356c4fd7abc6b559442191acae6a36d79dd88c0b0747ca741d6399547844 |
| audit-inicio-desktop-after.json | 2026-10-04T23:52:28.050Z | 507772d787109d5bb1bba23707fc779b3f3b9961edd67b81574b26767b64ad4c |
| audit-articulos-desktop-after.json | 2026-10-04T23:52:45.783Z | c41e5761ee75027a06729e4684cc752c6c3a208023504e2519e44f0b06e5599b |
| audit-desarrollo-desktop-after.json | 2026-10-04T23:53:03.568Z | 668c5d62b7b348f7c03c9cb948e008a51fffc386374410b697abcab9ac671814 |
| audit-conexion-desktop-after.json | 2026-10-04T23:53:21.053Z | f7323a460f768f21566b4451bebfc29f424b49c0d5550ff55d0511aae035ec6a |
| audit-dom-desktop-after.json | 2026-10-04T23:53:39.278Z | 4a4bc73f97b495fe0e6afa239e6cd84050ff592841967a3f7df10c585791f50f |
| audit-codetrainer-desktop-after.json | 2026-10-04T23:53:56.798Z | 042aaba015999d7671cde227b3534e4eaa1192674a3fc611d3010174e922a989 |
| audit-404-desktop-after.json | 2026-10-04T23:54:13.939Z | 8f229d1dce9f45a1fe7b0f71f761bd30baa437af8c0fb50421348bc8c483acdb |
