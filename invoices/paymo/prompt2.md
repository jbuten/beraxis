Quiero que refactorices la factura HTML de BERAXIS que acabas de generar.

NO debes crear una nueva factura desde cero. Debes mejorar la existente conservando el branding, estilos, tipografía, colores, layout y calidad visual que ya tiene.

El objetivo es que esta factura sea presentada a un ejecutivo de alto nivel con perfil financiero y empresarial. Debe transmitir el valor de BERAXIS como proveedor integral de tecnología, evitando que el documento parezca una lista de tareas de un desarrollador.

# Cambios requeridos

## 1. Cliente

Reemplazar la sección actual del cliente por la siguiente información:

**CLIENTE**

Juan Vilchez

Paymo / AmmyStar

Proyecto:
Paymo EWA

Dirección:
Calle Luis F. Thomen 110
Torre Ejecutiva Gapo Suite 211
Evaristo Morales
Santo Domingo
Distrito Nacional 10147

Teléfono:
(809) 286-2580

Eliminar los campos:

- Contacto
- Dirección vacía
- RNC

Ya no deben aparecer placeholders.

---

## 2. Proveedor

BERAXIS

Servicios Profesionales de Tecnología

Mantener únicamente:

- RNC
- Email
- Teléfono

Eliminar completamente el campo Dirección.

BERAXIS actualmente no posee oficina física y no debe aparecer una dirección vacía.

---

## 3. Eliminar completamente

Eliminar estas secciones del HTML y también cualquier CSS asociado que ya no sea utilizado.

Eliminar:

- Datos Bancarios
- Condiciones de Pago
- Subtotal
- ITBIS

Eliminar completamente el siguiente texto:

"El uso de herramientas de inteligencia artificial forma parte del proceso de productividad, pero no sustituye la responsabilidad técnica, arquitectónica, operativa ni estratégica asumida por BERAXIS."

---

## 4. Cambiar la filosofía de la factura

Actualmente la factura parece una lista de tareas.

Eso es incorrecto.

BERAXIS no está vendiendo:

- Google Workspace
- Docker
- Base de Datos
- SSL

BERAXIS está prestando un servicio integral de Dirección Tecnológica.

Por lo tanto debemos agrupar los servicios.

Cambiar la tabla completa.

Actualmente tiene más de 10 líneas.

Debe quedar con solamente cuatro conceptos.

Cambiar el título:

DETALLE DE SERVICIOS

por

ALCANCE DE LOS SERVICIOS PROFESIONALES

---

## 5. Nueva tabla

Debe tener solamente tres columnas

Servicio

Alcance

Valor

Los cuatro servicios serán:

### Dirección Tecnológica (CTO)

Incluye:

- Dirección técnica del proyecto
- Arquitectura
- Definición de estándares
- Planificación tecnológica
- Supervisión técnica
- Toma de decisiones de arquitectura

Monto:

RD$ 55,000.00

---

### Ingeniería de Software

Incluye:

- Desarrollo Backend
- Desarrollo Frontend
- Nuevas funcionalidades
- Mantenimiento evolutivo
- Integraciones
- Revisión técnica
- Control de calidad

Monto:

RD$ 85,000.00

---

### Operación e Infraestructura Tecnológica

Incluye:

- Administración de servidores
- Docker
- DevOps
- Base de datos
- Seguridad
- Despliegues
- Monitoreo
- Ambientes de producción

Monto:

RD$ 50,000.00

---

### Administración y Soporte Tecnológico

Incluye:

- Google Workspace
- Gestión de usuarios
- Dominios
- DNS
- SSL
- Soporte técnico
- Consultoría tecnológica

Monto:

RD$ 35,000.00

---

## 6. Total

Eliminar subtotal e ITBIS.

Mostrar únicamente una tarjeta elegante al final con:

TOTAL FACTURADO

RD$225,000.00

Debe ser visualmente el elemento más importante del documento.

---

## 7. Nota

Mantener una nota, pero mucho más ejecutiva.

Texto:

"Los servicios descritos corresponden a la Dirección Tecnológica y operación integral de la plataforma Paymo EWA, incluyendo responsabilidades de arquitectura, ingeniería de software, infraestructura, seguridad, administración tecnológica y continuidad operativa."

No agregar más texto.

---

## 8. Estilo

Quiero que la factura transmita la imagen de una empresa de consultoría tecnológica similar a:

- Deloitte
- Accenture
- McKinsey Digital

Debe sentirse:

- ejecutiva
- limpia
- premium
- corporativa

No debe parecer una factura de freelance.

---

## 9. Calidad visual

Revisa los espacios en blanco.

Alineaciones.

Alturas.

Márgenes.

Tamaños de fuente.

Peso tipográfico.

Jerarquía visual.

Quiero que el documento pueda imprimirse en una sola página tamaño carta sin perder legibilidad.

---

## 10. Código

Mantener:

- HTML semántico
- CSS organizado
- Variables CSS
- @media print

Eliminar cualquier CSS muerto después de los cambios.

No romper el branding existente de BERAXIS.

---

## 11. Entregable

Actualizar el mismo archivo HTML existente.

No crear un archivo nuevo.

Al finalizar, indicar brevemente:

- Cambios realizados.
- Total configurado.
- Confirmar que el documento continúa optimizado para impresión en una sola página.