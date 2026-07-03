Actúa como desarrollador frontend senior y genera una factura profesional en formato HTML imprimible para BERAXIS.

Contexto:
BERAXIS emitirá una factura a Paymo por servicios profesionales de tecnología prestados sobre la plataforma Paymo EWA. La factura debe comunicar que BERAXIS no solo realizó desarrollo de software, sino que asumió la dirección tecnológica, operación, infraestructura, seguridad, base de datos, soporte y administración técnica integral del proyecto.

Usa el branding existente de BERAXIS que ya está disponible en el proyecto/repositorio. Reutiliza logo, colores, tipografía, estilos visuales y cualquier asset corporativo existente. No inventes un branding nuevo si ya existe uno.

Objetivo:
Crear un archivo HTML listo para imprimir o guardar como PDF desde el navegador.

Requisitos de diseño:

* Formato limpio, ejecutivo y profesional.
* Optimizado para impresión en tamaño carta.
* Debe verse bien en pantalla y en PDF.
* Usar CSS embebido dentro del mismo HTML.
* No depender de librerías externas ni CDN.
* Incluir `@media print`.
* Mantener márgenes adecuados para impresión.
* Evitar exceso de texto.
* Priorizar claridad ejecutiva.

Estructura sugerida:

1. Encabezado

   * Logo de BERAXIS
   * Nombre: BERAXIS
   * Título del documento: FACTURA / INVOICE
   * Número de factura: BERAXIS-PAYMO-2026-___
   * Fecha de emisión: ___
   * Período facturado: ___
   * Estado: Pendiente de pago

2. Datos del proveedor

   * BERAXIS
   * Servicios profesionales de tecnología
   * RNC: __________
   * Dirección: __________
   * Email: __________
   * Teléfono: __________

3. Datos del cliente

   * Cliente: Paymo
   * Proyecto: Paymo EWA
   * Contacto: __________
   * RNC: __________
   * Dirección: __________

4. Resumen ejecutivo
   Texto:
   “Servicios profesionales de Dirección Tecnológica (CTO) y operación integral de la plataforma Paymo EWA, incluyendo arquitectura, desarrollo, infraestructura, seguridad, administración de base de datos, administración de plataformas tecnológicas, soporte operativo y evolución continua del producto.”

5. Tabla principal de servicios

Columnas:

* Servicio
* Descripción
* Monto

Servicios a incluir:

* Dirección Tecnológica (CTO): Liderazgo técnico, definición de arquitectura, planificación tecnológica, toma de decisiones técnicas y supervisión general de la plataforma.
* Arquitectura de Software: Diseño de la arquitectura del sistema, estructura del monorepo, estándares técnicos, modelo de datos, reglas de negocio e integración entre componentes.
* Desarrollo y Evolución del Producto: Implementación de funcionalidades, mantenimiento evolutivo, corrección de incidencias, mejoras continuas y soporte al roadmap del producto.
* Administración de Infraestructura (DevOps): Administración de servidores, Docker, despliegues, monitoreo, ambientes de producción, respaldos y continuidad operativa.
* Administración de Base de Datos: Diseño, mantenimiento, optimización, migraciones, respaldo, recuperación y control de integridad de la base de datos.
* Administración de Plataformas Tecnológicas: Gestión de Google Workspace, cuentas, correos, permisos, dominios, DNS, certificados SSL y servicios relacionados.
* Seguridad Tecnológica: Gestión de autenticación, control de accesos, protección de credenciales, revisión de riesgos y prácticas de seguridad.
* Integraciones Tecnológicas: Implementación y mantenimiento de integraciones con APIs, proveedores externos, servicios financieros y plataformas de terceros.
* Control de Calidad Técnico: Revisión de implementaciones, validación funcional, pruebas técnicas, revisión de código y aprobación de cambios antes de producción.
* Administración de Producción y Soporte: Gestión de versiones, despliegues, monitoreo de estabilidad, resolución de incidencias, asistencia técnica a usuarios internos y soporte operativo.
* Consultoría Estratégica de Tecnología: Asesoría continua para decisiones tecnológicas, optimización de procesos y alineación de la tecnología con los objetivos del negocio.

Para los montos, deja placeholders editables como:
RD$ ________
También incluye subtotal, ITBIS si aplica y total general.

6. Nota de valor
   Incluir una sección breve:
   “Los servicios descritos corresponden a la operación tecnológica integral de Paymo EWA, incluyendo responsabilidades de dirección, ejecución, administración, soporte y continuidad operativa. El uso de herramientas de inteligencia artificial forma parte del proceso de productividad, pero no sustituye la responsabilidad técnica, arquitectónica, operativa ni estratégica asumida por BERAXIS.”

7. Condiciones de pago

* Forma de pago: transferencia bancaria
* Banco: __________
* Cuenta: __________
* Beneficiario: BERAXIS
* RNC: __________
* Fecha límite de pago: __________

8. Pie de página
   Texto:
   “BERAXIS — Tecnología, infraestructura y producto operando con criterio de negocio.”

Instrucciones técnicas:

* Genera un único archivo `.html`.
* Usa HTML semántico.
* Usa variables CSS para colores.
* Usa clases claras y mantenibles.
* Incluye estilos para impresión.
* Evita JavaScript salvo que sea estrictamente necesario.
* El resultado debe poder abrirse directamente en el navegador.
* Si existe un archivo de branding, logo o tema de BERAXIS en el proyecto, úsalo.
* Si no encuentras branding de BERAXIS, deja comentarios claros indicando dónde colocar el logo, colores oficiales y datos fiscales.

Entrega esperada:

* Crear el archivo HTML en una ubicación clara, por ejemplo:
  `docs/invoice-beraxis-paymo.html`
  o
  `invoices/beraxis-paymo-invoice.html`
* Al final, indicar qué archivo fue creado y qué campos quedan pendientes de completar.
