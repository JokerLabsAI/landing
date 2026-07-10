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
    sub: "IA, software, automatización y sistemas, todo bajo un mismo techo. No solo construimos productos; resolvemos el problema completo en cada capa.",
    cta: "Iniciar un proyecto ♠",
    secondary: "Ver nuestro trabajo",
    scroll: "Explorar",
  },

  services: {
    eyebrow: "Qué hacemos",
    line1: "Cuatro disciplinas.",
    line2: "Un laboratorio.",
    sub: "Tenemos todos los palos, así que, sea cual sea tu problema, tenemos la mano para resolverlo.",
    items: [
      {
        title: "Inteligencia Artificial",
        tag: "Pensar. Decidir. Aprender.",
        desc: "Modelos, sistemas de visión y motores de decisión que convierten datos brutos en criterio para el mundo real. Diseñados para razonar, no solo para ejecutar.",
      },
      {
        title: "Ingeniería de Software",
        tag: "Construir. Escalar. Lanzar.",
        desc: "Plataformas full-stack, APIs y pipelines de datos que crecen desde el prototipo hasta producción y se mantienen ahí de forma confiable.",
      },
      {
        title: "Automatización",
        tag: "Trabajo que se ejecuta solo.",
        desc: "Flujos de trabajo, agentes y pipelines que eliminan cada paso manual entre la intención y el resultado. Todo automatizado y a tu medida.",
      },
      {
        title: "Arquitectura de Sistemas",
        tag: "Conectar todo.",
        desc: "Infraestructura y arquitectura que integra todos los componentes de la solución. La capa que hace que la magia suceda. Todo en un solo lugar.",
      },
    ],
  },

  work: {
    eyebrow: "Trabajo en progreso",
    line1: "Construyendo ahora.",
    line2: "Lanzando pronto.",
    sub: "¿Qué cartas tiene JokerLabs sobre la mesa en este momento? Estamos resolviendo problemas reales de alto impacto. Uno en fintech y otro enfocado en el comercio impulsado por IA.",
    liveBadge: "En desarrollo",
    items: [
      {
        industry: "Fintech · Servicio Cloud",
        title: "Software Modernizado para Casas de Cambio",
        desc: "Automatización completa de una operación tradicional de cambio de divisas, reemplazando procesos manuales por una solución que vive en la nube y es accesible donde y cuando quieras. Con validación de cumplimiento en tiempo real, administración centralizada de roles y un panel de reportes unificado.",
        stat: "En progreso",
        statLabel: "Pipeline de automatización",
      },
      {
        industry: "Maverick · Wildcart AI",
        title: "Plataforma de Comercio Inteligente",
        desc: "Solución de comercio impulsada por IA donde puedes configurar completamente tu tienda personalizada a través de un agente conversacional, sin necesidad de programar. Personalización en tiempo real, lógica de productos e identidad de marca gestionadas de extremo a extremo por IA.",
        stat: "En progreso",
        statLabel: "Comercio impulsados por IA",
      },
    ],
    cta: "¿Tienes un proyecto en mente? Hablemos ♠",
  },

  why: {
    eyebrow: "Por qué JokerLabs",
    line1: "Construidos de forma diferente.",
    line2: "Con propósito.",
    sub: "No diseñamos un laboratorio que hace de todo; diseñamos uno que lo resuelve todo. Aquí está por qué eso importa.",
    items: [
      {
        title: "Herramientas, No Plantillas",
        desc: "No reutilizamos lo que funcionó para otro problema: cada solución se diseña sobre tu problema real, con precisión de ingeniería. Y con un alcance definido desde el día uno, para resolver, no para reabrirse sin fin.",
      },
      {
        title: "Entregamos Antes de que se Enfríe el Café",
        desc: "Días y semanas, no trimestres. Prototipamos rápido, iteramos fuerte y entregamos tecnología funcional a tiempo, sin excusas.",
      },
      {
        title: "Cartas Sobre la Mesa. Siempre.",
        desc: "Cero humo y cero espejos. Transparencia total desde el primer día: sin costos ocultos, sin sorpresas en la factura y sin juegos.",
      },
      {
        title: "Cada Bug Tiene su Depredador",
        desc: "Los retos técnicos complejos son nuestro hábitat natural. Cuanto más difícil el problema, más lo queremos. Así funciona el laboratorio.",
      },
      {
        title: "Siempre en la Sala",
        desc: "Líneas directas, actualizaciones reales y cero intermediarios filtrando tu voz. Hablas directamente con quienes construyen.",
      },
      {
        title: "Mentes Senior. Cero Intermediarios.",
        desc: "Acceso directo a los jokers del laboratorio que construyen tu producto. Sin trabas. Sin intermediarios. Sin complicaciones. Esto no es una relación de proveedor. Es una alianza.",
      },
    ],
  },

  compare: {
    eyebrow: "Ponlos a competir",
    line1: "La mano",
    line2: "habla por sí sola.",
    recommended: "★ Recomendado",
    cols: ["JokerLabs", "Contratar Empleados", "Otras Agencias"],
    rows: [
      { label: "Costo", jl: "Justo y transparente", hire: "$$$ (salario + beneficios)", agency: "$$$ – $$$$ por proyecto" },
      { label: "Experiencia", jl: "Talento senior en 4 disciplinas", hire: "Varía según la contratación", agency: "Varía" },
      { label: "Tiempos", jl: "Rápidos y confiables", hire: "Semanas más incorporación", agency: "Generalmente más lentos" },
      { label: "Flexibilidad", jl: "Escala cuando quieras", hire: "Contratos requeridos", agency: "Solo por proyecto" },
      { label: "Enfoque", jl: "Laboratorio multidisciplinario", hire: "Especialistas en silos", agency: "Depende de la agencia" },
      { label: "Foco en cliente", jl: "Ingeniería para cualquier reto, alcance definido", hire: "Prioridades internas", agency: "Múltiples clientes a la vez" },
      { label: "Soporte", jl: "Acompañamiento continuo", hire: "Capacidad interna", agency: "Suele terminar tras la entrega" },
    ],
  },

  about: {
    eyebrow: "Sobre nosotros",
    line1: "Somos el laboratorio",
    line2: "que tiene todos los palos de la baraja.",
    lead: "JokerLabs es un laboratorio de tecnología creativa fundado por cinco ingenieros provenientes de tres ramas de la ingeniería: Mecatrónica, Biomédica y Mecánica, con especialización en inteligencia artificial, ingeniería de software, automatización y arquitectura de sistemas.",
    body1: "No somos una agencia generalista ni una consultora tradicional. Somos un laboratorio multidisciplinario diseñado para resolver problemas que viven en la intersección entre tecnología, procesos e infraestructura. Problemas que requieren todos los palos de la baraja para resolverse correctamente.",
    body2: "Con base en Colombia y trabajando a nivel global. Llevamos el talento y la innovación latinoamericana a proyectos en cualquier parte del mundo, con la calidad y disciplina de un laboratorio de primer nivel.",
    statsTitle: "El laboratorio, en números.",
    stats: [
      { value: "4", label: "Disciplinas principales" },
      { value: "5", label: "Fundadores expertos" },
      { value: "∞", label: "Problemas resueltos" },
      { value: "1", label: "Laboratorio unificado" },
    ],
  },

  process: {
    eyebrow: "Cómo trabajamos",
    line1: "La mano de cinco pasos",
    line2: "del laboratorio.",
    steps: [
      {
        title: "Alcance",
        desc: "Mapeamos el problema real en todas las disciplinas antes de escribir una sola línea de código.",
      },
      {
        title: "Diseño",
        desc: "Una arquitectura que integra IA, software e infraestructura de forma fluida.",
      },
      {
        title: "Construcción",
        desc: "Ejecución orientada al producto. Prototipamos rápido, iteramos fuerte y entregamos tecnología funcional.",
      },
      {
        title: "Despliegue",
        desc: "Implementación en tu operación: del modelo a la máquina, del dashboard a la línea de producción.",
      },
      {
        title: "Soporte",
        desc: "Nos quedamos. Monitoreo, iteración y un socio que conoce cada capa de lo que construimos.",
      },
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
        answer: "JokerLabs está impulsado por cinco fundadores provenientes de tres ramas de la ingeniería: Mecatrónica, Biomédica y Mecánica, con experiencia en inteligencia artificial, ingeniería de software, automatización y arquitectura de sistemas. Somos un laboratorio de tecnología creativa multidisciplinario con base en Colombia y alcance global. Cada proyecto cuenta con la participación directa del equipo que lo construye. Sin subcontratistas. Sin intermediarios. Sin capas entre tú y las personas que crean tu solución.",
      },
      {
        question: "¿Aceptan requisitos personalizados?",
        answer: "Sí. Nuestra ingeniería no está limitada a casos de uso predefinidos: podemos resolver problemas de cualquier industria, restricción o escala. Cada proyecto comienza con una llamada de descubrimiento para mapear el problema real y definir un alcance claro desde el día uno, y trabajamos dentro de ese alcance con disciplina, sin ciclos interminables de rehacer lo ya acordado.",
      },
      {
        question: "¿Cuál es su tiempo de entrega?",
        answer: "Depende del alcance, pero nos movemos rápido. Un MVP enfocado o un flujo de automatización puede estar en vivo en 1–3 semanas. Las plataformas más grandes generalmente toman entre 4 y 10 semanas. Definimos el alcance cuidadosamente desde el inicio y ejecutamos sin sorpresas. Velocidad sin recortar calidad: ese es el estándar JokerLabs.",
      },
      {
        question: "¿Ofrecen soporte continuo?",
        answer: "Sí. Consideramos el soporte parte del trabajo, no un complemento. No nos retiramos en la entrega. Cada proyecto incluye una fase de soporte: monitoreo, iteración y una línea directa con el mismo equipo que lo construyó. Nos quedamos el tiempo que necesites.",
      },
      {
        question: "¿Cuál es su modelo de precios?",
        answer: "Trabajamos con proyectos de alcance fijo o bajo modalidad retainer, según lo que mejor se adapte a tus necesidades. Los precios son siempre transparentes y definidos desde el inicio: sin facturas sorpresa, sin cobros misteriosos por hora. Recibes un desglose claro antes de que comience cualquier trabajo. Los precios justos son uno de nuestros compromisos principales.",
      },
    ],
  },

  team: {
    eyebrow: "El laboratorio",
    line1: "Cinco fundadores.",
    line2: "Una misión.",
    sub: "Cada fundador aporta una especialidad. Juntos cubrimos cada ángulo del problema, desde el modelo hasta la máquina.",
    roles: [
      "DevOps Engineer",
      "AI Engineer",
      "AI Engineer",
      "Frontend Engineer",
      "Fullstack Engineer"
    ],
  },

  contact: {
    eyebrow: "Contáctanos",
    line1: "Construyamos",
    line2: "algo extraordinario.",
    sub: "¿Tienes un proyecto, un problema o simplemente una idea ambiciosa? Escríbenos. Leemos todo y respondemos rápido.",
    nameLabel: "Tu nombre",
    emailLabel: "Correo electrónico",
    messageLabel: "Cuéntanos sobre tu proyecto",
    messagePlaceholder: "¿Qué estás construyendo? ¿Cuál es el problema que necesitas resolver?",
    submitLabel: "Enviar mensaje",
    sendingLabel: "Enviando…",
    responseTime: "Tiempo de respuesta habitual: menos de 24 horas. Tratamos cada consulta con seriedad, sin importar el tamaño del proyecto.",
    successTitle: "Mensaje enviado ♠",
    successMsg: "¡Gracias! Nos pondremos en contacto pronto.",
  },

  footer: {
    tagline: "Laboratorio de tecnología creativa. IA, software, automatización y sistemas bajo un mismo techo. Todos los palos de la baraja. Una mano ganadora.",
    navigateLabel: "Navegar",
    contactLabel: "Contacto",
    cta: "Iniciar un proyecto ♠",
    taglineBottom: "Todos los palos de la baraja. Una mano ganadora.",
  },
};