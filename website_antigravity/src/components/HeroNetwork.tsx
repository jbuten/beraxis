"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  FileCheck2,
  Store,
  Shield,
  Layers,
  Cpu,
  ArrowUpRight,
  TrendingUp,
  Lock,
  CheckCircle,
} from "lucide-react";

export default function HeroNetwork() {
  // Connections from center (250, 250) to products/capabilities
  const nodes = [
    {
      id: "nexcoop",
      name: "NexCoopCore",
      desc: "Core/ERP Cooperativo",
      icon: Database,
      color: "bg-brand-green",
      textColor: "text-brand-green",
      bgColor: "bg-brand-blue-light/40",
      borderColor: "border-brand-green/20",
      x: 60,
      y: 80,
      delay: 0.1,
    },
    {
      id: "veridoc",
      name: "VeriDoc360",
      desc: "Confianza & Firma Digital",
      icon: FileCheck2,
      color: "bg-brand-blue",
      textColor: "text-brand-blue",
      bgColor: "bg-brand-blue-light/40",
      borderColor: "border-brand-blue/20",
      x: 360,
      y: 90,
      delay: 0.3,
    },
    {
      id: "urupos",
      name: "URUPOS",
      desc: "Automatización Comercial",
      icon: Store,
      color: "bg-brand-orange",
      textColor: "text-brand-orange",
      bgColor: "bg-brand-blue-light/40",
      borderColor: "border-brand-orange/20",
      x: 380,
      y: 350,
      delay: 0.5,
    },
    {
      id: "seguridad",
      name: "Seguridad",
      desc: "Criptografía y Roles",
      icon: Shield,
      color: "bg-brand-blue",
      textColor: "text-brand-blue",
      bgColor: "bg-brand-blue-light/40",
      borderColor: "border-brand-blue/20",
      x: 230,
      y: 20,
      delay: 0.2,
    },
    {
      id: "integraciones",
      name: "Integraciones",
      desc: "APIs & Flujos Core",
      icon: Layers,
      color: "bg-brand-orange",
      textColor: "text-brand-orange",
      bgColor: "bg-brand-blue-light/40",
      borderColor: "border-brand-orange/20",
      x: 50,
      y: 340,
      delay: 0.4,
    },
    {
      id: "automatizacion",
      name: "Automatización",
      desc: "Operación Eficiente",
      icon: Cpu,
      color: "bg-brand-green",
      textColor: "text-brand-green",
      bgColor: "bg-brand-blue-light/40",
      borderColor: "border-brand-green/20",
      x: 220,
      y: 420,
      delay: 0.6,
    },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto select-none">
      {/* SVG Connecting Lines and Flowing Particles */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >

        {/* Connections from center (250, 250) to all outer nodes */}
        {nodes.map((node) => {
          // Adjust coordinate to be center of node card (approximate offset)
          const targetX = node.x + 75;
          const targetY = node.y + 35;
          const pathId = `path-${node.id}`;

          return (
            <g key={node.id}>
              {/* Connection Line */}
              <line
                x1="250"
                y1="250"
                x2={targetX}
                y2={targetY}
                stroke="rgba(11, 37, 69, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Animated pulses travelling down the connection */}
              <motion.circle
                r="4"
                fill="#2563eb"
                initial={{ offsetDistance: "0%" }}
                animate={{
                  cx: [250, targetX],
                  cy: [250, targetY],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.delay * 2,
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Center Core Node: BERAXIS */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-[200px] top-[210px] z-10 w-[100px] h-[100px] flex items-center justify-center"
      >
        {/* Pulsing Backing Rings */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-blue-100 border border-blue-200"
        />
        <motion.div
          animate={{ scale: [1.1, 1.6, 1.1], opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute inset-0 rounded-full bg-blue-50 border border-blue-100"
        />

        {/* Central Core Circle */}
        <div className="relative w-20 h-20 bg-brand-blue rounded-full flex flex-col items-center justify-center border border-white/10 shadow-md">
          <span className="text-[10px] tracking-[0.2em] font-semibold text-slate-300 uppercase">
            NÚCLEO
          </span>
          <span className="text-sm font-black text-white tracking-tight">
            BERAXIS
          </span>
        </div>
      </motion.div>

      {/* Outer Nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: 200, y: 210 }}
            animate={{
              opacity: 1,
              x: node.x,
              y: node.y,
            }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 14,
              delay: node.delay,
            }}
            whileHover={{
              scale: 1.05,
              y: node.y - 4,
              transition: { duration: 0.2 },
            }}
            className={`absolute w-[150px] p-3 rounded-xl border ${node.borderColor} ${node.bgColor} shadow-sm backdrop-blur-sm cursor-pointer transition-shadow hover:shadow-md z-20`}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className={`p-1.5 rounded-lg ${node.color} text-white shadow-sm`}>
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="text-xs font-bold text-slate-800 tracking-tight">
                {node.name}
              </h4>
            </div>
            <p className="text-[10px] text-slate-500 font-medium leading-normal">
              {node.desc}
            </p>
          </motion.div>
        );
      })}

      {/* Floating Simulated Dashboard Cards (For premium UX visual detail) */}
      {/* 1. Transaction volume chart simulation */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
        className="absolute left-[310px] top-[10px] bg-white p-2.5 rounded-lg border border-slate-100 shadow-md flex items-center gap-3 z-30 pointer-events-none"
      >
        <div className="p-1.5 bg-emerald-50 text-emerald-600 rounded-md">
          <TrendingUp className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
            NexCoop Transacciones
          </div>
          <div className="text-[11px] font-bold text-slate-800">
            +18.4% esta semana
          </div>
        </div>
      </motion.div>

      {/* 2. Signature verification badge */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.2 }}
        className="absolute left-[-20px] top-[190px] bg-white p-2.5 rounded-lg border border-slate-100 shadow-md flex items-center gap-2.5 z-30 pointer-events-none"
      >
        <div className="p-1 bg-cyan-50 text-cyan-600 rounded-full">
          <CheckCircle className="w-3.5 h-3.5" />
        </div>
        <div>
          <div className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
            VeriDoc360 Firmado
          </div>
          <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1">
            Hash validado <span className="text-[8px] font-mono text-cyan-600 bg-cyan-50 px-1 rounded">SHA256</span>
          </div>
        </div>
      </motion.div>

      {/* 3. Operational security status */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.8 }}
        className="absolute left-[200px] top-[150px] bg-slate-900/90 text-white p-2 rounded-lg border border-slate-800 shadow-md flex items-center gap-2 z-30 pointer-events-none"
      >
        <Lock className="w-3 h-3 text-blue-400" />
        <div className="text-[9px] font-mono font-medium text-blue-100">
          SECURE CONNECTION
        </div>
      </motion.div>
    </div>
  );
}
