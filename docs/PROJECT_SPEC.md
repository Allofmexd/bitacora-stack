# Bitácora Stack — Especificación maestra

Fecha: **2026-10-04**. Estado: **base técnica funcional con un primer artículo real; guías pendientes de contenido**.

Fuente de verdad para todas las fases posteriores. Propietario y autor: **Christian Alfredo Rincon De La Cruz**. Este documento permite comprender el producto, diseño, arquitectura y restricciones sin consultar la solicitud original.

Esta versión integra las decisiones técnicas de la segunda fase y conserva los requisitos previos válidos. Los contratos, rutas, responsabilidades y wireframes aquí definidos rigen la implementación. Las medidas aproximadas siguen siendo orientativas y los ejemplos no representan publicaciones reales. Los pendientes externos no bloquean el desarrollo local; sí deben resolverse antes del despliegue cuando corresponda.

## Tabla de contenidos

- [Identidad, propósito y objetivos](#identidad)
- [Requisitos y alcance de esta fase](#requisitos)
- [Contenido y contexto académico](#contenido)
- [Arquitectura y rutas](#arquitectura)
- [Diseño e identidad visual](#diseno)
- [Especificación de páginas](#paginas)
- [Wireframes funcionales definitivos](#wireframes)
- [Componentes del sistema de diseño](#componentes)
- [Funcionalidades y arquitectura JavaScript](#funcionalidades)
- [Accesibilidad](#accesibilidad)
- [SEO y descubrimiento](#seo)
- [Modelos de datos y relaciones](#datos)
- [Estructura de archivos e imágenes](#archivos)
- [Backlog editorial](#backlog)
- [Integridad y criterios de aceptación](#aceptacion)
- [Estado inicial y contradicciones encontradas](#estado)
- [Decisiones pendientes](#pendientes)
- [Siguiente fase recomendada](#siguiente)
- [Concreciones de la base técnica — fase 3](#fase-3)
- [Patrón de artículo individual](#patron-articulo)

<a id="identidad"></a>

## Identidad, propósito y objetivos

### Datos generales del proyecto

Nombre provisional:

**Bitácora Stack**

Nombre operativo durante todo el desarrollo. La validación final de identidad y dominio queda para una fase posterior y no bloquea ninguna fase.

Tagline:

**Tecnología explicada desde la práctica.**

Autor y propietario del proyecto:

**Christian Alfredo Rincon De La Cruz**

Carrera:

**Ingeniería en Tecnologías de la Información e Innovación Digital**

Idioma principal:

**Español de México (`es-MX`)**. Todas las páginas utilizarán `lang="es-MX"`. Se conservan términos tecnológicos comunes como frontend, backend, stack, framework, JOIN, DOM y routing.

Tipo de proyecto:

Blog tecnológico universitario orientado principalmente a estudiantes de TI, programación, desarrollo de software y áreas relacionadas.

Stack obligatorio:

- HTML5
- CSS3
- JavaScript Vanilla
- JSON
- Git
- GitHub
- GitHub Pages

No utilizar inicialmente:

- React
- Vue
- Angular
- Bootstrap
- Tailwind
- frameworks frontend
- backend
- bases de datos del lado del servidor
- CMS

Debe ser un sitio estático multipágina.

### Propósito

El sitio no debe presentarse simplemente como un repositorio de tareas universitarias.

Debe posicionarse como un blog que convierte conocimientos aprendidos durante la carrera en:

- explicaciones
- tutoriales
- ejercicios
- guías
- ejemplos
- proyectos
- recursos para otros estudiantes

Propuesta de valor:

> Aprender programación, desarrollo, bases de datos, redes e ingeniería de software mediante explicaciones sencillas, ejemplos y proyectos basados en conocimientos universitarios.

El contenido debe estar escrito pensando primero en personas y estudiantes, no únicamente en motores de búsqueda.

### Objetivo medible

Meta aspiracional:

**Alcanzar 1,000 visualizaciones acumuladas durante los primeros 60 días posteriores al lanzamiento.**

No se debe presentar esta cifra como garantizada.

KPIs técnicos y editoriales:

- 1,000 pageviews acumuladas como objetivo
- al menos 20 artículos publicados durante el periodo inicial
- Lighthouse SEO >= 95
- Lighthouse Accessibility >= 95
- Lighthouse Best Practices >= 95
- Lighthouse Performance >= 90
- todas las páginas públicas importantes indexables
- cero enlaces internos rotos al desplegar

Herramientas previstas posteriormente:

- Google Search Console
- Google Analytics 4

<a id="requisitos"></a>

## Requisitos y alcance de esta fase

Esta fase actualiza `docs/PROJECT_SPEC.md` para cerrar contratos JSON, rutas, arquitectura de archivos, GitHub Pages, wireframes, calendario editorial y criterios previos a implementación. La especificación sigue siendo autosuficiente; no se crea documentación auxiliar.

No implementar HTML, CSS o JavaScript del sitio, crear páginas placeholder, generar artículos, descargar fuentes, producir logotipo definitivo, iconos ni covers, o integrar identificadores falsos de analítica. La estructura de archivos futura se documenta, sin materializarla en esta ejecución.

Las decisiones establecidas no deben cambiarse sin justificación técnica documentada. Los pendientes externos se registran al final sin frenar trabajo independiente de ellos. La implementación requiere una instrucción posterior.

<a id="contenido"></a>

## Contenido y contexto académico

### Contexto académico

Los contenidos estarán inspirados principalmente en asignaturas cursadas durante los primeros cuatro semestres.

#### Primer semestre

- Inglés I
- Desarrollo humano y valores
- Fundamentos matemáticos
- Fundamentos de redes
- Física
- Fundamentos de programación
- Comunicación y habilidades digitales

#### Segundo semestre

- Inglés II
- Habilidades socioemocionales y manejo de conflictos
- Cálculo diferencial
- Conmutación y enrutamiento de redes
- Probabilidad y estadística
- Programación estructurada
- Sistemas operativos

#### Tercer semestre

- Inglés III
- Desarrollo del pensamiento y toma de decisiones
- Cálculo integral
- Tópicos de calidad para el diseño de software
- Bases de datos
- Programación orientada a objetos
- Proyecto integrador I

#### Cuarto semestre

- Inglés IV
- Ética profesional
- Cálculo de varias variables
- Aplicaciones web
- Estructura de datos
- Desarrollo de aplicaciones móviles
- Análisis y diseño de software

Las materias formativas como inglés, ética o desarrollo humano pueden generar contenido ocasional, pero no serán el núcleo temático principal del blog.

### Categorías oficiales

El blog tendrá seis categorías principales.

#### Programación

Incluye:

- fundamentos
- programación estructurada
- POO
- algoritmos
- estructuras de datos

Slug:

`programacion`

#### Desarrollo Web y Móvil

Incluye:

- HTML
- CSS
- JavaScript
- Kotlin
- Android
- desarrollo web
- desarrollo móvil

Slug:

`desarrollo`

#### Bases de Datos

Incluye:

- SQL
- modelado
- normalización
- consultas
- diseño relacional

Slug:

`bases-datos`

#### Redes y Sistemas

Incluye:

- redes
- TCP/IP
- routing
- Linux
- sistemas operativos
- puertos
- servicios

Slug:

`redes-sistemas`

#### Ingeniería de Software

Incluye:

- UML
- requisitos
- calidad
- análisis
- diseño
- ciclo de vida de software

Slug:

`ingenieria-software`

#### Matemáticas para TI

Incluye:

- lógica
- probabilidad
- estadística
- cálculo
- matemáticas aplicadas a computación

Slug:

`matematicas`

### Calendario editorial — decisión cerrada

El backlog de 30 temas es contenido futuro, no un requisito de publicación al lanzar. Lanzamiento con 8–12 artículos terminados; después, aproximadamente 2 por semana. Objetivo orientativo a los 60 días: 20–26 artículos; meta mínima académica: 20. No crear páginas vacías para completar artificialmente cifras.

Plan operativo de referencia: 10 candidatos de lanzamiento y 2 publicaciones en cada una de las ocho semanas completas siguientes, para alcanzar 26. Los días 57–60 se destinan a revisión y medición. La cadencia es aproximada: la calidad y el mínimo de 20 guían los ajustes; no sumar automáticamente dos artículos en toda fracción de semana. El día 0 será la fecha real de lanzamiento, sin asignarla ahora.

| Periodo relativo | Nuevos artículos de referencia | Total acumulado |
| --- | --- | --- |
| Día 0 | 10 | 10 |
| Semana 1 | 2 | 12 |
| Semana 2 | 2 | 14 |
| Semana 3 | 2 | 16 |
| Semana 4 | 2 | 18 |
| Semana 5 | 2 | 20 |
| Semana 6 | 2 | 22 |
| Semana 7 | 2 | 24 |
| Semana 8 | 2 | 26 |
| Días 57–60 | Revisión; sin cuota adicional | 26 |

### Prioridades editoriales

A — **Lanzamiento:** desarrollo web, POO y bases de datos. B — **Expansión:** redes, sistemas, Linux, ingeniería de software, Kotlin y estructuras de datos. C — **Diversificación:** lógica, probabilidad, estadística y cálculo. Mantener los 30 temas y sus prioridades en el backlog.

### Conjunto candidato de lanzamiento

Los siguientes diez temas forman el conjunto candidato; pueden ajustarse antes de publicar. No se generan artículos en esta fase.

1. Cómo conectar HTML, CSS y JavaScript paso a paso
2. HTML semántico: qué es y qué etiquetas utilizar
3. Flexbox CSS explicado con ejemplos
4. DOM de JavaScript explicado desde cero
5. Clases y objetos en POO explicados con ejemplos
6. Los 4 pilares de la programación orientada a objetos
7. Clave primaria y clave foránea: diferencias y ejemplos
8. INNER JOIN, LEFT JOIN y RIGHT JOIN con ejemplos
9. Normalización de bases de datos: 1FN, 2FN y 3FN
10. Modelo entidad-relación explicado paso a paso

### Clusters editoriales iniciales

Documentar como mínimo:

#### POO

Página pilar/guía:

Programación Orientada a Objetos

Subtemas:

- clases
- objetos
- encapsulamiento
- herencia
- polimorfismo
- abstracción

### Bases de datos

- PK/FK
- JOINs
- normalización
- modelo entidad-relación

#### Desarrollo Web

- HTML
- HTML semántico
- CSS
- Flexbox
- JavaScript
- DOM
- integración HTML + CSS + JS

Los artículos de un cluster deben enlazarse entre ellos de manera natural.

<a id="arquitectura"></a>

## Arquitectura y rutas

### Arquitectura general

Las páginas principales serán:

```text
/
├── articulos/
├── programacion/
├── desarrollo/
├── bases-datos/
├── redes-sistemas/
├── ingenieria-software/
├── matematicas/
├── guias/
├── proyectos/
├── acerca/
└── 404.html
```

Los artículos individuales deben utilizar rutas limpias.

Ejemplo:

```text
/programacion/clases-y-objetos/
```

Estructura física:

```text
programacion/
└── clases-y-objetos/
    └── index.html
```

Evitar:

```text
article.html?id=123
```

Evitar URLs públicas con `.html` cuando puedan utilizarse directorios con `index.html`.

Usar slash final de forma consistente.

### Contenido HTML y datos JSON

Principio:

```text
HTML = contenido real
CSS = presentación
JS = comportamiento
JSON = catálogo y relaciones
```

El contenido completo de los artículos debe estar dentro del HTML. JavaScript no será necesario para obtener título, texto principal, encabezados, enlaces esenciales ni contenido educativo.

No cargar el cuerpo del artículo exclusivamente desde JSON mediante JavaScript.

Esto mejora:

- accesibilidad
- resiliencia
- SEO
- funcionamiento sin JS

### Compatibilidad con GitHub Pages — decisión cerrada

Sitio estático servido directamente, sin bundler ni build step para resolver rutas. Debe funcionar tanto en `https://usuario.github.io/` como en `https://usuario.github.io/nombre-repositorio/`. Son ejemplos de plataforma, no la URL asignada al proyecto. GitHub documenta estos dos tipos de sitio en [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

La estrategia preferida es la raíz relativa declarada en cada HTML:

```html
<html lang="es-MX" data-site-root="../../">
```

| Página | `data-site-root` | Ejemplo de recurso HTML |
| --- | --- | --- |
| Inicio | `./` | `./assets/css/tokens.css` |
| Índice de categoría, artículos, guías, proyectos o Acerca | `../` | `../assets/css/tokens.css` |
| Artículo, guía o proyecto individual | `../../` | `../../assets/css/tokens.css` |

```javascript
const root = document.documentElement.dataset.siteRoot;
```

`data.js` resolverá `assets/data/...` respecto a esa raíz y a `document.baseURI`. Todos los módulos dinámicos utilizarán la misma resolución. Los `path` e `image.src` de los catálogos son relativos a la raíz del sitio, nunca a la página actual. Los imports JavaScript y las URLs dentro de CSS se resuelven respecto al archivo que los contiene; no se les debe anteponer mecánicamente la profundidad del HTML.

Los enlaces esenciales, hojas de estilo, imágenes y scripts también deben tener rutas correctas escritas en HTML. El atributo no modifica rutas por sí solo: no depender de JS para reparar anchors. Las rutas con `/` inicial en el mapa representan rutas lógicas del sitio, no enlaces que omitan el prefijo del repositorio. Prohibido asumir `/assets/...` como raíz del proyecto.

### Rutas de contenido — decisión cerrada

Artículos: `/{category}/{slug}/`, por ejemplo `/programacion/clases-y-objetos/`, `/bases-datos/normalizacion/` y `/desarrollo/flexbox-css/`.

Guías: `/guias/{slug}/`, por ejemplo `/guias/poo/`, `/guias/sql/` y `/guias/linux/`.

Proyectos: `/proyectos/{slug}/`, inicialmente `/proyectos/codetrainer/` cuando exista contenido real.

Cada ruta corresponde a un directorio con `index.html`; el `path` del catálogo omite el slash inicial y conserva el final. Las rutas individuales ilustrativas no obligan a crear páginas vacías. `404.html` sigue siendo una excepción explícita a las URLs de contenido sin extensión.

### Recuperación 404 — decisión técnica cerrada

Crear en implementación un `404.html` en la raíz de publicación, como indica [la documentación oficial de GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site). No redirigir a una SPA ni simular un artículo inexistente.

La 404 no puede inferir la raíz contando segmentos de una URL inexistente. Como excepción al cálculo por profundidad, su `<base href>` será la URL absoluta real de la raíz del sitio, con prefijo de repositorio y slash final, consignada directamente en su HTML antes del despliegue. En esa página `data-site-root="./"`; enlaces y recursos relativos se resuelven contra dicha base incluso sin JS. Los enlaces a anclas locales en la 404 deben incluir la URL de la propia página si se utilizan.

Esta elección es específica de la 404; las demás páginas mantienen rutas relativas por profundidad. Mientras `siteUrl` sea `null`, probar la 404 con una base local de pruebas y no publicar ese valor. Al desplegar, reemplazarla por la base pública real y verificar rutas inexistentes con una y varias profundidades. No inferir el nombre de repositorio del primer segmento ni inventar un dominio.

### URLs absolutas de publicación

`siteUrl` será la raíz pública real, HTTPS, con slash final e incluyendo el prefijo del Project Site. Canonicals, `og:url`, `og:image`, sitemap y URLs de JSON-LD se compondrán con esa base y los paths correspondientes. Esos metadatos estarán presentes en HTML; no se obtienen únicamente mediante JS. Con `siteUrl: null` se permite desarrollo local, pero no el despliegue público con canonicals falsos o incompletos.

<a id="diseno"></a>

## Diseño e identidad visual

### Identidad visual

La estética debe ser:

- moderna
- tecnológica
- universitaria
- minimalista
- limpia
- pastel
- ligeramente aesthetic

Evitar una apariencia infantil o una típica plantilla escolar.

#### Paleta oficial

```css
--color-bg: #eae8ff;
--color-surface: #d8d5db;
--color-muted: #adacb5;
--color-primary: #2d3142;
--color-accent: #b0d7ff;
--color-white: #ffffff;
```

Funciones:

- `#eae8ff`: fondo general
- `#d8d5db`: superficies secundarias
- `#adacb5`: elementos muted, bordes y secundarios
- `#2d3142`: texto principal y elementos oscuros
- `#b0d7ff`: acento, botones secundarios, badges
- blanco: superficie principal de lectura de artículos

#### Tipografía

Fuente principal:

**Montserrat**

Pesos aproximados:

- Hero/H1: 700
- H2: 650–700
- H3: 600
- Navbar: 500
- cuerpo: 400
- botones: 600

Para código utilizar una fuente monoespaciada adecuada.

Longitud de línea de artículos:

aproximadamente `760px`.

Line-height del cuerpo:

aproximadamente `1.7–1.75`.

### Tokens de interfaz de referencia

Documentar como referencia:

```css
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-xl: 28px;

--container: 1200px;
--article-width: 760px;
```

Sistema de espaciado aproximado:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
```

Escala tipográfica orientativa:

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.75rem;
--text-hero: clamp(2.5rem, 6vw, 4.5rem);
```

### Concepto de logotipo

El logotipo deberá representar de forma sencilla la idea de un stack o conjunto de capas.

Concepto:

- tres capas apiladas
- formas suaves
- diseño geométrico
- posible referencia sutil a una hoja o bitácora
- evitar símbolos genéricos como `</>`, `{}` o código binario como elemento principal

Wordmark:

`BITÁCORA STACK`

El nombre es provisional hasta una validación posterior más formal.

No crear todavía un logotipo definitivo si esta fase solo corresponde a documentación.

### Responsive design

Metodología:

**Mobile First**

Breakpoints aproximados:

```text
mobile:
< 768px

tablet:
768px - 1023px

desktop:
>= 1024px
```

Desktop:

- cards en tres columnas
- hero en dos columnas
- artículos con contenido + sidebar
- proyectos generalmente dos columnas

Tablet:

- cards dos columnas
- artículo sin sidebar persistente cuando no haya espacio suficiente

Mobile:

- una columna
- navbar con hamburger
- cards apiladas
- tabla de contenidos como desplegable
- hero visual debajo del texto

### Animaciones

Mantenerlas discretas:

- fade
- translateY ligero
- hover
- accordion
- navegación móvil
- modal
- barra de lectura

Duración orientativa:

`150ms–300ms`

Respetar:

```css
@media (prefers-reduced-motion: reduce)
```

Evitar animaciones decorativas excesivas.

### Carga de fuentes

Montserrat sigue siendo la fuente principal. Antes del despliegue se evaluarán Google Fonts, self-hosting legalmente permitido y fallback del sistema, considerando dependencia externa, rendimiento y privacidad. No se descargan ni añaden fuentes en esta fase. La decisión de distribución queda expresamente aplazada a preparación del despliegue. Para código usar inicialmente una pila del sistema monoespaciada; H2 puede usar 700 si el recurso elegido no soporta 650.

<a id="paginas"></a>

## Especificación de páginas

### Wireframe de Inicio

Orden esperado:

1. Navbar
2. Hero
3. Artículo destacado
4. Explorar por tema
5. Últimos artículos
6. Guías para estudiantes
7. Proyectos
8. Acerca de Bitácora Stack
9. Footer

Hero:

Título:

**Aprende tecnología desde la práctica.**

Texto aproximado:

> Programación, desarrollo, bases de datos, redes y software explicados de forma clara.

CTAs:

- Explorar artículos
- Ver guías

Puede existir una composición visual tecnológica abstracta en el hero basada en pequeñas tarjetas de código.

### Página de artículos

Ruta:

`/articulos/`

Debe incluir:

- título
- introducción
- buscador
- filtros por categoría
- número de resultados
- grid de cards

Filtros:

- Todos
- Programación
- Web y móvil
- Bases de datos
- Redes
- Software
- Matemáticas

El filtrado puede realizarse mediante JavaScript.

Los enlaces reales a artículos deben seguir siendo anchors HTML rastreables.

### Páginas de categorías

Ejemplo:

`/programacion/`

Cada categoría debe poseer contenido introductorio propio y no ser simplemente un filtro dinámico.

Estructura:

1. nombre
2. descripción
3. número de artículos
4. contenido recomendado para empezar
5. grid de artículos

Debe favorecer SEO y navegación.

### Artículo individual

Estructura:

1. breadcrumbs
2. badge de categoría
3. H1
4. resumen
5. autor
6. fecha
7. tiempo de lectura
8. imagen principal
9. tabla de contenidos
10. contenido
11. bloques educativos
12. resumen final
13. compartir
14. artículos relacionados
15. siguiente artículo cuando aplique

En escritorio puede existir una tabla de contenidos sticky.

En móvil debe transformarse en acordeón o desplegable.

### Guías

Ruta:

`/guias/`

Las guías funcionan como páginas pilar que agrupan artículos.

Ejemplos:

- Guía de Programación Orientada a Objetos
- Guía básica de SQL
- Guía de Linux
- Guía de HTML y CSS

Una guía individual debe mostrar:

- título
- descripción
- dificultad
- tiempo aproximado
- capítulos/artículos
- progreso conceptual cuando tenga sentido

### Proyectos

Ruta:

`/proyectos/`

Debe servir tanto como contenido educativo como portafolio.

Proyecto inicial conocido:

**CodeTrainer**

Descripción conceptual:

Aplicación móvil educativa orientada a practicar programación, recibir retroalimentación y dar seguimiento al progreso.

Tecnologías previstas:

- Kotlin
- Android
- persistencia local

Una página de proyecto puede contener:

- problema
- solución
- tecnologías
- arquitectura
- imágenes/mockups
- qué se aprendió
- artículos relacionados
- repositorio GitHub cuando exista

No asumir URLs de repositorio que todavía no hayan sido proporcionadas.

### Página Acerca de

Ruta:

`/acerca/`

Debe explicar:

- origen del proyecto
- propósito
- temas cubiertos
- filosofía de aprender/practicar/construir/compartir
- breve presentación del autor

Autor:

**Christian Alfredo Rincon De La Cruz**

Rol:

**Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital**

No utilizar identidades de otros alumnos o proyectos en archivos, metadatos ni contenido. La única identidad autorizada de autor y propietario es Christian Alfredo Rincon De La Cruz.

### Página 404

Debe seguir la identidad visual.

Concepto de mensaje:

> Parece que este enlace se perdió entre el código.

Debe contener:

- volver al inicio
- enlaces a categorías relevantes
- acceso a búsqueda si es posible

<a id="wireframes"></a>

## Wireframes funcionales definitivos

Orden de lectura y bloques por tipo de página. Navbar y Footer son comunes. Estas secuencias complementan los requisitos detallados de páginas; no sustituyen metadata, autoría ni accesibilidad.

| Página | Secuencia funcional |
| --- | --- |
| Inicio | Navbar → Hero → artículo destacado → explorar por tema → últimos artículos → guías para estudiantes → proyectos → Sobre Bitácora Stack → Footer. |
| Artículos | Título → introducción → buscador → filtros de categorías → contador de resultados → grid de artículos. |
| Categoría | Nombre → descripción SEO propia → número de artículos → contenido recomendado → grid de artículos. |
| Artículo | Breadcrumb → categoría → H1 → resumen → metadata (autor, fecha y tiempo) → cover → tabla de contenidos → contenido y bloques educativos → resumen final → compartir → relacionados → siguiente artículo cuando aplique. |
| Guías | Encabezado → descripción → guía destacada → cards de guías. |
| Guía individual | Título → descripción → dificultad → tiempo → capítulos → enlaces a artículos; progreso conceptual cuando aporte valor. |
| Proyectos | Introducción → proyecto destacado → grid de proyectos. |
| Proyecto individual | Título → descripción → problema → solución → tecnologías → arquitectura → imágenes → aprendizajes → artículos relacionados → repositorio si existe. |
| Acerca | Origen → propósito → áreas cubiertas → filosofía aprender/practicar/construir/compartir → autor. |
| 404 | Mensaje «Parece que este enlace se perdió entre el código.» → volver al inicio → categorías relevantes → acceso a búsqueda si es posible. |

### Adaptación funcional por viewport

Mobile First: móvil < 768px, tablet 768–1023px, escritorio >= 1024px. Móvil: una columna, menú hamburger accesible, cards apiladas, visual del hero bajo el texto y TOC desplegable. Tablet: cards en dos columnas y sin sidebar persistente cuando falte espacio. Escritorio: cards en tres columnas, hero en dos, artículo con contenido y sidebar, proyectos generalmente en dos. Respetar el orden lógico de lectura al cambiar el layout.

<a id="componentes"></a>

## Componentes del sistema de diseño

### Componentes principales

Registrar como componentes del design system:

- Navbar
- Hero
- ArticleCard
- CategoryCard
- ProjectCard
- GuideCard
- SearchModal
- Breadcrumb
- TableOfContents
- CodeBlock
- Callout
- ReadingProgress
- RelatedArticles
- Footer

### Bloques educativos reutilizables

Definir cuatro componentes:

- Idea clave
- Error común
- Lo que debes recordar
- Pruébalo tú mismo

Deben poseer una identidad visual común y consistente.

Ejemplo conceptual:

```text
LO QUE DEBES RECORDAR

• Una clase es una plantilla.
• Un objeto es una instancia.
• Una clase puede producir múltiples objetos.
```

Estos bloques son parte de la identidad del proyecto.

### Bloques de código

Deben mostrar:

- lenguaje
- código
- botón Copiar
- estado temporal Copiado

Ejemplo:

```text
Kotlin                         Copiar

class Student {
    fun study() {
        println("Studying")
    }
}
```

Fondo oscuro basado en `#2d3142`.

<a id="funcionalidades"></a>

## Funcionalidades y arquitectura JavaScript

### Búsqueda

Debe funcionar sin backend.

Fuente:

`articles.json`

Debe poder buscar al menos en:

- title
- description
- category
- tags
- cluster

Normalizar:

- mayúsculas
- minúsculas
- tildes

Debe existir un estado sin resultados.

La búsqueda podrá abrirse mediante un modal accesible desde la navegación.

### Funcionalidades JavaScript previstas

- menú móvil
- buscador
- filtros
- tabla de contenidos
- progreso de lectura
- copiar código
- compartir
- artículos relacionados
- estados de UI
- eventualmente botón volver arriba

Evitar JavaScript innecesario.

El contenido principal debe seguir siendo usable sin JavaScript siempre que sea posible.

### JavaScript

Arquitectura acordada:

```text
assets/js/
├── main.js
├── navigation.js
├── data.js
├── search.js
├── filters.js
├── article.js
├── code-copy.js
└── share.js
```

Responsabilidades:

- `main.js`: inicialización
- `navigation.js`: navegación y menú
- `data.js`: acceso a archivos JSON
- `search.js`: búsqueda
- `filters.js`: filtros
- `article.js`: TOC, progreso, relacionados
- `code-copy.js`: copiar código
- `share.js`: compartir

Evitar un único archivo JS gigantesco.

### Artículos relacionados — algoritmo cerrado

No almacenar `relatedArticles` manualmente en cada artículo sin justificación futura documentada. Seleccionar automáticamente desde `articles.json`:

1. Excluir el artículo actual por ID y deduplicar candidatos por ID.
2. Evaluar mismo `cluster`, misma `category` y número de `tags` compartidos; normalizar tags por caso y tildes para comparar, contando tags únicos.
3. Ordenar de forma lexicográfica descendente por `(mismo cluster, misma categoría, cantidad de tags compartidos)`: cluster tiene prioridad sobre categoría y categoría sobre tags.
4. Desempatar por `datePublished` descendente y después `id` ascendente para obtener resultados reproducibles.
5. Seleccionar únicamente candidatos con al menos una coincidencia. Devolver máximo 3; si hay menos, mostrar los disponibles sin duplicar ni inventar artículos. Si no hay candidatos, omitir el bloque.

Las guías conservan el orden de `articleIds` para sus capítulos. Los proyectos resuelven explícitamente `relatedArticleIds`, que son referencias educativas del proyecto y no reemplazan el algoritmo de relacionados entre artículos.

<a id="accesibilidad"></a>

## Accesibilidad

### Accesibilidad

Objetivo mínimo:

**WCAG 2.2 AA**

Considerar:

- contraste suficiente
- navegación mediante teclado
- focus visible
- texto alternativo adecuado
- labels
- HTML semántico
- orden lógico de encabezados
- ARIA solo cuando sea realmente necesario
- soporte para `prefers-reduced-motion`
- modales accesibles
- menú móvil accesible

No depender exclusivamente de color para comunicar significado.

### Usos accesibles de la paleta — decisión cerrada

Texto principal preferido `#2d3142` sobre fondos `#eae8ff`, `#d8d5db`, `#b0d7ff` o `#ffffff`. Verificar cada combinación para WCAG AA según tamaño y peso antes de usarla. El color `#adacb5` se dedica principalmente a bordes, decoración y superficies secundarias; metadata solo si pasa contraste. No usarlo como texto pequeño sobre fondos claros cuando no cumpla. Los bordes funcionales y estados de foco también se verifican; la paleta no permite cualquier combinación.

<a id="seo"></a>

## SEO y descubrimiento

### SEO

El SEO debe considerarse desde la arquitectura, no añadirse al final.

Cada página importante debe contemplar posteriormente:

```html
<title>
<meta name="description">
<link rel="canonical">
```

Open Graph:

```html
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<meta property="og:url">
```

Otros requisitos:

- HTML semántico
- un H1 principal claro
- títulos únicos
- descriptions únicas
- URLs descriptivas
- enlaces internos
- breadcrumbs
- sitemap XML
- robots.txt
- página 404
- imágenes optimizadas
- datos estructurados

Los artículos utilizarán JSON-LD basado en:

`BlogPosting`

con al menos, cuando aplique:

- headline
- description
- author
- datePublished
- dateModified
- image
- mainEntityOfPage

Los breadcrumbs podrán utilizar:

`BreadcrumbList`

No utilizar técnicas de keyword stuffing.

Priorizar contenido útil, original, claro y people-first.

### Reglas adicionales de SEO y analítica

No utilizar `meta keywords` como estrategia SEO ni keyword stuffing. Mantener `BreadcrumbList` para breadcrumbs cuando aplique junto con `BlogPosting` para artículos. La 404 no se incluye entre las páginas de contenido del sitemap.

Google Search Console y GA4 siguen pendientes de configuración. No añadir IDs falsos. En implementación, centralizar la futura integración de GA4 en un punto aislado de inicialización, activable cuando exista el Measurement ID real, sin convertir la analítica en requisito para leer el contenido.

<a id="datos"></a>

## Modelos de datos y relaciones

### Archivos y contenedores definitivos

`assets/data/site.json` es un objeto. `articles.json`, `guides.json` y `projects.json` son arrays de objetos de sus contratos respectivos; pueden estar vacíos en desarrollo. Estos contratos se documentan aquí sin crear archivos operativos.

Todos los campos mostrados son obligatorios en los registros; `siteUrl` y `repository` admiten `null`. Los siguientes ejemplos fijan forma y campos, pero no acreditan artículos publicados, imágenes existentes ni avance real de CodeTrainer. Las guías ilustrativas contienen referencias que deberán resolverse antes de incluirlas en un catálogo publicable.

### Contrato `site.json`

```json
{
  "name": "Bitácora Stack",
  "shortName": "Bitácora Stack",
  "tagline": "Tecnología explicada desde la práctica.",
  "description": "Programación, desarrollo, bases de datos, redes e ingeniería de software explicados desde la experiencia universitaria.",
  "language": "es-MX",
  "siteUrl": null,
  "author": {
    "name": "Christian Alfredo Rincon De La Cruz",
    "role": "Estudiante de Ingeniería en Tecnologías de la Información e Innovación Digital"
  },
  "categories": [
    {
      "slug": "programacion",
      "name": "Programación",
      "description": "Fundamentos de programación, algoritmos, programación orientada a objetos y estructuras de datos."
    },
    {
      "slug": "desarrollo",
      "name": "Desarrollo Web y Móvil",
      "description": "HTML, CSS, JavaScript, Kotlin y desarrollo de aplicaciones."
    },
    {
      "slug": "bases-datos",
      "name": "Bases de Datos",
      "description": "SQL, modelado, normalización y diseño de bases de datos."
    },
    {
      "slug": "redes-sistemas",
      "name": "Redes y Sistemas",
      "description": "Redes, TCP/IP, Linux, protocolos y sistemas operativos."
    },
    {
      "slug": "ingenieria-software",
      "name": "Ingeniería de Software",
      "description": "UML, requisitos, calidad, análisis y diseño de software."
    },
    {
      "slug": "matematicas",
      "name": "Matemáticas para TI",
      "description": "Lógica, probabilidad, estadística y cálculo aplicado."
    }
  ]
}
```

### Contrato `articles.json`

```json
[
  {
    "id": "poo-clases-objetos",
    "slug": "clases-y-objetos",
    "path": "programacion/clases-y-objetos/",
    "title": "Clases y objetos en programación orientada a objetos",
    "description": "Aprende qué son las clases y los objetos, cuáles son sus diferencias y cómo utilizarlos mediante ejemplos sencillos.",
    "category": "programacion",
    "tags": [
      "POO",
      "clases",
      "objetos",
      "programación"
    ],
    "cluster": "programacion-orientada-objetos",
    "difficulty": "principiante",
    "author": "Christian Alfredo Rincon De La Cruz",
    "datePublished": "2026-10-10",
    "dateModified": "2026-10-10",
    "readingTime": 8,
    "featured": true,
    "image": {
      "src": "assets/images/articles/clases-y-objetos.webp",
      "alt": "Representación de una clase y varios objetos en programación orientada a objetos"
    }
  }
]
```

### Contrato `guides.json`

```json
[
  {
    "id": "guia-poo",
    "slug": "poo",
    "path": "guias/poo/",
    "title": "Guía de Programación Orientada a Objetos",
    "description": "Aprende programación orientada a objetos desde clases y objetos hasta herencia, encapsulamiento y polimorfismo.",
    "difficulty": "principiante",
    "readingTime": 45,
    "featured": true,
    "image": {
      "src": "assets/images/guides/poo.webp",
      "alt": "Guía visual de programación orientada a objetos"
    },
    "articleIds": [
      "poo-introduccion",
      "poo-clases-objetos",
      "poo-encapsulamiento",
      "poo-herencia",
      "poo-polimorfismo"
    ]
  }
]
```

### Contrato `projects.json`

```json
[
  {
    "id": "codetrainer",
    "slug": "codetrainer",
    "path": "proyectos/codetrainer/",
    "title": "CodeTrainer",
    "description": "Aplicación móvil orientada a estudiantes que desean practicar programación, recibir retroalimentación y seguir su progreso.",
    "status": "en-desarrollo",
    "technologies": [
      "Kotlin",
      "Android"
    ],
    "topics": [
      "desarrollo móvil",
      "programación",
      "software educativo"
    ],
    "featured": true,
    "image": {
      "src": "assets/images/projects/codetrainer.webp",
      "alt": "Mockup de la aplicación móvil CodeTrainer"
    },
    "repository": null,
    "relatedArticleIds": []
  }
]
```

### Tipos y validaciones definitivas

| Campo o grupo | Tipo y regla |
| --- | --- |
| `site.name`, `shortName`, `tagline`, `description`, `language`, `author.name`, `author.role` | Strings no vacíos; identidad, tagline con punto e idioma coinciden con los valores oficiales. |
| `siteUrl` | `null` hasta conocer la URL real; después URL HTTPS absoluta de la raíz del sitio con slash final y prefijo si aplica. |
| `categories` | Array con las seis categorías oficiales; cada objeto tiene `slug`, `name`, `description` no vacíos y slugs únicos. |
| `id`, `slug`, `path` | Strings no vacíos; ID estable, slug último segmento y path relativo a la raíz del sitio. IDs únicos en cada catálogo; paths públicos únicos entre catálogos. |
| `title`, `description` | Strings no vacíos en artículos, guías y proyectos. |
| `category` | Slug existente en `site.categories`; en artículos coincide con el primer segmento del path. |
| `tags`, `technologies`, `topics` | Arrays de strings no vacíos por elemento, sin duplicados; `tags` puede estar vacío. Tecnologías y topics describen información real del proyecto. |
| `cluster` | String en formato slug, no vacío; identifica agrupación editorial, no URL ni categoría adicional. |
| `difficulty` | Solo `principiante`, `intermedio` o `avanzado`, en artículos y guías. |
| `author` del artículo | String exacto `Christian Alfredo Rincon De La Cruz`. |
| `datePublished`, `dateModified` | Fechas reales válidas `YYYY-MM-DD`; modificación no anterior a publicación. No usar las fechas del ejemplo como fecha real de lanzamiento. |
| `readingTime` | Entero positivo de minutos estimados. |
| `featured` | Boolean, nunca string. |
| `image` | Objeto obligatorio con `src` y `alt` no vacíos. `src` relativo a raíz y apuntando a imagen existente al publicar; `alt` informativo y adecuado. |
| `articleIds` | Array de IDs únicos de artículos existentes, ordenado según capítulos. Resolver contra `articles.json`, sin copiar metadata. |
| `status` | String no vacío con formato slug; `en-desarrollo` es el valor del contrato de ejemplo. Reflejar estado real del proyecto. |
| `repository` | `null` si no se conoce; si existe, URL HTTPS real del repositorio, nunca inventada. |
| `relatedArticleIds` | Array de IDs únicos existentes en `articles.json`; puede estar vacío. |

Los arrays y sus tipos son obligatorios aunque estén vacíos donde se permita. No agregar cuerpo HTML completo al JSON. No introducir nuevos campos obligatorios ni cambiar nombres de claves sin actualizar la especificación.

### IDs, slugs, paths y relaciones

`id` identifica internamente y permanece estable aunque cambie la URL. `slug` es el último segmento de URL; `path` es la ruta relativa del recurso, por ejemplo `programacion/clases-y-objetos/`. Relaciones entre archivos siempre por IDs, nunca URLs como claves primarias.

Paths sin slash inicial, sin `..`, parámetros, fragmentos ni `.html`, y con slash final. Artículo: `{category}/{slug}/`; guía: `guias/{slug}/`; proyecto: `proyectos/{slug}/`. El archivo físico correspondiente será `{path}index.html`.

IDs y slugs usan minúsculas ASCII, números y guiones entre segmentos (`^[a-z0-9]+(?:-[a-z0-9]+)*$`). Carpetas y archivos orientados a URL: minúsculas, sin espacios, tildes, ñ ni underscores. `PROJECT_SPEC.md` es la excepción documental solicitada. Las claves JSON conservan camelCase donde el contrato lo establece.

### Tiempo de lectura

Unidad cerrada: minutos. Estimación editorial inicial del artículo: `max(1, ceil(palabras del texto principal / 200))`, con revisión manual cuando ejemplos de código o ejercicios exijan más tiempo. Actualizar HTML y catálogo juntos. La guía suma `readingTime` de sus capítulos; 45 es solo un ejemplo, no un total validado. No contar navbar, footer ni relacionados en el cuerpo del artículo.

### Clusters

Conservar los clusters iniciales `programacion-orientada-objetos`, `bases-datos-relacionales`, `fundamentos-web`, `redes-tcp-ip`, `linux-basico`, `uml`, `estructuras-datos`, `kotlin-basico` y `logica-computacional`. Sirven para relacionados y arquitectura SEO; enlazar naturalmente contenidos del mismo cluster. Cada artículo tiene una categoría primaria; temas transversales se relacionan por tags y cluster sin duplicar páginas.

<a id="archivos"></a>

## Estructura de archivos e imágenes

### Estructura objetivo del repositorio — decisión cerrada

```text
bitacora-stack/
│
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.ico
│
├── docs/
│   └── PROJECT_SPEC.md
│
├── articulos/
│   └── index.html
│
├── programacion/
│   └── index.html
│
├── desarrollo/
│   └── index.html
│
├── bases-datos/
│   └── index.html
│
├── redes-sistemas/
│   └── index.html
│
├── ingenieria-software/
│   └── index.html
│
├── matematicas/
│   └── index.html
│
├── guias/
│   └── index.html
│
├── proyectos/
│   └── index.html
│
├── acerca/
│   └── index.html
│
└── assets/
    ├── css/
    │   ├── tokens.css
    │   ├── base.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── article.css
    │   ├── pages.css
    │   └── responsive.css
    │
    ├── js/
    │   ├── main.js
    │   ├── navigation.js
    │   ├── data.js
    │   ├── search.js
    │   ├── filters.js
    │   ├── article.js
    │   ├── code-copy.js
    │   └── share.js
    │
    ├── data/
    │   ├── site.json
    │   ├── articles.json
    │   ├── guides.json
    │   └── projects.json
    │
    ├── images/
    │   ├── branding/
    │   ├── articles/
    │   ├── guides/
    │   └── projects/
    │
    └── icons/
```

Solo documentar esta estructura en la fase actual. Subcarpetas de artículos, guías y proyectos individuales se crean cuando exista contenido real.

### Responsabilidades CSS

| Archivo | Responsabilidad |
| --- | --- |
| `tokens.css` | Paleta, radios, espaciado, escala tipográfica y medidas compartidas. |
| `base.css` | Base semántica, tipografía, enlaces, foco y estilos generales. |
| `layout.css` | Contenedores, grids y distribución de las regiones. |
| `components.css` | Componentes reutilizables, incluidos cards, navegación, modal y callouts. |
| `article.css` | Lectura, TOC, bloques de código y progreso. |
| `pages.css` | Composiciones específicas de inicio, índices, guías, proyectos, Acerca y 404. |
| `responsive.css` | Ajustes compartidos de tablet y escritorio sobre la base Mobile First. |

Orden de carga: tokens → base → layout → components → article cuando aplique → pages → responsive. Evitar duplicar reglas y conservar el soporte de movimiento reducido. Los módulos JS mantienen las responsabilidades definidas en la sección de funcionalidades.

### `site.webmanifest`

Archivo requerido en implementación con `name`, `short_name`, `icons`, `theme_color`, `background_color` y `display`. Nombre y short_name: Bitácora Stack; theme_color `#2d3142`, background_color `#eae8ff`, display `browser` como sitio editorial inicial. Iconos reales con sus tamaños y tipos al producir los activos; no referenciar archivos inexistentes. `start_url` y `scope`, si se incluyen, deben preservar la raíz pública y el prefijo de repositorio. El manifest no exige service worker ni convertir el blog en PWA.

### Imágenes

Estructura:

```text
assets/images/
├── branding/
├── articles/
├── guides/
└── projects/
```

Preferencia:

- AVIF cuando sea conveniente
- WebP como formato ampliamente compatible
- evitar PNG/JPEG pesados cuando no sean necesarios

Toda imagen informativa debe poseer `alt`.

Definir `width` y `height` cuando sea posible para reducir layout shift.

Las covers sociales podrán apuntar aproximadamente a proporción `1200x630`.

<a id="backlog"></a>

## Backlog editorial

### Artículos iniciales / backlog editorial

Registrar un backlog inicial con estos temas.

#### Prioridad A

1. Cómo conectar HTML, CSS y JavaScript paso a paso
2. HTML semántico: qué es y qué etiquetas utilizar
3. Flexbox CSS explicado con ejemplos
4. DOM de JavaScript explicado desde cero
5. Clases y objetos en POO explicados con ejemplos
6. Los 4 pilares de la programación orientada a objetos
7. Encapsulamiento en POO: qué es y cómo funciona
8. Herencia y polimorfismo explicados fácilmente
9. Clave primaria y clave foránea: diferencias y ejemplos
10. INNER JOIN, LEFT JOIN y RIGHT JOIN con ejemplos
11. Normalización de bases de datos: 1FN, 2FN y 3FN
12. Modelo entidad-relación explicado paso a paso

#### Prioridad B

13. 20 comandos básicos de Linux para estudiantes
14. TCP vs UDP: diferencias, ventajas y ejemplos
15. IP, máscara de subred y gateway explicados
16. Qué es un puerto de red y para qué sirve
17. Diagrama de clases UML explicado con ejemplos
18. Requisitos funcionales y no funcionales
19. Casos de uso UML: cómo crearlos correctamente
20. Ciclo de vida del desarrollo de software
21. Arrays, listas, pilas y colas: diferencias
22. Pilas y colas explicadas con ejemplos
23. Variables, funciones y condicionales en Kotlin
24. Clases y objetos en Kotlin

#### Prioridad C

25. Tablas de verdad de todos los operadores lógicos
26. Jerarquía de operadores lógicos
27. Probabilidad condicional explicada con ejemplos
28. Permutaciones y combinaciones: cuándo utilizar cada una
29. Derivadas parciales explicadas paso a paso
30. Integrales básicas para estudiantes de ingeniería

No generar automáticamente 30 páginas vacías.

El backlog representa contenido futuro.

<a id="aceptacion"></a>

## Integridad y criterios de aceptación

### Integridad en fases posteriores

Antes de cada despliegue importante se deberá verificar:

- IDs únicos
- slugs válidos
- paths válidos
- categorías existentes
- imágenes existentes
- `articleIds` y `relatedArticleIds` válidos, resueltos contra `articles.json`
- enlaces internos sin romper
- títulos no vacíos
- descriptions no vacías
- `alt` adecuados
- sitemap actualizado
- canonicals correctos
- ningún contenido accidental usando datos de otro proyecto o alumno

Especialmente:

**El propietario y autor de este proyecto es Christian Alfredo Rincon De La Cruz.**

### Aceptación de la fase documental actual

- Existe `docs/PROJECT_SPEC.md` en UTF-8 con tabla de contenidos y secciones separadas para objetivos, requisitos, arquitectura, diseño, contenido, SEO, accesibilidad, datos, archivos, backlog, aceptación y pendientes.
- Conserva los cuatro semestres, seis categorías, tokens visuales, cuatro contratos JSON definitivos, rutas, componentes, módulos JavaScript y los 30 temas del backlog.
- La autoría es exclusivamente de Christian Alfredo Rincon De La Cruz; no hay datos de otros proyectos o alumnos.
- Los ejemplos no se presentan como contenido publicado. No se inventa URL pública ni repositorio de CodeTrainer.
- Solo se actualiza este documento existente: sin archivos auxiliares, frontend, datos operativos, páginas vacías, logo definitivo ni publicación.
- Otro agente puede entender qué construir, cómo debe verse y organizarse y cuáles son las restricciones leyendo únicamente este documento.

### Aceptación del sitio en fases posteriores

| Área | Condición | Verificación prevista |
| --- | --- | --- |
| Stack y resiliencia | Stack obligatorio, sin tecnologías excluidas; sitio estático multipágina y artículos completos en HTML. Contenido principal usable sin JS donde sea posible. | Revisar archivos y navegar con JS deshabilitado. |
| Rutas y Pages | Rutas limpias, slash final consistente en directorios, páginas principales definidas y subcarpetas solo con contenido real. Recursos, enlaces y datos funcionan bajo prefijo de Project Site. | Recorrer páginas profundas y probar 404 con rutas inexistentes. |
| Diseño | Paleta, Montserrat, bloques educativos y layouts Mobile First establecidos. | Revisar móvil, tablet y escritorio. |
| Interacción | Búsqueda sobre los cinco campos indicados, normalización de tildes y caso, filtros, conteo y estado sin resultados; menú, TOC, progreso, copia y compartir. | Probar flujos y estados manualmente. |
| Accesibilidad | Objetivo WCAG 2.2 AA y todos los requisitos de accesibilidad documentados. | Revisión manual de teclado, foco, contraste, menú, modal y movimiento reducido, complementada por auditoría automatizada. Lighthouse por sí solo no demuestra conformidad completa. |
| SEO | Metadatos únicos, canonicals correctos, Open Graph, BlogPosting cuando aplique, sitemap actualizado y robots.txt; páginas importantes indexables. | Inspeccionar HTML, URLs definitivas y archivos de rastreo. No garantizar indexación efectiva. |
| Datos | IDs únicos, referencias válidas, categorías existentes, paths e imágenes reales, títulos y descriptions no vacíos; guías por IDs sin duplicar metadata. | Validar catálogos contra archivos publicados. |
| Calidad técnica | Lighthouse SEO, Accessibility y Best Practices >= 95; Performance >= 90; cero enlaces internos rotos al desplegar. | Auditorías y revisión de enlaces; fijar condiciones de medición. |
| Editorial | Lanzamiento con 8–12 artículos terminados y útiles; al menos 20 en los primeros 60 días y rango orientativo de 20–26. | Inventario y calendario; excluir backlog y placeholders. |
| Audiencia | 1,000 pageviews acumuladas en 60 días como meta aspiracional. | Medición posterior con herramientas previstas; no es garantía ni condición técnica para permitir el lanzamiento. |

### Criterios técnicos previos a implementación y despliegue

Antes de implementar: usar los contratos definitivos y sus contenedores, rutas físicas acordadas, estrategia de raíz relativa, wireframes y componentes documentados, catálogo de categorías y conjunto candidato inicial. No hace falta consultar decisiones técnicas ya cerradas.

Durante desarrollo: cargar datos por `data.js`, probar estados de carga, error y vacío sin impedir leer HTML; combinar búsqueda y categoría sobre el mismo conjunto para un conteo correcto. TOC basado en encabezados del HTML, menú y modal con teclado y retorno de foco, Copiado anunciado de forma accesible. Copia con fallback y error visible si no funciona; compartir mediante capacidades disponibles y alternativa de copiar enlace. Mantener enlaces esenciales y lectura sin JS.

Antes de publicar: ejecutar todas las validaciones de integridad, sin admitir IDs de artículos inexistentes en guías ni proyectos; comprobar que metadata HTML y catálogo coinciden y que sitemap, canonicals, Open Graph y base de 404 usan la URL real. Confirmar la estrategia de carga de Montserrat, activos reales e integración de analítica únicamente si hay identificadores reales.

Auditar inicio, listado de artículos, categoría, artículo, guía, proyecto y Acerca en móvil y escritorio mediante Lighthouse con condiciones registradas; revisar además 404 y flujos de interacción manualmente. Registrar versión de Lighthouse, URL, dispositivo y condiciones para comparar resultados. Verificar tanto raíz de dominio como prefijo de Project Site, enlaces internos y rutas inexistentes; no repetir la auditoría sin motivo tras aprobar los controles.

<a id="estado"></a>

## Estado inicial y contradicciones resueltas

En fase 1 la carpeta de trabajo estaba vacía, sin `.git` ni documentación previa. Al iniciar esta fase existía únicamente `docs/PROJECT_SPEC.md`; se actualiza ese archivo conservando los requisitos anteriores válidos. No se inicializa Git ni se crea frontend.

Decisiones resueltas por la instrucción más específica de esta fase:

- Contratos: `site.json` es objeto y los tres catálogos son arrays. Categorías incluyen descripción; guías y proyectos incorporan `image`. Campos y relaciones quedan definidos.
- Idioma: todos los ejemplos y páginas futuras usan `es-MX`.
- Tagline: punto final obligatorio también en `site.json`.
- Calendario: 30 temas son backlog; 10 candidatos iniciales y cadencia aproximada, con plan de referencia de 26 a los 60 días y mínimo 20. No exigir publicar todo el backlog ni cuota para cada fracción de semana.
- Nombres: minúsculas en archivos orientados a URL; `PROJECT_SPEC.md` conserva su excepción explícita.
- Pages: raíz relativa por profundidad, sin bundler, compatible con User Site y Project Site; 404 usa base absoluta real de publicación como excepción.
- Contraste: paleta conservada con usos condicionados a WCAG AA y restricciones para `#adacb5`.
- Arquitectura y wireframes: estructura CSS/JS/datos expandida y diez tipos de página definidos.

No se ha inventado URL, repositorio, fecha de lanzamiento ni publicaciones. Las rutas y datos ilustrativos no certifican la existencia de esos recursos. El nombre `bitacora-stack/` del árbol objetivo no obliga a renombrar la carpeta actual.

<a id="pendientes"></a>

## Decisiones pendientes

Solo permanecen pendientes externos o de producción futura; no reabrir contratos, rutas, wireframes ni relaciones ya decididos.

| Pendiente | Tratamiento establecido |
| --- | --- |
| URL definitiva de GitHub Pages — resuelta | `https://allofmexd.github.io/bitacora-stack/`; `siteUrl` operativo coincide con esa raíz HTTPS y slash final. |
| Repositorio definitivo — resuelto | Público: `https://github.com/Allofmexd/bitacora-stack`; remoto `origin`, rama `main`. |
| Validación final de nombre e identidad/dominio | Bitácora Stack sigue siendo nombre operativo y no bloquea desarrollo. |
| Logo final | Mantener concepto de tres capas y wordmark; producir después. |
| Favicon e iconos finales | Incorporar activos reales al manifest en fase posterior. |
| Covers e imágenes finales | Los paths del contrato son ejemplos hasta producir las imágenes; no publicar referencias rotas. |
| GA4 Measurement ID | Sin ID falso; activar futura integración únicamente con valor real. |
| Search Console | Configuración y verificación cuando exista URL y acceso. |
| URLs de repositorios de proyectos | `repository: null` hasta disponer de URL real. |
| Contenido editorial final de cada artículo | Los diez candidatos pueden ajustarse antes de publicar. Fecha de lanzamiento depende del contenido terminado; calendario definido de forma relativa. |

**Consideración programada antes del despliegue:** decidir carga de Montserrat entre Google Fonts, self-hosting legalmente permitido y fallback del sistema. La instrucción exige evaluar esto antes de desplegar, no descargar fuentes ahora. No bloquea la implementación del diseño previsto.

<a id="siguiente"></a>

## Siguiente fase recomendada

La especificación está lista para servir como única fuente de verdad para iniciar implementación técnica: fija autor, idioma, categorías, páginas, rutas, datos, relaciones, archivos, componentes, wireframes, Pages y conjunto candidato de lanzamiento.

La siguiente fase, tras una nueva instrucción, puede construir la base estática multipágina y el sistema de diseño, implementar navegación y carga de datos conforme a estos contratos y desarrollar un artículo real representativo para verificar la plantilla. Continuar con los contenidos terminados del lanzamiento, sin placeholders editoriales. Integrar SEO y accesibilidad desde el inicio y comprobar funcionamiento con y sin JS bajo prefijo de repositorio.

Los pendientes externos permiten trabajar localmente; la URL real y activos requeridos deben resolverse antes de publicación. Esta ejecución se limita a documentación y no inicia frontend.


<a id="fase-3"></a>

## Concreciones de la base técnica — fase 3

Implementación autorizada el 2026-10-04. Las restricciones documentales de las fases 1–2 describen aquellas entregas y no impiden esta base técnica. No se crean artículos de lanzamiento ni guías individuales.

- Artículos y guías operativos empiezan vacíos. CodeTrainer tiene ficha HTML real, `repository: null` y tecnologías previstas Kotlin/Android con persistencia local, sin estadísticas ni funcionalidades adicionales.
- Se conserva `image` obligatorio: CodeTrainer referencia un SVG local de composición geométrica conceptual con alt explícito. No es captura ni cover final y solo refleja tecnologías previstas. Recurso real reemplazable, sin referencia de imagen rota.
- `ui.js` centraliza creación segura de cards y estados vacíos para búsqueda, filtros y catálogos; extiende los módulos acordados sin bundler. Datos se acceden mediante `data.js`, con caché y manejo de error.
- La 404 conserva la base absoluta prevista. La base local es `http://localhost:8000/`; cambiarla al probar prefijos y reemplazarla por la URL real antes de publicar. Nunca desplegar la base de pruebas.
- Montserrat usa fallback hasta decidir distribución. Manifest, iconos, canonical, URLs Open Graph y sitemap se incorporan al preparar despliegue con activos y URL reales.
- Sin JS permanece navegación completa y contenido HTML. Modal y controles de filtrado se muestran cuando su implementación está disponible.


<a id="patron-articulo"></a>

## Patrón de artículo individual

El primer contenido real es «Cómo conectar HTML, CSS y JavaScript paso a paso», ID `web-conectar-html-css-javascript`, en `desarrollo/conectar-html-css-javascript/`, categoría `desarrollo`, cluster `fundamentos-web`, nivel principiante. Este patrón amplía los componentes de lectura sin cambiar la arquitectura general.

### Estructura y presentación

Contenido íntegro en HTML: breadcrumb, categoría, H1, description, autor, fechas ISO 8601 y fecha legible, tiempo y nivel; cover conceptual HTML/CSS; TOC; cuerpo por secciones con IDs descriptivos; resumen final; enlaces para seguir aprendiendo, compartir y referencias. Relacionados fuera del rango de lectura y ocultos si no hay candidatos. Siguiente artículo solo cuando exista.

`article.css` se carga después de `components.css` y antes de `pages.css`; mantiene cuerpo de hasta 760px, line-height 1.75, superficie blanca, código con scroll propio y cuatro callouts identificados también por texto. La cover decorativa se excluye del árbol accesible. El catálogo conserva `image.src` y `image.alt` mediante un SVG local de la misma composición, usado en cards; no se descargan imágenes externas ni se inventa una URL social.

### Tabla de contenidos y progreso

TOC estático con enlaces a H2 reales dentro de un `<details>` nativo. Sin JS se entrega abierto y sigue siendo navegable. Con JS comienza cerrado por debajo de 1024px y abierto en escritorio; cambios de viewport ajustan el estado. En escritorio la región es sticky y el enlace activo usa `aria-current="location"`.

Progreso medido sobre `[data-reading-content]`, desde el comienzo de la prosa hasta que su final entra en la ventana, descontando la cabecera sticky. Excluye cover, metadata, relacionados y footer. Barra fija sin alterar layout, `aria-hidden="true"`, sin anuncios de scroll ni animación decorativa. Scroll pasivo y actualización mediante requestAnimationFrame.

### Módulos y portapapeles

`main.js` carga dinámicamente `article.js`, `code-copy.js` y `share.js` solo cuando encuentra `article[data-article-id]`. `article.js` controla TOC, progreso y relacionados con el algoritmo ya establecido. `code-copy.js` copia `textContent` de `<pre><code>`, anuncia éxito y muestra Copiado durante 2.5 segundos. Si Clipboard API falla, selecciona el código y explica la copia manual; nunca informa un éxito falso. `share.js` usa compartir nativo cuando esté disponible y ofrece copiar el enlace real de la página; ante fallo, muestra el enlace seleccionable. Controles de mejora ocultos hasta inicializarse; lectura y navegación no dependen de ellos.

### Conteo y sincronización

`scripts/article_metrics.py` utiliza la biblioteca estándar: cuenta palabras de la prosa visible dentro de `[data-reading-content]`, incluyendo encabezados, listas y callouts; excluye figuras de código, botones, cabecera, metadata, TOC y footer. Conserva límites entre bloques y palabras con marcado inline. Estimación `max(1, ceil(palabras / 200))`, conforme al criterio existente. `--write` sincroniza JSON y el indicador HTML. `check_integrity.py` verifica que ambos tiempos coinciden con el conteo.

### SEO previo al despliegue

Title y description propios, Open Graph title/description/type y BlogPosting con headline, description, Person author, fechas e idioma reales. Con `siteUrl: null`, no generar canonical, og:url ni propiedades URL falsas. `og:image`, `image` y `mainEntityOfPage` de JSON-LD, y BreadcrumbList con URLs absolutas se completan al establecer la URL pública. Mantener los breadcrumbs HTML reales durante desarrollo.

La portada, el listado y Desarrollo Web y Móvil usan el mismo registro de `articles.json`; sus fallbacks HTML son enlaces al contenido real, no representaciones divergentes del catálogo. Las demás categorías conservan estados vacíos reales. No se autorizan los otros nueve artículos ni nuevas guías en esta entrega.

### Selección editorial y enlaces entre artículos

El destacado filtra `featured: true`, ordena por `datePublished` descendente y desempata por `id` ascendente; muestra el primer resultado. Últimos artículos conserva el mismo orden y el límite de la portada. No altera fechas para forzar una selección.

Los enlaces contextuales viven en la prosa HTML y usan textos descriptivos que explican el recurso destino. Se añaden cuando una explicación se beneficia de otro contenido real del cluster; no se fuerza una relación solo para conectar todas las páginas. Las rutas relativas conservan su validez bajo un prefijo de repositorio y sin JavaScript.

Relacionados se calculan desde el catálogo: excluir el ID actual y duplicados, priorizar mismo cluster, después categoría y coincidencias de tags normalizados. Empates por fecha descendente e ID ascendente. Mostrar hasta tres candidatos con alguna relación; mantener la sección oculta si no hay candidatos. No almacenar listas paralelas de relacionados en cada HTML.

## Configuración de producción — GitHub Pages

Repositorio público `Allofmexd/bitacora-stack`, raíz pública `https://allofmexd.github.io/bitacora-stack/`. Publicación directa desde rama `main`, carpeta `/`, con `.nojekyll` vacío; sin framework, bundler, Jekyll ni workflow personalizado. Esta configuración concreta sustituye los valores locales pendientes de las fases anteriores.

`assets/data/site.json` fija `siteUrl` a esa raíz. Cada una de las 16 páginas indexables tiene canonical HTTPS propio y `og:url` coincidente, escritos en HTML. Los cuatro artículos completan BlogPosting con `url` y `mainEntityOfPage` y añaden BreadcrumbList Inicio → Desarrollo Web y Móvil → artículo. Los títulos, descriptions, autoría y fechas editoriales se conservan.

`sitemap.xml` enumera únicamente las 16 páginas indexables existentes; excluye 404 y usa lastmod real para artículos. `robots.txt` permite crawling y referencia el sitemap absoluto. Covers SVG siguen siendo recursos visuales; una imagen social raster adecuada continúa pendiente. No generar og:image ni campos de organización/logo sin activos reales.

La base de producción de `404.html` es la raíz pública absoluta y funciona sin JS desde rutas inexistentes de cualquier profundidad. Un script ejecutado antes de las hojas de estilo adapta esa base únicamente en localhost/127.0.0.1/IPv6 loopback al origen local y a raíz o al mismo prefijo público, según la ruta servida. Para prefijos locales alternativos o para probar sin JS en localhost, el servidor de prueba sustituye la base de la respuesta. No cambia las rutas relativas del resto del sitio ni infiere el repositorio contando segmentos arbitrarios.

La primera publicación conserva la pila Montserrat con fallback del sistema, evitando nuevas dependencias externas y descargas. Montserrat definitiva, logo/favicon/iconos, manifest con activos reales, OG raster, GA4 y Search Console permanecen pendientes. No se crea CNAME ni se amplía el contenido editorial en esta fase.
