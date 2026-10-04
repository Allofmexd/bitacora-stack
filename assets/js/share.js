import { copyText } from './code-copy.js';
export function initShare() {
  const controls = document.querySelector('[data-share-controls]');
  if (!controls) return;
  const status = controls.querySelector('[data-share-status]');
  const share = controls.querySelector('[data-share]');
  const copy = controls.querySelector('[data-copy-link]');
  if (!status || !share || !copy) return;
  controls.hidden = false;
  const url = new URL(window.location.href); url.hash = '';
  async function copyLink() {
    try { await copyText(url.href); status.textContent = 'Enlace copiado.'; }
    catch {
      status.textContent = 'No se pudo copiar automáticamente. Selecciona este enlace y cópialo desde tu dispositivo.';
      let field = controls.querySelector('.share-fallback');
      if (!field) {
        field = document.createElement('input'); field.className = 'share-fallback';
        field.readOnly = true; field.setAttribute('aria-label', 'Enlace del artículo para copiar'); controls.append(field);
      }
      field.value = url.href; field.focus(); field.select();
    }
  }
  copy.addEventListener('click', copyLink);
  share.addEventListener('click', async () => {
    if (!navigator.share) { await copyLink(); return; }
    try { await navigator.share({ title: document.querySelector('h1').textContent, url: url.href }); status.textContent = 'Artículo compartido.'; }
    catch (error) { if (error.name !== 'AbortError') await copyLink(); }
  });
}
