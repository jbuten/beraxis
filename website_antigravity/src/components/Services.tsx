"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  GitBranch,
  Laptop,
  ArrowRightLeft,
  RefreshCw,
  Zap,
  CheckSquare,
  ShieldAlert,
  Cloud,
  FileSpreadsheet,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
}

export default function Services() {
  const servicesList: Service[] = [
    {
      title: "Consultoría tecnológica",
      description: "Alineación estratégica de objetivos de negocio con herramientas digitales robustas y viables.",
      icon: LineChart,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10 border-brand-blue/20",
    },
    {
      title: "Arquitectura de software",
      description: "Diseño de sistemas tolerantes a fallos, modulares, limpios y preparados para escalabilidad futura.",
      icon: GitBranch,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10 border-brand-green/20",
    },
    {
      title: "Desarrollo de plataformas",
      description: "Construcción de aplicaciones web a medida, sistemas core, backoffices y software empresarial.",
      icon: Laptop,
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10 border-brand-orange/20",
    },
    {
      title: "Integraciones de sistemas",
      description: "Conexión fluida y segura de APIs externas, pasarelas de pago y sistemas core heredados.",
      icon: ArrowRightLeft,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10 border-brand-blue/20",
    },
    {
      title: "Automatización de procesos",
      description: "Optimización de flujos de trabajo para reducir tareas manuales, errores y tiempos de entrega.",
      icon: RefreshCw,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10 border-brand-green/20",
    },
    {
      title: "Modernización de apps",
      description: "Transformación de código y bases de datos obsoletas en tecnologías web ágiles y mantenibles.",
      icon: Zap,
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10 border-brand-orange/20",
    },
    {
      title: "Implementación digital",
      description: "Migración de datos de forma segura, configuración y capacitación de personal técnico y operativo.",
      icon: CheckSquare,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10 border-brand-blue/20",
    },
    {
      title: "Seguridad y auditoría",
      description: "Esquemas de permisos basados en roles (RBAC), trazabilidad total y cifrado de información crítica.",
      icon: ShieldAlert,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10 border-brand-green/20",
    },
    {
      title: "Infraestructura Cloud",
      description: "Despliegues en la nube estructurados, seguros, escalables y orientados a alta disponibilidad.",
      icon: Cloud,
      color: "text-brand-orange",
      bgColor: "bg-brand-orange/10 border-brand-orange/20",
    },
    {
      title: "Soporte y evolución",
      description: "Monitoreo operativo continuo y mantenimiento preventivo para garantizar la continuidad del negocio.",
      icon: FileSpreadsheet,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10 border-brand-blue/20",
    },
  ];

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      id="servicios"
      className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <SectionTitle
          tag="Capacidades"
          title="Servicios tecnológicos para transformar operaciones"
          description="Acompañamos a organizaciones en crecimiento diseñando e implementando las soluciones de software y arquitectura que su operación requiere."
        />

        {/* Services Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {servicesList.map((service, idx) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 8px 10px -6px rgba(15, 23, 42, 0.05)",
                  borderColor: "rgba(15, 23, 42, 0.1)",
                  transition: { duration: 0.2 },
                }}
                className={`p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between transition-colors duration-200`}
              >
                <div>
                  {/* Icon Wrapper */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${service.color} ${service.bgColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-slate-800 tracking-tight mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
