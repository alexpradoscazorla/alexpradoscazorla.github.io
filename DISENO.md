# Sistema visual · NetInfra Solutions v2

## Concepto

**La infraestructura invisible. El impacto real.** Narrativa inmersiva y editorial con grandes secciones de tecnología. Inspiración conceptual principal: https://audiomodeling.com/ . Se evita copiar directamente diseños, logotipos o contenido del referente.

## Sistema de tokens

| Variable | Color | Función |
| --- | --- | --- |
| `--night` | `#0b0e12` | fondos cinematográficos |
| `--graphite` | `#191f27` | superficies técnicas |
| `--mineral` | `#f3f4f2` | descansos editoriales y catálogo |
| `--ink` | `#192127` | texto en fondos claros |
| `--signal` | `#d9f27c` | enlaces y llamadas a la acción |

Tipografía sans-serif (`Manrope`, `Inter`, `system-ui`); se sirve con fuentes instaladas en el equipo, sin descargas externas. Títulos con `clamp()`, contraste alto y espacios amplios.

## Arquitectura narrativa

1. Inicio: portada de centro de datos, propuesta de valor, manifiesto, equipamiento, infraestructura, servicios, familias y CTA.
2. Catálogo: hero breve, búsqueda y filtro por categoría, cuadrícula, solicitud de información por producto.
3. Servicios: introducción, diseño de redes, instalación, mantenimiento y CTA.
4. Proyectos: tres casos de ejemplo, claramente identificados como ficticios.
5. Nosotros: identidad, principios, situación inicial y digitalización propuesta.
6. Contacto: formulario de prueba, aclaración sobre ausencia de backend y FAQs.

## Semántica y comportamiento nativo

- `<main>`, `<header>`, `<nav>`, `<section>`, `<article>` y encabezados de jerarquía coherente.
- `<nav popover="auto">` abierto por un botón `popovertarget`; sin manejadores JS para la apertura/cierre.
- `<dialog>` del catálogo con `commandfor` y `command="show-modal"`; cierre con `form method="dialog"`.
- `<details name="faq">` para acordeón exclusivo de preguntas frecuentes.
- Formularios con `required`, `type=email`, `minlength`, `maxlength`.
- Estilos con `@layer`, `@container`, `@starting-style`, `:focus-visible`.
- Animación con view timeline como mejora progresiva bajo `@supports`; sin dependencia de ella para que se lea el contenido.
- `prefers-reduced-motion: reduce` desactiva movimientos decorativos.

## JavaScript: responsabilidades

- `assets/js/catalogo.js`: filtros combinados, normalización de acentos, parámetros `?categoria=` y contadores accesibles.
- `assets/js/contacto.js`: preselección de información mediante `?producto=` o `?servicio=`, confirmación local y explícita de validación. **No envía ni guarda datos.**

No se utiliza JavaScript para mostrar menús, abrir diálogos, calcular tamaños ni implementar animaciones que CSS ya resuelve.

## Imágenes

- `datacenter-hero.webp`: imagen original generada con IA; composición con espacio negativo para titulares.
- `datacenter-detail.webp` y `datacenter-closeup.webp`: recortes de la misma imagen.
- SVG del catálogo: ilustraciones genéricas de dispositivos sin marcas; versiones `-cutout.svg` utilizadas sobre fondos oscuros. Se mantuvieron originales para fichas.

## Recomendaciones de evaluación

- Navegación completa con teclado; prueba de menú, diálogo, filtros y enlaces.
- Comprobar encabezados, etiquetas, textos alternativos y validaciones de HTML.
- Probar al menos móvil (390 px), tableta (768 px) y escritorio (1440 px), incluyendo anchura de contenido y ausencia de desplazamiento horizontal.
- Contrast ratio de los textos, reducción de movimiento, tamaño de imágenes y carga diferida.
- Evaluación Lighthouse/Web Vitals al desplegar: metas LCP ≤2,5 s, CLS ≤0,1, INP ≤200 ms (metas, no resultados medidos).

## Próximos pasos

Si el proyecto escolar se amplía: sustituir contenido genérico por fichas de fabricantes verificadas, añadir un backend y gestión de datos, integrar inventario/CRM/ERP, preparar política de privacidad, seguridad y legislación aplicable.
