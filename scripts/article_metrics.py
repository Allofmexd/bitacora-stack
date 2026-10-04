"""Tiempo de lectura reproducible: prosa visible del cuerpo, sin bloques de código."""
from html.parser import HTMLParser
from pathlib import Path
import argparse
import json
import math
import re

ROOT = Path(__file__).resolve().parents[1]
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class ArticleText(HTMLParser):
    def __init__(self):
        super().__init__()
        self.depth = 0
        self.reading = None
        self.skip = None
        self.parts = []

    def handle_starttag(self, tag, attrs):
        if tag not in VOID:
            self.depth += 1
        if "data-reading-content" in dict(attrs):
            self.reading = self.depth
        if self.reading is not None and self.skip is None and (tag in {"pre", "button"} or "code-block" in dict(attrs).get("class", "").split()):
            self.skip = self.depth
        if self.reading is not None and self.skip is None and tag in {"section", "h2", "h3", "p", "li", "aside"}:
            self.parts.append(" ")

    def handle_endtag(self, tag):
        if self.reading is not None and self.skip is None and tag in {"section", "h2", "h3", "p", "li", "aside"}:
            self.parts.append(" ")
        if self.depth == self.skip:
            self.skip = None
        if self.depth == self.reading:
            self.reading = None
        if tag not in VOID:
            self.depth -= 1

    def handle_data(self, data):
        if self.reading is not None and self.skip is None:
            self.parts.append(data)


def measure(raw):
    parser = ArticleText()
    parser.feed(raw)
    # Uniones sin espacio preservan palabras que contienen marcado inline.
    prose = "".join(parser.parts)
    words = re.findall(r"[^\W_]+(?:[’'-][^\W_]+)*", prose, re.UNICODE)
    return len(words), max(1, math.ceil(len(words) / 200))


def run(write=False):
    catalog_path = ROOT / "assets/data/articles.json"
    records = json.loads(catalog_path.read_text(encoding="utf-8"))
    for record in records:
        page = ROOT / record["path"] / "index.html"
        raw = page.read_text(encoding="utf-8")
        words, minutes = measure(raw)
        if write:
            record["readingTime"] = minutes
            raw, replacements = re.subn(r"(<span data-reading-time>)\d+(</span>)", lambda m: m[1] + str(minutes) + m[2], raw)
            if replacements != 1:
                raise ValueError("Se requiere un único indicador de lectura en " + record["path"])
            page.write_text(raw, encoding="utf-8", newline="\n")
        print(f"{record['id']}: {words} palabras de prosa; {minutes} min a 200 palabras/min.")
    if write:
        catalog_path.write_text(json.dumps(records, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n")


if __name__ == "__main__":
    arguments = argparse.ArgumentParser()
    arguments.add_argument("--write", action="store_true", help="Sincronizar readingTime en JSON y HTML")
    run(arguments.parse_args().write)
