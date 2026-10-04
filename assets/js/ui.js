import { resourceUrl } from './data.js';
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
export function emptyState(title, description) {
  const box = element('div', 'empty-state');
  box.append(element('h3', '', title), element('p', '', description));
  return box;
}
export function catalogCard(record, kind, categories = []) {
  const card = element('article', `card ${kind === 'projects' ? 'project-card' : kind === 'articles' ? 'article-card' : 'guide-card'}`);
  if (record.image?.src) {
    const image = element('img'); image.src = resourceUrl(record.image.src); image.alt = record.image.alt || '';
    image.width = 800; image.height = 450; image.loading = 'lazy'; card.append(image);
  }
  const body = element('div', 'card-body');
  const category = categories.find(item => item.slug === record.category)?.name;
  const label = kind === 'projects' ? (record.status === 'en-desarrollo' ? 'En desarrollo' : record.status) : category || 'Guía';
  body.append(element('span', 'badge', label));
  const heading = element('h3'); const link = element('a', '', record.title); link.href = resourceUrl(record.path);
  heading.append(link); body.append(heading, element('p', '', record.description));
  if (kind === 'projects') {
    const tags = element('div', 'project-meta');
    (record.technologies || []).forEach(tag => tags.append(element('span', 'badge', tag))); body.append(tags);
  } else body.append(element('p', 'result-count', `${record.readingTime} min de lectura · ${record.difficulty}`));
  const action = element('a', 'text-link', kind === 'projects' ? 'Explorar el proyecto →' : kind === 'guides' ? 'Ver guía →' : 'Leer artículo →');
  action.href = resourceUrl(record.path); body.append(action); card.append(body); return card;
}
export function renderCards(container, records, kind, categories) {
  const fragment = document.createDocumentFragment();
  records.forEach(record => fragment.append(catalogCard(record, kind, categories)));
  container.replaceChildren(fragment); container.classList.add('grid');
  if (kind === 'projects') container.classList.add('project-grid');
}
