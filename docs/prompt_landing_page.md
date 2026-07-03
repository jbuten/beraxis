Actúa como un diseñador senior de producto, frontend developer y brand strategist.

Necesito crear una landing page de expectativa para el dominio:

https://beraxis.com

La empresa se llama BERAXIS.

Contexto de la marca:
BERAXIS es una empresa tecnológica fundada por José Buten, profesional dominicano con experiencia como CTO, asesor tecnológico y líder de innovación en proyectos para bancos, cooperativas, fintechs, empresas de servicios y organizaciones en transformación digital.

La empresa se enfocará en desarrollar soluciones de software empresarial, plataformas SaaS, automatización de procesos, sistemas core, integraciones, infraestructura tecnológica, firma y verificación digital, inteligencia artificial aplicada a negocios y consultoría tecnológica estratégica.

Objetivo de la landing:
Crear una página profesional de expectativa tipo “Coming Soon” para aprovechar el dominio beraxis.com mientras se termina de preparar la empresa y sus productos.

Debe transmitir:
- Confianza empresarial
- Tecnología moderna
- Innovación
- Seguridad
- Visión de futuro
- Capacidad de ejecución
- Profesionalismo para clientes corporativos, bancos, cooperativas y fintechs

No debe parecer:
- Una página genérica de soporte técnico
- Una plantilla barata
- Una empresa informal
- Una agencia creativa demasiado colorida
- Un sitio cargado o difícil de leer

Estilo visual:
Usar una estética tecnológica, limpia, premium y moderna.
Fondo oscuro elegante, preferiblemente azul profundo o negro azulado.
Usar gradientes sutiles, brillos suaves, glassmorphism moderado, líneas tecnológicas, partículas suaves o formas abstractas animadas.
Debe sentirse como una empresa seria de tecnología empresarial.

Colores principales de la marca:
- Verde Beraxis: #078B4C
- Azul profundo: #042444
- Naranja impacto: #F9A018
- Blanco: #FFFFFF
- Fondo claro secundario: #F1F3F7

Tipografías sugeridas:
Usar Inter, Sora, Manrope o Space Grotesk.
La tipografía debe verse moderna, profesional y muy legible.

Contenido principal sugerido:

Hero:
Título principal:
“BERAXIS está construyendo tecnología para empresas que necesitan avanzar con confianza.”

Subtítulo:
“Software empresarial, automatización, integraciones e innovación tecnológica para organizaciones que buscan operar con más eficiencia, control y visión de futuro.”

Texto alternativo más corto para móviles:
“Tecnología empresarial para avanzar con confianza.”

Badge superior:
“Próximamente · beraxis.com”

CTA principal:
“Solicitar información”

CTA secundario:
“Conocer enfoque”

Countdown:
Agregar un contador regresivo de 3 meses a partir de la fecha actual.
Debe mostrar:
Días · Horas · Minutos · Segundos

El contador debe verse elegante, con tarjetas modernas, bordes suaves, fondo translúcido y animación sutil.

Secciones de la página:

1. Hero principal con logo/isotipo de BERAXIS
- Colocar el logo o isotipo en la parte superior.
- Si no existe archivo del logo en el proyecto, dejar el componente preparado para usar:
  /assets/beraxis-isotipo.svg
  /assets/beraxis-logo-horizontal.svg

2. Sección “Lo que estamos construyendo”
Crear 4 tarjetas:
- Software empresarial a medida
- Automatización e inteligencia operacional
- Plataformas SaaS y productos digitales
- Integraciones, seguridad y trazabilidad

Cada tarjeta debe tener icono lineal moderno, pequeña descripción y microanimación hover.

3. Sección “Enfoque Beraxis”
Mostrar 3 pilares:
- Precisión tecnológica
- Confianza corporativa
- Crecimiento sostenible

4. Sección de expectativa:
Título:
“Una nueva base tecnológica está tomando forma.”

Texto:
“Estamos preparando soluciones pensadas para empresas que necesitan transformar procesos complejos en plataformas simples, seguras y escalables.”

5. Formulario de contacto o captura de interesados:
Campos:
- Nombre
- Empresa
- Correo
- Teléfono opcional
- Mensaje

El formulario puede ser frontend-only por ahora, pero dejar preparado el código para conectar luego a un endpoint API.
Agregar validación visual básica.
Mostrar mensaje de éxito simulado:
“Gracias. Hemos recibido tu interés y te contactaremos pronto.”

6. Footer:
Texto:
“BERAXIS · Tecnología, innovación e impacto.”
“© 2026 Beraxis. Todos los derechos reservados.”

Agregar enlaces placeholders:
- LinkedIn
- Contacto
- Privacidad

Animaciones:
Implementar animaciones profesionales y sutiles:
- Entrada suave del hero
- Movimiento lento de partículas o formas abstractas
- Hover elegante en tarjetas
- Countdown animado
- Gradientes vivos pero no exagerados
- Transiciones suaves
- Efecto glow muy moderado usando verde y naranja

Requisitos técnicos:
Crear una landing page moderna, responsive y lista para producción.
Preferiblemente usar:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion para animaciones
- Lucide React para iconos

Si el proyecto no tiene estas dependencias, instalarlas o indicar los comandos necesarios.

Estructura recomendada:
- app/page.tsx
- components/Countdown.tsx
- components/ContactForm.tsx
- components/FeatureCard.tsx
- components/AnimatedBackground.tsx
- public/assets/ para logos
- globals.css para estilos globales

Requisitos de calidad:
- Diseño responsive perfecto para móvil, tablet y desktop.
- Excelente performance.
- Código limpio, organizado y mantenible.
- Sin dependencias innecesarias.
- Accesibilidad básica: buen contraste, labels en formulario, navegación por teclado.
- SEO básico con metadata:
  title: “Beraxis | Tecnología, Innovación e Impacto”
  description: “Beraxis desarrolla soluciones de software empresarial, automatización, integraciones y plataformas digitales para organizaciones modernas.”
- Open Graph preparado para compartir en redes.

Detalles visuales importantes:
- La primera impresión debe ser impactante.
- El sitio debe sentirse premium y corporativo.
- Usar el isotipo como elemento visual principal, no abusar de él.
- Incluir una composición central elegante con el countdown visible.
- Evitar textos largos.
- Evitar exceso de colores.
- Mantener mucho espacio en blanco/aire visual, aunque el fondo sea oscuro.

Implementa la landing completa y deja instrucciones claras para ejecutar el proyecto localmente y desplegarlo en producción.

Al finalizar, genera también una breve lista de próximos pasos para publicar en beraxis.com, incluyendo:
1. Build del proyecto
2. Deploy recomendado
3. Configuración DNS en Cloudflare
4. Variables de entorno futuras para formulario de contacto

Configura el countdown para terminar exactamente 90 días después de la fecha actual de desarrollo. Si es posible, centraliza la fecha objetivo en una constante llamada LAUNCH_DATE para poder modificarla fácilmente.