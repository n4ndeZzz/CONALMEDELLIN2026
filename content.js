/* =============================================================================
   CONAL 2026 · Guía del Asistente — CONTENIDO EDITABLE
   =============================================================================

   Este es el ÚNICO archivo que necesitas tocar para cambiar los textos.

   ── CÓMO FUNCIONAN LOS PLACEHOLDERS ──────────────────────────────────────────
   Todo lo que todavía no es un dato oficial lleva el prefijo "[PLACEHOLDER]".

     • Para encontrarlos todos:  busca  [PLACEHOLDER]  en este archivo.
     • En la página, el prefijo NO se ve: el texto aparece con un subrayado
       punteado para que se note que está pendiente.
     • Cuando tengas el dato real, borra "[PLACEHOLDER] " del inicio y listo:
       el subrayado desaparece solo.

   ── IMÁGENES ────────────────────────────────────────────────────────────────
   Las rutas apuntan a archivos dentro de /assets/ que todavía no existen.
   Mientras no estén, se ve un recuadro de color con el nombre del archivo
   esperado. Suelta el archivo con ese nombre exacto y aparece solo.

   ============================================================================= */

window.CONTENT = {

  /* ─────────────────────────────────────────────────────────────────────────
     META · datos generales del evento
     ───────────────────────────────────────────────────────────────────────── */
  meta: {
    evento: 'CONAL 2026',
    subtitulo: 'El Camino del Silletero',
    ciudad: 'Medellín',
    lema: 'Sembrando ideas, cosechando impacto',
    fechas: '21 · 22 · 23 de noviembre de 2026',

    // Fecha y hora de inicio para la cuenta regresiva (zona horaria de Colombia, -05:00).
    // Es la apertura de la acreditación del Día 1.
    inicio: '2026-11-21T07:00:00-05:00',

    // Archivo del PDF. Si no existe, el botón muestra un aviso amable.
    pdf: './assets/guia-conal-2026.pdf',
    pdfNombre: 'Guia-CONAL-2026.pdf',

    // [PLACEHOLDER] número del comité organizador (formato internacional, sin signos).
    whatsapp: '573000000000',
    whatsappMensaje: 'Hola, comité CONAL 2026. Tengo una pregunta sobre el evento.',

    logo: './assets/logos/logo-conal.jpeg',
    logoAlt: 'CONAL 2026 · El camino del silletero · Medellín',
    // Imagen del lema "Sembrando ideas, cosechando impacto" (va debajo del logo en el inicio).
    lemaImg: './assets/logos/texto-conal.jpeg',
    logoAneiap: './assets/logos/logo-aneiap.png',

    /* Decoraciones del logo (PNG transparentes) que adornan los títulos de sección.
       "forma" decide dónde se ubican; "color" sirve para no ponerlas sobre un fondo
       del mismo color (ej. las moradas no van en la sección morada). */
    decoraciones: [
      { archivo: './assets/logos/deco-01-gotas-verdes-izq.png',  forma: 'gotas-izq', color: 'verde' },
      { archivo: './assets/logos/deco-07-gotas-verdes-der.png',  forma: 'gotas-der', color: 'verde' },
      { archivo: './assets/logos/deco-02-estrella-rosa.png',     forma: 'estrella',  color: 'fucsia' },
      { archivo: './assets/logos/deco-08-estrella-amarilla.png', forma: 'estrella',  color: 'amarillo' },
      { archivo: './assets/logos/deco-09-estrella-morada.png',   forma: 'estrella',  color: 'morado' },
      { archivo: './assets/logos/deco-04-abanico-morado.png',    forma: 'abanico',   color: 'morado' },
      { archivo: './assets/logos/deco-05-abanico-naranja.png',   forma: 'abanico',   color: 'naranja' },
      { archivo: './assets/logos/deco-03-gota-morada-arriba.png',forma: 'gota',      color: 'morado' },
      { archivo: './assets/logos/deco-06-gota-rosa.png',         forma: 'gota',      color: 'fucsia' }
    ],
    sello: './assets/logos/sello-conal.png'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     NAVEGACIÓN · el orden aquí es el orden del menú
     ───────────────────────────────────────────────────────────────────────── */
  nav: [
    { id: 'inicio',       label: 'Inicio',      icono: 'home' },
    { id: 'cronograma',   label: 'Cronograma',  icono: 'calendar' },
    { id: 'sedes',        label: 'Sedes',       icono: 'pin' },
    { id: 'planes',       label: 'Planes',      icono: 'compass' },
    { id: 'transporte',   label: 'Transporte',  icono: 'bus' },
    { id: 'equipaje',     label: 'Equipaje',    icono: 'suitcase' },
    { id: 'vestimenta',   label: 'Vestimenta',  icono: 'shirt' },
    { id: 'emergencias',  label: 'Emergencias', icono: 'alert' },
    { id: 'multas',       label: 'Multas',      icono: 'ticket' },
    { id: 'contactos',    label: 'Contactos',   icono: 'phone' },
    { id: 'faq',          label: 'FAQ',         icono: 'help' }
  ],

  /* ─────────────────────────────────────────────────────────────────────────
     MODAL DE BIENVENIDA · solo la primera vez que se abre la guía
     ───────────────────────────────────────────────────────────────────────── */
  bienvenida: {
    saludo: '¡Bienvenido/a!',
    titulo: 'Esta es tu guía del CONAL',
    texto: 'Aquí está todo lo que necesitas para vivir el CONAL 2026 en Medellín: cronograma, sedes, qué empacar y a quién llamar. Guárdala en tu pantalla de inicio y consúltala cuando quieras.',
    boton: 'Entrar a la guía',
    foto: './assets/fotos/bienvenida.jpg'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     1 · INICIO (hero)
     ───────────────────────────────────────────────────────────────────────── */
  hero: {
    foto: './assets/fotos/hero.jpg',
    eyebrow: '¡Es hora de vivir el CONAL!',
    tituloLinea1: 'Guía del',
    tituloScript: 'Asistente',       // esta palabra va en tipografía script
    subtitulo: 'Todo lo que necesitas para vivir la mejor experiencia en Medellín.',
    botonPrimario: 'Comenzar la experiencia',
    botonSecundario: 'Descargar PDF',
    desliza: 'Desliza',
    cuentaRegresivaTitulo: 'Faltan',
    cuentaRegresivaNota: 'Para la apertura de la acreditación · sábado 21 de noviembre, 7:00 a. m.',
    cuentaRegresivaFin: '¡Llegó el día! Nos vemos en Medellín.'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     ACCESO RÁPIDO · rejilla de módulos + tarjetas de día
     ───────────────────────────────────────────────────────────────────────── */
  accesoRapido: {
    eyebrow: 'Navega rápido',
    tituloLinea1: 'Acceso',
    tituloScript: 'rápido',
    subtitulo: 'Toca cualquier módulo para ir directo a la información.',

    // Las tarjetas de día enlazan a su pestaña en el Cronograma.
    dias: [
      {
        etiqueta: 'D1',
        dia: 'dia-1',
        titulo: 'Día 1 · Saber',
        fecha: 'Sáb 21 nov',
        descripcion: 'Contenido académico, ODS y responsabilidad social y ambiental.'
      },
      {
        etiqueta: 'D2',
        dia: 'dia-2',
        titulo: 'Día 2 · Ser',
        fecha: 'Dom 22 nov',
        descripcion: 'Desarrollo personal del asociado y capacitación interna.'
      },
      {
        etiqueta: 'D3',
        dia: 'dia-3',
        titulo: 'Día 3 · Hacer',
        fecha: 'Lun 23 nov',
        descripcion: 'Integración de los asistentes.'
      }
    ],

    cierre: {
      foto: './assets/fotos/comunidad.jpg',
      frase: 'Más que un evento: una comunidad que se siembra en Medellín.'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     2 · CRONOGRAMA
     ───────────────────────────────────────────────────────────────────────── */
  cronograma: {
    eyebrow: 'Tres días',
    tituloLinea1: 'El',
    tituloScript: 'cronograma',
    subtitulo: 'Horarios sujetos a ajustes del comité organizador.',
    foto: './assets/fotos/cronograma.jpg',

    // Nombre y orden de los tipos de actividad (para la leyenda).
    // tipo: acreditacion · academico · ceremonia · comida · mercadeo · traslado · logistica · integracion
    tipos: {
      academico:    'Académico',
      ceremonia:    'Ceremonia',
      comida:       'Comida',
      integracion:  'Integración',
      traslado:     'Traslado',
      logistica:    'Logística',
      mercadeo:     'Mercadeo',
      acreditacion: 'Acreditación'
    },
    etiquetaAhora: 'Ahora',
    etiquetaSigue: 'Sigue',

    // Horas en formato 24 h ('HH:MM'). La página las muestra en 12 h.
    // Una fila que termina en '00:00' termina a medianoche de ese mismo día.
    // "detalle" es opcional: aparece como línea secundaria debajo de la actividad.
    dias: [
      {
        id: 'dia-1',
        tab: 'Día 1',
        color: 'fucsia',
        nombre: 'Saber',
        fecha: 'Sábado 21 de noviembre de 2026',
        fechaISO: '2026-11-21',
        descripcion: 'Contenido académico, ODS y responsabilidad social y ambiental.',
        items: [
          { inicio: '07:00', fin: '08:00', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '08:00', fin: '08:30', actividad: 'Palabras de bienvenida', tipo: 'ceremonia' },
          { inicio: '08:30', fin: '09:00', actividad: 'Acto de apertura cultural', tipo: 'ceremonia' },
          { inicio: '09:00', fin: '10:10', actividad: 'Taller 1 - Data sprint: Decisiones que transforman', tipo: 'academico' },
          { inicio: '10:10', fin: '10:40', actividad: 'Refrigerio 1', tipo: 'comida' },
          { inicio: '10:40', fin: '11:10', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '11:10', fin: '12:20', actividad: 'Simulación inmersiva 1 - ¿Qué harías si fueras el gerente?', tipo: 'academico' },
          { inicio: '12:20', fin: '13:50', actividad: 'Almuerzo 1 - Libre', tipo: 'comida' },
          { inicio: '13:50', fin: '14:20', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '14:20', fin: '14:50', actividad: 'Espacio para mercadeo', tipo: 'mercadeo' },
          { inicio: '14:50', fin: '16:20', actividad: 'Panel 1 - Ingeniería para transformar territorios', tipo: 'academico' },
          { inicio: '16:20', fin: '17:10', actividad: 'Espacio para mercadeo', tipo: 'mercadeo' },
          { inicio: '17:10', fin: '17:40', actividad: 'Acomodación en transporte y Refrigerio 2', tipo: 'traslado' },
          { inicio: '17:40', fin: '19:30', actividad: 'Traslado al hotel', tipo: 'traslado', detalle: 'Trayecto aproximado de 1 h 30 min a 2 h. Lugar por confirmar.' },
          { inicio: '19:30', fin: '20:00', actividad: 'Acomodación en habitaciones', tipo: 'logistica' },
          { inicio: '20:00', fin: '21:00', actividad: 'Cena 1', tipo: 'comida' },
          { inicio: '21:00', fin: '22:00', actividad: 'Preparación para la integración', tipo: 'integracion' },
          { inicio: '22:00', fin: '00:00', actividad: 'Integración nocturna', tipo: 'integracion' }
        ]
      },
      {
        id: 'dia-2',
        tab: 'Día 2',
        color: 'morado',
        nombre: 'Ser',
        fecha: 'Domingo 22 de noviembre de 2026',
        fechaISO: '2026-11-22',
        descripcion: 'Desarrollo personal del asociado y capacitación interna.',
        items: [
          { inicio: '07:00', fin: '09:00', actividad: 'Desayuno 1', tipo: 'comida' },
          { inicio: '09:00', fin: '09:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '09:30', fin: '10:30', actividad: 'Workshop 1 - El reto de explicar lo complejo', tipo: 'academico' },
          { inicio: '10:30', fin: '11:00', actividad: 'Refrigerio 3', tipo: 'comida' },
          { inicio: '11:00', fin: '11:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '11:30', fin: '13:00', actividad: 'Espacio JDN-IN-GNP', tipo: 'academico' },
          { inicio: '13:00', fin: '14:00', actividad: 'Almuerzo 2', tipo: 'comida' },
          { inicio: '14:00', fin: '14:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '14:30', fin: '16:00', actividad: 'Taller 2 - Alto rendimiento sin agotamiento', tipo: 'academico' },
          { inicio: '16:00', fin: '17:00', actividad: 'Conversatorio 1 - El talento que liderará la industria 4.0', tipo: 'academico' },
          { inicio: '17:00', fin: '17:30', actividad: 'Refrigerio 4', tipo: 'comida' },
          { inicio: '17:30', fin: '19:30', actividad: 'Preparación para la gala', tipo: 'integracion' },
          { inicio: '19:30', fin: '20:00', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '20:00', fin: '21:00', actividad: 'Cena 2', tipo: 'comida' },
          { inicio: '21:00', fin: '23:00', actividad: 'Gala y cumpleaños de ANEIAP', tipo: 'ceremonia' },
          { inicio: '23:00', fin: '00:00', actividad: 'Integración nocturna', tipo: 'integracion' }
        ]
      },
      {
        id: 'dia-3',
        tab: 'Día 3',
        color: 'amarillo',
        nombre: 'Hacer',
        fecha: 'Lunes 23 de noviembre de 2026',
        fechaISO: '2026-11-23',
        descripcion: 'Integración de los asistentes.',
        items: [
          { inicio: '07:00', fin: '09:00', actividad: 'Desayuno 2', tipo: 'comida' },
          { inicio: '09:00', fin: '09:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '09:30', fin: '12:00', actividad: 'FRAN', tipo: 'integracion' },
          { inicio: '12:00', fin: '13:00', actividad: 'Almuerzo 3', tipo: 'comida' },
          { inicio: '13:00', fin: '15:00', actividad: 'Refrigerio 5 y tiempo libre', tipo: 'comida' },
          { inicio: '15:00', fin: '16:00', actividad: 'Entrega de habitaciones (check out)', tipo: 'logistica' },
          { inicio: '16:00', fin: '16:30', actividad: 'Acreditación', tipo: 'acreditacion' },
          { inicio: '16:30', fin: '17:30', actividad: 'Zorro', tipo: 'integracion' },
          { inicio: '17:30', fin: '18:00', actividad: 'Acomodación en transporte', tipo: 'traslado' },
          { inicio: '18:00', fin: '20:00', actividad: 'Traslado a Medellín y fin del evento', tipo: 'traslado' }
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     3 · SEDES
     ───────────────────────────────────────────────────────────────────────── */
  sedes: {
    eyebrow: 'Dónde nos vemos',
    tituloLinea1: 'Las',
    tituloScript: 'sedes',
    subtitulo: 'Guarda las direcciones antes de salir: en algunos puntos la señal es débil.',

    lista: [
      {
        etiqueta: 'DÍA 1',
        color: 'fucsia',
        nombre: '[PLACEHOLDER] Sede principal · Medellín',
        descripcion: '[PLACEHOLDER] Aquí ocurren el registro, el acto de apertura y la jornada académica del primer día.',
        comoLlegar: '[PLACEHOLDER] Estación de Metro más cercana por confirmar. También llegan rutas de bus y servicios de transporte por aplicación.',
        direccion: '[PLACEHOLDER] Dirección por confirmar · Medellín',
        foto: './assets/sedes/sede-1.jpg',
        mapa: 'https://www.google.com/maps/search/?api=1&query=Medellin'
      },
      {
        etiqueta: 'DÍAS 2 Y 3',
        color: 'morado',
        nombre: '[PLACEHOLDER] Finca / Sede campestre',
        descripcion: '[PLACEHOLDER] Sede del segundo y tercer día: ponencias, integración, alimentación y alojamiento.',
        comoLlegar: '[PLACEHOLDER] El traslado se hace únicamente en el transporte oficial del evento. Revisa la sección de Transporte.',
        direccion: '[PLACEHOLDER] Vía por confirmar · Área metropolitana',
        foto: './assets/sedes/sede-2.jpg',
        mapa: 'https://www.google.com/maps/search/?api=1&query=Medellin'
      }
    ],

    aviso: {
      titulo: 'Transporte oficial entre sedes',
      texto: 'El traslado entre sedes lo cubre la organización en los horarios publicados. Si te vas por tu cuenta, avísale a tu coordinación: el bus no espera y el cupo no se reserva.'
    },

    botonMapa: 'Abrir en Google Maps'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     4 · PLANES EXTERNOS
     ───────────────────────────────────────────────────────────────────────── */
  planes: {
    eyebrow: 'Antes y después',
    tituloLinea1: 'Planes',
    tituloScript: 'externos',
    subtitulo: 'Además de la agenda académica del 21 al 23 de noviembre, el comité organiza planes opcionales antes y después del evento para que los asistentes conozcan Medellín y Antioquia. Estos planes no están incluidos en el cupo de inscripción y tienen cupos limitados.',

    // Chips de filtro. "fecha" debe coincidir con la "fecha" de cada plan.
    filtros: [
      { fecha: '',           label: 'Todos' },
      { fecha: '2026-11-18', label: 'Mié 18 nov' },
      { fecha: '2026-11-19', label: 'Jue 19 nov' },
      { fecha: '2026-11-20', label: 'Vie 20 nov' },
      { fecha: '2026-11-24', label: 'Mar 24 nov' }
    ],

    resumenTitulo: 'Resumen rápido',
    botonInscripcion: 'Inscríbete',
    botonDetalles: 'Ver detalles',
    botonOcultar: 'Ocultar detalles',
    etiquetaPorConfirmar: 'Por confirmar',
    etiquetaCupos: 'Cupos',
    etiquetaDestacado: 'Pre-evento',

    // Nombre visible de cada campo de detalle, en el orden en que se muestran.
    campos: {
      lugar: 'Lugar',
      comoLlegar: 'Cómo llegar',
      horario: 'Horario',
      duracion: 'Duración aprox.',
      incluye: 'Qué incluye',
      puntoEncuentro: 'Punto de encuentro',
      recomendaciones: 'Recomendaciones'
    },

    /* Los 7 planes, en orden cronológico.
       • Un campo que el plan no trae simplemente se omite (no se muestra).
       • Un dato pendiente se escribe como { texto: '...', porConfirmar: true }
         y la página le pone la etiqueta ámbar "Por confirmar".
       • "gratis: true" pinta el valor con el chip verde.
       • "destacado: true" lo muestra en el banner grande de la sección.
       • Sin "inscripcion": en vez de "Inscríbete" sale "Reservas e información". */
    lista: [
      {
        id: 'parque-explora',
        fecha: '2026-11-18',
        fechaCorta: 'Mié 18 nov',
        fechaLarga: 'Miércoles 18 de noviembre',
        nombre: 'Parque Explora',
        cuando: 'Mañana · 9:00 a. m.',
        hora: '9:00 a. m.',
        descripcion: 'Museo interactivo de ciencia y tecnología con salas de experimentación, el acuario de agua dulce más grande de Suramérica y el vivario. Un plan ideal para ingenieros curiosos.',
        valor: '$50.000 por persona',
        valorCorto: '$50.000',
        cupos: 'Ilimitados',
        lugar: 'Carrera 52 # 73-75, Medellín (frente a la estación Universidad del Metro)',
        duracion: '3 a 4 horas',
        puntoEncuentro: 'Estación Universidad del Metro',
        recomendaciones: 'Ropa cómoda, documento de identidad y carné estudiantil.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfrkjOkNAiaOkTb9vTUusjpnBYJ5w2D40PESvQTq2sFwZlaUQ/viewform'
      },
      {
        id: 'museo-el-castillo',
        fecha: '2026-11-18',
        fechaCorta: 'Mié 18 nov',
        fechaLarga: 'Miércoles 18 de noviembre',
        nombre: 'Museo El Castillo',
        cuando: 'Tarde · 1:00 p. m.',
        hora: '1:00 p. m.',
        descripcion: 'Castillo de estilo gótico de 1930 en El Poblado, con colecciones de arte decorativo europeo y jardines de inspiración francesa. Uno de los espacios patrimoniales más fotogénicos de la ciudad.',
        valor: '$27.000 por persona',
        valorCorto: '$27.000',
        cupos: '25',
        lugar: 'Calle 9 Sur # 32-269, El Poblado, Medellín',
        duracion: '2 horas (recorrido guiado y jardines)',
        puntoEncuentro: 'Estación Aguacatala del Metro',
        recomendaciones: 'Llegar 15 minutos antes del recorrido. Lleva algo de efectivo para el transporte. Traer carné estudiantil.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfPRqkwAYCwrehZhS_2I6pPXvnQkx2L0KyamRlQFvW81dpSng/viewform'
      },
      {
        id: 'tour-comuna-13',
        fecha: '2026-11-19',
        fechaCorta: 'Jue 19 nov',
        fechaLarga: 'Jueves 19 de noviembre',
        nombre: 'Tour Comuna 13',
        cuando: 'Mañana · 10:00 a. m.',
        hora: '10:00 a. m.',
        descripcion: 'Recorrido guiado por la Comuna 13, símbolo de transformación social de Medellín: grafitis, escaleras eléctricas al aire libre, hip hop y relatos de la comunidad.',
        valor: 'Gratis (se sugiere propina voluntaria para el guía local)',
        valorCorto: 'Gratis',
        gratis: true,
        cupos: 'Ilimitados',
        comoLlegar: 'Metro línea B hasta la estación San Javier',
        duracion: '2 a 3 horas',
        puntoEncuentro: 'Estación San Antonio del Metro',
        recomendaciones: 'Tenis cómodos (hay muchas escaleras), bloqueador, agua y efectivo para comprar algo a los emprendedores locales. No te separes del grupo.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSdygX2XQKuw-htT8151z9cEdzRRclVuh2M77V5-QonNKFuAAw/viewform'
      },
      {
        id: 'picnic-parques-del-rio',
        fecha: '2026-11-19',
        fechaCorta: 'Jue 19 nov',
        fechaLarga: 'Jueves 19 de noviembre',
        nombre: 'Picnic en Parques del Río',
        cuando: 'Tarde · 4:00 p. m.',
        hora: '4:00 p. m.',
        descripcion: 'Tarde de integración al aire libre en Parques del Río, el corredor verde a orillas del río Medellín. Un espacio para conocer a asistentes de otros capítulos antes del evento.',
        valor: '$10.000 por persona',
        valorCorto: '$10.000',
        // El documento del comité no indica cupos para este plan.
        lugar: 'Parques del Río, Medellín (cerca de la estación Industriales del Metro)',
        duracion: '2 a 3 horas',
        incluye: 'Snacks dulces, salados y bebidas',
        puntoEncuentro: 'Parques del Río',
        recomendaciones: 'Chaqueta ligera y sombrilla: en noviembre suele llover en la tarde.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfEbA1vim943ipLDo25JEQfmDmfhy-ZvdEfjq9xOu4YHm6V2Q/viewform'
      },
      {
        id: 'planchon-guatape',
        fecha: '2026-11-20',
        fechaCorta: 'Vie 20 nov',
        fechaLarga: 'Viernes 20 de noviembre',
        nombre: 'Planchón en Guatapé',
        cuando: 'Salida 10:00 a. m. · Regreso 5:00 p. m.',
        hora: '10:00 a. m. – 5:00 p. m.',
        descripcion: 'Paseo en planchón por el embalse de Guatapé–El Peñol, uno de los paisajes más representativos de Antioquia, con música e integración a bordo.',
        valor: '$110.000 por persona',
        valorCorto: '$110.000',
        cupos: '40',
        horario: 'Salida de Medellín a las 10:00 a. m. y regreso a las 5:00 p. m.',
        incluye: 'Transporte ida y vuelta hacia Medellín. Trayecto en el planchón y bebidas.',
        puntoEncuentro: { texto: 'Por confirmar', porConfirmar: true },   // POR CONFIRMAR
        recomendaciones: 'Documento de identidad, bloqueador, gorra, vestido de baño y ropa de cambio, efectivo para alimentación y snacks.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLSfNFvij2Fbw3zVbmOuU7UZilp1FsUc49P9pP69x8XR3glYLpg/viewform'
      },
      {
        id: 'pre-evento',
        destacado: true,
        fecha: '2026-11-20',
        fechaCorta: 'Vie 20 nov',
        fechaLarga: 'Viernes 20 de noviembre',
        nombre: 'Pre-evento CONAL',
        cuando: 'Noche · A partir de las 10 p. m.',
        hora: 'Desde las 10 p. m.',
        descripcion: 'Encuentro de bienvenida la noche antes de la convención. Las primeras 5 personas que compren su cupo en cada corte participan en un sorteo de 3 entradas gratis.',
        valor: 'Depende de la etapa de compra de boleta',
        valorCorto: 'Según etapa de boleta',
        cupos: '200',
        lugar: 'Discoteca ALMA',
        recomendaciones: 'Descansa: al día siguiente la acreditación empieza a las 7:00 a. m. en la Universidad de Antioquia.',
        // Sin formulario: el botón lleva al bloque de "Reservas e información".
        botonSinInscripcion: 'Reservas e información'
      },
      {
        id: 'tour-silletero',
        fecha: '2026-11-24',
        fechaCorta: 'Mar 24 nov',
        fechaLarga: 'Martes 24 de noviembre',
        nombre: 'Tour silletero en Santa Elena',
        cuando: 'Todo el día · Después del evento',
        hora: 'Todo el día',
        descripcion: 'Día completo en el corregimiento de Santa Elena para conocer la tradición silletera, patrimonio cultural de Antioquia e inspiración de la identidad de CONAL Medellín 2026: fincas de flores, historia de las silletas y cultura campesina.',
        // POR CONFIRMAR: el resumen del documento da ambas cifras y la ficha detallada solo la primera.
        valor: { texto: 'Aprox. $110.000 con transporte / $40.000 sin transporte', porConfirmar: true },
        valorCorto: { texto: '$110.000 / $40.000', porConfirmar: true },
        cupos: '10 personas en adelante',
        horario: { texto: 'Todo el día (hora de salida y regreso por confirmar)', porConfirmar: true },   // POR CONFIRMAR
        incluye: 'Recorrido guiado por los cultivos de flores, acceso a zonas comunes, charla y armado de silleta. Transporte ida y vuelta.',
        puntoEncuentro: 'Estación San Antonio del Metro',
        recomendaciones: 'Santa Elena es más fría que Medellín: lleva chaqueta, impermeable y zapatos cerrados.',
        inscripcion: 'https://docs.google.com/forms/d/e/1FAIpQLScB8TxeOXw9kXzMU6WOfxh2dPG0qV0pw8bpF8uTrnBdBn7aZQ/viewform'
      }
    ],

    condiciones: {
      titulo: 'Condiciones de participación',
      items: [
        'Los planes externos son opcionales y no están incluidos en el valor de la inscripción a CONAL.',
        'El cupo se reserva únicamente con el pago confirmado. Los cupos son limitados y se asignan por orden de pago.',
        'Cada asistente debe llevar su documento de identidad y su carné de EPS o seguro médico.',
        'Durante el plan, el grupo se desplaza junto y sigue las indicaciones del staff acompañante.',
        'Los horarios pueden ajustarse por clima o tráfico; cualquier cambio se anunciará por los canales oficiales.',
        'Aplican las mismas normas de convivencia del evento.'
      ]
    },

    reservas: {
      titulo: 'Reservas e información',
      items: [
        { etiqueta: 'Logística Interna', nombre: 'Ana Isabel Angarita Escobar', valor: '322 527 0106', enlace: 'tel:+573225270106', icono: 'phone' },
        { etiqueta: 'Finanzas (pagos)',  nombre: 'Juliana Agudelo Cuervo',      valor: '315 633 4193', enlace: 'tel:+573156334193', icono: 'phone' },
        { etiqueta: 'Instagram',          valor: '@conalaneiap',     enlace: 'https://www.instagram.com/conalaneiap', icono: 'instagram' },
        { etiqueta: 'Correo',             valor: 'conal@aneiap.co',  enlace: 'mailto:conal@aneiap.co',               icono: 'mail' }
      ]
    },

    nota: 'Los valores son por persona y pueden ajustarse según el número final de inscritos.'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     5 · TRANSPORTE
     ───────────────────────────────────────────────────────────────────────── */
  transporte: {
    eyebrow: 'Cómo moverte',
    tituloLinea1: 'El',
    tituloScript: 'transporte',
    subtitulo: 'La organización cubre los traslados entre sedes. Lo demás corre por tu cuenta.',

    tarjetas: [
      { icono: 'pin',   titulo: 'Punto de encuentro', valor: '[PLACEHOLDER] Por confirmar',   detalle: '[PLACEHOLDER] Llega 15 minutos antes de la hora de salida.' },
      { icono: 'clock', titulo: 'Hora de salida',     valor: '[PLACEHOLDER] 00:00 a. m.',     detalle: '[PLACEHOLDER] El bus sale puntual. No hay segundo viaje.' },
      { icono: 'bus',   titulo: 'Regreso',            valor: '[PLACEHOLDER] 00:00 p. m.',     detalle: '[PLACEHOLDER] Llegada estimada a Medellín por confirmar.' }
    ],

    recomendaciones: [
      'Ten lista la escarapela: es tu pase para subir al transporte oficial.',
      'Descarga el mapa de tu ruta antes de salir, por si te quedas sin datos.',
      'Lleva efectivo en billetes pequeños: no en todos lados reciben transferencia.',
      'Si usas transporte por aplicación, confirma la placa antes de subirte.',
      'Muévete en grupo de noche y avísale a tu coordinación si te separas.',
      'Guarda el número del comité en tu celular antes del primer día.'
    ],

    tarifas: {
      titulo: 'Tarifas del transporte público',
      nota: '[PLACEHOLDER] Tarifas de referencia 2026, pendientes de actualizar con los valores oficiales del año.',
      columnas: ['Medio', 'Lun a Sáb', 'Dom y festivos'],
      filas: [
        { medio: 'Metro (línea A y B)',       lunSab: '[PLACEHOLDER] $0.000', domFest: '[PLACEHOLDER] $0.000' },
        { medio: 'Metrocable (integrado)',    lunSab: '[PLACEHOLDER] $0.000', domFest: '[PLACEHOLDER] $0.000' },
        { medio: 'Metrocable (turístico)',    lunSab: '[PLACEHOLDER] $0.000', domFest: '[PLACEHOLDER] $0.000' },
        { medio: 'Bus / alimentador',         lunSab: '[PLACEHOLDER] $0.000', domFest: '[PLACEHOLDER] $0.000' },
        { medio: 'Taxi (banderazo)',          lunSab: '[PLACEHOLDER] $0.000', domFest: '[PLACEHOLDER] $0.000' },
        { medio: 'Apps de transporte',        lunSab: '[PLACEHOLDER] Tarifa variable', domFest: '[PLACEHOLDER] Tarifa variable' }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     6 · EQUIPAJE · checklist (el progreso se guarda en el navegador)
     Los "id" deben ser únicos y NO cambiarlos después: son la llave del guardado.
     ───────────────────────────────────────────────────────────────────────── */
  equipaje: {
    eyebrow: 'Qué empacar',
    tituloLinea1: 'Tu',
    tituloScript: 'equipaje',
    subtitulo: 'Toca cada elemento para marcarlo. Se guarda en este dispositivo.',
    progresoTexto: 'de',
    botonReiniciar: 'Reiniciar lista',
    completoTexto: '¡Listo! Ya tienes todo. Nos vemos en Medellín.',

    grupos: [
      {
        titulo: 'Imprescindibles',
        color: 'fucsia',
        items: [
          { id: 'doc-identidad',  texto: 'Documento de identidad' },
          { id: 'escarapela',     texto: 'Escarapela del evento' },
          { id: 'carnet-salud',   texto: 'Carnet de EPS o seguro médico' },
          { id: 'efectivo',       texto: 'Efectivo en billetes pequeños' },
          { id: 'cargador',       texto: 'Cargador y power bank' }
        ]
      },
      {
        titulo: 'Ropa',
        color: 'morado',
        items: [
          { id: 'ropa-formal',    texto: '[PLACEHOLDER] Atuendo para la jornada académica' },
          { id: 'ropa-comoda',    texto: '[PLACEHOLDER] Ropa cómoda para integración' },
          { id: 'ropa-fiesta',    texto: '[PLACEHOLDER] Atuendo para la noche temática' },
          { id: 'zapatos',        texto: 'Zapatos cómodos para caminar' },
          { id: 'chaqueta',       texto: 'Chaqueta o buzo (en Medellín refresca de noche)' }
        ]
      },
      {
        titulo: 'Cuidado personal',
        color: 'amarillo',
        items: [
          { id: 'aseo',           texto: 'Kit de aseo personal' },
          { id: 'bloqueador',     texto: 'Bloqueador solar' },
          { id: 'repelente',      texto: 'Repelente de insectos' },
          { id: 'medicamentos',   texto: 'Medicamentos personales con su fórmula' },
          { id: 'sombrilla',      texto: 'Sombrilla o impermeable' }
        ]
      },
      {
        titulo: 'Para la sede campestre',
        color: 'cielo',
        items: [
          { id: 'traje-bano',     texto: '[PLACEHOLDER] Vestido de baño (si aplica)' },
          { id: 'toalla',         texto: 'Toalla' },
          { id: 'botella',        texto: 'Botella de agua reutilizable' },
          { id: 'bolsa-ropa',     texto: 'Bolsa para la ropa sucia o mojada' }
        ]
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     7 · CÓDIGO DE VESTIMENTA
     ───────────────────────────────────────────────────────────────────────── */
  vestimenta: {
    eyebrow: 'Cómo vestirte',
    tituloLinea1: 'Código de',
    tituloScript: 'vestimenta',
    subtitulo: 'Un código por día. Si dudas, pregúntale a tu coordinación.',

    dias: [
      {
        id: 'vest-dia-1',
        tab: 'Día 1',
        color: 'fucsia',
        titulo: '[PLACEHOLDER] Académico',
        descripcion: '[PLACEHOLDER] Jornada de apertura y ponencias: presentación formal, cómoda para estar sentado varias horas.',
        foto: './assets/vestimenta/dia-1.jpg',
        si: [
          '[PLACEHOLDER] Camisa o blusa de vestir',
          '[PLACEHOLDER] Pantalón formal o falda',
          '[PLACEHOLDER] Zapato cerrado',
          '[PLACEHOLDER] Chaqueta o blazer'
        ],
        no: [
          '[PLACEHOLDER] Sudadera o pantaloneta',
          '[PLACEHOLDER] Gorra dentro del auditorio',
          '[PLACEHOLDER] Sandalias'
        ]
      },
      {
        id: 'vest-dia-2',
        tab: 'Día 2',
        color: 'morado',
        titulo: '[PLACEHOLDER] Integración',
        descripcion: '[PLACEHOLDER] Día de sede campestre: ropa fresca que te deje moverte, y un cambio para la noche temática.',
        foto: './assets/vestimenta/dia-2.jpg',
        si: [
          '[PLACEHOLDER] Camiseta fresca',
          '[PLACEHOLDER] Jean o pantalón cómodo',
          '[PLACEHOLDER] Tenis',
          '[PLACEHOLDER] Atuendo de la noche temática'
        ],
        no: [
          '[PLACEHOLDER] Ropa que no quieras ensuciar',
          '[PLACEHOLDER] Tacones en zonas verdes'
        ]
      },
      {
        id: 'vest-dia-3',
        tab: 'Día 3',
        color: 'amarillo',
        titulo: '[PLACEHOLDER] Cierre',
        descripcion: '[PLACEHOLDER] Clausura y regreso: algo presentable para las fotos de cierre y cómodo para el viaje.',
        foto: './assets/vestimenta/dia-3.jpg',
        si: [
          '[PLACEHOLDER] Camiseta institucional ANEIAP',
          '[PLACEHOLDER] Jean o pantalón cómodo',
          '[PLACEHOLDER] Zapato cómodo para el regreso'
        ],
        no: [
          '[PLACEHOLDER] Ropa de la noche anterior'
        ]
      }
    ],

    tituloSi: 'Sí lleva',
    tituloNo: 'Evita'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     8 · EMERGENCIAS · sección sobria, sin humor ni adornos
     ───────────────────────────────────────────────────────────────────────── */
  emergencias: {
    eyebrow: 'Si algo pasa',
    titulo: 'Emergencias',
    subtitulo: 'Mantén la calma y sigue estos pasos. Siempre hay alguien del comité disponible.',

    pasos: [
      { n: 1, titulo: 'Ponte a salvo',            texto: 'Aléjate del riesgo y busca un lugar seguro antes de hacer cualquier otra cosa.' },
      { n: 2, titulo: 'Avisa al comité',          texto: 'Llama o escribe al número de emergencias del comité organizador. Está disponible las 24 horas del evento.' },
      { n: 3, titulo: 'Da tu ubicación exacta',   texto: 'Di en qué sede estás, en qué zona y con quién. Si puedes, comparte tu ubicación por WhatsApp.' },
      { n: 4, titulo: 'No te muevas solo',        texto: 'Espera acompañado hasta que llegue alguien del comité o el personal de salud.' }
    ],

    contactos: [
      {
        tipo: 'comite',
        titulo: 'Comité de emergencias',
        detalle: '[PLACEHOLDER] Disponible 24 horas durante el evento',
        telefono: '[PLACEHOLDER] +57 300 000 0000',
        tel: '+573000000000',
        boton: 'Llamar al comité'
      },
      {
        tipo: 'salud',
        titulo: 'Primeros auxilios · 123',
        detalle: 'Línea única de emergencias en Colombia: ambulancia, policía y bomberos.',
        telefono: '123',
        tel: '123',
        boton: 'Llamar al 123'
      },
      {
        tipo: 'clinica',
        titulo: '[PLACEHOLDER] Clínica de referencia',
        detalle: '[PLACEHOLDER] Centro médico más cercano a la sede. Dirección por confirmar.',
        telefono: '[PLACEHOLDER] +57 604 000 0000',
        tel: '+576040000000',
        boton: 'Ver en el mapa',
        mapa: 'https://www.google.com/maps/search/?api=1&query=clinica+Medellin'
      }
    ],

    sos: {
      titulo: '¿Necesitas ayuda ahora?',
      texto: 'Este botón marca directamente al comité de emergencias.',
      boton: 'SOS · Llamar ahora'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     9 · MULTAS SIMBÓLICAS
     ───────────────────────────────────────────────────────────────────────── */
  multas: {
    eyebrow: 'Las reglas del juego',
    tituloLinea1: 'Multas',
    tituloScript: 'simbólicas',
    subtitulo: 'Son simbólicas y en buena onda: lo recaudado se destina a la actividad de cierre.',

    lista: [
      { concepto: '[PLACEHOLDER] Llegar tarde a una actividad',        valor: '[PLACEHOLDER] $0.000' },
      { concepto: '[PLACEHOLDER] Dejar el celular sonando en ponencia', valor: '[PLACEHOLDER] $0.000' },
      { concepto: '[PLACEHOLDER] Perder la escarapela',                valor: '[PLACEHOLDER] $0.000' },
      { concepto: '[PLACEHOLDER] No cumplir el código de vestimenta',   valor: '[PLACEHOLDER] $0.000' },
      { concepto: '[PLACEHOLDER] Hacer esperar al bus',                valor: '[PLACEHOLDER] $0.000' },
      { concepto: '[PLACEHOLDER] Quedarse dormido en la jornada',      valor: '[PLACEHOLDER] $0.000' }
    ],

    nota: {
      titulo: 'Las otras normas no son simbólicas',
      texto: 'El respeto, el cuidado de las sedes y el consumo responsable no se negocian. El comité puede retirar del evento a quien ponga en riesgo a otra persona, y eso sí no tiene multa: tiene consecuencias.'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     10 · CONTACTOS DEL COMITÉ
     ───────────────────────────────────────────────────────────────────────── */
  contactos: {
    eyebrow: 'Quién te ayuda',
    tituloLinea1: 'Contactos del',
    tituloScript: 'comité',
    subtitulo: 'Guarda estos números antes del primer día.',

    lista: [
      { nombre: '[PLACEHOLDER] Nombre Apellido', rol: '[PLACEHOLDER] Dirección general',        telefono: '[PLACEHOLDER] +57 300 000 0000', tel: '+573000000000', foto: './assets/comite/contacto-1.jpg', color: 'fucsia' },
      { nombre: '[PLACEHOLDER] Nombre Apellido', rol: '[PLACEHOLDER] Logística y transporte',   telefono: '[PLACEHOLDER] +57 300 000 0000', tel: '+573000000000', foto: './assets/comite/contacto-2.jpg', color: 'morado' },
      { nombre: '[PLACEHOLDER] Nombre Apellido', rol: '[PLACEHOLDER] Académico',                telefono: '[PLACEHOLDER] +57 300 000 0000', tel: '+573000000000', foto: './assets/comite/contacto-3.jpg', color: 'amarillo' },
      { nombre: '[PLACEHOLDER] Nombre Apellido', rol: '[PLACEHOLDER] Bienestar y salud',        telefono: '[PLACEHOLDER] +57 300 000 0000', tel: '+573000000000', foto: './assets/comite/contacto-4.jpg', color: 'azul' },
      { nombre: '[PLACEHOLDER] Nombre Apellido', rol: '[PLACEHOLDER] Comunicaciones',           telefono: '[PLACEHOLDER] +57 300 000 0000', tel: '+573000000000', foto: './assets/comite/contacto-5.jpg', color: 'naranja' },
      { nombre: '[PLACEHOLDER] Nombre Apellido', rol: '[PLACEHOLDER] Alojamiento',              telefono: '[PLACEHOLDER] +57 300 000 0000', tel: '+573000000000', foto: './assets/comite/contacto-6.jpg', color: 'verde' }
    ],

    whatsapp: {
      titulo: '¿Prefieres escribir?',
      texto: 'Escríbele al comité por WhatsApp y te responden lo antes posible.',
      boton: 'Escribir por WhatsApp'
    }
  },

  /* ─────────────────────────────────────────────────────────────────────────
     11 · FAQ
     ───────────────────────────────────────────────────────────────────────── */
  faq: {
    eyebrow: 'Preguntas frecuentes',
    tituloLinea1: 'Resolvamos',
    tituloScript: 'dudas',
    subtitulo: 'Lo que más nos preguntan antes de cada CONAL.',
    foto: './assets/fotos/faq.jpg',

    items: [
      { p: '¿Qué incluye la inscripción al CONAL 2026?',          r: '[PLACEHOLDER] Por definir: alimentación, alojamiento, transporte entre sedes, material del evento y actividades académicas. El detalle exacto lo publica el comité organizador.' },
      { p: '¿A qué hora debo llegar el primer día?',               r: '[PLACEHOLDER] La hora de registro está por confirmar. Te recomendamos llegar con tiempo: el acto de apertura empieza puntual.' },
      { p: '¿Puedo llegar directamente a la sede campestre?',      r: '[PLACEHOLDER] No. El ingreso es con el transporte oficial desde el punto de encuentro, por control de asistencia y seguridad.' },
      { p: '¿Hay alojamiento incluido?',                           r: '[PLACEHOLDER] Por confirmar. Si tienes una necesidad particular de alojamiento, escríbele a la coordinación de logística con anticipación.' },
      { p: 'Tengo una restricción alimentaria, ¿qué hago?',        r: '[PLACEHOLDER] Repórtala al inscribirte y recuérdasela al comité de bienestar apenas llegues. Se gestiona, pero necesita aviso previo.' },
      { p: '¿Qué pasa si pierdo mi escarapela?',                   r: '[PLACEHOLDER] Avisa de inmediato en el punto de registro. La reposición tiene una multa simbólica y puede tardar.' },
      { p: '¿Puedo invitar a alguien que no esté inscrito?',       r: '[PLACEHOLDER] No. El ingreso a las sedes y al transporte es exclusivo para personas inscritas y acreditadas.' },
      { p: '¿Hay wifi en las sedes?',                              r: '[PLACEHOLDER] Por confirmar. En la sede campestre la señal puede ser limitada: descarga lo que necesites antes de salir.' },
      { p: '¿Cómo me devuelvo el último día?',                     r: '[PLACEHOLDER] El transporte oficial regresa a Medellín en el horario publicado en la sección de Transporte. Si tienes vuelo o bus ese mismo día, cuadra tus tiempos con holgura.' },
      { p: '¿A quién le escribo si algo no me queda claro?',       r: 'A tu coordinación o al comité organizador por WhatsApp. Los números están en la sección de Contactos.' }
    ]
  },

  /* ─────────────────────────────────────────────────────────────────────────
     PLAYLIST · dock flotante
     Pega aquí la URL del embed de Spotify (Compartir → Insertar → copiar el src).
     Mientras esté vacío, se ve un recuadro con instrucciones.
     ───────────────────────────────────────────────────────────────────────── */
  playlist: {
    titulo: 'Playlist oficial',
    embedUrl: '',   // ej: 'https://open.spotify.com/embed/playlist/XXXXXXXX?utm_source=generator'
    vacio: '[PLACEHOLDER] Pega aquí el enlace del embed de Spotify en content.js → playlist.embedUrl'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     CIERRE Y PIE DE PÁGINA
     ───────────────────────────────────────────────────────────────────────── */
  cierre: {
    tituloLinea1: 'Gracias por vivir el',
    tituloDestacado: 'CONAL 2026',
    texto1: 'Medellín te espera con sus flores, sus montañas y su gente.',
    texto2: 'Guarda estos recuerdos y comparte la experiencia.',
    botones: {
      pdf: 'Descargar guía',
      whatsapp: 'WhatsApp',
      contactos: 'Contactos',
      sedes: 'Sedes'
    }
  },

  footer: {
    nombre: 'CONAL Medellín 2026',
    lema: 'Sembrando ideas, cosechando impacto',
    texto: '¿Dudas o preguntas? Escríbenos por WhatsApp o llámanos, estaremos pendientes de ti.',
    credito: 'Guía del Asistente · Comité Organizador CONAL 2026',
    instagram: 'https://www.instagram.com/conalaneiap/',
    instagramLabel: '@conalaneiap'
  },

  /* ─────────────────────────────────────────────────────────────────────────
     TEXTOS DE INTERFAZ
     ───────────────────────────────────────────────────────────────────────── */
  ui: {
    menu: 'Menú',
    cerrar: 'Cerrar',
    sos: 'SOS',
    secciones: 'Secciones',
    pdfNoDisponible: 'El PDF todavía no está listo. Apenas lo publique el comité, aparecerá aquí mismo.',
    dias: 'días', horas: 'horas', minutos: 'min', segundos: 'seg'
  }
};
