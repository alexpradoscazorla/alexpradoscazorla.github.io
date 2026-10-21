# NetInfra Solutions

> Proyecto educativo de digitalización empresarial. Sitio web multipágina realizado con HTML, CSS y JavaScript nativo.

**NetInfra Solutions es una empresa ficticia**, concebida como una pyme de Granada que comercializa equipamiento profesional de redes (routers, switches, racks, cableado, NAS, SAI y Raspberry Pi), y presta servicios de instalación, configuración y mantenimiento informático.

## Objetivo

Diseñar su presencia web como primera fase de un plan de digitalización empresarial más amplio. Partimos de procesos dispersos (consultas por teléfono, inventario en hojas de cálculo, presupuestos manuales y soporte sin tickets) y proponemos una web con catálogo, solicitudes de presupuesto y una futura integración con ERP, CRM y sistema de incidencias.

## Contenido

- `index.html`: inicio.
- `catalogo.html`: catálogo de diez productos de ejemplo con búsqueda y filtros.
- `servicios.html`: servicios y preguntas frecuentes.
- `proyectos.html`: casos ficticios de aplicación.
- `nosotros.html`: identidad y transformación digital prevista.
- `contacto.html`: formulario con validación nativa. **No envía información a ningún servidor.**
- `assets/css/styles.css`: estilos y diseño adaptable.
- `assets/js/catalogo.js`: lógica mínima de filtrado.
- `assets/js/contacto.js`: precarga de consulta y demostración del formulario.
- `assets/img/`: ilustraciones SVG locales; no se cargan imágenes externas.
- `DISENO.md`: decisiones de UX, tecnologías modernas y próximas fases.

## Cómo probarlo

Solo se necesita un navegador actualizado. Se recomienda servir los archivos desde un servidor local para reproducir el comportamiento habitual de un sitio web:

```bash
cd netinfra-solutions
python -m http.server 8000
```

Visita **http://localhost:8000/**. En Windows también puedes abrir la carpeta desde VS Code y utilizar una extensión de servidor local. Para GitHub Pages bastaría con publicar el contenido de este directorio desde la raíz del repositorio o la carpeta elegida.

## Tecnologías usadas

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `search`, `form` y `footer`.
- Funcionalidades nativas: `popover`/`popovertarget` para el menú móvil, `details name` para acordeones, `<dialog>` y `commandfor` para una ventana informativa; formularios con `required`, `minlength`, `type=email`, etc.
- CSS: cascada con `@layer`, consultas de contenedor `@container`, `:has()`, `clamp()`, Grid, Flexbox y `@starting-style` como mejora progresiva.
- JavaScript ES Modules (`type="module"`), `FormData`, `URLSearchParams`, eventos y actualización mínima de `hidden`.

> Se priorizan estándares bien soportados por navegadores modernos. Algunas capacidades avanzadas, especialmente `commandfor` y animaciones de entrada, pueden no funcionar en navegadores antiguos. El contenido principal, los enlaces y la navegación siguen siendo HTML normal.

## Alcance y limitaciones

Se entrega un **prototipo de frontend**. El catálogo y los proyectos contienen datos de demostración; no existen stock, precios, pedidos ni clientes reales. El formulario muestra una confirmación de *validación*, no de envío. Para producción harían falta backend, persistencia de datos, seguridad, RGPD, protección antispam, gestión comercial e integración con servicios internos.

## Posibles mejoras

1. API y base de datos de productos.
2. CRM para solicitudes y presupuestos.
3. ERP e inventario integrado.
4. Sistema de tickets y portal de clientes.
5. Pruebas automatizadas, auditoría de accesibilidad y optimización de rendimiento.

## Uso de IA

La IA se ha utilizado como apoyo para elaborar el prototipo, su estructura y sus estilos. El código debe revisarse, probarse y comprenderse antes de entregarlo.

**Asignatura:** Digitalización Aplicada a los Sectores Productivos.
