# Guía del Asistente · CONAL 2026

Guía web del asistente para **CONAL 2026 – El Camino del Silletero · Medellín**
(ANEIAP · 21, 22 y 23 de noviembre de 2026).

HTML + CSS + JavaScript vanilla. Sin framework, sin paso de build.

---

## Ver la guía en tu computador

**Opción rápida:** doble clic en `index.html`. Funciona todo menos el aviso del
PDF (en modo archivo el navegador no puede comprobar si existe, así que intenta
abrirlo directamente).

**Opción recomendada** (igual que en GitHub Pages), desde esta carpeta:

```bash
python -m http.server 8000
```

y abre `http://localhost:8000`. Para detenerlo, `Ctrl + C`.

---

## Cambiar el contenido

Todo el texto vive en **`content.js`**. No necesitas tocar `app.js` ni `index.html`.

- Busca `[PLACEHOLDER]` para encontrar todos los datos temporales.
- En la página, ese prefijo no se ve: el texto aparece con un **subrayado punteado**.
- Cuando tengas el dato real, borra `[PLACEHOLDER] ` del inicio del texto y el
  subrayado desaparece solo.

```js
// antes
{ hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Registro', ... }
// después
{ hora: '8:00 a. m.', actividad: 'Registro y entrega de escarapelas', ... }
```

⚠️ En el checklist de equipaje, **no cambies los `id`**: son la llave con la que
se guarda el progreso en el navegador de cada asistente.

---

## Agregar imágenes y el PDF

Mientras un archivo no exista, se ve un recuadro de color con el nombre que la
guía espera. Suelta el archivo con **ese nombre exacto** dentro de `/assets/` y
aparece solo, sin tocar código.

La lista completa está en `assets/LEEME.txt`. En resumen:

| Carpeta | Archivos |
|---|---|
| `assets/logos/` | `logo-conal.png`, `logo-aneiap.png`, `sello-conal.png`, `favicon.png` |
| `assets/fotos/` | `hero.jpg`, `bienvenida.jpg`, `comunidad.jpg`, `cronograma.jpg`, `faq.jpg` |
| `assets/sedes/` | `sede-1.jpg`, `sede-2.jpg` |
| `assets/vestimenta/` | `dia-1.jpg`, `dia-2.jpg`, `dia-3.jpg` |
| `assets/comite/` | `contacto-1.jpg` … `contacto-6.jpg` |
| `assets/` | `guia-conal-2026.pdf` |

Los logos van en PNG o SVG **con fondo transparente**. Mientras no estén, se ve
un recuadro que dice `LOGO`.

**Playlist de Spotify:** en Spotify, `Compartir → Insertar playlist`, copia la
URL del `src` del iframe y pégala en `content.js` → `playlist.embedUrl`.

---

## Subir a GitHub y publicar con Pages

```bash
cd CONALMEDELLIN2026
git init
git add .
git commit -m "Guía del Asistente CONAL 2026"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Después, en GitHub:

1. Entra al repositorio → **Settings** → **Pages**.
2. En *Source*, elige **Deploy from a branch**.
3. Branch: **`main`** · Folder: **`/ (root)`** → **Save**.
4. En uno o dos minutos la guía queda en
   `https://TU-USUARIO.github.io/TU-REPO/`.

El archivo `.nojekyll` ya está incluido (evita que GitHub procese la carpeta con
Jekyll) y **todas las rutas son relativas**, así que funciona dentro de
`/nombre-del-repo/` sin cambiar nada.

> La carpeta `referencias/` está en `.gitignore`: son capturas de trabajo y no
> deben publicarse. Si quieres conservarlas en el repo, bórrala del `.gitignore`.

---

## Estructura

```
index.html      Estructura + sprite SVG (íconos, skyline, flores, nubes, ondas)
styles.css      Variables de marca en :root + componentes
app.js          Arma la página a partir de content.js
content.js      ← TODO el contenido editable
assets/         Logos, fotos y PDF
.nojekyll       Necesario para GitHub Pages
```

## Secciones

Inicio (con cuenta regresiva y acceso rápido) · Cronograma · Sedes · Planes ·
Transporte · Equipaje · Vestimenta · Emergencias · Multas · Contactos · FAQ.
