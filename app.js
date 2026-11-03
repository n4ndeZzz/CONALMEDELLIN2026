/* =============================================================================
   CONAL 2026 · Guía del Asistente — LÓGICA
   Lee window.CONTENT (content.js) y arma la página.
   No necesitas tocar este archivo para cambiar textos.
   ============================================================================= */
(function () {
  'use strict';

  var C = window.CONTENT;
  if (!C) { console.error('Falta content.js'); return; }

  var PH_TOKEN = '[PLACEHOLDER]';
  var LS_PACK = 'conal2026:equipaje';
  var LS_WELCOME = 'conal2026:bienvenida';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───────────────────────────── utilidades ───────────────────────────── */

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /** Texto plano, sin el prefijo [PLACEHOLDER] (para alt, title, aria-label). */
  function txt(s) {
    s = String(s == null ? '' : s);
    return s.indexOf(PH_TOKEN) === 0 ? s.slice(PH_TOKEN.length).trim() : s;
  }

  /**
   * Texto para pintar. Si viene marcado con [PLACEHOLDER], el prefijo se quita
   * y el texto queda con subrayado punteado para que se note que está pendiente.
   */
  function ph(s) {
    s = String(s == null ? '' : s);
    if (s.indexOf(PH_TOKEN) === 0) {
      return '<span class="ph" title="Dato pendiente de confirmar">' + esc(s.slice(PH_TOKEN.length).trim()) + '</span>';
    }
    return esc(s);
  }

  function icon(name, cls) {
    return '<svg class="' + (cls || 'ic') + '" aria-hidden="true"><use href="#ic-' + name + '"/></svg>';
  }

  /** '07:00' → { t: '7:00', suf: 'a. m.' }. '00:00' es medianoche (12:00 a. m.). */
  function hora12(hhmm) {
    var p = String(hhmm).split(':'), h = parseInt(p[0], 10);
    return { t: (h % 12 || 12) + ':' + p[1], suf: h < 12 ? 'a. m.' : 'p. m.' };
  }

  /**
   * Rango en formato colombiano de 12 h: '7:00 – 8:00 a. m.', '11:10 a. m. – 12:20 p. m.'.
   * Si ambas horas comparten a. m./p. m., el sufijo va una sola vez al final.
   * Usa espacios duros para que solo se parta la línea junto al guion.
   */
  function formatHora(inicio, fin) {
    var nb = function (s) { return s.replace(/ /g, ' '); };
    var a = hora12(inicio);
    if (!fin) return nb(a.t + ' ' + a.suf);
    var b = hora12(fin);
    return (a.suf === b.suf ? a.t : nb(a.t + ' ' + a.suf)) + ' – ' + nb(b.t + ' ' + b.suf);
  }

  /** Campo que puede venir como texto o como { texto, porConfirmar }. */
  function campo(v) {
    if (v == null || v === '') return null;
    return typeof v === 'object' ? { texto: v.texto, pc: !!v.porConfirmar } : { texto: String(v), pc: false };
  }

  /** Imagen de logo dentro de su recuadro; si el archivo falta, queda el recuadro "LOGO". */
  function ponerLogo(box, src, alt, w, h) {
    if (!box) return;
    var img = new Image();
    img.onload = function () { box.innerHTML = ''; box.appendChild(img); };
    img.alt = alt;
    if (w) { img.width = w; img.height = h; }
    img.decoding = 'async';
    img.src = src;
  }

  // Medidas reales de los archivos del logo (evitan saltos de layout).
  var LOGO_W = 1206, LOGO_H = 589, LEMA_W = 1206, LEMA_H = 328;

  /** Recuadro de imagen: si el archivo no existe, muestra su nombre. */
  function media(src, opts) {
    opts = opts || {};
    var file = String(src || '').replace(/^\.\//, '');
    return '<span class="media media--' + (opts.color || 'cielo') + '"' +
      (opts.ar ? ' style="--ar:' + opts.ar + '"' : '') +
      ' data-file="' + esc(file) + '">' +
      '<img src="' + esc(src) + '" alt="' + esc(opts.alt || '') + '" loading="' + (opts.eager ? 'eager' : 'lazy') + '" decoding="async">' +
      '</span>';
  }

  /** Conecta el fallback de las imágenes que no existan todavía. */
  function wireMedia(root) {
    $$('.media img', root).forEach(function (img) {
      var box = img.parentElement;
      var fail = function () { box.classList.add('is-missing'); };
      if (img.complete) { if (!img.naturalWidth) fail(); }
      img.addEventListener('error', fail);
      img.addEventListener('load', function () {
        if (img.naturalWidth) box.classList.remove('is-missing');
      });
    });
  }

  /** Hueco para las decoraciones del título; decorarTitulos() lo llena según el fondo de la sección. */
  function doodles() {
    return '<span class="doodles" aria-hidden="true"></span>';
  }

  // Colores de decoración que no se verían sobre cada fondo de sección.
  var DECO_CHOCA = {
    'sec--fucsia': ['fucsia', 'morado'],
    'sec--morado': ['morado'],
    'sec--amarillo': ['amarillo']
  };

  // Dónde va cada forma alrededor del título (y su ancho en px).
  var DECO_SLOTS = [
    { forma: 'gotas-izq', css: 'left:1%;top:-6px',   w: 40 },
    { forma: 'gotas-der', css: 'right:1%;top:-4px',  w: 34 },
    { forma: 'estrella',  css: 'left:9%;top:58px',   w: 26 },
    { forma: 'abanico',   css: 'right:9%;top:52px',  w: 38 },
    { forma: 'gota',      css: 'left:15%;top:6px',   w: 10 },
    { forma: 'estrella',  css: 'right:3%;top:96px',  w: 20 }
  ];

  /**
   * Pone las decoraciones del logo (content.js → meta.decoraciones) alrededor de
   * cada título. Rota las variantes de sección en sección y evita las que
   * chocan con el color de fondo.
   */
  function decorarTitulos() {
    var decos = C.meta.decoraciones || [];
    if (!decos.length) return;
    $$('.sec').forEach(function (sec, i) {
      var box = $('.sec-head .doodles', sec);
      if (!box) return;
      var choca = [];
      Object.keys(DECO_CHOCA).forEach(function (k) { if (sec.classList.contains(k)) choca = DECO_CHOCA[k]; });
      var usadas = {};
      box.innerHTML = DECO_SLOTS.map(function (s, j) {
        var ops = decos.filter(function (d) { return d.forma === s.forma && choca.indexOf(d.color) < 0 && !usadas[d.archivo]; });
        if (!ops.length) return '';
        var d = ops[(i + j) % ops.length];
        usadas[d.archivo] = 1;
        return '<img class="doodle" src="' + esc(d.archivo) + '" alt="" loading="lazy" decoding="async" style="' + s.css + ';width:' + s.w + 'px">';
      }).join('');
    });
  }

  /** Encabezado de sección: eyebrow + título con palabra script + subtítulo. */
  function head(d, opts) {
    opts = opts || {};
    var title = d.titulo
      ? '<span class="brush">' + ph(d.titulo) + '</span>'
      : ph(d.tituloLinea1) + ' <span class="script brush">' + ph(d.tituloScript) + '</span>';
    return '<div class="sec-head reveal">' +
      (opts.sinDoodles ? '' : doodles()) +
      (d.eyebrow ? '<span class="sec-head__eyebrow">' + ph(d.eyebrow) + '</span>' : '') +
      '<h2>' + title + '</h2>' +
      (d.subtitulo ? '<p class="sec-head__sub">' + ph(d.subtitulo) + '</p>' : '') +
      '</div>';
  }

  function waLink() {
    return 'https://wa.me/' + txt(C.meta.whatsapp).replace(/\D/g, '') +
      '?text=' + encodeURIComponent(txt(C.meta.whatsappMensaje));
  }

  var COLORS = ['fucsia', 'morado', 'amarillo', 'azul', 'naranja', 'verde'];

  /* ───────────────────────────── avisos ───────────────────────────── */

  var toastEl = $('[data-toast]');
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 5200);
  }

  /* ───────────────────────────── PDF ───────────────────────────── */

  function descargarPdf() {
    var url = C.meta.pdf;
    var abrir = function () {
      var a = document.createElement('a');
      a.href = url;
      a.download = C.meta.pdfNombre || '';
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    if (location.protocol === 'file:') { abrir(); return; }
    fetch(url, { method: 'HEAD', cache: 'no-store' })
      .then(function (r) { r.ok ? abrir() : toast(C.ui.pdfNoDisponible); })
      .catch(function () { toast(C.ui.pdfNoDisponible); });
  }

  /* ═══════════════════════════ CABECERA Y NAVEGACIÓN ═══════════════════════ */

  function renderNav() {
    var links = C.nav.map(function (n) {
      return '<li><a href="#' + n.id + '" data-navlink="' + n.id + '">' + esc(n.label) + '</a></li>';
    }).join('');
    $('[data-nav-desktop]').innerHTML = links;

    $('[data-nav-panel]').innerHTML = C.nav.map(function (n) {
      return '<li><a href="#' + n.id + '" data-menu-close>' + icon(n.icono) + esc(n.label) + '</a></li>';
    }).join('');
    $('.panel__title').textContent = C.ui.secciones;

    // marca + lema
    $('.brand__lema').textContent = C.meta.lema;
    ponerLogo($('[data-logo]'), C.meta.logo, C.meta.logoAlt, LOGO_W, LOGO_H);

    // barra inferior
    $('[data-tabbar]').innerHTML =
      '<a href="#inicio" data-navlink="inicio">' + icon('home') + '<span>Inicio</span></a>' +
      '<a href="#cronograma" data-navlink="cronograma">' + icon('calendar') + '<span>Cronograma</span></a>' +
      '<a href="#sedes" data-navlink="sedes">' + icon('pin') + '<span>Sedes</span></a>' +
      '<a href="#emergencias" class="tabbar__sos" data-navlink="emergencias">' + icon('sos') + '<span>' + esc(C.ui.sos) + '</span></a>' +
      '<button type="button" data-menu-open>' + icon('menu') + '<span>' + esc(C.ui.menu) + '</span></button>';
  }

  function setupMenu() {
    var panel = $('#panel');
    var abrir = function () {
      panel.hidden = false;
      document.body.style.overflow = 'hidden';
      $$('[data-menu-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
      var first = $('.panel__list a', panel);
      if (first) first.focus();
    };
    var cerrar = function () {
      panel.hidden = true;
      document.body.style.overflow = '';
      $$('[data-menu-open]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    };
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-menu-open]')) { abrir(); }
      else if (e.target.closest('[data-menu-close]')) { cerrar(); }
      else if (e.target.closest('[data-pdf]')) { descargarPdf(); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) cerrar();
    });
  }

  /* ═══════════════════════════ 1 · INICIO ═══════════════════════════ */

  function renderHero() {
    var h = C.hero, m = C.meta;
    $('[data-hero-bg]').innerHTML = media(h.foto, { ar: 'auto', color: 'morado', eager: true, alt: '' });

    $('[data-hero]').innerHTML =
      '<div class="hero__marca">' +
        '<div class="hero__logo ph-logo" data-hero-logo></div>' +
        '<div class="hero__lemaimg" data-hero-lema><p class="hero__lema">' + esc(m.lema) + '</p></div>' +
      '</div>' +
      '<p class="hero__fechas">' + esc(m.fechas) + '</p>' +
      '<div class="cd" data-cd>' +
        '<p class="cd__label">' + esc(h.cuentaRegresivaTitulo) + '</p>' +
        '<div class="cd__grid">' +
          ['dias', 'horas', 'minutos', 'segundos'].map(function (k) {
            return '<div class="cd__item"><span class="cd__n" data-cd-' + k + '>--</span><span class="cd__l">' + esc(C.ui[k]) + '</span></div>';
          }).join('') +
        '</div>' +
        (h.cuentaRegresivaNota ? '<p class="cd__nota">' + esc(h.cuentaRegresivaNota) + '</p>' : '') +
      '</div>' +
      '<p class="hero__eyebrow">' + ph(h.eyebrow) + '</p>' +
      '<h1 class="hero__title">' + ph(h.tituloLinea1) + '<span class="script">' + ph(h.tituloScript) + '</span></h1>' +
      '<p class="hero__sub">' + ph(h.subtitulo) + '</p>' +
      '<div class="hero__btns">' +
        '<a class="btn btn--amarillo btn--lg" href="#acceso">' + esc(h.botonPrimario) + icon('arrow') + '</a>' +
        '<button class="btn btn--ghost btn--lg" type="button" data-pdf>' + esc(h.botonSecundario) + icon('download') + '</button>' +
      '</div>' +
      '<a class="scrolldown" href="#acceso">' + esc(h.desliza) + icon('arrow-down') + '</a>';

    ponerLogo($('[data-hero-logo]'), C.meta.logo, C.meta.logoAlt, LOGO_W, LOGO_H);
    // El lema en imagen reemplaza al texto solo si el archivo existe.
    if (m.lemaImg) ponerLogo($('[data-hero-lema]'), m.lemaImg, m.lema, LEMA_W, LEMA_H);

    countdown();
  }

  function countdown() {
    var destino = new Date(C.meta.inicio).getTime();
    var box = $('[data-cd]');
    if (!box || isNaN(destino)) return;

    var n = {
      dias: $('[data-cd-dias]'), horas: $('[data-cd-horas]'),
      minutos: $('[data-cd-minutos]'), segundos: $('[data-cd-segundos]')
    };
    var pad = function (v) { return v < 10 ? '0' + v : String(v); };

    function tick() {
      var d = destino - Date.now();
      if (d <= 0) {
        box.innerHTML = '<p class="cd--fin">' + esc(C.hero.cuentaRegresivaFin) + '</p>';
        clearInterval(timer);
        return;
      }
      var s = Math.floor(d / 1000);
      n.dias.textContent = Math.floor(s / 86400);
      n.horas.textContent = pad(Math.floor(s % 86400 / 3600));
      n.minutos.textContent = pad(Math.floor(s % 3600 / 60));
      n.segundos.textContent = pad(s % 60);
    }
    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ═══════════════════════════ ACCESO RÁPIDO ═══════════════════════════ */

  function renderAcceso() {
    var a = C.accesoRapido;
    var mods = C.nav.filter(function (n) { return n.id !== 'inicio'; });

    var grid = '<div class="modgrid">' + mods.map(function (n, i) {
      var c = COLORS[i % COLORS.length];
      var fg = c === 'amarillo' ? ';color:var(--morado-profundo)' : '';
      return '<a class="mod reveal" href="#' + n.id + '">' +
        '<span class="mod__ico" style="--c:var(--' + c + ')' + fg + '">' + icon(n.icono) + '</span>' +
        '<span>' + esc(n.label) + '</span></a>';
    }).join('') + '</div>';

    var dias = '<div class="daycards">' + a.dias.map(function (d, i) {
      var c = ['fucsia', 'morado', 'amarillo'][i] || 'fucsia';
      return '<a class="daycard reveal" href="#cronograma" data-goday="' + esc(d.dia) + '" style="--c:var(--' + c + ')">' +
        '<span class="daycard__top"><span class="daycard__tag">' + esc(d.etiqueta) + '</span>' +
        '<span class="daycard__fecha">' + ph(d.fecha) + '</span></span>' +
        '<span class="daycard__sede">' + ph(d.titulo) + '</span>' +
        '<span class="daycard__tipo">' + ph(d.descripcion) + '</span></a>';
    }).join('') + '</div>';

    var foto = '<div class="bigphoto reveal">' +
      media(a.cierre.foto, { color: 'fucsia', alt: txt(a.cierre.frase) }) +
      '<p class="bigphoto__frase">' + ph(a.cierre.frase) + '</p></div>';

    $('[data-head="accesoRapido"]').innerHTML = head(a);
    $('[data-render="accesoRapido"]').innerHTML = grid + dias + foto;
  }

  /* ═══════════════════════════ 2 · CRONOGRAMA ═══════════════════════════ */

  function renderCronograma() {
    var cr = C.cronograma;

    var tabs = '<div class="tabs" role="tablist" aria-label="Días del evento">' + cr.dias.map(function (d, i) {
      return '<button class="tab" type="button" role="tab" id="tab-' + d.id + '" data-c="' + d.color + '"' +
        ' aria-controls="panel-' + d.id + '" aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '"' +
        ' style="--c:var(--' + d.color + ')">' + esc(d.tab) + '</button>';
    }).join('') + '</div>';

    var panels = cr.dias.map(function (d, i) {
      var items = d.items.map(function (it) {
        var peso = TIPO_PESO[it.tipo] || 'medio';
        return '<li class="tl tl--' + peso + '" data-tipo="' + esc(it.tipo) + '"' +
          ' data-ini="' + esc(d.fechaISO + 'T' + it.inicio) + '" data-fin="' + esc(it.fin) + '">' +
          '<span class="tl__hora">' + esc(formatHora(it.inicio, it.fin)) + '</span>' +
          '<span class="tl__ico">' + icon(TIPO_ICONO[it.tipo] || 'calendar') + '</span>' +
          '<div class="tl__body">' +
            '<p class="tl__act">' + ph(it.actividad) + '</p>' +
            (it.detalle ? '<p class="tl__det">' + ph(it.detalle) + '</p>' : '') +
          '</div></li>';
      }).join('');

      return '<div class="tabpanel" id="panel-' + d.id + '" role="tabpanel" aria-labelledby="tab-' + d.id + '"' +
        (i === 0 ? '' : ' hidden') + ' style="--c:var(--' + d.color + ')">' +
        '<div class="daybar" data-c="' + d.color + '" style="--c:var(--' + d.color + ')">' +
          '<span class="daybar__fecha">' + ph(d.fecha) + '</span>' +
          '<span class="daybar__titulo">' + esc(d.tab) + ' · ' + ph(d.nombre) + '</span>' +
          '<span class="daybar__desc">' + ph(d.descripcion) + '</span>' +
        '</div>' +
        '<ol class="tline">' + items + '</ol></div>';
    }).join('');

    var leyenda = '<ul class="tl-ley" aria-label="Tipos de actividad">' + Object.keys(cr.tipos).map(function (k) {
      return '<li class="tl-ley__item tl-ley__item--' + (TIPO_PESO[k] || 'medio') + '">' +
        icon(TIPO_ICONO[k] || 'calendar') + esc(cr.tipos[k]) + '</li>';
    }).join('') + '</ul>';

    $('[data-head="cronograma"]').innerHTML = head(cr);
    $('[data-render="cronograma"]').innerHTML =
      '<div class="crono__foto reveal">' + media(cr.foto, { color: 'azul', alt: 'Cronograma CONAL 2026' }) + '</div>' +
      tabs + '<div class="reveal">' + leyenda + panels + '</div>';
  }

  // Ícono y peso visual de cada tipo de actividad del cronograma.
  var TIPO_ICONO = {
    acreditacion: 'badge', academico: 'bulb', ceremonia: 'star', comida: 'food',
    mercadeo: 'megaphone', traslado: 'bus', logistica: 'bed', integracion: 'party'
  };
  var TIPO_PESO = {
    academico: 'fuerte', ceremonia: 'fuerte', acreditacion: 'liviano'
  };

  /**
   * "Ahora" y "Sigue": solo durante los días del evento (hora de Colombia).
   * Fuera de esas fechas no marca nada.
   */
  function setupAhora() {
    var cr = C.cronograma;
    var filas = $$('#cronograma .tl');
    if (!filas.length) return;

    var t = filas.map(function (li) {
      var ini = Date.parse(li.dataset.ini + ':00-05:00');
      var fin = Date.parse(li.dataset.ini.slice(0, 11) + li.dataset.fin + ':00-05:00');
      if (fin <= ini) fin += 86400000;   // termina a medianoche
      return { li: li, ini: ini, fin: fin };
    });
    var dias = cr.dias.map(function (d) { return d.fechaISO; });

    function hoyBogota() {
      return new Date(Date.now() - 5 * 3600000).toISOString().slice(0, 10);
    }

    function marcar() {
      $$('.tl__badge').forEach(function (b) { b.remove(); });
      filas.forEach(function (li) { li.classList.remove('is-ahora', 'is-sigue'); });
      var hoy = hoyBogota();
      if (dias.indexOf(hoy) < 0) return false;

      var ahora = Date.now(), actual = null, sigue = null;
      t.forEach(function (x) {
        if (x.ini <= ahora && ahora < x.fin) actual = x;
        else if (x.ini > ahora && !sigue) sigue = x;
      });
      [[actual, 'is-ahora', cr.etiquetaAhora], [sigue, 'is-sigue', cr.etiquetaSigue]].forEach(function (m) {
        if (!m[0]) return;
        m[0].li.classList.add(m[1]);
        $('.tl__body', m[0].li).insertAdjacentHTML('afterbegin', '<span class="tl__badge">' + esc(m[2]) + '</span>');
      });
      return true;
    }

    if (marcar()) {
      // Durante el evento, abre la pestaña del día de hoy.
      var bar = $('#cronograma .tabs');
      var i = dias.indexOf(hoyBogota());
      if (bar && bar._activar && i >= 0) bar._activar(i);
    }
    setInterval(marcar, 60000);
  }

  /* ═══════════════════════════ 3 · SEDES ═══════════════════════════ */

  function renderSedes() {
    var s = C.sedes;
    var cards = '<div class="venues">' + s.lista.map(function (v) {
      return '<article class="venue reveal" style="--c:var(--' + v.color + ')">' +
        '<div class="venue__media">' +
          '<span class="venue__tag" data-c="' + v.color + '" style="--c:var(--' + v.color + ')">' + esc(v.etiqueta) + '</span>' +
          media(v.foto, { ar: '16/10', color: v.color, alt: txt(v.nombre) }) +
        '</div>' +
        '<div class="venue__body">' +
          '<h3 class="venue__nombre">' + ph(v.nombre) + '</h3>' +
          '<p class="venue__desc">' + ph(v.descripcion) + '</p>' +
          '<p class="venue__dato">' + icon('pin') + '<span><strong>Dirección</strong>' + ph(v.direccion) + '</span></p>' +
          '<p class="venue__dato">' + icon('bus') + '<span><strong>Cómo llegar</strong>' + ph(v.comoLlegar) + '</span></p>' +
          '<a class="btn btn--sm" style="--bg:var(--' + v.color + ')' + (v.color === 'amarillo' ? ';--fg:var(--morado-profundo)' : ';--fg:#fff') + '"' +
            ' href="' + esc(v.mapa) + '" target="_blank" rel="noopener">' + icon('map') + esc(s.botonMapa) + '</a>' +
        '</div></article>';
    }).join('') + '</div>';

    var aviso = '<div class="note reveal">' +
      '<span class="note__ico">' + icon('bus') + '</span>' +
      '<div><h4>' + ph(s.aviso.titulo) + '</h4><p>' + ph(s.aviso.texto) + '</p></div></div>';

    $('[data-head="sedes"]').innerHTML = head(s);
    $('[data-render="sedes"]').innerHTML = cards + aviso;
  }

  /* ═══════════════════════════ 4 · PLANES ═══════════════════════════ */

  function renderPlanes() {
    var p = C.planes;
    var tagPC = '<span class="pc">' + esc(p.etiquetaPorConfirmar) + '</span>';

    /** Texto de un campo + etiqueta ámbar si está por confirmar. */
    function valorTxt(v) {
      var f = campo(v);
      if (!f) return '';
      if (f.pc && /^por confirmar$/i.test(f.texto)) return tagPC;
      return ph(f.texto) + (f.pc ? ' ' + tagPC : '');
    }

    function chips(it) {
      return '<div class="pchips">' +
        '<span class="pchip">' + icon('clock') + esc(it.cuando) + '</span>' +
        '<span class="pchip pchip--valor' + (it.gratis ? ' pchip--gratis' : '') + '">' + icon('ticket') +
          '<span>' + valorTxt(it.valor) + '</span></span>' +
        (it.cupos ? '<span class="pchip">' + icon('users') + esc(p.etiquetaCupos) + ': ' + esc(it.cupos) + '</span>' : '') +
      '</div>';
    }

    function detalles(it, excluir) {
      return Object.keys(p.campos).filter(function (k) {
        return campo(it[k]) && (!excluir || excluir.indexOf(k) < 0);
      }).map(function (k) {
        return '<div class="pdet"><dt>' + esc(p.campos[k]) + '</dt><dd>' + valorTxt(it[k]) + '</dd></div>';
      }).join('');
    }

    function accion(it, cls) {
      if (it.inscripcion) {
        return '<a class="btn ' + (cls || '') + '" href="' + esc(it.inscripcion) + '" target="_blank" rel="noopener noreferrer">' +
          esc(p.botonInscripcion) + icon('arrow') + '<span class="sr"> (abre en una pestaña nueva)</span></a>';
      }
      return '<a class="btn ' + (cls || '') + '" href="#planes-reservas">' +
        esc(it.botonSinInscripcion || p.reservas.titulo) + icon('arrow-down') + '</a>';
    }

    // Banner del plan destacado (pre-evento): todo visible, sin desplegable.
    var dest = p.lista.filter(function (it) { return it.destacado; })[0];
    var banner = dest ? '<article class="banner reveal" id="plan-' + esc(dest.id) + '" data-fecha="' + esc(dest.fecha) + '">' +
      '<span class="banner__tag">' + esc(p.etiquetaDestacado) + ' · ' + esc(dest.fechaLarga) + '</span>' +
      '<h3>' + ph(dest.nombre) + '</h3>' +
      '<p>' + ph(dest.descripcion) + '</p>' +
      chips(dest) +
      '<dl class="pdets pdets--banner">' + detalles(dest) + '</dl>' +
      accion(dest) + '</article>' : '';

    var resumen = '<div class="presumen reveal"><h3 class="presumen__t">' + esc(p.resumenTitulo) + '</h3><ol>' +
      p.lista.map(function (it) {
        return '<li data-fecha="' + esc(it.fecha) + '"><a class="presumen__fila" href="#plan-' + esc(it.id) + '" data-plan-ir="' + esc(it.id) + '">' +
          '<span class="presumen__fecha">' + esc(it.fechaCorta) + '</span>' +
          '<span class="presumen__nombre">' + ph(it.nombre) + '</span>' +
          '<span class="presumen__hora">' + esc(it.hora) + '</span>' +
          '<span class="presumen__valor' + (it.gratis ? ' is-gratis' : '') + '">' + valorTxt(it.valorCorto || it.valor) + '</span>' +
        '</a></li>';
      }).join('') + '</ol></div>';

    var filtros = '<div class="pfiltros" role="group" aria-label="Filtrar planes por fecha">' + p.filtros.map(function (f, i) {
      return '<button class="pfiltro" type="button" data-filtro="' + esc(f.fecha) + '" aria-pressed="' + (i === 0) + '">' + esc(f.label) + '</button>';
    }).join('') + '</div>';

    var cards = '<div class="plans">' + p.lista.filter(function (it) { return !it.destacado; }).map(function (it, j) {
      var c = ['fucsia', 'morado', 'azul', 'orquidea'][j % 4];
      var idDet = 'plan-det-' + it.id;
      return '<article class="plan" id="plan-' + esc(it.id) + '" data-fecha="' + esc(it.fecha) + '" style="--c:var(--' + c + ')">' +
        '<span class="plan__fecha">' + esc(it.fechaLarga) + '</span>' +
        '<h4>' + ph(it.nombre) + '</h4>' +
        chips(it) +
        '<p class="plan__desc">' + ph(it.descripcion) + '</p>' +
        '<div class="plan__det" id="' + idDet + '"><div><dl class="pdets">' + detalles(it) + '</dl></div></div>' +
        '<div class="plan__pie">' +
          '<button class="plan__mas" type="button" aria-expanded="false" aria-controls="' + idDet + '"' +
            ' data-mas="' + esc(p.botonDetalles) + '" data-menos="' + esc(p.botonOcultar) + '">' +
            '<span>' + esc(p.botonDetalles) + '</span>' + icon('chevron') + '</button>' +
          accion(it, 'btn--sm') +
        '</div></article>';
    }).join('') + '</div>';

    var cond = '<div class="acc pcond reveal"><div class="acc__item">' +
      '<button class="acc__q" type="button" aria-expanded="false" aria-controls="planes-cond">' +
        '<span>' + esc(p.condiciones.titulo) + '</span><span class="acc__sign">' + icon('chevron') + '</span></button>' +
      '<div class="acc__a" id="planes-cond"><div><ul class="pcond__list">' + p.condiciones.items.map(function (x) {
        return '<li>' + icon('check') + '<span>' + ph(x) + '</span></li>';
      }).join('') + '</ul></div></div></div></div>';

    var reservas = '<div class="preservas reveal" id="planes-reservas"><h3>' + esc(p.reservas.titulo) + '</h3><ul>' +
      p.reservas.items.map(function (r) {
        var ext = /^https?:/.test(r.enlace) ? ' target="_blank" rel="noopener noreferrer"' : '';
        return '<li><a class="preserva" href="' + esc(r.enlace) + '"' + ext + '>' +
          '<span class="preserva__ico">' + icon(r.icono) + '</span>' +
          '<span class="preserva__txt"><span class="preserva__et">' + esc(r.etiqueta) + '</span>' +
          (r.nombre ? '<span class="preserva__nombre">' + esc(r.nombre) + '</span>' : '') +
          '<span class="preserva__val">' + esc(r.valor) + '</span></span></a></li>';
      }).join('') + '</ul></div>';

    $('[data-head="planes"]').innerHTML = head(p);
    $('[data-render="planes"]').innerHTML = filtros + resumen + banner + '<div class="reveal">' + cards + '</div>' +
      cond + reservas + '<p class="nota-pie">' + ph(p.nota) + '</p>';

    var root = $('#planes');

    // Filtros por fecha
    var botones = $$('[data-filtro]', root);
    function filtrar(fecha) {
      botones.forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.filtro === fecha ? 'true' : 'false'); });
      $$('[data-fecha]', root).forEach(function (el) { el.hidden = !!fecha && el.dataset.fecha !== fecha; });
    }
    botones.forEach(function (b) { b.addEventListener('click', function () { filtrar(b.dataset.filtro); }); });

    // Resumen → tarjeta (si el filtro la esconde, vuelve a "Todos")
    $$('[data-plan-ir]', root).forEach(function (a) {
      a.addEventListener('click', function (e) {
        var card = document.getElementById('plan-' + a.dataset.planIr);
        if (!card) return;
        e.preventDefault();
        if (card.hidden) filtrar('');
        card.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
        card.classList.remove('is-flash');
        void card.offsetWidth;
        card.classList.add('is-flash');
      });
    });

    // Ver detalles
    $$('.plan__mas', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var abierto = b.getAttribute('aria-expanded') === 'true';
        b.setAttribute('aria-expanded', abierto ? 'false' : 'true');
        $('span', b).textContent = abierto ? b.dataset.mas : b.dataset.menos;
        b.closest('.plan').classList.toggle('is-open', !abierto);
      });
    });
  }

  /* ═══════════════════════════ 5 · TRANSPORTE ═══════════════════════════ */

  function renderTransporte() {
    var t = C.transporte;

    var cards = '<div class="tcards">' + t.tarjetas.map(function (c, i) {
      var col = ['fucsia', 'morado', 'azul'][i % 3];
      return '<article class="tcard reveal" style="--c:var(--' + col + ')">' +
        '<span class="tcard__ico">' + icon(c.icono) + '</span>' +
        '<h4>' + esc(c.titulo) + '</h4>' +
        '<p class="tcard__valor">' + ph(c.valor) + '</p>' +
        '<p class="tcard__det">' + ph(c.detalle) + '</p></article>';
    }).join('') + '</div>';

    var tips = '<ul class="tips reveal">' + t.recomendaciones.map(function (r) {
      return '<li class="tip"><span class="tip__ck">' + icon('check') + '</span><p>' + ph(r) + '</p></li>';
    }).join('') + '</ul>';

    var f = t.tarifas;
    var tabla = '<div class="fares reveal">' +
      '<div class="fares__top"><h4>' + ph(f.titulo) + '</h4></div>' +
      '<div class="fares__wrap"><table>' +
        '<thead><tr>' + f.columnas.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead>' +
        '<tbody>' + f.filas.map(function (r) {
          return '<tr><th scope="row" style="background:none;text-transform:none;letter-spacing:0;font-size:14.5px">' + ph(r.medio) + '</th>' +
            '<td>' + ph(r.lunSab) + '</td><td>' + ph(r.domFest) + '</td></tr>';
        }).join('') + '</tbody>' +
      '</table></div>' +
      '<p class="fares__nota">' + ph(f.nota) + '</p></div>';

    $('[data-head="transporte"]').innerHTML = head(t);
    $('[data-render="transporte"]').innerHTML = cards + tips + tabla;
  }

  /* ═══════════════════════════ 6 · EQUIPAJE ═══════════════════════════ */

  function leerPack() {
    try { return JSON.parse(localStorage.getItem(LS_PACK) || '{}'); }
    catch (e) { return {}; }
  }
  function guardarPack(st) {
    try { localStorage.setItem(LS_PACK, JSON.stringify(st)); } catch (e) {}
  }

  function renderEquipaje() {
    var q = C.equipaje;
    var total = q.grupos.reduce(function (n, g) { return n + g.items.length; }, 0);

    var barra = '<div class="progress reveal">' +
      '<span class="progress__txt"><span data-pack-n>0</span> ' + esc(q.progresoTexto) + ' ' + total + '</span>' +
      '<span class="progress__track"><span class="progress__bar" data-pack-bar></span></span>' +
      '<button class="iconbtn" type="button" data-pack-reset title="' + esc(q.botonReiniciar) + '">' +
        icon('refresh') + '<span class="sr">' + esc(q.botonReiniciar) + '</span></button></div>';

    var grupos = '<div class="packgroups">' + q.grupos.map(function (g) {
      return '<section class="packgroup reveal" style="--c:var(--' + g.color + ')">' +
        '<h4>' + esc(g.titulo) + '</h4>' +
        g.items.map(function (it) {
          return '<button class="checkitem" type="button" data-pack="' + esc(it.id) + '" aria-pressed="false">' +
            '<span class="checkitem__box">' + icon('check') + '</span>' +
            '<span class="checkitem__txt">' + ph(it.texto) + '</span></button>';
        }).join('') +
        '</section>';
    }).join('') + '</div>';

    $('[data-head="equipaje"]').innerHTML = head(q);
    $('[data-render="equipaje"]').innerHTML = barra + grupos + '<p class="pack-done" data-pack-done hidden>' + esc(q.completoTexto) + '</p>';

    var estado = leerPack();
    var botones = $$('[data-pack]');

    function pintar() {
      var n = 0;
      botones.forEach(function (b) {
        var on = !!estado[b.dataset.pack];
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        if (on) n++;
      });
      $('[data-pack-n]').textContent = n;
      $('[data-pack-bar]').style.width = (total ? (n / total * 100) : 0) + '%';
      $('[data-pack-done]').hidden = !(total && n === total);
    }

    botones.forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.dataset.pack;
        estado[k] ? delete estado[k] : (estado[k] = 1);
        guardarPack(estado);
        pintar();
      });
    });

    $('[data-pack-reset]').addEventListener('click', function () {
      estado = {};
      guardarPack(estado);
      pintar();
    });

    pintar();
  }

  /* ═══════════════════════════ 7 · VESTIMENTA ═══════════════════════════ */

  function renderVestimenta() {
    var v = C.vestimenta;

    var tabs = '<div class="tabs" role="tablist" aria-label="Código de vestimenta por día">' + v.dias.map(function (d, i) {
      return '<button class="tab" type="button" role="tab" id="tab-' + d.id + '" aria-controls="panel-' + d.id + '"' +
        ' aria-selected="' + (i === 0) + '" tabindex="' + (i === 0 ? 0 : -1) + '" data-c="' + d.color + '" style="--c:var(--' + d.color + ')">' +
        esc(d.tab) + '</button>';
    }).join('') + '</div>';

    var panels = v.dias.map(function (d, i) {
      var lista = function (arr, tipo) {
        return '<div class="dolist dolist--' + tipo + '">' +
          '<h5>' + icon(tipo === 'si' ? 'check' : 'close') + (tipo === 'si' ? esc(v.tituloSi) : esc(v.tituloNo)) + '</h5>' +
          '<ul>' + arr.map(function (x) {
            return '<li>' + icon(tipo === 'si' ? 'check' : 'close') + '<span>' + ph(x) + '</span></li>';
          }).join('') + '</ul></div>';
      };
      return '<div class="tabpanel" id="panel-' + d.id + '" role="tabpanel" aria-labelledby="tab-' + d.id + '"' +
        (i === 0 ? '' : ' hidden') + ' style="--c:var(--' + d.color + ')">' +
        '<div class="dress">' +
          '<div class="dress__media">' + media(d.foto, { ar: '4/5', color: d.color, alt: txt(d.titulo) }) + '</div>' +
          '<div class="dress__body">' +
            '<span class="dress__kind" data-c="' + d.color + '" style="--c:var(--' + d.color + ')">' + ph(d.titulo) + '</span>' +
            '<h3>' + esc(d.tab) + '</h3>' +
            '<p class="dress__desc">' + ph(d.descripcion) + '</p>' +
            '<div class="dolists">' + lista(d.si, 'si') + lista(d.no, 'no') + '</div>' +
          '</div>' +
        '</div></div>';
    }).join('');

    $('[data-head="vestimenta"]').innerHTML = head(v);
    $('[data-render="vestimenta"]').innerHTML = tabs + '<div class="reveal">' + panels + '</div>';
  }

  /* ═══════════════════════════ 8 · EMERGENCIAS ═══════════════════════════ */

  function renderEmergencias() {
    var e = C.emergencias;

    var pasos = '<ol class="steps">' + e.pasos.map(function (p) {
      return '<li class="step reveal"><span class="step__n">' + p.n + '</span>' +
        '<div><h4>' + ph(p.titulo) + '</h4><p>' + ph(p.texto) + '</p></div></li>';
    }).join('') + '</ol>';

    var cards = '<div class="emcards">' + e.contactos.map(function (c) {
      var col = c.tipo === 'salud' ? 'naranja' : (c.tipo === 'clinica' ? 'azul' : 'rojo');
      var accion = c.mapa
        ? '<a class="btn btn--sm" style="--bg:var(--azul);--fg:#fff" href="' + esc(c.mapa) + '" target="_blank" rel="noopener">' + icon('map') + esc(c.boton) + '</a>'
        : '<a class="btn btn--sm" style="--bg:var(--' + col + ');--fg:#fff" href="tel:' + esc(txt(c.tel)) + '">' + icon('phone') + esc(c.boton) + '</a>';
      return '<article class="emcard reveal" style="--c:var(--' + col + ')">' +
        '<h4>' + ph(c.titulo) + '</h4>' +
        '<p class="emcard__tel">' + ph(c.telefono) + '</p>' +
        '<p>' + ph(c.detalle) + '</p>' + accion + '</article>';
    }).join('') + '</div>';

    var tel = txt((e.contactos[0] || {}).tel || C.meta.whatsapp);
    var sos = '<div class="sosbox reveal" id="sos">' +
      '<h4>' + ph(e.sos.titulo) + '</h4><p>' + ph(e.sos.texto) + '</p>' +
      '<a class="btn btn--lg" href="tel:' + esc(tel) + '">' + icon('phone') + esc(e.sos.boton) + '</a></div>';

    $('[data-head="emergencias"]').innerHTML = head(e, { sinDoodles: true });
    $('[data-render="emergencias"]').innerHTML = pasos + cards + sos;
  }

  /* ═══════════════════════════ 9 · MULTAS ═══════════════════════════ */

  function renderMultas() {
    var m = C.multas;
    var lista = '<ul class="fines">' + m.lista.map(function (f, i) {
      return '<li class="fine reveal"><span class="fine__n">' + (i + 1) + '</span>' +
        '<span class="fine__txt">' + ph(f.concepto) + '</span>' +
        '<span class="fine__val">' + ph(f.valor) + '</span></li>';
    }).join('') + '</ul>';

    var nota = '<div class="finenote reveal"><h4>' + icon('alert') + ph(m.nota.titulo) + '</h4><p>' + ph(m.nota.texto) + '</p></div>';

    $('[data-head="multas"]').innerHTML = head(m);
    $('[data-render="multas"]').innerHTML = lista + nota;
  }

  /* ═══════════════════════════ 10 · CONTACTOS ═══════════════════════════ */

  function renderContactos() {
    var c = C.contactos;
    var gente = '<div class="people">' + c.lista.map(function (p) {
      return '<article class="person reveal" style="--c:var(--' + p.color + ')">' +
        '<div class="person__foto">' + media(p.foto, { ar: '1', color: p.color, alt: txt(p.nombre) }) + '</div>' +
        '<div class="person__info">' +
          '<span class="person__nombre">' + ph(p.nombre) + '</span>' +
          '<span class="person__rol">' + ph(p.rol) + '</span>' +
          '<a class="person__tel" href="tel:' + esc(txt(p.tel)) + '">' + icon('phone') + ph(p.telefono) + '</a>' +
        '</div>' +
        '<a class="person__call" href="tel:' + esc(txt(p.tel)) + '" aria-label="Llamar a ' + esc(txt(p.nombre)) + '">' + icon('phone') + '</a>' +
        '</article>';
    }).join('') + '</div>';

    var wa = '<div class="waband reveal">' +
      '<h4>' + ph(c.whatsapp.titulo) + '</h4><p>' + ph(c.whatsapp.texto) + '</p>' +
      '<a class="btn btn--lg" href="' + esc(waLink()) + '" target="_blank" rel="noopener">' + icon('whatsapp') + esc(c.whatsapp.boton) + '</a></div>';

    $('[data-head="contactos"]').innerHTML = head(c);
    $('[data-render="contactos"]').innerHTML = gente + wa;
  }

  /* ═══════════════════════════ 11 · FAQ ═══════════════════════════ */

  function renderFaq() {
    var f = C.faq;
    var acc = '<div class="acc">' + f.items.map(function (it, i) {
      return '<div class="acc__item">' +
        '<button class="acc__q" type="button" aria-expanded="false" aria-controls="faq-' + i + '">' +
          '<span>' + ph(it.p) + '</span><span class="acc__sign">' + icon('chevron') + '</span></button>' +
        '<div class="acc__a" id="faq-' + i + '"><div><p>' + ph(it.r) + '</p></div></div></div>';
    }).join('') + '</div>';

    $('[data-head="faq"]').innerHTML = head(f);
    $('[data-render="faq"]').innerHTML = '<div class="faq">' +
      '<div class="faq__foto reveal">' + media(f.foto, { ar: '4/3', color: 'fucsia', alt: 'Preguntas frecuentes' }) + '</div>' +
      '<div class="reveal">' + acc + '</div></div>';
  }

  /** Acordeones (FAQ y condiciones de los planes). */
  function setupAcordeones() {
    $$('.acc__q').forEach(function (q) {
      q.addEventListener('click', function () {
        var abierto = q.getAttribute('aria-expanded') === 'true';
        q.setAttribute('aria-expanded', abierto ? 'false' : 'true');
        q.closest('.acc__item').classList.toggle('is-open', !abierto);
      });
    });
  }

  /* ═══════════════════════════ CIERRE Y PIE ═══════════════════════════ */

  function renderCierre() {
    var c = C.cierre, b = c.botones;
    $('[data-render="cierre"]').innerHTML =
      '<h2 class="reveal">' + ph(c.tituloLinea1) + '<em>' + esc(c.tituloDestacado) + '</em></h2>' +
      '<p class="reveal">' + ph(c.texto1) + '<br>' + ph(c.texto2) + '</p>' +
      '<div class="cierre__btns reveal">' +
        '<button class="btn btn--amarillo" type="button" data-pdf>' + icon('download') + esc(b.pdf) + '</button>' +
        '<a class="btn btn--verde" href="' + esc(waLink()) + '" target="_blank" rel="noopener">' + icon('whatsapp') + esc(b.whatsapp) + '</a>' +
        '<a class="btn btn--ghost" href="#contactos">' + icon('phone') + esc(b.contactos) + '</a>' +
        '<a class="btn btn--ghost" href="#sedes">' + icon('pin') + esc(b.sedes) + '</a>' +
      '</div>';

    var p = C.footer;
    $('.pie').innerHTML = '<div class="pie__in">' +
      '<div class="pie__logos"><span class="ph-logo" data-pie-logo></span><span class="ph-logo" data-pie-aneiap></span></div>' +
      '<span class="pie__nombre">' + esc(p.nombre) + '</span>' +
      '<span class="pie__lema">' + esc(p.lema) + '</span>' +
      '<p>' + ph(p.texto) + '</p>' +
      '<a class="pie__ig" href="' + esc(p.instagram) + '" target="_blank" rel="noopener">' + icon('instagram') + esc(p.instagramLabel) + '</a>' +
      '<p class="pie__credito">' + esc(p.credito) + '</p></div>';

    ponerLogo($('[data-pie-logo]'), C.meta.logo, C.meta.logoAlt, LOGO_W, LOGO_H);
    ponerLogo($('[data-pie-aneiap]'), C.meta.logoAneiap, 'ANEIAP');
  }

  /* ═══════════════════════════ PLAYLIST ═══════════════════════════ */

  function renderPlaylist() {
    var p = C.playlist;
    if (!p) return;
    var dock = $('[data-dock]');
    $('[data-dock-title]').textContent = txt(p.titulo);
    $('[data-dock-body]').innerHTML = p.embedUrl
      ? '<iframe src="' + esc(p.embedUrl) + '" title="' + esc(txt(p.titulo)) + '" allow="encrypted-media; clipboard-write; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      : '<p class="dock__vacio">' + ph(p.vacio) + '</p>';
    dock.hidden = false;

    var btn = $('[data-dock-toggle]'), body = $('[data-dock-body]');
    btn.addEventListener('click', function () {
      var abierto = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', abierto ? 'false' : 'true');
      body.hidden = abierto;
      dock.classList.toggle('is-open', !abierto);
    });
  }

  /* ═══════════════════════════ BIENVENIDA ═══════════════════════════ */

  function renderBienvenida() {
    var vista;
    try { vista = localStorage.getItem(LS_WELCOME); } catch (e) { vista = '1'; }
    if (vista) return;

    var b = C.bienvenida, modal = $('[data-welcome]');
    $('[data-welcome-card]').innerHTML =
      '<button class="iconbtn modal__close" type="button" data-welcome-close>' + icon('close') + '<span class="sr">' + esc(C.ui.cerrar) + '</span></button>' +
      '<div class="modal__media">' + media(b.foto, { ar: '16/9', color: 'fucsia', alt: '', eager: true }) + '</div>' +
      '<div class="modal__body">' +
        '<p class="modal__saludo">' + esc(b.saludo) + '</p>' +
        '<h3 id="w-t">' + ph(b.titulo) + '</h3>' +
        '<p>' + ph(b.texto) + '</p>' +
        '<button class="btn btn--fucsia btn--block btn--lg" type="button" data-welcome-close>' + esc(b.boton) + icon('arrow') + '</button>' +
      '</div>';

    wireMedia(modal);
    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    var cerrar = function () {
      modal.hidden = true;
      document.body.style.overflow = '';
      try { localStorage.setItem(LS_WELCOME, '1'); } catch (e) {}
    };
    $$('[data-welcome-close]', modal).forEach(function (b2) { b2.addEventListener('click', cerrar); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) cerrar(); });
    setTimeout(function () { var f = $('.btn', modal); if (f) f.focus(); }, 120);
  }

  /* ═══════════════════════════ PESTAÑAS ═══════════════════════════ */

  function setupTabs() {
    $$('.tabs').forEach(function (bar) {
      var tabs = $$('.tab', bar);
      function activar(i, foco) {
        tabs.forEach(function (t, j) {
          var on = i === j;
          t.setAttribute('aria-selected', on ? 'true' : 'false');
          t.tabIndex = on ? 0 : -1;
          var panel = document.getElementById(t.getAttribute('aria-controls'));
          if (panel) panel.hidden = !on;
        });
        if (foco) tabs[i].focus();
      }
      tabs.forEach(function (t, i) {
        t.addEventListener('click', function () { activar(i); });
        t.addEventListener('keydown', function (e) {
          var i2 = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 :
                   e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : -1;
          if (i2 < 0 && e.key !== 'Home') return;
          e.preventDefault();
          activar((i2 + tabs.length) % tabs.length, true);
        });
      });
      bar._activar = activar;
      bar._tabs = tabs;
    });

    // Las tarjetas D1/D2/D3 abren su día en el cronograma
    $$('[data-goday]').forEach(function (a) {
      a.addEventListener('click', function () {
        var bar = $('#cronograma .tabs');
        if (!bar) return;
        var i = bar._tabs.findIndex(function (t) { return t.id === 'tab-' + a.dataset.goday; });
        if (i >= 0) bar._activar(i);
      });
    });
  }

  /* ═══════════════════════════ SCROLL ═══════════════════════════ */

  function setupScroll() {
    var links = $$('[data-navlink]');
    var secciones = C.nav.map(function (n) { return document.getElementById(n.id); }).filter(Boolean);

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (l) {
            l.setAttribute('aria-current', l.dataset.navlink === en.target.id ? 'true' : 'false');
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      secciones.forEach(function (s) { io.observe(s); });

      // aparición suave
      var ioR = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); ioR.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
      $$('.reveal').forEach(function (el) { ioR.observe(el); });
    } else {
      $$('.reveal').forEach(function (el) { el.classList.add('is-in'); });
    }

    // barra de progreso + parallax del skyline
    var barra = $('[data-progress]');
    var sky = $('[data-parallax]');
    var tic = false;
    function onScroll() {
      if (tic) return;
      tic = true;
      requestAnimationFrame(function () {
        var max = document.documentElement.scrollHeight - window.innerHeight;
        barra.style.setProperty('--p', (max > 0 ? (window.scrollY / max * 100) : 0).toFixed(2) + '%');
        if (sky && !reduce && window.scrollY < window.innerHeight * 1.2) {
          sky.style.transform = 'translateY(' + (window.scrollY * 0.22).toFixed(1) + 'px)';
        }
        tic = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ═══════════════════════════ ARRANQUE ═══════════════════════════ */

  function init() {
    renderNav();
    renderHero();
    renderAcceso();
    renderCronograma();
    renderSedes();
    renderPlanes();
    renderTransporte();
    renderEquipaje();
    renderVestimenta();
    renderEmergencias();
    renderMultas();
    renderContactos();
    renderFaq();
    renderCierre();
    renderPlaylist();
    decorarTitulos();

    wireMedia(document);
    setupMenu();
    setupTabs();
    setupAcordeones();
    setupAhora();
    setupScroll();
    renderBienvenida();

    document.title = 'Guía del Asistente · ' + C.meta.evento + ' ' + C.meta.ciudad;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
