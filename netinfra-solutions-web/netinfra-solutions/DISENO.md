# Documento de diseño — NetInfra Solutions

## Público y objetivo

**Público:** pymes, centros educativos y profesionales que necesitan equipos e infraestructura de red.  
**Objetivo principal:** permitir identificar un producto o servicio y acceder a una solicitud de presupuesto de forma sencilla.  
**Objetivo secundario:** transmitir especialización técnica y explicar la digitalización propuesta de la empresa.

## Identidad visual

| Token | Valor | Uso |
|---|---|---|
| Azul noche | `#0B1220` | Cabecera y fondo oscuro |
| Azul primario | `#2866E8` | Acciones y enlaces |
| Cian | `#55D4E1` | Acentos tecnológicos |
| Blanco frío | `#F6F8FC` | Fondos y secciones |
| Texto principal | `#15233B` | Titulares y cuerpo |

Tipografía: pila nativa `Inter`, `system-ui`, `Segoe UI`, etc., sin fuentes descargadas. Diseño con tarjetas, espacios generosos, iconografía sobria y diagramas SVG locales. Uso contenido de muestra explícitamente ficticio.

## Arquitectura de información

- Inicio: propuesta de valor, catálogo y servicios.
- Catálogo: 10 fichas clasificadas en Redes, Infraestructura, Almacenamiento, Energía, IoT y Seguridad.
- Servicios: redes, instalación, sistemas y soporte.
- Proyectos: tres escenarios ficticios.
- Nosotros: identidad y antes/después de la digitalización.
- Contacto: formulario de ejemplo con validación.

## Interacciones sin JavaScript

1. Menú móvil mediante atributos HTML `popover` y `popovertarget`.
2. Preguntas frecuentes usando `details` con el mismo `name` para comportamiento de acordeón exclusivo.
3. Diálogo explicativo mediante `commandfor` y `command="show-modal"`; cierre con `<form method="dialog">`.
4. Campos de formulario con restricciones HTML (`required`, `minlength`, `maxlength`, `type=email`).
5. Estados del formulario estilizados con `:has()` y `:user-invalid`.

## Interacciones con JavaScript mínimo

1. Búsqueda y filtro combinados en el catálogo usando atributos `data-` y `hidden`.
2. Enlace desde un producto al formulario mediante parámetros de URL.
3. Confirmación *local* de que se han validado los campos; no hay envío de datos.

## CSS moderno

- `@layer`: orden explícito de la cascada para evitar conflictos de especificidad.
- `@container`: adaptación de componentes al ancho disponible, no solo a la pantalla.
- `:has()`: estilos basados en estados descendientes.
- `@starting-style`: animación progresiva para apertura del diálogo.
- `clamp()`: tipografía fluida, Grid y Flexbox: maquetación adaptable.
- `prefers-reduced-motion`: respeto a las preferencias de accesibilidad.

## Reglas de accesibilidad

HTML semántico, textos alternativos, foco visible, enlace «Saltar al contenido», campos con `<label>`, orden lógico del teclado y mensajes de estado con `role="status"` y `aria-live`. Antes de una publicación real, realizar comprobaciones de accesibilidad con teclado, lectores de pantalla y herramientas especializadas.

## Decisiones de alcance

Esta entrega es **frontend estático** sin framework, base de datos ni pagos. Los elementos de catálogo y proyectos son ejemplos. Se omiten precios, stock y testimonios para evitar fingir información empresarial real. La web está preparada para evolucionar hacia backend y aplicaciones de gestión.

## Pendiente de verificar

- Navegación y filtros en dispositivos y navegadores reales.
- Contraste y experiencia con lectores de pantalla.
- Envío seguro y tratamiento de datos cuando exista backend.
- Aspectos legales, política de privacidad y RGPD para uso público.
