export function initNavigation() {
  const header = document.querySelector('[data-navigation]');
  const toggle = header?.querySelector('.menu-toggle');
  const nav = document.getElementById(toggle?.getAttribute('aria-controls'));
  if (!toggle || !nav) return;
  const desktop = window.matchMedia('(min-width: 768px)');
  header.classList.add('enhanced');
  let open = false;
  function update(returnFocus = false) {
    nav.hidden = !desktop.matches && !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Cerrar menú' : 'Menú';
    if (returnFocus && !desktop.matches) toggle.focus();
  }
  toggle.addEventListener('click', () => { open = !open; update(); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) { open = false; update(); } });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && open && !document.querySelector('dialog[open]')) { open = false; update(true); }
  });
  desktop.addEventListener('change', () => { open = false; update(); });
  update();
}
