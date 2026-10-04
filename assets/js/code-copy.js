export async function copyText(text) {
  if (!navigator.clipboard?.writeText) throw new Error('Portapapeles no disponible.');
  await navigator.clipboard.writeText(text);
}
export function initCodeCopy() {
  document.querySelectorAll('[data-copy-code]').forEach(button => {
    const code = document.getElementById(button.dataset.copyCode);
    const status = button.closest('.code-block')?.querySelector('.code-status');
    if (!code || !status) return;
    button.hidden = false;
    let timer;
    const original = button.textContent;
    button.addEventListener('click', async () => {
      clearTimeout(timer); button.disabled = true; status.textContent = '';
      try {
        await copyText(code.textContent);
        button.textContent = 'Copiado'; status.textContent = 'Código copiado.';
      } catch {
        const range = document.createRange(); range.selectNodeContents(code);
        const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range);
        code.closest('pre').focus();
        button.textContent = original;
        status.textContent = 'No se pudo copiar automáticamente. El código está seleccionado; usa Ctrl+C o la opción Copiar de tu dispositivo.';
      } finally {
        button.disabled = false;
        timer = setTimeout(() => { button.textContent = original; }, 2500);
      }
    });
  });
}
