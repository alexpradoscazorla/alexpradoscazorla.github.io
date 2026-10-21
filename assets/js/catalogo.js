// Solo se utiliza JS para lógica de búsqueda y filtrado; los elementos se renderizan en HTML.
const form = document.querySelector('#catalog-filters');
const products = [...document.querySelectorAll('.product-card')];
const count = document.querySelector('#results-count');
const empty = document.querySelector('#empty-state');
const resetEmpty = document.querySelector('#reset-empty');

// Normalizamos acentos para que «inalambrico» e «inalámbrico» puedan coincidir.
const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es').trim();

function applyFilters() {
  const data = new FormData(form);
  const query = normalize(String(data.get('q') ?? ''));
  const category = String(data.get('categoria') ?? '');
  let visible = 0;

  for (const product of products) {
    const text = normalize(product.dataset.search ?? '');
    const matches = (!query || text.includes(query)) && (!category || product.dataset.category === category);
    product.hidden = !matches;
    if (matches) visible += 1;
  }

  count.textContent = `${visible} ${visible === 1 ? 'producto encontrado' : 'productos encontrados'}`;
  empty.hidden = visible !== 0;
}

form.addEventListener('input', applyFilters);
form.addEventListener('change', applyFilters);
// El reset nativo actualiza los controles después del evento; esperamos al siguiente frame.
form.addEventListener('reset', () => requestAnimationFrame(applyFilters));
resetEmpty.addEventListener('click', () => form.reset());

const params = new URLSearchParams(location.search);
const categoryFromLink = params.get('categoria');
if (categoryFromLink && [...form.elements.categoria.options].some((o) => o.value === categoryFromLink)) {
  form.elements.categoria.value = categoryFromLink;
}
applyFilters();
