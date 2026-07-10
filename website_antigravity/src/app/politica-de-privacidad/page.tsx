import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad | BERAXIS",
  description: "Política de privacidad y protección de datos corporativa de BERAXIS.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
              Privacidad
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
              Política de Privacidad
            </h1>
            <p className="text-xs text-slate-500 font-semibold mt-2">
              Última actualización: Julio 2026
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                1. Información que Recopilamos
              </h2>
              <p>
                En BERAXIS, valoramos y respetamos la confidencialidad de la información corporativa e institucional de nuestros clientes. Recopilamos información únicamente a través de los siguientes canales:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Formularios de Contacto:</strong> Información que usted nos provee voluntariamente al agendar reuniones o solicitar cotizaciones (nombre, organización, correo electrónico, mensaje).
                </li>
                <li>
                  <strong>Bases de Datos Operacionales (Plataformas):</strong> Para clientes de nuestros sistemas (como <em>NexCoopCore</em>, <em>VeriDoc360</em> o <em>URUPOS</em>), los datos recopilados e introducidos por sus usuarios son propiedad exclusiva del cliente y se gestionan bajo acuerdos estrictos de confidencialidad de datos empresariales.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                2. Uso de la Información
              </h2>
              <p>
                La información recibida se utiliza exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Proveer, mantener, auditar y optimizar el rendimiento de nuestras soluciones y plataformas de software.
                </li>
                <li>
                  Gestionar la comunicación comercial, agendar demostraciones y sesiones de consultoría técnica.
                </li>
                <li>
                  Garantizar la seguridad e integridad del sistema (por ejemplo, bitácoras de auditoría de usuarios de VeriDoc360).
                </li>
              </ul>
              <p>
                BERAXIS <strong>no vende, alquila ni comparte</strong> información de sus clientes o usuarios con terceras empresas para fines publicitarios.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                3. Seguridad y Cifrado de Datos
              </h2>
              <p>
                Para resguardar datos transaccionales, cooperativos y documentales, implementamos protocolos de seguridad estándar de la industria. Nuestras bases de datos y flujos de APIs emplean cifrado **AES-256 GCM** para datos en reposo y conexiones protegidas mediante **TLS/SSL** en tránsito, previniendo accesos no autorizados y fugas de información.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                4. Derechos de Acceso y Rectificación
              </h2>
              <p>
                Usted y sus usuarios tienen derecho a acceder, rectificar, limitar el uso o solicitar la supresión de la información personal almacenada en nuestros registros. Para ejercer estos derechos o revocar consentimientos previamente otorgados, su departamento de TI o representante legal puede enviar una solicitud formal por correo electrónico.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                5. Contacto Legal y DPO
              </h2>
              <p>
                Si tiene dudas sobre nuestras políticas de protección de datos o desea realizar alguna consulta relacionada con el tratamiento de la información, puede escribir a:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl font-mono text-xs text-brand-blue flex items-center gap-2">
                <span>Oficial de Protección de Datos:</span>
                <a href="mailto:contacto@beraxis.com" className="font-bold hover:underline">
                  contacto@beraxis.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
