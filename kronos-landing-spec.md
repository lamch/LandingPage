# KRONOS — Landing Page Moderna (Next.js 15)

> Spec completo listo para Claude Code. Contiene identidad visual, estructura, todo el copy, componentes, animaciones y stack técnico. Ejecutar fases en orden.

---

## 1. Contexto del proyecto

**Kronos Software Development** es una empresa boliviana de desarrollo de software que ofrece soluciones de IA, hosting, sistemas a medida, chatbots automatizados y automatización de procesos. La landing tiene **un solo objetivo: generar contacto comercial** (WhatsApp / formulario). Público objetivo: PyMEs y empresas medianas de Bolivia y Latinoamérica que quieren digitalizarse.

**Concepto de marca:** el logo es un reloj de arena cuya arena se transforma en bits (1s y 0s) que vuelan. La metáfora central de toda la página es: **"Convertimos tu tiempo en software"** — el tiempo que pierdes en procesos manuales, Kronos lo transforma en sistemas que trabajan por ti.

---

## 2. Identidad visual (derivada del logo)

### Paleta de colores

```css
:root {
  --kronos-blue:    #2E7BE0;  /* azul del reloj de arena */
  --kronos-violet:  #7C3AED;  /* violeta de los bits */
  --kronos-magenta: #9333EA;  /* extremo del degradado */
  --ink:            #0F172A;  /* texto principal (slate-900) */
  --ink-soft:       #475569;  /* texto secundario (slate-600) */
  --surface:        #FFFFFF;  /* fondo principal */
  --surface-alt:    #F8FAFC;  /* secciones alternas (slate-50) */
  --gradient-brand: linear-gradient(135deg, #2E7BE0 0%, #7C3AED 60%, #9333EA 100%);
}
```

- Fondo claro predominante (como el logo), con **una sola sección oscura** (la de garantías, para darle peso).
- El degradado azul→violeta se usa con disciplina: titulares clave, CTAs primarios, iconos activos y el elemento firma. Nunca en párrafos.

### Tipografía

- **Display:** `Space Grotesk` (700/500) — geométrica, técnica, hace juego con el logo.
- **Cuerpo:** `Inter` (400/500) — legibilidad total.
- **Datos/código:** `JetBrains Mono` — para snippets, métricas y el elemento de bits.
- Escala: h1 `clamp(2.5rem, 6vw, 4.5rem)`, h2 `2.25rem`, body `1.0625rem`, caption `0.8125rem`.

### Elemento firma: "La arena de bits"

Un canvas/SVG animado en el hero donde partículas caen como arena y, al cruzar la mitad de la pantalla, se convierten en `1` y `0` que fluyen hacia la derecha (misma dirección que el logo). Sutil, ~40 partículas, respeta `prefers-reduced-motion`. Este es el único efecto grande de la página — todo lo demás son micro-transiciones discretas.

---

## 3. Stack técnico

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** + tokens CSS custom
- **Framer Motion** (reveals on-scroll, contador animado, partículas del hero)
- **shadcn/ui** solo para: Accordion (FAQ), Dialog (formulario), Tabs (servicios en móvil)
- **React Hook Form + Zod** para el formulario de contacto
- **next/image** con placeholders blur; **next/font** para las tres tipografías
- SEO: metadata API, OpenGraph, JSON-LD tipo `Organization` + `Service`
- Deploy target: **Vercel**
- Lighthouse objetivo: Performance ≥ 95, Accesibilidad ≥ 95

### Estructura de archivos

```
app/
  layout.tsx          # fonts, metadata, JSON-LD
  page.tsx            # composición de secciones
  globals.css         # tokens + base
components/
  sections/
    Hero.tsx
    Servicios.tsx
    Proceso.tsx
    CasosExito.tsx
    Garantias.tsx
    Stack.tsx
    Testimonios.tsx
    Planes.tsx
    FAQ.tsx
    CTAFinal.tsx
  ui/                 # shadcn
  BitSand.tsx         # elemento firma (canvas)
  Navbar.tsx
  Footer.tsx
  WhatsAppFloat.tsx   # botón flotante de WhatsApp
lib/
  schemas.ts          # Zod
  constants.ts        # todo el copy centralizado
public/
  logo-kronos.png     # el logo provisto
  images/             # placeholders (ver §6)
```

---

## 4. Estructura de la página y copy completo

### 4.1 Navbar (sticky, fondo blur al hacer scroll)

Logo horizontal (isotipo + KRONOS) · Enlaces: `Servicios · Proceso · Garantías · Planes · FAQ` · CTA: **"Agenda una llamada"** (botón degradado).

### 4.2 Hero

- **Eyebrow (mono, violeta):** `// software que trabaja mientras tú duermes`
- **H1:** **Convertimos tu tiempo en software.**
  (la palabra "tiempo" con el degradado de marca)
- **Subtítulo:** Desarrollamos sistemas a medida, chatbots con IA y automatizaciones que eliminan el trabajo manual de tu empresa. Tú te enfocas en crecer; el código se encarga del resto.
- **CTAs:** `Cotiza tu proyecto gratis` (primario, degradado) · `Ver cómo trabajamos ↓` (ghost)
- **Prueba social bajo los CTAs:** `+40 proyectos entregados · 8 años de experiencia · Clientes en 4 países`
- **Derecha:** el componente `BitSand` con el logo integrado.

### 4.3 Servicios (grid 3×2, cards con borde que se ilumina en hover)

**H2:** Todo lo que tu empresa necesita, bajo un mismo techo.

| Servicio | Descripción | Icono (lucide) |
|---|---|---|
| **Desarrollo a medida** | Sistemas web y de escritorio diseñados exactamente para tu operación: inventarios, ventas, facturación, reportería. Nada de plantillas genéricas. | `Code2` |
| **Inteligencia Artificial** | Integramos IA en tus procesos: clasificación de documentos, análisis de datos, asistentes internos entrenados con tu información. | `BrainCircuit` |
| **Chatbots automatizados** | Bots de WhatsApp que atienden, cotizan y agendan 24/7. Tus clientes reciben respuesta en segundos, no en horas. | `MessageSquareText` |
| **Automatizaciones** | Conectamos tus herramientas (Excel, ERP, correo, WhatsApp) para que los datos fluyan solos. Adiós al copiar y pegar. | `Workflow` |
| **Hosting y cloud** | Infraestructura administrada: servidores, dominios, SSL, backups diarios y monitoreo. Tu sistema en línea el 99.9% del tiempo. | `Server` |
| **Consultoría técnica** | Auditamos tu tecnología actual y te damos una hoja de ruta clara: qué migrar, qué automatizar y en qué orden. | `Compass` |

Cada card cierra con un link `Saber más →` que abre el Dialog de contacto con el servicio preseleccionado.

### 4.4 Proceso (timeline horizontal en desktop, vertical en móvil)

**H2:** De la idea al sistema funcionando, en 4 pasos.
*(aquí sí corresponde numeración: es una secuencia real)*

1. **Descubrimiento — semana 1.** Reunión sin costo. Entendemos tu operación, detectamos cuellos de botella y definimos alcance con presupuesto cerrado.
2. **Diseño y prototipo — semanas 2–3.** Te mostramos pantallas navegables antes de escribir una línea de producción. Ajustamos hasta que digas "eso es".
3. **Desarrollo por sprints.** Entregas funcionales cada 2 semanas con demo en vivo. Ves el avance real, no promesas en un PDF.
4. **Lanzamiento y acompañamiento.** Capacitamos a tu equipo, migramos tus datos y te acompañamos 90 días con soporte incluido.

### 4.5 Casos de éxito (3 cards con métrica grande en mono)

**H2:** Resultados, no diapositivas.

- **Transporte interdepartamental** — Marketplace de boletos con reservas en tiempo real. **−72%** en tiempo de venta por boleto. *"Pasamos de planillas a un sistema que vende solo."*
- **Distribuidora de alimentos** — Bot de WhatsApp que toma pedidos y los carga al ERP. **+3.100** pedidos procesados sin intervención humana en 6 meses.
- **Estudio contable** — Automatización de reportes regulatorios. **40 horas/mes** recuperadas para el equipo. *"Lo que hacíamos en una semana, ahora sale en una tarde."*

### 4.6 Garantías (única sección oscura, fondo `--ink` con textura sutil de bits)

**H2 (blanco):** Nuestra palabra, por escrito.

- **Garantía de entrega.** Si nos atrasamos más de 15 días por causas nuestras, te descontamos el 10% del proyecto. Así de simple.
- **Garantía de código.** 90 días de corrección de errores sin costo tras el lanzamiento. Si algo falla, lo arreglamos nosotros.
- **Tu código es tuyo.** Entregamos repositorio completo, documentación y credenciales. Cero dependencia forzada con nosotros.
- **Presupuesto cerrado.** El precio acordado es el precio final. Los cambios de alcance se cotizan aparte y por escrito, nunca por sorpresa.

**Estándares de calidad (fila de badges):** Código versionado en Git · Revisión por pares · Pruebas automatizadas · Cifrado AES-256 en datos sensibles · Backups diarios · Uptime 99.9% · Metodología ágil (Scrum)

### 4.7 Stack tecnológico (marquee de logos, gris → color en hover)

**H2:** Construimos con tecnología que no pasa de moda.
Logos: Next.js, React, .NET, Spring Boot, PostgreSQL, SQL Server, Docker, Vercel, AWS, Anthropic/Claude, WhatsApp Business API, Tailwind.

### 4.8 Testimonios (carrusel simple, 3 slides)

**H2:** Lo que dicen quienes ya automatizaron.

- *"Kronos entendió nuestro negocio mejor que consultoras que cobraban el triple. El sistema se pagó solo en cuatro meses."* — **María Fernanda Quispe**, Gerente General, TransAndes S.R.L.
- *"El chatbot atiende de madrugada, cotiza y agenda. Es literalmente un empleado que nunca se enferma."* — **Rodrigo Peñaranda**, Dueño, Distribuidora El Valle
- *"Pedimos un cambio un viernes a las 6 pm pensando que respondían el lunes. A las 8 pm ya estaba en producción."* — **Carla Mendieta**, Jefa de Operaciones, Contadores Asociados La Paz

### 4.9 Planes (3 cards, la del medio destacada con borde degradado)

**H2:** Planes claros. Sin letra chica.

| | **Impulso** | **Crecimiento** ⭐ | **Enterprise** |
|---|---|---|---|
| Para | Empezar a automatizar | Sistemas completos | Operaciones críticas |
| Incluye | Chatbot de WhatsApp o 1 automatización · Hosting 1 año · Soporte por WhatsApp | Sistema web a medida · Chatbot integrado · Hosting + dominio · Capacitación · Soporte prioritario | Todo lo anterior · Integraciones con ERP/IA · SLA con uptime garantizado · Ingeniero asignado |
| Desde | **$490** | **$1.900** | **A medida** |
| CTA | Empezar | Cotizar mi sistema | Hablar con un ingeniero |

Nota bajo la tabla: *Precios referenciales en USD. Toda cotización formal se entrega por escrito tras la reunión de descubrimiento (gratuita).*

### 4.10 FAQ (Accordion, 6 preguntas)

1. **¿Cuánto tarda un proyecto?** Un chatbot o automatización: 2–4 semanas. Un sistema a medida: 2–4 meses según alcance. Siempre con fecha comprometida por contrato.
2. **¿Trabajan solo en Bolivia?** Nuestra base está en Bolivia, pero trabajamos de forma remota con clientes en toda Latinoamérica y España.
3. **¿Qué pasa si ya tengo un sistema antiguo?** Nos especializamos en migrar sistemas legacy (VB6, Access, planillas) a tecnología moderna sin detener tu operación.
4. **¿El chatbot usa mi número de WhatsApp?** Sí, se conecta a tu número de empresa vía API oficial o Evolution API según tu presupuesto. Tú mantienes el control total.
5. **¿Cómo se paga?** 40% al iniciar, 40% en la entrega del prototipo aprobado, 20% al lanzar. Aceptamos transferencia, QR y tarjeta.
6. **¿Qué necesito para empezar?** Solo 45 minutos para la reunión de descubrimiento. Nosotros hacemos el resto.

### 4.11 CTA final (fondo degradado de marca)

- **H2 (blanco):** Cada día sin automatizar es tiempo que no vuelve.
- **Texto:** Agenda una reunión gratuita de 45 minutos. Sales con un diagnóstico claro y un presupuesto cerrado — sin compromiso.
- **CTAs:** `Agendar por WhatsApp` (blanco sólido) · `Enviar un mensaje` (outline blanco, abre Dialog)
- **Formulario (Dialog):** Nombre · Empresa · WhatsApp · Servicio de interés (select) · Cuéntanos tu problema (textarea). Validación Zod, honeypot antispam, toast de éxito: *"Mensaje enviado. Te respondemos en menos de 24 horas hábiles."*

### 4.12 Footer

Logo + tagline *"Convertimos tu tiempo en software."* · Columnas: Servicios / Empresa / Legal (Términos, Privacidad) · Contacto: hola@kronos.dev.bo · La Paz, Bolivia · Redes: LinkedIn, GitHub, Instagram · `© 2026 Kronos Software Development`

### Elementos globales

- **`WhatsAppFloat`:** botón flotante verde abajo a la derecha, aparece tras 400px de scroll, con tooltip *"¿Hablamos? Respondemos en minutos."*
- Todos los CTAs de WhatsApp usan `https://wa.me/59170000000?text=Hola%20Kronos...` (número placeholder).

---

## 5. Animaciones (Framer Motion)

- Reveals on-scroll: `opacity 0→1, y 24→0`, `duration 0.5`, stagger `0.08` en grids. Una sola vez (`viewport={{ once: true }}`).
- Contadores de métricas (casos de éxito) animan al entrar en viewport.
- Hover en cards: borde pasa de `slate-200` a degradado + elevación sutil.
- Todo condicionado a `prefers-reduced-motion: reduce` → sin animación.

---

## 6. Imágenes (placeholders a generar/reemplazar)

| Archivo | Descripción | Uso |
|---|---|---|
| `hero-dashboard.webp` | Mockup de dashboard con gráficos azul/violeta sobre fondo claro | Hero (fallback si no hay canvas) |
| `caso-transporte.webp` | Foto de terminal de buses moderna, tratamiento duotono azul | Caso 1 |
| `caso-distribuidora.webp` | Almacén con operario usando celular, duotono violeta | Caso 2 |
| `caso-contable.webp` | Oficina con pantallas de reportes, duotono azul | Caso 3 |
| `og-image.png` | 1200×630, logo + "Convertimos tu tiempo en software" sobre degradado | OpenGraph |

Mientras no existan, usar `next/image` con un componente `PlaceholderImage` (fondo degradado suave + icono).

---

## 7. SEO y metadata

```ts
title: "Kronos | Desarrollo de Software, IA y Automatización en Bolivia"
description: "Sistemas a medida, chatbots de WhatsApp con IA, automatizaciones y hosting. Presupuesto cerrado, garantía por escrito y soporte real. Cotiza gratis."
keywords: desarrollo de software Bolivia, chatbot WhatsApp, automatización, sistemas a medida, IA para empresas
```

JSON-LD `Organization` con nombre, logo, área servida (BO/LATAM) y `ContactPoint`.

---

## 8. Fases de ejecución para Claude Code

1. **Fase 1 — Base:** proyecto Next.js 15 + Tailwind v4 + fuentes + tokens en `globals.css` + `constants.ts` con todo el copy de este documento.
2. **Fase 2 — Layout:** Navbar sticky, Footer, WhatsAppFloat, metadata + JSON-LD.
3. **Fase 3 — Hero + BitSand:** hero completo con el canvas de partículas (con fallback estático).
4. **Fase 4 — Secciones de contenido:** Servicios, Proceso, Casos, Garantías, Stack.
5. **Fase 5 — Conversión:** Testimonios, Planes, FAQ, CTA final + formulario con Zod (server action que por ahora hace `console.log` y devuelve éxito).
6. **Fase 6 — Pulido:** animaciones, responsive ≤ 360px, focus visible, `prefers-reduced-motion`, Lighthouse ≥ 95, build limpio.

**Regla de oro:** el degradado es sal, no plato principal. Si una sección tiene más de dos elementos con degradado, quitar uno.
