"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle,
  Database,
  FileCheck2,
  Store,
  DollarSign,
  Users,
  ShieldCheck,
  TrendingUp,
  FileText,
  QrCode,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  themeColor: string;
  accentBg: string;
  textColor: string;
  borderColor: string;
  icon: React.ComponentType<any>;
  features: string[];
  mockup: React.ReactNode;
}

export default function Products() {
  const productsList: Product[] = [
    {
      id: "nexcoop",
      name: "NexCoopCore",
      tagline: "Core/ERP moderno para cooperativas",
      description:
        "Una plataforma integral para cooperativas de ahorro y crédito, orientada a gestionar socios, productos financieros, préstamos, cobranzas, contabilidad, reportes y procesos operativos desde una base tecnológica moderna.",
      url: "https://nexcoopcore.com/",
      themeColor: "bg-brand-green hover:bg-brand-green/90 text-white shadow-sm",
      accentBg: "bg-brand-green/10 text-brand-green",
      textColor: "text-brand-green",
      borderColor: "border-brand-green/20",
      icon: Database,
      features: [
        "Gestión de socios y expedientes",
        "Aportaciones, ahorros y préstamos",
        "Cobranzas y recibos",
        "Contabilidad integrada",
        "Reportes y dashboards",
        "Seguridad por roles",
      ],
      mockup: (
        <div className="w-full h-full bg-slate-900 rounded-xl p-5 border border-slate-800 text-slate-300 font-sans shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] font-mono tracking-wider text-slate-400">NEXCOOP // CLIENT_SUMMARY</span>
            </div>
            <span className="text-[10px] text-slate-500">v4.2.1</span>
          </div>

          <div className="py-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                <div className="text-[9px] text-slate-500 uppercase font-semibold">Socios Activos</div>
                <div className="text-lg font-bold text-white mt-0.5 flex items-center gap-1.5">
                  14,820
                  <span className="text-[9px] text-emerald-400 font-medium">+12%</span>
                </div>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                <div className="text-[9px] text-slate-500 uppercase font-semibold">Cartera de Préstamos</div>
                <div className="text-lg font-bold text-white mt-0.5">$8.4M</div>
              </div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-400 font-medium">Distribución de Aportes</span>
                <span className="text-emerald-400 font-mono">98% Eficiencia</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full w-[78%]" />
              </div>
              <div className="flex justify-between text-[9px] text-slate-500">
                <span>Ahorros Plazo Fijo: $3.2M</span>
                <span>Aportaciones: $5.2M</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-950 px-3 py-2 rounded-lg border border-slate-800 text-[10px]">
            <div className="flex items-center gap-2 text-emerald-400">
              <Users className="w-3.5 h-3.5" />
              <span>Socio #10245 validado</span>
            </div>
            <span className="text-slate-500">Hace 2m</span>
          </div>
        </div>
      ),
    },
    {
      id: "veridoc",
      name: "VeriDoc360",
      tagline: "Confianza digital, firma y verificación documental",
      description:
        "Una plataforma para generar, aprobar, firmar, custodiar y verificar documentos digitales con trazabilidad, auditoría, códigos de verificación, QR y flujos institucionales.",
      url: "https://www.veridoc360.com/",
      themeColor: "bg-brand-blue hover:bg-brand-blue/90 text-white shadow-sm",
      accentBg: "bg-brand-blue/10 text-brand-blue",
      textColor: "text-brand-blue",
      borderColor: "border-brand-blue/20",
      icon: FileCheck2,
      features: [
        "Firma y aprobación documental",
        "Flujos de revisión integrados",
        "Verificación pública segura",
        "Auditoría y trazabilidad completa",
        "Gestión avanzada de plantillas",
        "Control institucional centralizado",
      ],
      mockup: (
        <div className="w-full h-full bg-slate-900 rounded-xl p-5 border border-slate-800 text-slate-300 font-sans shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] font-mono tracking-wider text-slate-400">VERIDOC_TRUST // FLUX</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Activo
            </span>
          </div>

          <div className="py-4 space-y-3">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-850 space-y-2.5">
              <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Flujo de Firmas - Contrato #3024</div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[9px]">1</div>
                    <span className="text-white font-medium">Firma Legal Rep</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">COMPLETADO</span>
                </div>
                
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[9px]">2</div>
                    <span className="text-white font-medium">Aprobación Directiva</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">COMPLETADO</span>
                </div>

                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-[9px]">3</div>
                    <span className="text-slate-300 font-medium">Validación Pública</span>
                  </div>
                  <span className="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded font-mono animate-pulse">PROCESANDO</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-lg border border-slate-800/80">
              <QrCode className="w-9 h-9 text-slate-300 p-0.5 bg-white rounded" />
              <div>
                <div className="text-[8px] text-slate-500 uppercase tracking-wider font-semibold">Código de Verificación</div>
                <div className="text-[10px] text-slate-300 font-mono">https://veridoc360.com/v/9f8e7</div>
              </div>
            </div>
          </div>

          <div className="text-[9px] text-slate-500 text-center font-mono border-t border-slate-800 pt-2">
            HASH: 7a8df9e81b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e
          </div>
        </div>
      ),
    },
    {
      id: "urupos",
      name: "URUPOS",
      tagline: "Tecnología para operación comercial y negocios",
      description:
        "Una suite de soluciones para ventas, seguimiento comercial, promotores, pedidos, puntos de venta, canales digitales y automatización operativa de negocios.",
      url: "https://urupos.com/",
      themeColor: "bg-brand-orange hover:bg-brand-orange/90 text-white shadow-sm",
      accentBg: "bg-brand-orange/10 text-brand-orange",
      textColor: "text-brand-orange",
      borderColor: "border-brand-orange/20",
      icon: Store,
      features: [
        "Seguimiento geolocalizado de promotores",
        "Gestión comercial y CRM de ventas",
        "Pedidos, despachos y facturación",
        "Canales digitales unificados",
        "Notificaciones y pedidos vía WhatsApp",
        "Reportes y métricas operativas",
      ],
      mockup: (
        <div className="w-full h-full bg-slate-900 rounded-xl p-5 border border-slate-800 text-slate-300 font-sans shadow-lg relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-violet-400" />
              <span className="text-[11px] font-mono tracking-wider text-slate-400">URUPOS_COMMERCE // BOT</span>
            </div>
            <span className="text-[10px] text-slate-400">Canal: WhatsApp API</span>
          </div>

          <div className="py-4 space-y-3">
            <div className="space-y-2">
              <div className="bg-slate-850 p-2.5 rounded-lg text-[10px] max-w-[85%] self-start border border-slate-800">
                <p className="text-slate-400 font-medium mb-1">Cliente (829-555-0199)</p>
                <p className="text-white">Hola, me gustaría registrar un nuevo pedido de 50 unidades.</p>
              </div>
              
              <div className="bg-violet-950/80 p-2.5 rounded-lg text-[10px] max-w-[85%] ml-auto border border-violet-800 text-violet-100">
                <p className="text-violet-400 font-semibold mb-0.5">Asistente URUPOS</p>
                <p className="font-medium text-white">¡Entendido! Pedido #4023 registrado. Enviando enlace de confirmación y cobro...</p>
              </div>
            </div>

            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-violet-400" />
                <div>
                  <div className="text-[8px] text-slate-500 uppercase">Orden #4023</div>
                  <div className="text-[10px] text-white font-bold">$12,450.00</div>
                </div>
              </div>
              <span className="text-[9px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded font-medium">Facturado</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[9px] text-slate-500 border-t border-slate-800 pt-2">
            <span>Promotor: Juan Pérez (Santo Domingo)</span>
            <span className="text-emerald-400 font-medium">GPS Activo</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="productos"
      className="py-24 md:py-32 bg-brand-blue-light relative border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          tag="Productos propios"
          title="Nuestros Productos Tecnológicos"
          description="Desarrollamos soluciones verticales y plataformas SaaS diseñadas para resolver procesos de misión crítica con los más altos estándares de arquitectura y seguridad."
        />

        {/* Product List */}
        <div className="space-y-24 md:space-y-32">
          {productsList.map((product, idx) => {
            const ProductIcon = product.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={product.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                
                {/* Left/Right Text Detail */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-6 space-y-6 ${!isEven && "lg:order-2"}`}
                >
                  <div className="space-y-2">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${product.accentBg}`}>
                      <ProductIcon className="w-3.5 h-3.5" />
                      <span>{product.name}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {product.tagline}
                    </h3>
                  </div>

                  <p className="text-slate-600 font-medium leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm shadow-sm transition-all duration-200 cursor-pointer ${product.themeColor}`}
                    >
                      <span>Ver {product.name}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>

                {/* Left/Right Visual Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-6 flex justify-center ${!isEven && "lg:order-1"}`}
                >
                  <div className="relative w-full max-w-[460px] aspect-[4/3] p-3 bg-slate-100 rounded-2xl border border-slate-200/80 shadow-md">
                    {/* Embedded Visual Mockup */}
                    {product.mockup}
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
