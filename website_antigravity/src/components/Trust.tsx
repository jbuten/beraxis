"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  History,
  GitMerge,
  PieChart,
  Settings,
  BadgeAlert,
  Terminal,
  Lock,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

interface TrustPoint {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export default function Trust() {
  const trustPoints: TrustPoint[] = [
    {
      title: "Arquitecturas escalables",
      description: "Diseñadas para soportar cargas crecientes sin comprometer el rendimiento ni la estabilidad del sistema.",
      icon: TrendingUp,
      color: "text-cyan-400 bg-white/5 border border-cyan-500/20",
    },
    {
      title: "Seguridad por roles y permisos",
      description: "Control de accesos granular para proteger información sensible y estructurar responsabilidades organizacionales.",
      icon: Lock,
      color: "text-brand-green bg-white/5 border border-brand-green/20",
    },
    {
      title: "Auditoría de operaciones",
      description: "Registro de auditoría (logs) histórico e inmutable para rastrear acciones críticas y mantener cumplimiento normativo.",
      icon: History,
      color: "text-brand-orange bg-white/5 border border-brand-orange/20",
    },
    {
      title: "Integración con sistemas existentes",
      description: "Conexión nativa y robusta con tus bases de datos, APIs de terceros y plataformas heredadas.",
      icon: GitMerge,
      color: "text-cyan-400 bg-white/5 border border-cyan-500/20",
    },
    {
      title: "Reportes para toma de decisiones",
      description: "Tableros analíticos e informes detallados estructurados para facilitar decisiones de negocio fundamentadas.",
      icon: PieChart,
      color: "text-brand-green bg-white/5 border border-brand-green/20",
    },
    {
      title: "Diseño para eficiencia operativa",
      description: "Interfaces limpias orientadas a reducir errores humanos, acortar procesos operativos y facilitar la adopción.",
      icon: Settings,
      color: "text-brand-orange bg-white/5 border border-brand-orange/20",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-blue text-white relative border-b border-slate-950">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <SectionTitle
          dark
          tag="Seguridad & Estructura"
          title="Tecnología pensada para procesos críticos"
          description="Nuestros sistemas se construyen bajo estrictos estándares corporativos para operar con absoluta seguridad y transparencia."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Enterprise Security & Compliance Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl space-y-6 relative overflow-hidden backdrop-blur-sm">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Estatus del Sistema</h4>
                  <div className="text-base font-extrabold text-white mt-0.5">Seguridad Activa</div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[10px] font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                  PROTEGIDO
                </div>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 p-3.5 rounded-xl text-center space-y-1.5">
                  <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Disponibilidad (Uptime)</div>
                  <div className="text-xl font-black text-brand-green">99.99%</div>
                  <div className="text-[8px] text-slate-500 font-semibold">Garantía SLA de servicio</div>
                </div>
                
                <div className="bg-white/5 border border-white/5 p-3.5 rounded-xl text-center space-y-1.5">
                  <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider">Cifrado General</div>
                  <div className="text-xl font-black text-white">AES-256</div>
                  <div className="text-[8px] text-slate-500 font-semibold">Tránsito TLS 1.3 activo</div>
                </div>
              </div>

              {/* Security Checklist */}
              <div className="space-y-3">
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mb-2">Protocolos de Cumplimiento</div>
                
                <div className="flex items-center justify-between text-xs bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span className="text-white font-semibold">Trazabilidad & Logs Inmutables</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase">Activo</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span className="text-white font-semibold">Control de Acceso (RBAC)</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase">Configurado</span>
                </div>

                <div className="flex items-center justify-between text-xs bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span className="text-white font-semibold">Auditoría Diaria Vulnerabilidades</span>
                  </div>
                  <span className="text-[9px] text-brand-green font-bold uppercase">Completado</span>
                </div>
              </div>

              {/* Footer text inside card */}
              <div className="text-[9px] text-slate-500 font-semibold text-center border-t border-white/10 pt-3">
                Cumplimiento normativo para banca y cooperativas
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Trust Points Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustPoints.map((point, idx) => {
              const PointIcon = point.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Bubble Icon */}
                  <div className={`p-2.5 rounded-xl border flex items-center justify-center shrink-0 ${point.color}`}>
                    <PointIcon className="w-5 h-5" />
                  </div>

                  {/* Text details */}
                  <div className="space-y-1">
                    <h4 className="text-base font-extrabold text-white tracking-tight">
                      {point.title}
                    </h4>
                    <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
