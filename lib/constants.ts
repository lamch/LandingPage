// Todo el copy del sitio, centralizado según §4 del spec.

export const SITE = {
  name: "ByteCodex",
  fullName: "ByteCodex Software Development",
  tagline: "Convertimos tu tiempo en software.",
  url: "https://bytecodex.pro",
  email: "desarrolloboliviano@gmail.com",
  location: "La Paz, Bolivia",
  whatsappNumber: "59163110162",
  whatsappMessage: "Hola ByteCodex, quiero cotizar un proyecto.",
};

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? SITE.whatsappMessage);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Garantías", href: "#garantias" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

export const HERO = {
  eyebrow: "// software que trabaja mientras tú duermes",
  headingPre: "Convertimos tu",
  headingHighlight: "tiempo",
  headingPost: "en software.",
  subtitle:
    "Desarrollamos sistemas a medida, chatbots con IA y automatizaciones que eliminan el trabajo manual de tu empresa. Tú te enfocas en crecer; el código se encarga del resto.",
  ctaPrimary: "Cotiza tu proyecto gratis",
  ctaSecondary: "Ver cómo trabajamos ↓",
  socialProof: "+40 proyectos entregados · 8 años de experiencia · Clientes en 4 países",
};

export type Servicio = {
  title: string;
  description: string;
  icon: "Code2" | "BrainCircuit" | "MessageSquareText" | "Workflow" | "Server" | "Compass";
};

export const SERVICIOS: Servicio[] = [
  {
    title: "Desarrollo a medida",
    description:
      "Sistemas web y de escritorio diseñados exactamente para tu operación: inventarios, ventas, facturación, reportería. Nada de plantillas genéricas.",
    icon: "Code2",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Integramos IA en tus procesos: clasificación de documentos, análisis de datos, asistentes internos entrenados con tu información.",
    icon: "BrainCircuit",
  },
  {
    title: "Chatbots automatizados",
    description:
      "Bots de WhatsApp que atienden, cotizan y agendan 24/7. Tus clientes reciben respuesta en segundos, no en horas.",
    icon: "MessageSquareText",
  },
  {
    title: "Automatizaciones",
    description:
      "Conectamos tus herramientas (Excel, ERP, correo, WhatsApp) para que los datos fluyan solos. Adiós al copiar y pegar.",
    icon: "Workflow",
  },
  {
    title: "Hosting y cloud",
    description:
      "Infraestructura administrada: servidores, dominios, SSL, backups diarios y monitoreo. Tu sistema en línea el 99.9% del tiempo.",
    icon: "Server",
  },
  {
    title: "Consultoría técnica",
    description:
      "Auditamos tu tecnología actual y te damos una hoja de ruta clara: qué migrar, qué automatizar y en qué orden.",
    icon: "Compass",
  },
];

export const PROCESO = [
  {
    step: "1",
    title: "Descubrimiento",
    meta: "semana 1",
    description:
      "Reunión sin costo. Entendemos tu operación, detectamos cuellos de botella y definimos alcance con presupuesto cerrado.",
  },
  {
    step: "2",
    title: "Diseño y prototipo",
    meta: "semanas 2–3",
    description:
      'Te mostramos pantallas navegables antes de escribir una línea de producción. Ajustamos hasta que digas "eso es".',
  },
  {
    step: "3",
    title: "Desarrollo por sprints",
    meta: "",
    description:
      "Entregas funcionales cada 2 semanas con demo en vivo. Ves el avance real, no promesas en un PDF.",
  },
  {
    step: "4",
    title: "Lanzamiento y acompañamiento",
    meta: "",
    description:
      "Capacitamos a tu equipo, migramos tus datos y te acompañamos 90 días con soporte incluido.",
  },
];

export const CASOS_EXITO = [
  {
    sector: "Transporte interdepartamental",
    title: "Marketplace de boletos con reservas en tiempo real.",
    metric: "−72%",
    metricLabel: "en tiempo de venta por boleto",
    quote: "Pasamos de planillas a un sistema que vende solo.",
    image: "caso-transporte.webp",
  },
  {
    sector: "Distribuidora de alimentos",
    title: "Bot de WhatsApp que toma pedidos y los carga al ERP.",
    metric: "+3.100",
    metricLabel: "pedidos procesados sin intervención humana en 6 meses",
    quote: "",
    image: "caso-distribuidora.webp",
  },
  {
    sector: "Estudio contable",
    title: "Automatización de reportes regulatorios.",
    metric: "40 horas/mes",
    metricLabel: "recuperadas para el equipo",
    quote: "Lo que hacíamos en una semana, ahora sale en una tarde.",
    image: "caso-contable.webp",
  },
];

export const GARANTIAS = [
  {
    title: "Garantía de entrega.",
    description:
      "Si nos atrasamos más de 15 días por causas nuestras, te descontamos el 10% del proyecto. Así de simple.",
  },
  {
    title: "Garantía de código.",
    description:
      "90 días de corrección de errores sin costo tras el lanzamiento. Si algo falla, lo arreglamos nosotros.",
  },
  {
    title: "Tu código es tuyo.",
    description:
      "Entregamos repositorio completo, documentación y credenciales. Cero dependencia forzada con nosotros.",
  },
  {
    title: "Presupuesto cerrado.",
    description:
      "El precio acordado es el precio final. Los cambios de alcance se cotizan aparte y por escrito, nunca por sorpresa.",
  },
];

export const ESTANDARES_CALIDAD = [
  "Código versionado en Git",
  "Revisión por pares",
  "Pruebas automatizadas",
  "Cifrado AES-256 en datos sensibles",
  "Backups diarios",
  "Uptime 99.9%",
  "Metodología ágil (Scrum)",
];

export const STACK = [
  "Next.js",
  "React",
  ".NET",
  "Spring Boot",
  "PostgreSQL",
  "SQL Server",
  "Docker",
  "Vercel",
  "AWS",
  "Anthropic/Claude",
  "WhatsApp Business API",
  "Tailwind",
];

export const TESTIMONIOS = [
  {
    quote:
      "ByteCodex entendió nuestro negocio mejor que consultoras que cobraban el triple. El sistema se pagó solo en cuatro meses.",
    author: "María Fernanda Quispe",
    role: "Gerente General, TransAndes S.R.L.",
  },
  {
    quote:
      "El chatbot atiende de madrugada, cotiza y agenda. Es literalmente un empleado que nunca se enferma.",
    author: "Rodrigo Peñaranda",
    role: "Dueño, Distribuidora El Valle",
  },
  {
    quote:
      "Pedimos un cambio un viernes a las 6 pm pensando que respondían el lunes. A las 8 pm ya estaba en producción.",
    author: "Carla Mendieta",
    role: "Jefa de Operaciones, Contadores Asociados La Paz",
  },
];

export const PLANES = [
  {
    name: "Impulso",
    highlighted: false,
    para: "Empezar a automatizar",
    incluye: [
      "Chatbot de WhatsApp o 1 automatización",
      "Hosting 1 año",
      "Soporte por WhatsApp",
    ],
    precio: "$490",
    prefix: "Desde",
    cta: "Empezar",
  },
  {
    name: "Crecimiento",
    highlighted: true,
    para: "Sistemas completos",
    incluye: [
      "Sistema web a medida",
      "Chatbot integrado",
      "Hosting + dominio",
      "Capacitación",
      "Soporte prioritario",
    ],
    precio: "$1.900",
    prefix: "Desde",
    cta: "Cotizar mi sistema",
  },
  {
    name: "Enterprise",
    highlighted: false,
    para: "Operaciones críticas",
    incluye: [
      "Todo lo anterior",
      "Integraciones con ERP/IA",
      "SLA con uptime garantizado",
      "Ingeniero asignado",
    ],
    precio: "A medida",
    prefix: "",
    cta: "Hablar con un ingeniero",
  },
];

export const PLANES_NOTA =
  "Precios referenciales en USD. Toda cotización formal se entrega por escrito tras la reunión de descubrimiento (gratuita).";

export const FAQ = [
  {
    question: "¿Cuánto tarda un proyecto?",
    answer:
      "Un chatbot o automatización: 2–4 semanas. Un sistema a medida: 2–4 meses según alcance. Siempre con fecha comprometida por contrato.",
  },
  {
    question: "¿Trabajan solo en Bolivia?",
    answer:
      "Nuestra base está en Bolivia, pero trabajamos de forma remota con clientes en toda Latinoamérica y España.",
  },
  {
    question: "¿Qué pasa si ya tengo un sistema antiguo?",
    answer:
      "Nos especializamos en migrar sistemas legacy (VB6, Access, planillas) a tecnología moderna sin detener tu operación.",
  },
  {
    question: "¿El chatbot usa mi número de WhatsApp?",
    answer:
      "Sí, se conecta a tu número de empresa vía API oficial o Evolution API según tu presupuesto. Tú mantienes el control total.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "40% al iniciar, 40% en la entrega del prototipo aprobado, 20% al lanzar. Aceptamos transferencia, QR y tarjeta.",
  },
  {
    question: "¿Qué necesito para empezar?",
    answer: "Solo 45 minutos para la reunión de descubrimiento. Nosotros hacemos el resto.",
  },
];

export const CTA_FINAL = {
  heading: "Cada día sin automatizar es tiempo que no vuelve.",
  text: "Agenda una reunión gratuita de 45 minutos. Sales con un diagnóstico claro y un presupuesto cerrado — sin compromiso.",
  ctaWhatsapp: "Agendar por WhatsApp",
  ctaForm: "Enviar un mensaje",
  successToast: "Mensaje enviado. Te respondemos en menos de 24 horas hábiles.",
};

export const SERVICIOS_INTERES = [
  "Desarrollo a medida",
  "Inteligencia Artificial",
  "Chatbots automatizados",
  "Automatizaciones",
  "Hosting y cloud",
  "Consultoría técnica",
  "Otro",
];

export const FOOTER_COLUMNS = {
  servicios: SERVICIOS.map((s) => s.title),
  empresa: ["Servicios", "Proceso", "Garantías", "Planes", "FAQ"],
  legal: ["Términos", "Privacidad"],
};

export const WHATSAPP_FLOAT_TOOLTIP = "¿Hablamos? Respondemos en minutos.";
