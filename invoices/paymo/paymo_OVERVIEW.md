# Paymo EWA — Documento de Proyecto

> **Última actualización:** 2026-07-03
> **Autor:** Jose Buten (CTO)
> **Estado general:** Producción activa desde 2026-05-13

---

## 1. Descripción general

**Paymo EWA** (Earned Wage Access) es una plataforma B2B2C que permite a empresas ofrecer a sus empleados acceso anticipado a su salario ya devengado, junto con otros productos financieros complementarios.

**Mercados objetivo:**
- República Dominicana (primario) — moneda DOP
- Uruguay (secundario) — moneda UYU

**Actores:**
- **Paymo (Back Office):** administra el sistema, aprueba solicitudes, gestiona KYC y desembolsos.
- **Empresas (Empleadores):** onboarding de empleados, visualización de estado de solicitudes.
- **Empleados:** solicitan adelantos y préstamos desde su portal móvil.

---

## 2. Productos financieros

| Producto | Color | Fee | Cap de monto | Repago |
|---|---|---|---|---|
| **EWA Puro** | `#00d488` | DOP 150 flat | 80% salario diario × días trabajados | 1 quincena |
| **EWA Extendido** | `#7F77DD` | `max(DOP 150, 1.5%/q × n × monto)` | 80% | 2 a 4 quincenas |
| **Préstamo LP** | `#EF9F27` | 1% originación + 24% anual + 5% mora | 70% prestaciones acumuladas (Ley 16-92 RD) | 3 a 36 meses |

### Reglas financieras clave

- **EWA disponible:** `salario_mensual / 30 × días_trabajados × tope%`
  - Tope DR: 80% | Tope UY: 70%
  - Antigüedad mínima: 120 días
- **Préstamo LP:** cuota mensual ≤ 30% salario. Monto mínimo DOP 10,000. Monto máximo: 70% prestaciones laborales acumuladas.
- **Todos los montos** se almacenan en centavos como `bigint` (DOP o UYU según `company.country`).
- **Snapshot inmutable:** al crear cada adelanto o aprobar cada préstamo, el fee y los parámetros de pricing se guardan en el registro. Cambios posteriores de configuración no afectan operaciones en curso.

> **CTO sign-off obligatorio** para cualquier cambio en reglas financieras, cálculos o parámetros de pricing.

---

## 3. Stack tecnológico

| Capa | Tecnología |
|---|---|
| Backend | Node.js + TypeScript, Clean Architecture |
| Frontend | Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui |
| Base de datos | MySQL — ORM Prisma |
| Auth | JWT (access 15min + refresh 7 días) + bcrypt |
| Auth empleado | Cédula + OTP SMS (360dialog) |
| Infraestructura | Docker + pnpm monorepo |
| Tests | Jest + ts-jest ESM — objetivo ≥70% cobertura |

---

## 4. Arquitectura del monorepo

```
apps/
  backend/       # API REST — Clean Architecture (port 3001)
  empleador/     # Portal empresa — Next.js 14 (port 3002)
  backoffice/    # Back-office Paymo — Next.js 14 (port 3003)
  empleado/      # Webapp empleado — Next.js 14 (port 3004)

packages/
  tokens/        # Design tokens (colores, tipografía, espaciado)
  ui/            # Componentes compartidos (shadcn-based)
  db/            # Prisma schema + migraciones
  core/          # Lógica de dominio (montos, elegibilidad, productos)
```

### Backend — módulos (post-refactor SRP)

| Módulo | Responsabilidad |
|---|---|
| `bo/` | Handlers Back Office (empresas, empleados, KYC, desembolsos) |
| `companies/` | CRUD empresas |
| `employees/` | CRUD empleados |
| `empleado/` | Auth OTP + solicitudes de adelantos/préstamos (vista empleado) |
| `ewa/` | Lógica EWA Puro y Extendido |
| `kyc/` | Documentos KYC |
| `loans/` | Servicio y repositorio Préstamo LP |
| `short-loans/` | Short Loan (2-6 cuotas) |
| `shared/` | `serialize()` y utilidades compartidas |
| `middleware/` | Auth JWT + permisos RBAC |

---

## 5. RBAC — Roles y permisos

| Rol | Audiencia |
|---|---|
| `bo_ops` | Operaciones Paymo |
| `bo_compliance` | Cumplimiento / KYC Paymo |
| `empresa_admin` | Administrador empresa |
| `empresa_rrhh` | RRHH empresa |
| `empleado` | Empleado (portal móvil) |

Los permisos son granulares (`employee.create`, `advance.approve`, `kyc.review`, etc.) y se validan en middleware por permiso, no por rol directamente. La matriz de permisos es configurable desde el BO.

---

## 6. Modelo de datos principal

### Entidades core

- **Company:** configuración EWA (fees, caps, quincenas), config LP, config Short Loan, automatización de cobro.
- **Employee:** datos personales (cédula, nombre, teléfono, email), salario, info laboral, datos bancarios, bloqueos de producto, antigüedad.
- **User:** autenticación (email + password o cédula + OTP), rol, FK a empresa o empleado, refresh tokens.
- **OtpCode:** código 6 dígitos, TTL 5 min, máx 5 intentos, 60s cooldown, SHA-256, uso único.

### Productos de crédito

- **AdvanceRequest:** solicitud de adelanto (Puro/Extendido/LP), monto, fee (snapshotado), cuotas, estado.
- **Disbursement:** desembolso por adelanto, método, referencia, estado.
- **Repayment:** cobro por adelanto (EWA Puro).
- **Installment:** cuotas individuales (EWA Extendido + LP), con waterfall contable (principal, interés, fee, mora).
- **ShortLoan:** préstamo corto (2-6 cuotas), cargo fijo, frecuencia configurable.
- **Loan:** préstamo LP (3-36 meses), sistema francés decreciente.

### Compliance

- **KycDocument:** cédula frente/reverso, selfie, comprobante de domicilio, firma. Estados: `pending / approved / rejected`. Auditoría completa de revisor.

### Ciclo de cobro

- **PaymentBatch:** lote inmutable de deducciones por empresa y período. Estados: `draft → generated → sent → awaiting → partially_paid → paid → closed`.
- **PaymentBatchLine:** línea por empleado × producto, montos esperados/aplicados, excepciones, carryover.
- **PaymentDeposit:** transferencia bancaria recibida.
- **PaymentApplication:** relación depósito ↔ línea.

### Terminación laboral

- **EmploymentExit:** motivo, fecha efectiva, estado, snapshots de prestaciones, decisión ops (aceleración vs cobro directo).
- **DirectCollectionCase / DirectCollectionPayment:** casos de cobro directo post-terminación.

### Auditoría

- **AuditLog:** registro append-only de todas las acciones críticas (usuario, entidad, acción, valores anterior/nuevo, IP, timestamp).

---

## 7. Estado actual del proyecto

### Sesiones completadas

| Sesión | Descripción | Estado |
|---|---|---|
| S0 | Hygiene (gitignore, env, README, CLAUDE.md) | Completado |
| S1 | Monorepo scaffold (pnpm, TypeScript, Prisma, Docker) | Completado |
| S2 | Schema + Auth + RBAC (9 tablas, JWT, RBAC) | Completado |
| S3 | Login + Onboarding empresa (E-01 Empty Dashboard) | Completado |
| S4 | Alta de empleado (E-02, E-03, E-04) | Completado |
| S5 | EWA Puro end-to-end (solicitud → aprobación → desembolso → cobro) | Completado |
| S5.5 | Wiring front ↔ back (API client, datos reales) | Completado |
| S6 | Webapp empleado (cédula + OTP SMS + home + solicitar) | Completado |
| S7 | EWA Extendido (multi-cuota, elegibilidad) | Completado |
| S8 | Préstamo LP (lógica financiera, amortización) | Completado |
| S9 | Testing + hardening (70%+ cobertura, revisión de seguridad) | Completado |
| Post-demo wave | 5 PRs (#20-#24): UX, bugs, KYC, backoffice | Completado |
| Hardening prod | PRs #25-#32: estabilización producción | Completado |

### Próximas sesiones

| Sesión | Descripción | Requisito |
|---|---|---|
| **S10** | Ciclo de cobranza (automatización de cobros) | **Sign-off CTO requerido** |
| S8b | Portal Cooperativa | Bloqueado (pendiente acuerdo rev share) |

---

## 8. Despliegue en producción

**Servidor:** `paymo-svr` (acceso SSH como `jbuten`)

### Contenedores y dominios

| Subdominio | Contenedor | Puerto interno | Puerto host |
|---|---|---|---|
| `api.paymo.com.do` | `paymo_api` | 3001 | 8001 |
| `app.paymo.com.do` | `paymo_app` | 3002 | 8002 |
| `bo.paymo.com.do` | `paymo_bo` | 3003 | 8003 |
| `mi.paymo.com.do` | `paymo_mi` | 3004 | 8004 |

**Reverse proxy:** Nginx Proxy Manager (red `general_network`), SSL con Let's Encrypt, Websockets habilitados.

### Layout en servidor

```
/home/jbuten/docker/paymo/
  src/                           # monorepo (se sobreescribe en cada deploy)
  backend/
    docker-compose.prod.yml
    .env.production
  empleador/ | backoffice/ | empleado/
    docker-compose.prod.yml
    .env.production
```

### Flujo de deploy

1. Tar del monorepo local
2. SCP al servidor
3. `docker build` con multi-stage (build packages → build apps → runner)
4. `docker compose up -d`
5. Auto-rollback en fallo; backups con tag por fecha

### Variables de entorno críticas (.env.production)

```env
DATABASE_URL=mysql://...  # Actualmente apunta a dev DB — migrar a producción
JWT_ACCESS_SECRET=<openssl rand -base64 64>
JWT_REFRESH_SECRET=<openssl rand -base64 64>
OTP_DEV_MODE=false
NODE_ENV=production
PAYMO_EWA_MAX_DR=80
PAYMO_EWA_MAX_UY=70
CORS_ALLOWED_ORIGINS=https://app.paymo.com.do,https://bo.paymo.com.do,https://mi.paymo.com.do
```

---

## 9. Flujos funcionales principales

### Flujo EWA Puro (empleado)

1. Empleado inicia sesión con cédula + OTP SMS.
2. Visualiza EWA disponible (calculado en tiempo real).
3. Solicita adelanto → crea `AdvanceRequest` con fee snapshotado.
4. BO aprueba → se genera `Disbursement`.
5. En corte de nómina → empresa descuenta 1 cuota de quincena siguiente.
6. Se registra `Repayment`.

### Flujo Préstamo LP

1. Empleado solicita préstamo (requiere: ≥120 días antigüedad, ≥1 EWA Extendido completado sin mora, sin adelantos OVERDUE).
2. Sistema calcula cap (70% prestaciones Ley 16-92), amortización francesa, cuota mensual (≤30% salario).
3. BO aprueba → snapshot de prestaciones y parámetros al momento de aprobación.
4. Desembolso → cuotas mensuales deducidas de nómina.

### Flujo KYC

1. Empleado sube: cédula frente, cédula reverso, selfie, comprobante domicilio, firma.
2. BO Compliance revisa → aprueba o rechaza cada documento.
3. KYC completo desbloquea acceso completo a productos.

### Flujo ciclo de cobro (pendiente S10)

- Generación automática de `PaymentBatch` por empresa y período.
- Envío a empresa para deducción de nómina.
- Registro de depósitos bancarios.
- Aplicación de pagos a líneas individuales.
- Manejo de excepciones, carryover y mora.

---

## 10. Gobernanza y convenciones

### Requiere aprobación CTO antes de iniciar

- Cambios de schema o nuevas tablas
- Cálculos financieros o reglas de negocio que toquen dinero
- Lógica de auth, autorización o KYC
- Integraciones externas (bancos, SMS, proveedores KYC)
- Cambios arquitectónicos

### Convenciones de código

- **Idioma del código:** inglés (código, comentarios, commits, identificadores)
- **Idioma UX:** español dominicano (DR), neutro (UY)
- **Commits:** imperativo presente, sin punto final (`Add employee CRUD`)
- **Branches:** `setup/*`, `feature/*`, `fix/*` — PRs a `main`, nunca commits directos a `main`
- **Secretos:** `.env.local` únicamente, nunca al repositorio; `.env.example` con placeholders

### Prohibido sin aprobación explícita

- `git --force`, `git --amend` (commits públicos), `git reset --hard`
- `--no-verify` en commits
- Modificar esquema financiero sin sign-off

---

## 11. Contacto y autoridades

| Rol | Persona | Responsabilidad |
|---|---|---|
| **CTO / Autoridad final** | **Jose Buten** | Arquitectura, schema, lógica financiera, seguridad |
| **Product Owner** | Alberto Bonetti | Decisiones de negocio y alcance |
| **Dev** | Claude Code | Generación de código; revisión y aprobación de Buten |

---

## 12. Pendientes antes de go-live completo

- [ ] Migrar `DATABASE_URL` a base de datos de producción real
- [ ] Reemplazar JWT secrets con valores fuertes (`openssl rand -base64 64`)
- [ ] Configurar claves DIALOG360 para SMS OTP en producción
- [ ] Verificar SSL/TLS para los 4 subdominios
- [ ] S10: implementar ciclo de cobranza automatizado (requiere sign-off CTO)
