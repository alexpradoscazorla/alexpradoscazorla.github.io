# NetInfra Solutions · Rediseño inmersivo

**Proyecto académico de Digitalización aplicada a los sectores productivos** · Empresa ficticia de Granada.

NetInfra Solutions es una pyme ficticia dedicada a la **distribución de hardware de redes e infraestructura informática** y a los **servicios de diseño, instalación, configuración y mantenimiento de sistemas** para pymes, centros educativos y profesionales.

> **Aviso:** proyecto educativo. La empresa, los proyectos de referencia, el catálogo y sus productos son ejemplos; no se venden artículos ni se tramitan solicitudes reales. No introduzcas datos personales reales en el formulario.

## Objetivo de digitalización

La empresa parte de un modelo operativo poco integrado: atención por teléfono y correo, catálogo no centralizado, inventario en hojas de cálculo, presupuestos manuales y visitas técnicas gestionadas sin una plataforma común. El proyecto plantea una transformación gradual:

| Área | Situación inicial | Propuesta |
| --- | --- | --- |
| Comunicación | Información fragmentada | Web corporativa y catálogo centralizado |
| Ventas | Consultas individuales | Solicitudes estructuradas de presupuesto |
| Almacén | Hojas de cálculo | ERP e inventario centralizado |
| Gestión comercial | Historial disperso | CRM y seguimiento de oportunidades |
| Servicio técnico | Incidencias por distintos canales | Sistema de tickets |
| Instalaciones | Agenda manual | Planificación digital y partes de trabajo |
| Infraestructura | Copias y permisos sin política unificada | Seguridad, copias y control de accesos |

**Alcance de esta entrega:** desarrollo del frontend de demostración. El ERP, CRM, backend, facturación y tickets constituyen propuestas de digitalización futuras; no están implementados.

## Diseño

La nueva dirección se inspira **principalmente en la narrativa inmersiva de Audio Modeling**: titulares a gran escala, imágenes de infraestructura, secciones editoriales, ritmo visual y transiciones contenidas. No reproduce su identidad ni sus recursos.

Colores: negro `#0b0e12`, grafito `#191f27`, blanco mineral `#f3f4f2`, verde de acento `#d9f27c`.

- **Inicio:** portada cinematográfica, visión, conectividad, infraestructura, servicios, familias de productos y CTA.
- **Hardware:** catálogo con 10 productos ilustrativos, búsqueda y filtros combinados.
- **Servicios:** redes, despliegue de equipos, soporte y mantenimiento.
- **Proyectos:** tres casos educativos señalizados como ficticios.
- **Nosotros:** identidad y plan de transformación digital.
- **Contacto:** formulario validado localmente que **no envía ni almacena datos**.

## Tecnología

- HTML semántico, `popover`/`popovertarget` para navegación móvil, `<dialog>`/`commandfor` para ayuda del catálogo, `<details name>` para preguntas frecuentes y validación HTML.
- CSS moderno sin preprocesadores: `@layer`, `@container`, `clamp()`, `:focus-visible`, `@starting-style`, animaciones progresivas con `animation-timeline` solo donde existe soporte, y `prefers-reduced-motion`.
- JavaScript nativo con módulos ES exclusivamente para el filtrado, el estado del catálogo y la validación demostrativa del formulario.
- Imágenes en WebP optimizadas; representación ilustrada del catálogo mediante SVG local.
- Sin frameworks, sin dependencias y sin compilación.

## Estructura

```text
netinfra-v2/
├── index.html
├── catalogo.html
├── servicios.html
├── proyectos.html
├── nosotros.html
├── contacto.html
├── README.md
├── DISENO.md
└── assets/
    ├── css/styles.css
    ├── js/catalogo.js
    ├── js/contacto.js
    └── img/ (WebP, SVG)
```

## Ejecución local

Descomprime el proyecto y abre una terminal en su carpeta:

```bash
python -m http.server 8000
```

Visita `http://localhost:8000`. Alternativamente, utiliza un servidor local en VS Code.

## Publicación en GitHub Pages

El sitio está preparado para publicarse como sitio estático. Copia **el contenido de esta carpeta** a la raíz del repositorio de GitHub Pages, conserva las rutas relativas y en Settings → Pages elige `Deploy from a branch`, `main`, `/(root)`.

No hace falta Node, npm, ni generar una carpeta `dist`.

## Uso de inteligencia artificial y recursos

- La dirección artística y la estructura fueron planificadas y revisadas de forma asistida.
- La imagen fotográfica de centro de datos (`datacenter-hero.webp`) se creó mediante generación de imágenes con IA para esta demostración. Las variantes `datacenter-detail.webp` y `datacenter-closeup.webp` se derivan de esa misma imagen.
- Los SVG del catálogo son ilustraciones genéricas, no fotografías ni fichas oficiales de fabricantes.
- Los textos comerciales, los servicios y los proyectos son simulaciones educativas; no se prometen prestaciones verificadas de una empresa real.

## Límites y comprobaciones pendientes

- El formulario no dispone de servidor: **nunca indica que se ha enviado un mensaje real**.
- No existen usuarios, pagos, existencias ni base de datos.
- Comprobar en navegadores reales navegación por teclado, contraste, lectores de pantalla, imágenes y compatibilidad de comandos declarativos recientes.
- Para uso comercial real harían falta backend, protección de datos y avisos legales, políticas de seguridad, gestión de cookies según su uso y contenido con datos reales.

Consulta [DISENO.md](DISENO.md) para la documentación del sistema visual y decisiones técnicas.
