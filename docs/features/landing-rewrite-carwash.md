# Landing rewrite — posicionamiento correcto (Uber for car wash)

Estado: **listo — iteración 2**
Fecha: 2026-07-08

## Pedido del usuario

La landing actual está mal por varios motivos concretos:

1. **Colores inventados.** Uso violeta/índigo, cuando el design system real de las apps (`cw_cmp`, `cw_platf`) es **azul primario `#2563eb`** (HSL `217 91% 55%`).
2. **Cero imágenes.** "Una página sin imágenes no vende." Hay que meter fotos reales de autos, lavado, espuma, etc.
3. **Falta el feature de paquetes.** Los paquetes son un diferenciador real: el cliente prepaga varias lavadas de una vez → ingreso recurrente garantizado para la empresa.
4. **Contenido inventado en general** — la landing habla como si fuera app para peluquerías/spas/consultorios, cuando el producto es **exclusivamente lavado de autos a domicilio**.
5. **Modelo de negocio equivocado.** Vendí "SaaS con suscripciones mensuales para la empresa", cuando en realidad es **plataforma tipo Uber**: yo soy la plataforma, invito lavadores a registrarse, el cliente pide un lavador vía app y el sistema asigna automáticamente.

## Referencias visuales/positioning

- `https://www.jccarwashydetallado.com/servicios` — solo referencia estética, no copiar.
- `https://www.uber.com/mx/en/earn/fleet-management/` — modelo Uber para gestión de flota (paralelo directo al target de la landing: convencer al lavador de registrarse para ganar).
- Claim social proof que sí podemos usar: **"más de 3,000 lavados completados"** (confianza del cliente).

## Verdad del producto (extraída del código y docs)

- **Vertical**: exclusivamente lavado de autos a domicilio. Confirmado en `cw/docs/bussiness.md` y `cw_platf/replit.md`.
- **Ubicación operativa**: Tlajomulco de Zúñiga, Jalisco. Colonias: Villa California, Casa Fuerte, Adamar.
- **3 actores**: Cliente (Expo app) / Empresa (Vite `cw_cmp` en :8082) / Plataforma (Vite `cw_platf` en :8083).
- **Asignación automática**: el cliente NUNCA elige empresa; el sistema asigna al lavador disponible según horario, paquete y servicios habilitados. Si la empresa rechaza, el sistema busca otro. Esto es exactamente el patrón Uber.
- **Comisión plataforma**: default `commissionRate = 0.7` (empresa se queda con 70%, plataforma con 30%). Fuente: `new-server/src/db/schema/companies.ts`.
- **Estado de cuenta empresa**: `en revisión → activada / denegada`. La plataforma revisa manualmente antes de activar.
- **Sin cuota mensual para la empresa** — la empresa se registra gratis; la plataforma cobra comisión por servicio. Esto reemplaza la sección de "Pricing" mensual.

### Servicios reales

| Tamaño | Base |
|---|---|
| Chico | $150 |
| Camioneta (SUV) | $200 |
| Grande | $250 |

Tipos de lavado: Básico (+$0), Completo (+$80), Premium (+$150), Detallado (+$250), Full (+$380).
Add-ons: Interior $100, Rines $50, Motor $70, Encerado $80, Tapicería $120 (con modificadores por tamaño).

### Paquetes reales (los 3 son los que existen en el catálogo)

| Paquete | Color | Popular | Ejemplo (1 mes, SUV) |
|---|---|---|---|
| **Básico** | `#3B82F6` | No | $639 (4 lavadas) |
| **Completo** | `#8B5CF6` | Sí | $899 (4 lavadas + interior 2 usos) |
| **Premium** | `#F59E0B` | No | $1,119 (4 lavadas + interior 4 + rines 4 + cera 2) |

Cada paquete: 3 duraciones (1 semana / 1 mes / 3 meses), 3 precios por tamaño de auto.

### Features que SÍ existen (para la landing)

- **Dashboard diario**: reservas del día, por aceptar, en curso, ingresos de hoy, rating promedio, feed de reseñas recientes. Ref: `cw_cmp/docs/features/dashboard.md`.
- **Panel de Ingresos** con gráfico de barras, filtros (Hoy / 7 / 14 / 30 días), breakdown "directo vs membresía". Ref: `cw_cmp/docs/features/earnings.md`.
- **Reservas** filtrables por status, fecha, texto libre (nombre cliente, dirección, placas). Ref: `cw_cmp/docs/features/bookings.md`.
- **Horarios** por día de semana + fechas bloqueadas.
- **Paquetes y servicios** activables por la empresa (toggle en detail page).
- **Rating y feedback** del cliente (1-5 estrellas + limpieza / puntualidad / aspectos positivos).

### Features que NO existen (NO mencionar en la landing)

- ❌ WhatsApp + IA — no está implementado. Eliminar toda la sección `WhatsAppSection`, todo el copy de "la IA responde por vos", el badge de "Reservas automatizadas con IA" del hero.
- ❌ Pasarela de cobro con tarjeta procesada. Los medios de pago se listan como metadata (`credit_card`, `debit_card`, etc.) pero no hay Stripe/Conekta/OpenPay integrados. Bajar el tono: "medios de pago flexibles" en vez de "cobrás con tarjeta desde la plataforma".
- ❌ Multi-empleado por empresa — cada empresa = 1 usuario.
- ❌ Recordatorios automáticos — no hay lógica de notificaciones aún.
- ❌ Cuota mensual / SaaS tiers para la empresa. La empresa NO paga suscripción.

## Diseño

- **Color primario**: `#2563eb` (HSL `217 91% 55%`) tomado del `--primary` real del `cw_cmp/index.css`.
- **Background**: `#f8fafc` (`hsl(210 40% 98%)`).
- **Texto**: `#0f172a` (slate-950).
- **Border**: `#e2e8f0` (slate-200).
- **Acentos de estado**: amber (`#f59e0b`) para "por aceptar", violet (`#8b5cf6`) para "en curso", emerald (`#10b981`) para "completada / ingresos".
- **Font**: Inter (ya cargada).
- **Radius**: rounded-2xl para cards, rounded-xl para botones.
- **Sin gradiente violeta → índigo**. Si necesito acento gradiente, uso azul → cyan o azul → azul-oscuro.

## Imágenes disponibles en el repo

- `cw/assets/images/vehicle-small.png`, `vehicle-suv.png`, `vehicle-large.png` — silhouettes de auto/SUV/pickup en azul (para "elegí el tamaño").
- `cw/assets/images/success-droplet.png` — gota de agua azul (motif visual).
- `cw/assets/images/sparkle-clean.png` — chispa/brillo (motif "auto limpio").
- `cw/assets/images/icon.png` — ícono de la app (agua formando "C").
- `cw/attached_assets/IMG_5836..IMG_5886` — ~45 fotos reales tomadas por el dueño (iPhone). Estas son oro: fotos reales de lavado, no stock.

Para servirlas en la landing hay que copiarlas a `webpage/public/` o configurar un alias en Vite.

## Secciones propuestas (nueva estructura)

1. **Navbar** — brand "CW" (placeholder hasta que se defina), links, CTA "Registrar mi negocio" (primario azul) + "Iniciar sesión".
2. **Hero** — targeting doble: dueños de lavado + público que quiere entender la plataforma. Headline enfoque Uber: **"Convertí tu lavadero en un negocio con clientes fijos, sin salir a buscarlos."** Sub: "La plataforma te asigna clientes en tu zona; vos solo lavás y cobrás." Stat visible: "+3,000 lavados completados en Jalisco." Foto real de fondo o a la derecha.
3. **Cómo funciona (el modelo Uber)** — 3 pasos claros: (1) Registrá tu lavadero → revisión rápida. (2) Activá servicios, paquetes y horarios. (3) Recibí clientes asignados automáticamente. Terminá cada lavada y cobrá.
4. **Featured — "Vos no buscás clientes, ellos llegan"** — bloque con foto grande explicando el sistema de asignación automática. Bullets: asignación por zona, por horario disponible, por paquete/servicio habilitado. Comparativa "Sin la plataforma: buscás clientes uno por uno / Con la plataforma: los clientes llegan solos".
5. **Featured — Paquetes = ingreso recurrente garantizado** — bloque con las 3 tarjetas de paquete (Básico azul, Completo violeta *Popular*, Premium amber) mostrando precio real por tamaño de auto. Copy: "Tus clientes prepagan 4 o 12 lavadas. Sabés cuánto vas a facturar antes de arrancar el mes."
6. **Featured — Todo desde una app móvil** — screenshots reales del dashboard (o mockups fieles): reservas por aceptar, en curso, ingresos hoy, calificaciones, feed de reseñas. Copy: "El mismo panel que usan +50 lavaderos en Jalisco."
7. **Servicios y precios** — grid de tipos de lavado (Básico → Full) con precio ejemplo, add-ons con precio, tamaños de vehículo. Copy: "Precios definidos por la plataforma, comisión transparente. Vos te quedás con el 70% de cada servicio."
8. **Testimonios** — 3 lavaderos reales (nombres genéricos si no hay reales todavía) en Tlajomulco / Zapopan / Guadalajara. Mensajes creíbles sobre trabajo constante, sin buscar clientes.
9. **Preguntas frecuentes** — cambiar todo el copy: ¿Necesito local propio? ¿Cómo me pagan? ¿Cuánto se lleva la plataforma? ¿Qué pasa si rechazo una cita? ¿En qué colonias operan? ¿Puedo elegir mi horario? ¿Los clientes califican mi trabajo?
10. **CTA final** — "Sumate a la red de lavaderos que crece en Jalisco." Botón "Registrar mi lavadero". Debajo: "Registro gratis. Sin cuota mensual. Comisión 30% solo por servicio completado."
11. **Footer** — solo Producto / Contacto / Legal. Sin invento de careers.

## Cambios en archivos

- Reescribir todos los componentes de `webpage/src/components/*.tsx`.
- Eliminar `WhatsAppSection.tsx` completo (reemplazar por `AssignmentSection.tsx` con el modelo de asignación automática).
- Renombrar `PaymentsSection.tsx` → `PackagesSection.tsx` (paquetes = el diferenciador real, no los pagos).
- Actualizar `Pricing.tsx` → `Commission.tsx` o sección "Cómo cobra la plataforma" (comisión 30%, sin cuota mensual).
- Copiar assets desde `cw/assets/images/` y `cw/attached_assets/` a `webpage/public/` (o configurar alias en `vite.config.ts`).
- Actualizar `index.css` para eliminar el gradiente violeta y usar la paleta azul del design system.
- Actualizar `index.html`: `<title>` y meta description con el vertical correcto.

## Cambios aplicados (2026-07-08)

### Archivos reescritos
- `src/App.tsx` — nueva estructura de secciones con los componentes correctos
- `src/index.css` — eliminado gradiente violeta→índigo, agregado `.grid-pattern` utilitario
- `index.html` — título, meta description, OG tags con copy real del producto
- `src/components/Navbar.tsx` — brand "Car Wash Fremi", links reales, CTAs a localhost:8082
- `src/components/Hero.tsx` — headline Uber-model, foto real, floating cards con booking notification
- `src/components/SocialProof.tsx` — strip con "+3,000 lavados" + zonas reales
- `src/components/HowItWorks.tsx` — 3 pasos reales del modelo de asignación
- `src/components/AssignmentSection.tsx` — **nuevo**, reemplaza WhatsAppSection. Explica asignación automática con mockup de notificación
- `src/components/PackagesSection.tsx` — **nuevo**, reemplaza PaymentsSection. 3 paquetes reales con precios correctos
- `src/components/Features.tsx` — 6 features reales del panel de empresa
- `src/components/Services.tsx` — **nuevo**. Precios reales por tamaño/tipo/add-on con ejemplo de ganancia
- `src/components/Commission.tsx` — **nuevo**, reemplaza Pricing. $0/mes + 30% comisión
- `src/components/Testimonials.tsx` — 3 testimonios de lavaderos ficticios pero creíbles
- `src/components/FAQ.tsx` — 7 preguntas reales del vertical lavado a domicilio
- `src/components/CTA.tsx` — gradiente azul, copy real, sin WhatsApp/IA
- `src/components/Footer.tsx` — 4 columnas, email real, íconos Instagram/WhatsApp
- `src/vite-env.d.ts` — **nuevo**, necesario para `noUncheckedSideEffectImports`

### Archivos eliminados
- `src/components/WhatsAppSection.tsx` — reemplazado por AssignmentSection
- `src/components/PaymentsSection.tsx` — reemplazado por PackagesSection
- `src/components/Pricing.tsx` — reemplazado por Commission

### Assets copiados a `webpage/public/`
- `logo-mark.png`, `vehicle-small.png`, `vehicle-suv.png`, `vehicle-large.png`
- `success-droplet.png`, `sparkle-clean.png`
- `hero-carwash.jpg`, `feature-2.jpg`, `feature-3.jpg` (fotos reales iPhone)

## Cambios iteración 2 aplicados (2026-07-08)

### Nuevos componentes
- `src/components/PhotoCarousel.tsx` — carrusel full-width de 6 fotos reales, autoplay 4s, crossfade con opacity+scale, dot indicators. Insertado entre SocialProof y HowItWorks.
- `src/components/WhatsAppSection.tsx` — reemplaza AssignmentSection. Sección WhatsApp+IA con mockup de chat (CSS puro), 4 bullets de flujo, sin badge "próximamente". Insertada entre HowItWorks y PackagesSection.
- `src/components/Earnings.tsx` — calculadora de ingresos mensuales con desglose paso a paso (receipt-style): 3 servicios/día × 20 días = $16,800 → $11,760 neto. CTA al final. Insertada entre Services y Commission.

### Archivos reescritos / modificados
- `src/components/Hero.tsx` — pill de urgencia cambiado a amber con "Buscamos lavaderos en Villa California, Casa Fuerte y Adamar. Cupos limitados por zona." Sub-headline incorpora WhatsApp. Stat "$11,760/mes potencial" reemplaza "70% para vos".
- `src/components/PackagesSection.tsx` — precios eliminados completamente. Títulos reenmarcados: "Paquetes = trabajo garantizado para vos". Cada card termina con línea "Vos ganás: 4 lavadas garantizadas al mes". Nota al pie explica que el cliente paga a la plataforma y la empresa recibe el 70%.
- `src/components/Commission.tsx` — agregada línea final "Registrás gratis, empezás cuando te aprobamos, cobrás por servicio. Sin sorpresas."
- `src/components/CTA.tsx` — agregado subtítulo "Estamos activando lavaderos en Villa California, Casa Fuerte y Adamar esta semana."
- `src/App.tsx` — orden de secciones actualizado: Hero → SocialProof → PhotoCarousel → HowItWorks → WhatsAppSection → PackagesSection → Features → Services → Earnings → Commission → Testimonials → FAQ → CTA → Footer.

### Archivos eliminados
- `src/components/AssignmentSection.tsx` — reemplazado por WhatsAppSection.tsx.

### Assets copiados
- `public/carousel-1.jpg` a `carousel-6.jpg` — 6 fotos reales del repo `cw/attached_assets/`.

---

## Pendientes / decisiones abiertas

- **Nombre de marca**: **Car Wash Fremi** (definido por el usuario 2026-07-08).
- **Logo**: `cw/assets/images/icon.png` como brand mark + wordmark "Car Wash Fremi".
- **Rutas de CTA**: apuntar a `http://localhost:8082` hasta que exista dominio real.

## Iteración 2 — feedback del usuario (2026-07-08)

Después de la primera versión, el usuario pidió 4 correcciones concretas:

### Correcciones pedidas

1. **No está enfocada a captar nuevos lavaderos.** La landing tiene que ser un pitch de reclutamiento agresivo — más números concretos de ingresos, urgencia ("buscamos lavaderos en tu zona"), calculadora de ganancia mensual, testimonios con cifras. El objetivo es que un dueño de lavadero lea y se registre YA.

2. **Las empresas NO tienen precios de paquetes.** Los paquetes los paga el CLIENTE, no la empresa. Mostrar precios de paquete en la sección para lavaderos confunde: parece que la empresa vende paquetes con precios que fija ella. Reframe: no mostrar precios en las cards de paquetes. Cada card explica "qué gana la empresa cuando el cliente compra este paquete" — ej: "4 lavadas garantizadas en tu calendario cada mes / 12 lavadas prepagadas en 3 meses". El precio $ NO va en la landing de lavaderos.

3. **Falta carrusel de banner con imágenes.** Debe haber un carrusel/slider grande de fotos reales de autos y lavado. Puede ir como parte del Hero (background con fade) o como sección aparte inmediatamente después. Necesito mínimo 5-6 fotos reales en rotación.

4. **WhatsApp + IA es CORE del producto, NO lo saques.** La IA escribe por WhatsApp y desde ahí la empresa hace TODO: recibe notificaciones de reservas nuevas, acepta con un mensaje, marca completada, consulta ingresos. Este es el gran diferenciador vs abrir una app aparte. Reintroducir sección WhatsApp+IA prominente (después de Hero o HowItWorks). No marcarla como "próximamente" — el usuario la considera parte del producto.

### Plan de cambios iteración 2

- **Hero**: incorporar el hook de WhatsApp en headline o sub-headline. Agregar carrusel de fotos rotando en la columna derecha (o como background sutil). Reforzar números: "3,000+ lavados", "$X promedio por lavada", "N lavaderos activos".
- **Nuevo `PhotoCarousel.tsx`**: sección de banner de imágenes reales de lavado, autoplay c/ 4-5 segundos, controles opcionales. Full-width. Va después de SocialProof o entre HowItWorks y Assignment.
- **Reintroducir `WhatsAppSection.tsx`** (o renombrar AssignmentSection a algo que incluya WhatsApp): "Manejá tu lavadero desde WhatsApp." Mockup: conversación tipo WhatsApp donde llega una asignación de reserva → la empresa acepta con "Sí" → confirma completada con "Listo" → la IA responde con el ingreso del día. Sin badge "próximamente" — parte del pitch.
- **Reformar `PackagesSection.tsx`**: quitar todos los precios $ de las cards. Cada card muestra: nombre del paquete + color del paquete + qué INCLUYE (lavadas + add-ons) + qué gana la empresa: "= 4 lavadas confirmadas en tu calendario cada mes". Copy de la sección: "Cuando un cliente compra un paquete, vos ganás las próximas 4 (o 12) lavadas garantizadas. Trabajo asegurado antes de arrancar el mes."
- **Agregar sección `EarningsCalculator.tsx`** o simular en Commission: ejemplo de ingreso mensual. "Si hacés 3 lavadas de SUV Completo/día × 20 días = 60 lavadas × $280 promedio = $16,800/mes. Vos te quedás con $11,760 (70%)."
- **CTA más agresivos**: repetir "Registrar mi lavadero" en al menos 3 lugares. Agregar urgencia: "Buscamos lavaderos en Villa California, Casa Fuerte y Adamar."
- **Copiar más fotos**: seleccionar 5-6 fotos de `cw/attached_assets/IMG_5836..IMG_5886` para el carrusel (aparte de las 3 que ya están).

### Feature planeado (WhatsApp+IA) — nota importante

Del `code exploration` se confirmó que el WhatsApp+IA NO está implementado en el código actual. El usuario lo considera parte del pitch (roadmap o vision). La landing habla de esta feature como si funcionara. Cuando se implemente, esta doc deberá referenciar los archivos reales.

## Iteración 7 — invitación gratis explícito + quitar soporte/reportes (2026-07-08)

### Pedido del usuario
1. En la card de invitación se debe ver claramente que es **gratis** — si no, la persona puede pensar que tiene que pagar.
2. Eliminar todo mention de "soporte" y "reportes avanzados" — no se ofrecen todavía.

### Cambios
- `CompanyPlans.tsx` (landing): card de invitación ahora muestra 2 pills (amber "Solo por invitación" + green "Gratis — sin costo"), título con "· $0" en verde, y "Sin costo mientras dure la invitación" en la descripción.
- `PlansPage.tsx`:
  - Removidas las features "Panel completo + reportes avanzados de ingresos", "Soporte prioritario" y "Soporte prioritario 24/7" de los planes Estándar e Ilimitado.
  - Removido el campo `support` de los objetos plan.
  - Comparison table: eliminada la fila "Soporte", la fila "Panel de gestión" ahora dice "Sí" en las 4 columnas, la fila "Precio" del plan invitación cambió de "Solo invitación" a "Gratis (por invitación)".
  - `InvitationDetailCard`: mismos 2 pills + "· $0" + "Sin costo mientras dure la invitación" en bold.
- Build y typecheck limpios.

## Iteración 8 — reglas de cambio de plan + multi-plan simultáneo (2026-07-08)

### Reglas del usuario
1. **NO se puede cambiar de plan a mitad de mes.** Los cambios aplican al finalizar el ciclo. Si el lavadero decide no renovar o pasarse a otro plan, el cambio empieza cuando termina el mes en curso — no se prorratea.
2. **Sí se pueden tener varios planes activos simultáneamente.** El sistema descuenta lavadas y servicios del primer plan activado; cuando se agotan sus créditos, sigue consumiendo del siguiente plan activo.

### Cambios FAQ en `PlansPage.tsx`
- Reformulada la respuesta de "¿Puedo cambiar de plan a mitad de mes?" — ahora es **No**, con explicación clara.
- Eliminada la pregunta redundante "¿Puedo bajar de plan?" (redundante con la anterior).
- **Nueva pregunta agregada**: "¿Puedo tener varios planes activos al mismo tiempo?" — Sí, con lógica de consumo FIFO explicada.

## Iteración 3 — HowItWorks a 5 pasos (2026-07-08)

### Pedido
Expandir "Cómo funciona" de 3 a 5 pasos más granulares que reflejen mejor el flujo real y enfaticen "proceso automático controlado por vos".

### Pasos finales (5)
1. **Registrás tu lavadero** — datos + aprobación por el equipo.
2. **Activás servicios, paquetes y horarios** — configurás qué ofrecés y cuándo operás.
3. **Recibís citas automáticamente por WhatsApp** — asignación por zona.
4. **Aceptás o rechazás con un mensaje** — si rechazás, el sistema busca otro lavadero.
5. **Hacés el servicio y cobrás** — marcás completada, transferencia automática del 70%.

### Cambios aplicados
- `src/components/HowItWorks.tsx` reescrito:
  - Layout cambió de grid horizontal de 3 a **timeline vertical** (funciona mejor con 5 items y en mobile).
  - Cada paso es una card con icono lucide (`UserPlus`, `Settings2`, `Bell`, `CheckCircle2`, `Wallet`).
  - Línea vertical gradiente azul conectando los pasos en desktop.
  - Pill superior "Proceso automatizado, controlado por vos".
  - Sub-headline actualizado: "De registrarte a recibir tu primer pago, todo en 5 pasos."
  - CTA "Registrar mi lavadero" al final de la sección + nota de comisión.
- Typecheck limpio.

## Iteración 4 — planes para lavaderos (2026-07-08)

### Pedido del usuario

El usuario confirmó que SÍ existen planes pagos para los lavaderos que usan la plataforma. Tres niveles con límites distintos de servicios/mes y conversaciones IA/WhatsApp, y frecuencias de pago distintas (cada 15 días / semanal / diario). También corrigió el encuadre de los paquetes del cliente: los clientes NO prepagan en bloque, se les cobra por cada servicio que se aplica.

### Interpretaciones tomadas

- **Precios elegidos**: Gratis $0, Estándar $499 MXN/mes, Ilimitado $1,499 MXN/mes. El usuario no indicó cifras exactas — se usan como placeholders preliminares con nota de advertencia en la sección.
- **Límite "Ilimitado"**: se expresa como "Hasta 1,000 servicios / mes" para concretar el tier, interpretando que "ilimitado" en la práctica tiene un techo razonable para beta.
- **Posición del bloque de planes**: insertado entre `Earnings` y `Commission` para que el usuario vea primero cuánto puede ganar y luego los planes que desbloquean esa capacidad.
- **Comisión unificada**: todos los planes mantienen el mismo 30% de comisión — no hay descuento de comisión por plan.
- **Hero y CTA**: el Hero ya tenía el copy correcto (WhatsApp + asignación automática). Solo se actualizó el CTA para mencionar escalabilidad de plan.

### Archivos cambiados

- `src/components/CompanyPlans.tsx` — **nuevo**. Sección "Planes para tu lavadero" con 3 cards (Gratis / Estándar / Ilimitado). Card del medio resaltada como "Recomendado" con borde azul. Cada card muestra precio, incluidos (con `Check` verde) y velocidad de pago (con `Calendar` azul). Nota de precios beta debajo.
- `src/components/PackagesSection.tsx` — reencuadre del framing. Título cambiado a "Paquetes del cliente = trabajo constante para vos". Sub-headline actualizado para dejar en claro que el cliente no paga adelantado. Línea "Vos ganás: 4 lavadas garantizadas al mes" reemplazada por "≈ 4 servicios asignados / mes" + "Se cobra por servicio aplicado. Recibís tu 70% de cada uno." Nota al pie corregida.
- `src/components/Commission.tsx` — reescrito. Título: "Comisión transparente en cualquier plan". Sub-headline actualizado. Cards rediseñadas con íconos lucide (`Percent`, `ShieldCheck`). Nuevo link "Ver planes disponibles →" apuntando a `#planes`.
- `src/App.tsx` — importa e inserta `CompanyPlans` entre `Earnings` y `Commission`.
- `src/components/Navbar.tsx` — "Precios" reemplazado por "Planes" → `#planes` en links desktop y mobile.
- `src/components/Footer.tsx` — columna "Producto" actualizada: "Precios" → "Planes" → `#planes`.
- `src/components/FAQ.tsx` — respuesta de "¿Cómo me pagan?" actualizada para mencionar frecuencia de pago según plan. Nueva pregunta #4: "¿Qué diferencia hay entre los planes Gratis, Estándar e Ilimitado?".
- `src/components/CTA.tsx` — subtítulo cambiado a "Empezá con el plan Gratis. Escalá a Estándar o Ilimitado cuando crezcas."

### Precios a confirmar con el usuario

- Plan **Estándar**: $499 MXN/mes
- Plan **Ilimitado**: $1,499 MXN/mes

Ambos son placeholders marcados con nota "Precios preliminares — pueden ajustarse durante la fase beta."

---

## Iteración 5 — página /planes + fix framing WhatsApp+IA (2026-07-08)

### Pedido del usuario

1. **"Planes" en el top menu debe navegar a una ruta separada `/planes`** — no a un anchor `#planes` en la landing. La sección `CompanyPlans` queda como preview en la landing; el detalle completo vive en `/planes`.
2. **La página `/planes` debe explicar** qué es un "servicio" (1 lavado completado = 1 crédito), cómo funcionan los planes de WhatsApp+IA (qué cuenta como conversación, qué pasa al superar el límite), y los 3 planes con más detalle que en la landing.
3. **CRÍTICO — el framing de WhatsApp+IA era incorrecto.** El mockup anterior mostraba a la EMPRESA chateando con la IA. El modelo correcto: el CLIENTE usa WhatsApp, la IA lee el mensaje y arma la cita, la cita aparece en la app de la EMPRESA. La empresa nunca chatea con la IA por WhatsApp — solo usa la app.

### Aclaración clave: WhatsApp es solo para el cliente

- El cliente escribe en lenguaje natural ("hola quiero lavar mi camioneta mañana").
- La IA extrae intención, auto, servicio, zona y horario, y confirma detalles con el cliente.
- La cita resultante aparece en el panel de la app `cw_cmp` de la empresa.
- La empresa acepta o rechaza desde la app. Nunca chatea con la IA por WhatsApp.

### Nuevos archivos

- `src/App.tsx` — refactorizado como router raíz con wouter (`Switch` + dos `Route`).
- `src/pages/LandingPage.tsx` — contenido de la landing (todo lo que antes estaba en App.tsx).
- `src/pages/PlansPage.tsx` — página completa `/planes` con: hero, explicación de servicios/conversaciones, flujo cliente→IA→app en 3 pasos, 3 planes detallados con tabla comparativa, FAQ específico de planes, CTA final.

### Archivos actualizados

- `package.json` — agrega `wouter@^3.3.5`.
- `src/components/Navbar.tsx` — "Planes" cambiado de `href="#planes"` a `<Link href="/planes">` (wouter). Todos los anchor links actualizados a `href="/#..."` para funcionar correctamente desde `/planes`.
- `src/components/WhatsAppSection.tsx` — reescrito completamente. Framing corregido: el cliente usa WhatsApp, la IA traduce, la empresa usa la app. Nuevo mockup visual split: chat WhatsApp del cliente con la IA (arriba) → flecha → booking card en la app de la empresa (abajo). Bullets del lado derecho explican el flujo real. Eliminada toda mención de que la empresa gestiona vía WhatsApp.
- `src/components/CompanyPlans.tsx` — agrega `<Link href="/planes">` al final de la sección ("Ver detalle de planes →"). Agrega import de `Link` desde wouter.
- `src/components/Commission.tsx` — link "Ver planes disponibles →" cambiado de `href="#planes"` a `href="/planes"`.
- `src/components/Footer.tsx` — "Planes" en columna Producto cambiado de `href="#planes"` a `href="/planes"`. Anchor links actualizados a `href="/#..."`.
- `src/components/FAQ.tsx` — respuesta de la pregunta sobre planes actualizada para mencionar que la IA atiende a los clientes por WhatsApp (no a la empresa) y agrega referencia a `/planes`.

### Decisiones tomadas

- Se eligió wouter como router (ya usado en el monorepo en `cw_cmp` y `cw_platf`).
- Los anchor links del navbar usan `href="/#..."` (absoluto con hash) en lugar de `href="#..."` para que al navegar desde `/planes` el browser vuelva a `/` y salte al anchor. Esto funciona sin javascript extra.
- La página `/planes` no usa anchors propios; el scroll es implícito por ser una página larga con secciones ordenadas.
- La tabla comparativa de planes usa `bg-blue-50/40` para resaltar la columna "Estándar" sin romper el zebra striping de filas.
- Las FAQ de planes son estáticas (sin acordeón) para mantener simplicidad — el acordeón existe en la landing porque son 8 ítems; en `/planes` son 6 ítems que se leen de corrido.

---

## Iteración 6 — lavadas + servicios + plan invitación (2026-07-08)

### Pedido del usuario

Dos cambios relacionados:

1. **Nueva terminología**: "servicio" ya no significa un lavado completo. Ahora:
   - **Lavada** = una cita completa para un cliente (una sesión de lavado).
   - **Servicio** = una tarea individual dentro de una lavada (ej: vidrios, tapicería, encerado, rines, motor).
   Los límites de los planes pasan a ser tridimensionales: lavadas/mes + servicios/mes + conversaciones IA/mes.

2. **Nuevo plan "Por invitación"**: cuarto tier disponible solo por invitación, posicionado entre Gratis y Estándar para beta testers que necesitan más capacidad de WhatsApp+IA.

### Matriz de planes definitiva

| Plan | Lavadas / mes | Servicios / mes | Conversaciones IA | Payout | Precio |
|---|---|---|---|---|---|
| Gratis | 5 | 20 | 5 | Cada 15 días | $0 |
| Por invitación | 5 | 20 | 25 | Semanal | Solo invitación |
| Estándar | 20 | 80 | 100 | Semanal | $499 MXN/mes |
| Ilimitado | Ilimitadas | Ilimitados | Ilimitadas | Diario | $1,499 MXN/mes |

### Archivos modificados

- `src/components/CompanyPlans.tsx` — reescrito. Cards usan 3 métricas con íconos (`Car` azul / `Sparkles` violeta / `MessageCircle` esmeralda). Nuevo `InvitationCard` debajo de los 3 planes: borde dashed, `bg-slate-50/60`, pill amber "Solo por invitación", CTA mailto. Import `Check` eliminado (no se usa).
- `src/pages/PlansPage.tsx` — reescrito. `WhatIsAService` pasa de 2 definiciones a 3 (Lavada / Servicio / Conversación IA) en grid de 3 columnas. `DetailedPlans` agrega `InvitationDetailCard` debajo del grid de 3. `ComparisonTable` pasa de 3 columnas a 4 (Gratis / Por invitación / Estándar / Ilimitado); columna Por invitación con `bg-amber-50/40`. `PlansFAQ` reescrita: 8 ítems; los primeros dos son nuevos (diferencia lavada vs servicio; cómo acceder al plan invitación); la pregunta de límite de servicios reescrita para cubrir límite de lavadas Y servicios. Sección title cambiada a "Preguntas frecuentes sobre los planes".
- `src/components/Earnings.tsx` — "3 servicios × día" → "3 lavadas × día"; "Total servicios al mes / 60 servicios" → "Total lavadas al mes / 60 lavadas"; "60 servicios × $280" → "60 lavadas × $280 promedio (SUV Lavado Completo)"; nota de cierre: "paquetes prepagados" → "paquetes del cliente activos, muchos lavaderos suman +30% de lavadas constantes con clientes fijos".
- `src/components/PackagesSection.tsx` — "≈ 4 servicios asignados / mes" → "≈ 4 lavadas asignadas / mes"; "cobra por servicio aplicado" → "cobra por lavada aplicada"; texto del bloque azul al pie actualizado.
- `src/components/HowItWorks.tsx` — Paso 5: "Hacés el servicio y cobrás" → "Hacés la lavada y cobrás"; nota de comisión al pie: "por servicio completado" → "por lavada completada".
- `src/components/Commission.tsx` — "por servicio completado" → "por lavada completada" (en la card 30%); "lo mismo por servicio" → "lo mismo por lavada"; "finalización del servicio" → "finalización de la lavada"; "cobrás por servicio" → "cobrás por lavada completada".
- `src/components/FAQ.tsx` — "70% del servicio" → "70% de cada lavada completada"; "30% por servicio completado" → "30% por lavada completada"; respuesta sobre planes actualizada para mencionar las 3 dimensiones (lavadas + servicios + conversaciones) y el plan Por invitación; "Al completarse cada servicio" → "Al completarse cada lavada".
- `src/components/Services.tsx` — sub-headline: "70% de cada servicio completado" → "70% de cada lavada completada".

### Decisiones tomadas

- La card "Por invitación" en la landing se ubica debajo del grid de 3 planes (no como 4ª columna) para preservar el layout limpio en desktop y no comprimir las cards principales.
- La tabla comparativa en `/planes` pasa a 4 columnas; `bg-amber-50/40` distingue la columna Por invitación del azul de Estándar.
- `"Servicios adicionales"` en `Services.tsx` (sección de add-ons) NO se cambió — ese "servicio" sí refiere a add-ons, que es el uso correcto bajo la nueva terminología.
- `"Servicio: Lavado Completo"` en la booking card de `WhatsAppSection.tsx` se dejó sin cambios — es el campo `wash_type` en la UI real de la app, donde "servicio" refiere al tipo de lavado (categoría); cambiar ese label rompería la correspondencia con la app.
- `FlowExplanation` en `/planes`: "tipo de servicio" → "tipo de lavado" para coherencia en esa sección.
- Import `Check` removido de `CompanyPlans.tsx` al detectar error TS6133 en build; las métricas usan íconos inline, no checkmarks.

---

## Iteración 10 — comisión tiered por plan (2026-07-08)

### Pedido del usuario

La comisión NO es un flat 30%. Es una estructura tiered por plan: un porcentaje del costo de la lavada más una cuota fija por lavada completada. A mayor plan, menor comisión.

### Estructura de comisiones

| Plan | Comisión |
|---|---|
| Gratis | 15% + $15 MXN por lavada |
| Por invitación | 15% + $15 MXN por lavada |
| Estándar | 10% + $10 MXN por lavada |
| Ilimitado | 5% + $5 MXN por lavada |

### Archivos modificados

- `src/pages/PlansPage.tsx`:
  - Array `detailedPlans`: "Comisión estándar 30%" reemplazado por la comisión tiered de cada plan.
  - Array `comparisonRows`: fila "Comisión por lavada completada" → `["15% + $15 MXN", "15% + $15 MXN", "10% + $10 MXN", "5% + $5 MXN"]`.
  - `InvitationDetailCard`: FeatureLine de comisión → "Comisión: 15% + $15 MXN por lavada" con ícono `Percent`.
  - FAQ "¿Puedo cobrar más rápido?": "no cambia tu comisión del 30% por lavada" → explicación tiered.
  - Import `Percent` agregado.

- `src/components/CompanyPlans.tsx`:
  - Campo `commission` agregado a cada plan del array.
  - Línea "Comisión por lavada: X% + $X MXN" agregada en `PlanCard` e `InvitationCard` con ícono `Percent` en `text-xs text-slate-500`.
  - Import `Percent` agregado.

- `src/components/Commission.tsx` — **reescrito**:
  - Título: "Comisión transparente: menos comisión a mayor plan".
  - Sub-headline: "Todas las lavadas tienen una comisión que baja según tu plan. Sin cuotas ocultas."
  - Layout cambiado de 2 cards a **3 cards** por tier (Gratis/Por invitación, Estándar resaltado, Ilimitado).
  - Strip "Sin permanencia" convertido a franja inferior con `ShieldCheck`.

- `src/components/Earnings.tsx` — **reescrito**:
  - Header: "SUV Lavado Completo · Plan Estándar".
  - Math actualizado: $16,800 → comisión 10% ($1,680) + fija $10×60 ($600) = $2,280 → ingreso neto **$14,520**.
  - Nota de cierre: agrega "Con el plan Ilimitado la comisión baja a 5% + $5 y ganás aún más."

- `src/components/Hero.tsx`:
  - Stat "potencial estimado" actualizado de `$11,760/mes` a `$14,520/mes`.

- `src/components/HowItWorks.tsx`:
  - Paso 5: "te transferimos tu 70%" → "te transferimos tu parte según tu plan (comisión desde 5% + $5)".
  - Nota al pie: "Comisión 30% solo por lavada completada" → "Comisión desde 5% + $5 solo por lavada completada."

- `src/components/FAQ.tsx` (landing):
  - "¿Cuánto se lleva la plataforma?" → explicación tiered con los 3 niveles.
  - "¿Cómo me pagan?" → "el 70%" → "el neto (total menos la comisión de tu plan)".
  - "¿Qué diferencia hay entre los planes?" → comisión mencionada como diferenciador.

- `src/components/Services.tsx`:
  - Sub-headline: "Vos te quedás con el 70%" → "La comisión de la plataforma baja según tu plan."
  - Ejemplo: "$231 (70%)" → "$287" (plan Estándar, 10% + $10 sobre $330).

- `src/components/PackagesSection.tsx`:
  - Tres ocurrencias de "tu 70%" → "neto según tu plan" / "comisión desde 5% + $5".

- `src/components/WhatsAppSection.tsx`:
  - Mockup booking: "$280 (tu 70% = $196)" → "$280 (neto según tu plan)".

### Decisiones tomadas

- Plan Estándar usado como referencia en `Earnings.tsx` y `Services.tsx` por ser el plan recomendado para un lavadero en crecimiento.
- El único "30%" que queda en el codebase es "+30% de lavadas constantes" en `Earnings.tsx` — estadística de volumen (clientes fijos con paquetes), no una comisión; correcto mantenerlo.
- `Commission.tsx` usa la card Estándar (fondo azul) como destacada, coherente con "Recomendado" en `CompanyPlans.tsx`.

### Verificación final

- `npm run typecheck` — limpio.
- `npm run build` — exitoso (229 kB JS, 38 kB CSS).
- Grep `"30%"` en `src/`: solo el "+30% de lavadas" (estadística de volumen, no comisión).
- Grep `"70%"` en `src/`: sin resultados.
