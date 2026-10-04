import { loadArticles, loadSiteConfig } from './data.js';
import { matchesArticle } from './search.js';
import { renderCards, emptyState } from './ui.js';
export function filterArticles(articles, query, category, categories = []) {
  return articles.filter(article => (category === 'all' || article.category === category) && matchesArticle(article, query, categories));
}
export async function initFilters() {
  const browser = document.querySelector('[data-article-browser]');
  if (!browser) return;
  const controls = browser.querySelector('[data-filter-controls]'); const input = browser.querySelector('[data-filter-query]');
  const buttons = browser.querySelectorAll('[data-category]'); const count = browser.querySelector('[data-filter-count]');
  const results = browser.querySelector('[data-filter-results]');
  if (!controls || !input || !count || !results) return;
  let category = 'all'; count.textContent = 'Cargando catálogo…'; results.setAttribute('aria-busy', 'true');
  try {
    const [articles, config] = await Promise.all([loadArticles(), loadSiteConfig()]);
    function render() {
      const matches = filterArticles(articles, input.value, category, config.categories);
      count.textContent = `${matches.length} ${matches.length === 1 ? 'artículo' : 'artículos'}`;
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
      if (matches.length) renderCards(results, matches, 'articles', config.categories);
      else results.replaceChildren(emptyState(articles.length ? 'No hay resultados para estos filtros.' : 'Los primeros artículos están en preparación.', articles.length ? 'Prueba otra categoría o cambia la búsqueda.' : 'El catálogo crecerá con artículos terminados, ejemplos y recursos para estudiantes.'));
    }
    controls.hidden = false; input.addEventListener('input', render);
    buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.category; render(); })); render();
  } catch {
    count.textContent = 'No se pudo cargar el catálogo.';
    results.replaceChildren(emptyState('El catálogo no está disponible en este momento.', 'Puedes seguir explorando las categorías. Intenta recargar la página.'));
  } finally { results.removeAttribute('aria-busy'); }
}
