import { initNavigation } from './navigation.js';
import { initSearch } from './search.js';
import { initFilters } from './filters.js';
import { loadArticles, loadGuides, loadProjects, loadSiteConfig } from './data.js';
import { renderCards, emptyState } from './ui.js';
initNavigation(); initSearch(); initFilters();
if (document.querySelector('article[data-article-id]')) {
  Promise.all([import('./article.js'), import('./code-copy.js'), import('./share.js')])
    .then(([article, copy, share]) => { article.initArticle(); copy.initCodeCopy(); share.initShare(); })
    .catch(() => { /* Texto, código y enlaces permanecen disponibles sin mejoras JS. */ });
}
async function initCatalogs() {
  const containers = document.querySelectorAll('[data-catalog]');
  if (!containers.length) return;
  const loaders = { articles: loadArticles, guides: loadGuides, projects: loadProjects };
  let categories = [];
  try { categories = (await loadSiteConfig()).categories; } catch { /* El contenido estático permanece disponible. */ }
  await Promise.all([...containers].map(async container => {
    const kind = container.dataset.catalog; if (!loaders[kind]) return;
    container.setAttribute('aria-busy', 'true');
    try {
      const all = await loaders[kind]();
      let records = container.dataset.category ? all.filter(item => item.category === container.dataset.category) : [...all];
      const count = document.querySelector(`[data-category-count="${container.dataset.category}"]`);
      if (count) count.textContent = `${records.length} ${records.length === 1 ? "artículo publicado" : "artículos publicados"}`;
      if (kind === 'articles') records.sort((a, b) => b.datePublished.localeCompare(a.datePublished) || a.id.localeCompare(b.id));
      if (container.hasAttribute('data-featured')) records = records.filter(item => item.featured);
      const limit = Number(container.dataset.limit); if (limit > 0) records = records.slice(0, limit);
      if (records.length) renderCards(container, records, kind, categories);
    } catch {
      if (kind !== 'projects') container.replaceChildren(emptyState('No se pudo actualizar el catálogo.', 'La navegación y el contenido de esta página siguen disponibles. Puedes intentar recargarla.'));
    } finally { container.removeAttribute('aria-busy'); }
  }));
}
initCatalogs();
