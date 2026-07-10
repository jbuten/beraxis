"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Activity,
  Award,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Value {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

export default function About() {
  const values: Value[] = [
    {
      title: "Claridad",
      description: "Hablamos de tecnología en términos sencillos y de negocio. Procesos claros, sin ambigüedades.",
      icon: Eye,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10 border-brand-blue/20",
    },
    {
      title: "Innovación útil",
      description: "Adoptamos tendencias únicamente si resuelven problemas reales o agregan valor operativo medible.",
      icon: Lightbulb,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10 border-brand-green/20",
    },
    {
      title: "Seguridad",
      description: "Protegemos tus activos de información e integramos buenas prácticas de cifrado en cada módulo.",
      icon: ShieldCheck,
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10 border-brand-orange/20",
    },
    {
      title: "Escalabilidad",
      description: "Arquitecturas que toleran el crecimiento operacional y la adición fluida de nuevos canales.",
      icon: TrendingUp,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10 border-brand-blue/20",
    },
    {
      title: "Compromiso operativo",
      description: "Garantizamos el funcionamiento óptimo de las plataformas post-lanzamiento en tu día a día.",
      icon: Activity,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10 border-brand-green/20",
    },
    {
      title: "Mejora continua",
      description: "Monitoreamos, evaluamos métricas de uso y adaptamos las soluciones de forma evolutiva.",
      icon: Award,
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10 border-brand-orange/20",
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Brand Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Sobre BERAXIS
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Construimos tecnología con visión de negocio
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              BERAXIS nace con el propósito de desarrollar soluciones tecnológicas prácticas, modernas y sostenibles para organizaciones que necesitan digitalizar procesos, operar con mayor control y escalar sus capacidades.
            </p>
            
            <p className="text-slate-500 font-semibold text-sm leading-relaxed">
              Combinamos visión estratégica, experiencia técnica y enfoque de producto para convertir necesidades operativas en plataformas robustas y confiables que generen rentabilidad.
            </p>

            {/* Decorative box */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-black text-slate-900">3+</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Productos Propios</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Enfoque B2B</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, idx) => {
              const ValueIcon = value.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/60 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${value.color} ${value.bgColor}`}>
                      <ValueIcon className="w-4.5 h-4.5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-extrabold text-slate-800 tracking-tight">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {value.description}
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
