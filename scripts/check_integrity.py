"""Validación de integridad del sitio; solo biblioteca estándar de Python."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from datetime import date
import json
import re
import xml.etree.ElementTree as ET
from article_metrics import measure

ROOT = Path(__file__).resolve().parents[1]
AUTHOR = "Christian Alfredo Rincon De La Cruz"
SLUG = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")


def require(condition, message):
    if not condition:
        raise ValueError(message)


def read(name):
    return json.loads((ROOT / "assets/data" / (name + ".json")).read_text(encoding="utf-8"))


def text(value):
    return isinstance(value, str) and bool(value.strip())


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.links = []
        self.ids = set()
        self.base = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if "id" in attrs:
            require(attrs["id"] not in self.ids, "ID HTML duplicado: " + attrs["id"])
            self.ids.add(attrs["id"])
        if tag == "base":
            self.base = attrs.get("href")
        for attribute in ("href", "src"):
            if attribute in attrs and tag != "base":
                self.links.append(attrs[attribute])
        if tag == "img":
            require("alt" in attrs, "Imagen sin alt")


def check():
    site = read("site")
    require(site["author"]["name"] == AUTHOR, "Autor incorrecto")
    require(site["language"] == "es-MX", "Idioma incorrecto")
    require(site["name"] == "Bitácora Stack" and site["shortName"] == "Bitácora Stack", "Nombre incorrecto")
    require(site["tagline"] == "Tecnología explicada desde la práctica.", "Tagline incorrecta")
    for key in ("description",):
        require(text(site[key]), "Configuración incompleta: " + key)
    require(text(site["author"]["role"]), "Rol vacío")
    if site["siteUrl"] is not None:
        require(site["siteUrl"].startswith("https://") and site["siteUrl"].endswith("/"), "siteUrl inválida")
    categories = site["categories"]
    expected = {"programacion", "desarrollo", "bases-datos", "redes-sistemas", "ingenieria-software", "matematicas"}
    require(len(categories) == 6 and {c["slug"] for c in categories} == expected, "Categorías inválidas")
    require(all(text(c["name"]) and text(c["description"]) for c in categories), "Categorías incompletas")
    catalogs = {name: read(name) for name in ("articles", "guides", "projects")}
    paths = set()
    ids_by_catalog = {}
    for name, records in catalogs.items():
        require(isinstance(records, list), name + " debe ser array")
        ids = set()
        for record in records:
            common = ("id", "slug", "path", "title", "description", "featured", "image")
            require(all(key in record for key in common), name + ": campos ausentes")
            for key in ("id", "slug"):
                require(text(record[key]) and SLUG.fullmatch(record[key]), "Identificador inválido")
            require(record["id"] not in ids, "ID duplicado en " + name)
            ids.add(record["id"])
            require(text(record["title"]) and text(record["description"]), "Texto vacío")
            require(type(record["featured"]) is bool, "featured debe ser boolean")
            prefix = record.get("category") if name == "articles" else {"guides": "guias", "projects": "proyectos"}[name]
            require(record["path"] == f"{prefix}/{record['slug']}/", "path incompatible con slug")
            require(record["path"] not in paths, "path duplicado")
            paths.add(record["path"])
            require((ROOT / record["path"] / "index.html").is_file(), "Página de catálogo inexistente")
            image = record["image"]
            require(text(image.get("src")) and text(image.get("alt")), "Imagen incompleta")
            require(not image["src"].startswith("/") and ".." not in image["src"], "Ruta de imagen inválida")
            require((ROOT / image["src"]).is_file(), "Imagen inexistente")
            if name in ("articles", "guides"):
                require(record["difficulty"] in ("principiante", "intermedio", "avanzado"), "Dificultad inválida")
                require(type(record["readingTime"]) is int and record["readingTime"] > 0, "Tiempo de lectura inválido")
            if name == "articles":
                require(record["category"] in expected, "Categoría inexistente")
                require(record["author"] == AUTHOR, "Autor de artículo incorrecto")
                require(text(record["cluster"]) and SLUG.fullmatch(record["cluster"]), "Cluster inválido")
                for key in ("datePublished", "dateModified"):
                    require(bool(re.fullmatch(r"\d{4}-\d{2}-\d{2}", record[key])), "Fecha inválida")
                    date.fromisoformat(record[key])
                require(record["dateModified"] >= record["datePublished"], "Fechas inconsistentes")
                raw_article = (ROOT / record["path"] / "index.html").read_text(encoding="utf-8")
                words, reading_time = measure(raw_article)
                require(words > 0 and record["readingTime"] == reading_time, "Tiempo de lectura desincronizado")
                shown = re.search(r"<span data-reading-time>(\d+)</span>", raw_article)
                require(shown and int(shown[1]) == record["readingTime"], "Tiempo HTML incorrecto")
                require(f'data-article-id="{record["id"]}"' in raw_article, "Identidad del artículo HTML incorrecta")
                require(record["title"] + " | Bitácora Stack" in raw_article, "Title del artículo divergente")
                require(record["description"] in raw_article, "Description del artículo divergente")
            if name == "projects":
                require(text(record["status"]) and SLUG.fullmatch(record["status"]), "Estado inválido")
                require("repository" in record, "repository ausente")
                require(record["repository"] is None or record["repository"].startswith("https://"), "Repositorio inválido")
            fields = ["tags"] if name == "articles" else ["articleIds"] if name == "guides" else ["technologies", "topics", "relatedArticleIds"]
            for key in fields:
                values = record[key]
                require(isinstance(values, list) and all(text(v) for v in values), "Array inválido: " + key)
                require(len(values) == len(set(values)), "Array duplicado: " + key)
        ids_by_catalog[name] = ids
    for name, field in (("guides", "articleIds"), ("projects", "relatedArticleIds")):
        for record in catalogs[name]:
            require(set(record[field]) <= ids_by_catalog["articles"], "Referencia de artículo inexistente")
    titles = set()
    descriptions = set()
    pages = list(ROOT.rglob("*.html"))
    for path in pages:
        raw = path.read_text(encoding="utf-8")
        page = Page(); page.feed(raw)
        require(sum(tag == "h1" for tag, _ in page.tags) == 1, str(path) + ": H1 inválido")
        require(any(tag == "html" and attrs.get("lang") == "es-MX" for tag, attrs in page.tags), "Idioma HTML incorrecto")
        depth = len(path.relative_to(ROOT).parts) - 1
        require(any(tag == "html" and attrs.get("data-site-root") == ("../" * depth if depth else "./") for tag, attrs in page.tags), "Raíz HTML incorrecta")
        require(all(any(tag == landmark for tag, _ in page.tags) for landmark in ("header", "nav", "main", "footer")), "Landmarks ausentes")
        require("contenido" in page.ids, "Skip target ausente")
        require(any(tag == "script" and a.get("type") == "module" and a.get("src", "").endswith("assets/js/main.js") for tag, a in page.tags), "Módulo ausente")
        is_article = "data-article-id" in raw
        require(sum(tag == "link" and a.get("rel") == "stylesheet" for tag, a in page.tags) == (7 if is_article else 6), "CSS incompleto")
        title = re.search(r"<title>(.*?)</title>", raw).group(1)
        desc = next(a["content"] for tag, a in page.tags if tag == "meta" and a.get("name") == "description")
        require(title not in titles and desc not in descriptions, "Metadata duplicada")
        titles.add(title); descriptions.add(desc)
        if site["siteUrl"] is None:
            require(not any(tag == "link" and a.get("rel") == "canonical" for tag, a in page.tags), "Canonical sin URL real")
        else:
            canonical = [a.get("href") for tag, a in page.tags if tag == "link" and a.get("rel") == "canonical"]
            og_url = [a.get("content") for tag, a in page.tags if tag == "meta" and a.get("property") == "og:url"]
            if path.name == "404.html":
                require(page.base == site["siteUrl"], "Base pública de 404 incorrecta")
                require(not canonical and not og_url, "La 404 no debe indexarse como contenido")
                require(any(tag == "meta" and a.get("name") == "robots" and a.get("content") == "noindex" for tag, a in page.tags), "404 sin noindex")
            else:
                route = path.relative_to(ROOT).as_posix().removesuffix("index.html")
                public_url = site["siteUrl"] + route
                require(canonical == [public_url] and og_url == [public_url], "URL SEO incorrecta: " + route)
                if is_article:
                    record = next(a for a in catalogs["articles"] if a["path"] == route)
                    structured = [json.loads(value) for value in re.findall(r'<script type="application/ld\+json">(.*?)</script>', raw, re.S)]
                    posts = [item for item in structured if item.get("@type") == "BlogPosting"]
                    crumbs = [item for item in structured if item.get("@type") == "BreadcrumbList"]
                    require(len(posts) == len(crumbs) == 1, "Datos estructurados incompletos")
                    post = posts[0]
                    require(post.get("url") == public_url and post.get("mainEntityOfPage", {}).get("@id") == public_url, "URL BlogPosting incorrecta")
                    require(post.get("headline") == record["title"] and post.get("description") == record["description"] and post.get("author", {}).get("name") == AUTHOR, "Metadata BlogPosting divergente")
                    require(all(post.get(key) == record[key] for key in ("datePublished", "dateModified")), "Fechas BlogPosting divergentes")
                    items = crumbs[0].get("itemListElement", [])
                    require([item.get("item") for item in items] == [site["siteUrl"], site["siteUrl"] + record["category"] + "/", public_url], "BreadcrumbList incorrecto")
                    require([item.get("position") for item in items] == [1, 2, 3], "Orden BreadcrumbList incorrecto")
        for link in page.links:
            parts = urlsplit(link)
            if parts.scheme or parts.netloc:
                continue
            base_dir = ROOT if page.base else path.parent
            target = base_dir / unquote(parts.path) if parts.path else path
            if target.is_dir():
                target = target / "index.html"
            target = target.resolve()
            require(target.is_relative_to(ROOT), "Enlace fuera del proyecto: " + link)
            require(target.is_file(), str(path.relative_to(ROOT)) + ": enlace roto " + link)
            if parts.fragment and target.suffix == ".html":
                require(re.search(r'id=[\"\']' + re.escape(parts.fragment) + r'[\"\']', target.read_text(encoding="utf-8")), "Ancla inexistente: " + link)
    if site["siteUrl"] is not None:
        ns = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
        sitemap = ET.parse(ROOT / "sitemap.xml").getroot()
        entries = sitemap.findall("s:url", ns)
        locations = [entry.findtext("s:loc", namespaces=ns) for entry in entries]
        expected_urls = {site["siteUrl"] + path.relative_to(ROOT).as_posix().removesuffix("index.html") for path in pages if path.name == "index.html"}
        require(len(locations) == len(set(locations)) and set(locations) == expected_urls, "Inventario sitemap incorrecto")
        modified = {entry.findtext("s:loc", namespaces=ns): entry.findtext("s:lastmod", namespaces=ns) for entry in entries}
        require(all(modified[site["siteUrl"] + a["path"]] == a["dateModified"] for a in catalogs["articles"]), "lastmod desincronizado")
        robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
        require("User-agent: *" in robots and "Allow: /" in robots and "Disallow:" not in robots, "Robots impide crawling")
        require("Sitemap: " + site["siteUrl"] + "sitemap.xml" in robots, "Sitemap de robots incorrecto")
        require((ROOT / ".nojekyll").is_file() and (ROOT / ".nojekyll").stat().st_size == 0, ".nojekyll debe estar vacío")
    for path in ROOT.rglob("*"):
        if not path.is_file() or ".git" in path.parts or "__pycache__" in path.parts:
            continue
        if path.suffix in (".html", ".js", ".css", ".json", ".md", ".svg"):
            require("\ufffd" not in path.read_text(encoding="utf-8"), "Codificación dañada en " + str(path))
    print(f"Correcto: {len(pages)} páginas, 4 JSON, 6 categorías; contratos, relaciones, imágenes, enlaces y recursos válidos.")


if __name__ == "__main__":
    try:
        check()
    except (ValueError, KeyError, TypeError, OSError) as error:
        raise SystemExit("Error de integridad: " + str(error))
