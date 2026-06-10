import type { SiteContent } from "@/lib/locale-types";

export const es: SiteContent = {
  locale: "es",

  nav: {
    items: ["Inicio", "Servicios", "Trabajo", "Nosotros", "FAQ", "Contacto"],
    cta: "Hablemos",
  },

  hero: {
    eyebrow: "Laboratorio de Tecnología Creativa · Colombia",
    cyclePrefix: "Nacimos para",
    cycleWords: ["Crear", "Mejorar", "Evolucionar", "Automatizar", "Innovar"],
    sub: "IA, software, automatización y sistemas — bajo un mismo techo. No solo construimos productos, resolvemos el problema completo, en cada capa.",
    cta: "Iniciar un proyecto ♠",
    secondary: "Ver nuestro trabajo",
    scroll: "Explorar",
  },

  services: {
    eyebrow: "Qué hacemos",
    line1: "Cuatro disciplinas.",
    line2: "Un laboratorio.",
    sub: "Tenemos todos los palos — así que cualquiera que sea tu problema, tenemos la mano para resolverlo.",
    items: [
      {
        title: "IA e Inteligencia",
        tag: "Pensar. Decidir. Aprender.",
        desc: "Modelos, sistemas de visión y motores de decisión que convierten datos brutos en juicio del mundo real. Construidos para razonar, no solo para ejecutar.",
      },
      {
        title: "Ingeniería de Software",
        tag: "Construir. Escalar. Lanzar.",
        desc: "Plataformas full-stack, APIs y pipelines de datos que crecen desde el prototipo hasta producción — y se mantienen ahí de forma confiable.",
      },
      {
        title: "Automatización",
        tag: "Trabajo que se ejecuta solo.",
        desc: "Flujos de trabajo, agentes y pipelines que eliminan cada paso manual entre la intención y el resultado. Configúralo — y realmente funciona.",
      },
      {
        title: "Arquitectura de Sistemas",
        tag: "Conectar todo.",
        desc: "Infraestructura y arquitectura que une IA, software y hardware en un todo operativo unificado — la capa que hace que todo funcione.",
      },
    ],
  },

  work: {
    eyebrow: "Trabajo en progreso",
    line1: "Construyendo ahora.",
    line2: "Lanzando pronto.",
    sub: "Estos son nuestros proyectos activos — problemas reales siendo resueltos ahora mismo, en fintech y comercio impulsado por IA.",
    liveBadge: "En desarrollo",
    items: [
      {
        industry: "Fintech",
        title: "Modernización de Casa de Cambio Legacy",
        desc: "Automatización completa de una operación tradicional de casa de cambio — reemplazando procesos manuales y en papel con flujos inteligentes, validación de cumplimiento en tiempo real y un dashboard de reportes unificado.",
        stat: "En progreso",
        statLabel: "Pipeline de automatización",
      },
      {
        industry: "E-Commerce · IA",
        title: "Plataforma Agéntica de Configuración de Marca",
        desc: "Plataforma impulsada por IA donde los vendedores configuran completamente su tienda personalizada a través de un agente conversacional — sin código. Personalización en tiempo real, lógica de productos e identidad de marca controlada de extremo a extremo por la IA.",
        stat: "En progreso",
        statLabel: "Nuestro mejor proyecto de IA",
      },
    ],
    cta: "¿Tienes un proyecto en mente? Hablemos ♠",
  },

  why: {
    eyebrow: "Por qué JokerLabs",
    line1: "Construidos diferente.",
    line2: "A propósito.",
    sub: "No diseñamos un laboratorio que hace de todo — diseñamos uno que lo resuelve todo. Aquí está por qué eso importa.",
    items: [
      {
        title: "Soluciones orientadas al impacto",
        desc: "Cada producto que construimos está diseñado a medida para crear impacto real en el negocio. Sin plantillas, sin atajos — solo soluciones que mueven la aguja.",
      },
      {
        title: "Entrega rápida y confiable",
        desc: "Obtén resultados de alta calidad en días o semanas, no meses. Prototipamos rápido, iteramos fuerte y entregamos tecnología funcional a tiempo.",
      },
      {
        title: "Precios transparentes y justos",
        desc: "Precios honestos y personalizados sin cargos ocultos ni sorpresas. Un desglose claro desde el inicio — siempre sabes qué estás pagando.",
      },
      {
        title: "Expertos en resolver problemas",
        desc: "Abordamos los retos técnicos y creativos más complejos con soluciones innovadoras. Ningún problema es demasiado difícil para el laboratorio correcto.",
      },
      {
        title: "Colaboración sin fricciones",
        desc: "Comunicación clara y retroalimentación real en cada etapa. Siempre estás al tanto — nunca te quedas preguntando qué está pasando.",
      },
      {
        title: "Acceso directo al mejor talento",
        desc: "Trabaja directamente con expertos senior — sin contratación prolongada, sin intermediarios, sin capas de agencia entre tú y quienes construyen tu producto.",
      },
    ],
  },

  compare: {
    eyebrow: "Qué nos diferencia",
    line1: "¿Por qué trabajar con nosotros",
    line2: "vs. las alternativas?",
    recommended: "★ Recomendado",
    cols: ["JokerLabs", "Contratar Empleados", "Otras Agencias"],
    rows: [
      { label: "Costo",          jl: "Justo y transparente",             hire: "$$$ (salario + beneficios)",      agency: "$$$ – $$$$ por proyecto" },
      { label: "Experiencia",    jl: "Talento senior, 4 disciplinas",    hire: "Varía por contratación",          agency: "Varía" },
      { label: "Tiempos",        jl: "Rápido y confiable",              hire: "Semanas + incorporación",         agency: "Generalmente más lento" },
      { label: "Flexibilidad",   jl: "Escala cuando quieras",           hire: "Contratos requeridos",            agency: "Solo por proyecto" },
      { label: "Enfoque",        jl: "Laboratorio multidisciplinario",  hire: "Especialistas en silos",          agency: "Estilo varía por agencia" },
      { label: "Foco en cliente",jl: "Solo soluciones a medida",        hire: "Prioridades internas",            agency: "Múltiples clientes a la vez" },
      { label: "Soporte",        jl: "Alianza continua",               hire: "Capacidad interna",               agency: "Suele terminar al entregar" },
    ],
  },

  about: {
    eyebrow: "Sobre nosotros",
    line1: "Somos el laboratorio",
    line2: "que tiene todos los palos.",
    lead: "JokerLabs es un laboratorio de tecnología creativa construido por cinco fundadores con cuatro especializaciones: IA, ingeniería de software, automatización y arquitectura de sistemas.",
    body1: "No somos una agencia generalista ni una consultora en silos. Somos un laboratorio multidisciplinario — diseñado para abordar el tipo de problemas que se encuentran en la intersección de tecnología, proceso e infraestructura. Problemas que requieren los cuatro palos para resolverse correctamente.",
    body2: "Con base en Colombia — trabajando globalmente. Llevamos el talento y la innovación latinoamericana a proyectos en cualquier parte del mundo, con la calidad y disciplina de cualquier laboratorio de primer nivel.",
    stats: [
      { value: "4",  label: "Disciplinas principales" },
      { value: "5",  label: "Fundadores expertos" },
      { value: "∞",  label: "Problemas resueltos" },
      { value: "1",  label: "Laboratorio unificado" },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    line1: "La mano de cinco pasos",
    line2: "del laboratorio.",
    steps: [
      { title: "Alcance",    desc: "Mapeamos el problema real en todas las disciplinas antes de escribir una sola línea de código." },
      { title: "Diseño",     desc: "Una arquitectura que abarca IA, software e infraestructura — sin costuras." },
      { title: "Construir",  desc: "Ejecución orientada al constructor. Prototipamos rápido, iteramos fuerte y entregamos tecnología funcional." },
      { title: "Desplegar",  desc: "En tu operación — del modelo a la máquina, del dashboard a la línea de producción." },
      { title: "Soporte",    desc: "Nos quedamos. Monitoreo, iteración y un socio que conoce cada capa de lo que construimos." },
    ],
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    line1: "¿Tienes preguntas?",
    line2: "Tenemos respuestas.",
    selectLabel: "Selecciona una pregunta",
    chatHeader: "JokerLabs · Soporte",
    chatStatus: "En línea",
    chatEmpty: "Selecciona una pregunta para iniciar la conversación ♠",
    items: [
      {
        question: "¿Quiénes están detrás de JokerLabs?",
        answer: "JokerLabs está impulsado por cinco fundadores en cuatro disciplinas — IA, ingeniería de software, automatización y arquitectura de sistemas. Somos un laboratorio de tecnología creativa multidisciplinario con base en Colombia, trabajando globalmente. Cada proyecto tiene el laboratorio completo detrás. Sin subcontratistas, sin intermediarios externos.",
      },
      {
        question: "¿Aceptan requisitos personalizados?",
        answer: "Absolutamente — lo personalizado es nuestro estándar. No creemos en soluciones genéricas. Cada proyecto comienza con una llamada de descubrimiento para mapear el problema real, luego diseñamos la solución desde cero. Cualquier industria, cualquier restricción, cualquier escala.",
      },
      {
        question: "¿Cuál es su tiempo de entrega?",
        answer: "Depende del alcance, pero nos movemos rápido. Un MVP enfocado o un flujo de automatización puede estar en vivo en 1–3 semanas. Las plataformas más grandes generalmente toman 4–10 semanas. Definimos el alcance cuidadosamente desde el inicio y ejecutamos sin sorpresas. Velocidad sin recortar calidad — ese es el estándar JokerLabs.",
      },
      {
        question: "¿Ofrecen soporte continuo?",
        answer: "Sí — consideramos el soporte parte del trabajo, no un complemento. No nos retiramos en la entrega. Cada proyecto incluye una fase de soporte: monitoreo, iteración y una línea directa con el mismo equipo que lo construyó. Nos quedamos el tiempo que necesites.",
      },
      {
        question: "¿También manejan branding y diseño?",
        answer: "Sí. El diseño es una de nuestras cuatro disciplinas principales. Manejamos todo, desde identidad de marca y sistemas de diseño hasta UI/UX de producto y diseño en movimiento. Obtienes una experiencia coherente de extremo a extremo — no un mosaico de diferentes proveedores con distintas estéticas.",
      },
      {
        question: "¿Cuál es su modelo de precios?",
        answer: "Trabajamos con modelos de alcance fijo o retainer según lo que mejor se adapte. Los precios son siempre transparentes y definidos desde el inicio — sin facturas sorpresa, sin facturación misteriosa por hora. Recibes un desglose claro antes de que comience cualquier trabajo. Los precios justos son uno de nuestros compromisos principales.",
      },
    ],
  },

  team: {
    eyebrow: "El laboratorio",
    line1: "Cinco fundadores.",
    line2: "Una misión.",
    sub: "Cada fundador cubre una disciplina. Juntos cubrimos cada ángulo de tu problema — del modelo a la máquina.",
    roles: ["Ingeniero de IA", "Líder de Software", "Líder de Automatización", "Arquitecto de Sistemas", "Operaciones & BIC"],
  },

  contact: {
    eyebrow: "Contáctanos",
    line1: "Construyamos",
    line2: "algo grande.",
    sub: "¿Tienes un proyecto, un problema o solo una idea loca? Escríbenos. Leemos todo y respondemos rápido.",
    nameLabel: "Tu nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Cuéntanos sobre tu proyecto",
    messagePlaceholder: "¿Qué estás construyendo? ¿Cuál es el problema que necesitas resolver?",
    submitLabel: "Enviar mensaje",
    sendingLabel: "Enviando…",
    responseTime: "Tiempo de respuesta típico: menos de 24 horas. Tomamos cada consulta en serio, sin importar el tamaño del proyecto.",
    successTitle: "Mensaje enviado ♠",
    successMsg: "¡Gracias! Nos pondremos en contacto pronto.",
  },

  footer: {
    tagline: "Laboratorio de tecnología creativa. IA, software, automatización y sistemas bajo un mismo techo. Todos los palos. Una mano.",
    navigateLabel: "Navegar",
    contactLabel: "Contacto",
    cta: "Iniciar un proyecto ♠",
    taglineBottom: "Todos los palos. Una mano.",
  },
};
