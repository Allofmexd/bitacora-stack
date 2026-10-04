const cache = new Map();
export function siteRoot() {
  return new URL(document.documentElement.dataset.siteRoot || './', document.baseURI);
}
export function resourceUrl(path) {
  if (typeof path !== 'string' || !path || path.startsWith('/') || path.includes('..') || /^[a-z]+:/i.test(path)) throw new Error('Ruta de catálogo inválida.');
  const url = new URL(path, siteRoot());
  if (!url.href.startsWith(siteRoot().href)) throw new Error('Recurso fuera del sitio.');
  return url.href;
}
async function load(name, array) {
  if (!cache.has(name)) {
    const request = fetch(resourceUrl(`assets/data/${name}.json`))
      .then(response => { if (!response.ok) throw new Error(`No se pudo cargar ${name}.`); return response.json(); })
      .then(value => {
        if (array ? !Array.isArray(value) : !value || Array.isArray(value) || typeof value !== 'object') throw new Error(`Formato inválido en ${name}.`);
        return value;
      }).catch(error => { cache.delete(name); throw error; });
    cache.set(name, request);
  }
  return cache.get(name);
}
export const loadSiteConfig = () => load('site', false);
export const loadArticles = () => load('articles', true);
export const loadGuides = () => load('guides', true);
export const loadProjects = () => load('projects', true);
