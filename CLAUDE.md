# CONAL 2026 · Guía del Asistente

Guía web del asistente para **CONAL 2026 – El Camino del Silletero · Medellín**, evento de ANEIAP.
Lema: **"Sembrando ideas, cosechando impacto"**.
Fechas: **21, 22 y 23 de noviembre de 2026** (zona horaria America/Bogota).
Idioma de la página: español de Colombia, trato de "tú".

## Qué es este proyecto
Una guía móvil del asistente (mobile-first), de una sola página con anclas, con la misma arquitectura de información que la referencia `https://guia-asistente-snc-baq-2026.vercel.app/` pero con la identidad visual de CONAL. De la referencia se copia la **estructura y los patrones de interacción**. No se copian sus colores, textos, imágenes ni identidad.

Todo el contenido vive en un solo archivo (`content.js`). Ya son datos reales: **cronograma**, **planes externos** y **logo** (Actualización 1). El resto (sedes, transporte, tarifas, contactos, etc.) sigue siendo placeholder.

**Flujo de trabajo:** el equipo irá actualizando la información por rondas y soltando imágenes nuevas en `/assets/`. Cuando aparezca un archivo nuevo, Claude lo revisa (qué contiene, tamaño, fondo) y lo integra en la página: ruta en `content.js`, ubicación, `alt` y proporción, y actualiza `assets/LEEME.txt`.

## Stack y reglas técnicas
- HTML + CSS + JavaScript vanilla. Sin framework y sin paso de build.
- Se publica en **GitHub Pages**. Usa SOLO rutas relativas (`./assets/...`), porque el sitio vive en `/nombre-del-repo/`.
- Incluye un archivo `.nojekyll` en la raíz.
- Todo el contenido editable vive en `content.js` como `window.CONTENT = {...}`. No uses `fetch` de JSON ni módulos ES, para que `index.html` también abra con doble clic.
- Cada texto temporal debe quedar marcado en `content.js` con el prefijo `[PLACEHOLDER]` o un comentario `// PLACEHOLDER`, para encontrarlos con una búsqueda.
- Fuentes desde Google Fonts. Íconos como SVG inline (no uses emojis como íconos principales).
- Accesibilidad: contraste suficiente, `alt` en imágenes, foco visible, respeta `prefers-reduced-motion`.
- Rendimiento: imágenes optimizadas y con `loading="lazy"`, y animaciones ligeras (transform/opacity).
- Probar siempre a 375 px de ancho primero, y luego en tablet y escritorio.

## Marca (derivada del perfil de Instagram @conalaneiap)
> Los HEX son **aproximados**, sacados de capturas. Cuando exista el logo en alta calidad en `/assets/`, muestrea los colores reales de ahí y actualiza las variables. Todo el color y la tipografía deben salir de variables CSS en `:root`, para cambiarlos en un solo lugar.

### Paleta
| Token | HEX aprox. | Uso |
|---|---|---|
| `--fucsia` | `#E6197F` | Color principal: fondos de bloques, botones, la "C" del logo |
| `--orquidea` | `#B5126F` | Fucsia oscuro: hover, sombras, detalles de la orquídea |
| `--morado-profundo` | `#3A0F6E` | Color de titulares y texto fuerte sobre fondo claro |
| `--morado` | `#6A2BB8` | Acento secundario, la "N" del logo, góndolas |
| `--amarillo` | `#FFC21A` | Acentos, subrayados de pincel, fondos de bloques (la "A") |
| `--azul` | `#2E64D9` | Acento (la "L"), enlaces |
| `--azul-aneiap` | `#1B5FB4` | Solo para el logo ANEIAP |
| `--naranja` | `#FF7A1A` | Acentos cálidos (ave del paraíso, "impacto") |
| `--verde` | `#3E9B3F` | Hojas, "Sembrando", estados OK |
| `--lima` | `#8CC63F` | Detalle del logo ANEIAP |
| `--cielo` | `#A8DDF7` | Fondos de bloques suaves |
| `--blanco` | `#FFFFFF` | Fondo base de la página |
| `--tinta` | `#1A1A1A` | Líneas del dibujo del skyline y texto de cuerpo |

Reglas de color:
- Fondo base blanco, con bloques de color fucsia, amarillo, morado y cielo para separar secciones.
- Los titulares van en `--morado-profundo`, con una palabra clave en script y en `--fucsia`.
- El amarillo NO va como texto sobre blanco (no hay contraste): úsalo para rellenos y subrayados.
- Las 4 letras del logo (fucsia, morado, amarillo, azul) pueden rotar como colores de las secciones o los días (Día 1 fucsia, Día 2 morado, Día 3 amarillo).

### Tipografía (aproximación en Google Fonts, confirmar con el equipo de diseño)
- **Display** (títulos grandes, redondeado y grueso, estilo letras del logo): `Baloo 2` peso 800.
- **Script** (palabra destacada tipo pincel, inclinada): `Kaushan Script`. Alternativa: `Caveat Brush`.
- **Cuerpo**: `Nunito` pesos 400/600/700.
Defínelas como `--font-display`, `--font-script` y `--font-body`.

### Formas y lenguaje visual
- Esquinas muy redondeadas (tarjetas 20–28 px, botones tipo píldora).
- **Ondas orgánicas** (swoosh) fucsia y amarillas en las esquinas superiores de las secciones.
- **Nubes** de solo contorno en azul cielo, sobre fondo blanco.
- **Garabatos tipo confeti** alrededor de los títulos: estrellitas de 4 puntas, gotas, óvalos de solo contorno, garabatos ondulados y rayitas, en fucsia, morado, amarillo, naranja y azul.
- **Subrayado de pincel** amarillo bajo los títulos.
- **Skyline de Medellín en línea negra** sobre blanco, estilo página para colorear: edificios, montañas, Metro elevado y Metrocable con góndolas moradas. Es el divisor/pie de las secciones principales.
- **Borde botánico** en la base: hojas verdes y flores saturadas (orquídea cattleya fucsia, girasol, ave del paraíso naranja y azul, agapanto azul-morado, boca de dragón).
- **Etiqueta blanca** redondeada arriba a la derecha con los logos ANEIAP y el sello CONAL.
- Si no hay assets reales, aproxima con SVG sencillos y deja un hueco claramente nombrado para reemplazarlos luego.

### Voz y tono
Festivo, cercano y juvenil, con humor y color paisa/antioqueño ("silletero", "Sembrando ideas, cosechando impacto"). Frases cortas, imperativos amables ("Toca cada elemento para marcarlo"). Sin tono corporativo frío. Las fotos graciosas (los monos capuchinos disfrazados del feed) sirven para FAQ, bienvenida y cierre, no para información crítica como Emergencias.

### Logos (ver `/assets/`)
- `logo-conal` (palabra CONAL con la orquídea en la "O") y `lema` ("Sembrando ideas, cosechando impacto").
- `logo-aneiap`.
- `sello-conal` (círculo con aro arcoíris: "CONAL · El camino del silletero · Medellín 2026").
- Usa SVG o PNG con fondo transparente. No recrees ni modifiques los logos: se usan tal cual. Mientras no estén, deja `<img>` con un recuadro temporal que diga "LOGO".

## Estructura del sitio (resumen; el detalle está en PROMPT_INICIAL.md)
Inicio · Cronograma · Sedes · Planes · Transporte · Equipaje · Vestimenta · Emergencias · Multas · Contactos · FAQ

## Estructura de carpetas
```
/index.html
/styles.css
/app.js
/content.js        <- todo el contenido editable (placeholders)
/assets/           <- logos, fotos, íconos
/referencias/      <- capturas del Instagram y de la guía de referencia (solo consulta, no se publica)
/.nojekyll
```

## Cómo trabajar
1. Lee este archivo y mira las imágenes en `/referencias/` antes de proponer nada.
2. Propón un plan corto y espera aprobación antes de escribir el código.
3. Construye primero la estructura completa con placeholders, y luego pule el diseño.
4. No inventes datos "reales" (precios, horarios, direcciones, teléfonos): todo lo que no se haya dado es placeholder visible.
5. Si algo de la marca es dudoso (tipografía exacta, un color), usa la aproximación y dilo al final en una lista corta.
