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
    // [PLACEHOLDER] la hora exacta de apertura está por confirmar.
    inicio: '2026-11-21T08:00:00-05:00',
    inicioEsProvisional: true,

    // Archivo del PDF. Si no existe, el botón muestra un aviso amable.
    pdf: './assets/guia-conal-2026.pdf',
    pdfNombre: 'Guia-CONAL-2026.pdf',

    // [PLACEHOLDER] número del comité organizador (formato internacional, sin signos).
    whatsapp: '573000000000',
    whatsappMensaje: 'Hola, comité CONAL 2026. Tengo una pregunta sobre el evento.',

    logo: './assets/logos/logo-conal.png',
    logoAneiap: './assets/logos/logo-aneiap.png',
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
    cuentaRegresivaNota: 'Hora de inicio provisional, sujeta a confirmación.',
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
        sede: '[PLACEHOLDER] Sede principal · Medellín',
        tipo: '[PLACEHOLDER] Actividad académica'
      },
      {
        etiqueta: 'D2',
        dia: 'dia-2',
        sede: '[PLACEHOLDER] Finca / Sede campestre',
        tipo: '[PLACEHOLDER] Actividad académica e integración'
      },
      {
        etiqueta: 'D3',
        dia: 'dia-3',
        sede: '[PLACEHOLDER] Finca / Sede campestre',
        tipo: '[PLACEHOLDER] Cierre y regreso a Medellín'
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

    dias: [
      {
        id: 'dia-1',
        tab: 'Día 1',
        color: 'fucsia',
        fecha: 'Sábado 21 de noviembre',
        titulo: '[PLACEHOLDER] Apertura y jornada académica',
        sede: '[PLACEHOLDER] Sede principal · Medellín',
        items: [
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Registro y entrega de escarapelas', lugar: '[PLACEHOLDER] Punto de registro' },
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Acto de apertura CONAL 2026',       lugar: '[PLACEHOLDER] Auditorio principal' },
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Primera ponencia',                   lugar: '[PLACEHOLDER] Auditorio principal' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Almuerzo',                           lugar: '[PLACEHOLDER] Zona de alimentación' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Talleres simultáneos',               lugar: '[PLACEHOLDER] Salones asignados' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Traslado al alojamiento',            lugar: '[PLACEHOLDER] Punto de encuentro' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Noche de bienvenida',                lugar: '[PLACEHOLDER] Por confirmar' }
        ]
      },
      {
        id: 'dia-2',
        tab: 'Día 2',
        color: 'morado',
        fecha: 'Domingo 22 de noviembre',
        titulo: '[PLACEHOLDER] Jornada académica e integración',
        sede: '[PLACEHOLDER] Finca / Sede campestre',
        items: [
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Desayuno',                        lugar: '[PLACEHOLDER] Zona de alimentación' },
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Salida hacia la sede campestre',  lugar: '[PLACEHOLDER] Punto de encuentro' },
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Segunda ponencia',                lugar: '[PLACEHOLDER] Salón principal' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Almuerzo',                        lugar: '[PLACEHOLDER] Zona de alimentación' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Actividades de integración',      lugar: '[PLACEHOLDER] Zonas verdes' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Cena',                            lugar: '[PLACEHOLDER] Zona de alimentación' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Fiesta temática',                 lugar: '[PLACEHOLDER] Por confirmar' }
        ]
      },
      {
        id: 'dia-3',
        tab: 'Día 3',
        color: 'amarillo',
        fecha: 'Lunes 23 de noviembre',
        titulo: '[PLACEHOLDER] Cierre y regreso',
        sede: '[PLACEHOLDER] Finca / Sede campestre',
        items: [
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Desayuno',                     lugar: '[PLACEHOLDER] Zona de alimentación' },
          { hora: '[PLACEHOLDER] 00:00 a. m.', actividad: '[PLACEHOLDER] Panel de cierre',              lugar: '[PLACEHOLDER] Salón principal' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Almuerzo de despedida',        lugar: '[PLACEHOLDER] Zona de alimentación' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Acto de clausura',             lugar: '[PLACEHOLDER] Salón principal' },
          { hora: '[PLACEHOLDER] 00:00 p. m.', actividad: '[PLACEHOLDER] Regreso a Medellín',           lugar: '[PLACEHOLDER] Punto de encuentro' }
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
    subtitulo: 'Actividades opcionales con inscripción aparte.',

    banner: {
      etiqueta: 'Pre-evento',
      titulo: '[PLACEHOLDER] Plan pre-evento CONAL',
      texto: '[PLACEHOLDER] Un día antes del CONAL para conocer Medellín con la gente que vas a ver todo el fin de semana.',
      fecha: '[PLACEHOLDER] Viernes 20 de noviembre · 00:00 a. m.',
      precio: '[PLACEHOLDER] $00.000',
      boton: 'Inscríbete',
      enlace: '#planes'
    },

    pestanas: [
      {
        id: 'planes-externos',
        tab: 'Planes externos',
        items: [
          { nombre: '[PLACEHOLDER] Recorrido por el centro', lugar: '[PLACEHOLDER] Centro de Medellín',  cuando: '[PLACEHOLDER] Viernes 20 · 00:00 a. m.', precio: '[PLACEHOLDER] $00.000', enlace: '#planes' },
          { nombre: '[PLACEHOLDER] Tour de Comuna 13',       lugar: '[PLACEHOLDER] Comuna 13',           cuando: '[PLACEHOLDER] Viernes 20 · 00:00 p. m.', precio: '[PLACEHOLDER] $00.000', enlace: '#planes' },
          { nombre: '[PLACEHOLDER] Paseo en Metrocable',     lugar: '[PLACEHOLDER] Línea por confirmar', cuando: '[PLACEHOLDER] Sábado 21 · 00:00 p. m.',  precio: '[PLACEHOLDER] $00.000', enlace: '#planes' }
        ]
      },
      {
        id: 'integraciones',
        tab: 'Integraciones',
        items: [
          { nombre: '[PLACEHOLDER] Noche de bienvenida',  lugar: '[PLACEHOLDER] Por confirmar', cuando: '[PLACEHOLDER] Sábado 21 · 00:00 p. m.',  precio: '[PLACEHOLDER] $00.000', enlace: '#planes' },
          { nombre: '[PLACEHOLDER] Fiesta temática',      lugar: '[PLACEHOLDER] Sede campestre', cuando: '[PLACEHOLDER] Domingo 22 · 00:00 p. m.', precio: '[PLACEHOLDER] Incluida',  enlace: '#planes' },
          { nombre: '[PLACEHOLDER] Despedida post-CONAL', lugar: '[PLACEHOLDER] Por confirmar', cuando: '[PLACEHOLDER] Lunes 23 · 00:00 p. m.',   precio: '[PLACEHOLDER] $00.000', enlace: '#planes' }
        ]
      },
      {
        id: 'recomendaciones',
        tab: 'Recomendaciones',
        items: [
          { nombre: '[PLACEHOLDER] Pueblo cercano',          lugar: '[PLACEHOLDER] A 00 min de Medellín', cuando: '[PLACEHOLDER] Cualquier día',  precio: '[PLACEHOLDER] Por tu cuenta', enlace: '#planes' },
          { nombre: '[PLACEHOLDER] Mirador de la ciudad',    lugar: '[PLACEHOLDER] Por confirmar',        cuando: '[PLACEHOLDER] Tarde o noche',  precio: '[PLACEHOLDER] Entrada libre', enlace: '#planes' },
          { nombre: '[PLACEHOLDER] Zona gastronómica',       lugar: '[PLACEHOLDER] Por confirmar',        cuando: '[PLACEHOLDER] Noche',          precio: '[PLACEHOLDER] Por tu cuenta', enlace: '#planes' }
        ]
      }
    ],

    botonInscripcion: 'Inscríbete',
    nota: 'Precios y horarios sujetos a confirmación. Cupos limitados.'
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
