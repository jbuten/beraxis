import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos de Servicio | BERAXIS",
  description: "Términos y condiciones de uso de las plataformas digitales, productos SaaS y servicios tecnológicos de BERAXIS.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      
      <main className="flex-grow pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="border-b border-slate-100 pb-8 mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
              Legal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-blue tracking-tight">
              Términos de Servicio
            </h1>
            <p className="text-xs text-slate-500 font-semibold mt-2">
              Última actualización: Julio 2026
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al acceder y utilizar el sitio web de BERAXIS y contratar cualquiera de nuestros servicios, plataformas digitales o productos SaaS (incluyendo, de manera enunciativa más no limitativa, <strong>NexCoopCore</strong>, <strong>VeriDoc360</strong> y <strong>URUPOS</strong>), usted acepta estar sujeto a los presentes Términos de Servicio. Si no está de acuerdo con estos términos, le solicitamos que no acceda ni utilice nuestras soluciones.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                2. Descripción de Soluciones y Productos
              </h2>
              <p>
                BERAXIS provee software empresarial de alta gama y servicios de integración técnica:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>NexCoopCore:</strong> Core/ERP especializado para la administración y automatización de procesos internos de cooperativas de ahorro y crédito.
                </li>
                <li>
                  <strong>VeriDoc360:</strong> Plataforma para la firma electrónica, control, trazabilidad y validación de documentos institucionales.
                </li>
                <li>
                  <strong>URUPOS:</strong> Suite de control comercial y gestión de pedidos optimizada para promotores y ventas de calle.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                3. Propiedad Intelectual
              </h2>
              <p>
                Todo el código fuente, la lógica del sistema, los diseños visuales, algoritmos, marcas, logotipos y patentes asociados a los productos propios descritos son propiedad intelectual exclusiva de BERAXIS. Queda terminantemente prohibido copiar, reproducir, sublicenciar, descompilar o realizar ingeniería inversa de cualquier software provisto sin la autorización explícita por escrito de nuestra directiva corporativa.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                4. Limitación de Responsabilidad
              </h2>
              <p>
                BERAXIS se compromete a realizar sus mejores esfuerzos técnicos para garantizar la máxima disponibilidad y seguridad de sus plataformas. Sin embargo, no seremos responsables de daños indirectos, incidentales o derivados de interrupciones operativas imputables a proveedores cloud de infraestructura de terceros, caídas del servicio eléctrico o de telecomunicaciones del cliente, o por usos indebidos de las contraseñas y permisos del personal contratado.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                5. Modificaciones y Ley Aplicable
              </h2>
              <p>
                Nos reservamos el derecho de modificar estos términos de servicio en cualquier momento para reflejar actualizaciones regulatorias o técnicas. Estos términos se rigen e interpretan bajo las leyes y normativas de la República Dominicana, y cualquier disputa estará sujeta a la jurisdicción exclusiva de los tribunales de Santo Domingo, D.N.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-slate-900">
                6. Contacto Legal
              </h2>
              <p>
                Para cualquier aclaración sobre estos Términos de Servicio o para consultas sobre licencias, puede ponerse en contacto con nosotros directamente escribiendo a:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl font-mono text-xs text-brand-blue flex items-center gap-2">
                <span>Email de Soporte Legal:</span>
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
