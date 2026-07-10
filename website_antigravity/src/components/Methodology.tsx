"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Terminal, LineChart } from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

export default function Methodology() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Entendemos procesos, dolores, sistemas existentes y oportunidades de mejora.",
      icon: Search,
      color: "text-brand-blue border-brand-blue/20",
      bgColor: "bg-brand-blue/10",
    },
    {
      number: "02",
      title: "Diseño",
      description: "Definimos arquitectura, experiencia de usuario, módulos, integraciones y modelo de implementación.",
      icon: PenTool,
      color: "text-brand-green border-brand-green/20",
      bgColor: "bg-brand-green/10",
    },
    {
      number: "03",
      title: "Implementación",
      description: "Construimos, configuramos, migramos datos, integramos servicios y capacitamos usuarios.",
      icon: Terminal,
      color: "text-brand-orange border-brand-orange/20",
      bgColor: "bg-brand-orange/10",
    },
    {
      number: "04",
      title: "Evolución",
      description: "Acompañamos la operación, medimos resultados y mejoramos la plataforma continuamente.",
      icon: LineChart,
      color: "text-brand-blue border-brand-blue/20",
      bgColor: "bg-brand-blue/10",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-blue-light relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionTitle
          tag="Metodología"
          title="De la idea a la plataforma operativa"
          description="Estructuramos el desarrollo de proyectos mediante fases claras que garantizan control, transparencia y alineación estratégica."
        />

        {/* Timeline container */}
        <div className="relative mt-12 md:mt-20">
          
          {/* Horizontal connecting line (Desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-slate-100 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-brand-green"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center md:items-start text-center md:text-left group"
                >
                  {/* Step bubble */}
                  <div className="relative mb-6">
                    {/* Circle */}
                    <div className={`relative w-20 h-20 rounded-full bg-white border-2 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-current/30 ${step.color}`}>
                      <Icon className="w-8 h-8" />
                      
                      {/* Step Number Tag */}
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="space-y-2 max-w-xs md:max-w-none">
                    <h3 className="text-lg font-extrabold text-slate-800 tracking-tight flex items-center justify-center md:justify-start gap-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                      {step.description}
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
