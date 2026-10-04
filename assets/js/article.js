import { loadArticles, loadSiteConfig } from './data.js';
import { normalize } from './search.js';
import { renderCards } from './ui.js';

export function relatedArticles(current, articles) {
  const unique = new Map();
  const tags = new Set(current.tags.map(normalize));
  for (const candidate of articles) {
    if (candidate.id === current.id || unique.has(candidate.id)) continue;
    const shared = [...new Set(candidate.tags.map(normalize))].filter(tag => tags.has(tag)).length;
    const rank = [Number(candidate.cluster === current.cluster), Number(candidate.category === current.category), shared];
    if (rank.some(Boolean)) unique.set(candidate.id, { candidate, rank });
  }
  return [...unique.values()].sort((a, b) => {
    for (let i = 0; i < 3; i++) { if (a.rank[i] !== b.rank[i]) return b.rank[i] - a.rank[i]; }
    return b.candidate.datePublished.localeCompare(a.candidate.datePublished) || a.candidate.id.localeCompare(b.candidate.id);
  }).slice(0, 3).map(item => item.candidate);
}

async function initRelated(article) {
  const section = document.querySelector('[data-related-articles]');
  const results = section?.querySelector('[data-related-results]');
  if (!section || !results) return;
  try {
    const [articles, site] = await Promise.all([loadArticles(), loadSiteConfig()]);
    const current = articles.find(item => item.id === article.dataset.articleId);
    if (!current) return;
    const matches = relatedArticles(current, articles);
    if (!matches.length) return;
    renderCards(results, matches, 'articles', site.categories); section.hidden = false;
  } catch { /* Relacionados opcionales: no interrumpir la lectura. */ }
}

export function initArticle() {
  const article = document.querySelector('article[data-article-id]');
  const content = article?.querySelector('[data-reading-content]');
  if (!article || !content) return;
  const toc = article.querySelector('.article-toc');
  const desktop = window.matchMedia('(min-width: 1024px)');
  if (toc) {
    const updateToc = () => { toc.open = desktop.matches; };
    updateToc(); desktop.addEventListener('change', updateToc);
  }
  const links = [...(toc?.querySelectorAll('a[href^="#"]') || [])];
  const headings = [...content.querySelectorAll('h2[id]')];
  const progress = document.querySelector('[data-reading-progress]');
  const fill = progress?.querySelector('span');
  if (progress && fill) progress.hidden = false;
  let scheduled = false;
  function update() {
    scheduled = false;
    const offset = (document.querySelector('.site-header')?.getBoundingClientRect().height || 0) + 12;
    const rect = content.getBoundingClientRect();
    const start = rect.top + window.scrollY - offset;
    const end = rect.bottom + window.scrollY - window.innerHeight;
    const value = Math.max(0, Math.min(1, (window.scrollY - start) / Math.max(1, end - start)));
    if (fill) fill.style.transform = `scaleX(${value})`;
    const active = headings.reduce((found, heading) => heading.getBoundingClientRect().top <= offset + 24 ? heading : found, headings[0]);
    links.forEach(link => {
      if (active && link.hash === `#${active.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function requestUpdate() { if (!scheduled) { scheduled = true; window.requestAnimationFrame(update); } }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  if (window.ResizeObserver) new ResizeObserver(requestUpdate).observe(content);
  update(); initRelated(article);
}
