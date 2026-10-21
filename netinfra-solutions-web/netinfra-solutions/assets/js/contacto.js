// Prototipo sin backend: no enviamos ni almacenamos información del formulario.
const form = document.querySelector('#contact-form');
const output = document.querySelector('#form-output');
const params = new URLSearchParams(location.search);
const product = params.get('producto');
const service = params.get('servicio');

if (product) {
  form.elements.tipo.value = 'Presupuesto de hardware';
  form.elements.mensaje.value = `Me gustaría recibir información y un presupuesto sobre: ${product}.\n`;
} else if (service) {
  const category = {
    Redes: 'Instalación de redes',
    Instalacion: 'Instalación de redes',
    Servidores: 'Servidores y almacenamiento',
  }[service] ?? 'Otra consulta';
  form.elements.tipo.value = category;
  form.elements.mensaje.value = `Me gustaría recibir información sobre el servicio de ${service}.\n`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // El navegador ya ha comprobado required, minlength, type=email y demás restricciones.
  output.hidden = false;
  output.textContent = 'Campos validados correctamente. Esta es una demostración: no se ha enviado ni guardado ninguna solicitud.';
  output.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

form.addEventListener('input', () => {
  output.hidden = true;
});
