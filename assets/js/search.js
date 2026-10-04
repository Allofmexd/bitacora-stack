import { loadArticles, loadSiteConfig } from './data.js';
import { emptyState, renderCards } from './ui.js';
export function normalize(value) {
  return String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}
export function matchesArticle(article, query, categories = []) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  const categoryName = categories.find(item => item.slug === article.category)?.name || '';
  const haystack = normalize([article.title, article.description, article.category, categoryName, ...(article.tags || []), article.cluster].join(' '));
  return words.every(word => haystack.includes(word));
}
export function initSearch() {
  const dialog = document.querySelector('#busqueda-global');
  const input = dialog?.querySelector('input');
  const results = dialog?.querySelector('[data-search-results]');
  const count = dialog?.querySelector('[data-search-count]');
  const close = dialog?.querySelector('[data-search-close]');
  if (!dialog || !input || !results || !count || !close || typeof dialog.showModal !== 'function') return;
  let opener, articles = [], categories = [], state = 'loading';
  function render() {
    if (state === 'loading') { count.textContent = 'Cargando catálogo…'; results.replaceChildren(); return; }
    if (state === 'error') {
      count.textContent = 'No se pudo cargar el catálogo.';
      results.replaceChildren(emptyState('La búsqueda no está disponible en este momento.', 'Puedes seguir navegando por las categorías y los proyectos.')); return;
    }
    const matches = articles.filter(article => matchesArticle(article, input.value, categories));
    count.textContent = `${matches.length} ${matches.length === 1 ? 'resultado' : 'resultados'}`;
    if (matches.length) renderCards(results, matches, 'articles', categories);
    else results.replaceChildren(emptyState(articles.length ? 'No encontramos artículos con esa búsqueda.' : 'Los primeros artículos están en preparación.', articles.length ? 'Prueba con otro tema o una búsqueda más breve.' : 'Cuando estén publicados, podrás buscarlos por tema, categoría o etiquetas.'));
  }
  async function refresh() {
    state = 'loading'; render();
    try { const [records, site] = await Promise.all([loadArticles(), loadSiteConfig()]); articles = records; categories = site.categories; state = 'ready'; }
    catch { state = 'error'; }
    render();
  }
  document.querySelectorAll('[data-search-open]').forEach(trigger => {
    trigger.hidden = false;
    trigger.addEventListener('click', () => { opener = trigger; dialog.showModal(); input.focus(); refresh(); });
  });
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault(); event.stopPropagation(); dialog.close();
    }
  });
  dialog.addEventListener('close', () => opener?.focus());
  input.addEventListener('input', render);
}
