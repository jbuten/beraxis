"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Users,
  CheckCircle,
  TrendingUp,
  QrCode,
  FileText,
  Lock,
  ArrowUpRight,
  Store,
  FileCheck2,
  DollarSign,
  ChevronRight,
  Shield,
  Activity,
  Layers
} from "lucide-react";

export function VisualSlideNexCoop() {
  return (
    <div className="relative w-full h-[340px] sm:h-[380px] md:h-[420px] rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-2xl backdrop-blur-lg overflow-hidden flex flex-col justify-between">
      <style>{`
        @keyframes pulseGreen {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.15); opacity: 0.4; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Cybernetic grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#139a43_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(19,154,67,0.06),transparent_60%)]" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
        </div>
        <div className="flex-1 max-w-[280px] mx-4 rounded-full bg-slate-100/90 border border-slate-200/60 px-3 py-0.5 flex items-center justify-between text-[9px] font-bold text-slate-400 shadow-inner">
          <span className="flex items-center gap-1 text-slate-600 font-mono">
            nexcoopcore.com/dashboard
          </span>
          <span className="text-[7px] text-brand-green bg-brand-green/10 border border-brand-green/20 px-1 rounded-sm font-semibold uppercase">core-live</span>
        </div>
        <div className="w-8 h-2" />
      </div>

      {/* Main Content Dashboard */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch my-auto flex-1 py-2 overflow-hidden">
        
        {/* Left Column: Metrics & Members */}
        <div 
          className="rounded-2xl border border-slate-200/70 bg-white/95 p-3.5 shadow-md flex flex-col justify-between h-full"
          style={{ animation: "floatSlow 5s ease-in-out infinite" }}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[8px] font-extrabold text-brand-green">
                  <span className="w-1 h-1 rounded-full bg-brand-green animate-pulse" />
                  NEXCOOP CORE
                </span>
                <h4 className="text-xs font-bold text-slate-800 leading-tight mt-1">Resumen Cooperativo</h4>
              </div>
              <div className="h-6 w-6 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-xs shrink-0">
                <Database className="w-3.5 h-3.5 text-brand-green" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div className="text-[8px] text-slate-400 uppercase font-semibold">Socios Activos</div>
                <div className="text-sm font-bold text-slate-800 mt-0.5 flex items-center gap-1">
                  14,820
                  <span className="text-[8px] text-emerald-500 font-medium">+12%</span>
                </div>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div className="text-[8px] text-slate-400 uppercase font-semibold">Préstamos Activos</div>
                <div className="text-sm font-bold text-slate-800 mt-0.5">$8.4M</div>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between rounded-lg bg-slate-50/70 border border-slate-100 px-2 py-1 text-[8.5px] font-medium text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-brand-green" /> Socios Nuevos (Mes)
              </span>
              <span className="text-slate-700 font-bold">+245</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50/70 border border-slate-100 px-2 py-1 text-[8.5px] font-medium text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-500" /> Transacciones / Min
              </span>
              <span className="text-slate-700 font-bold">142 txn</span>
            </div>
          </div>
        </div>

        {/* Right Column: Chart / Distribution */}
        <div 
          className="rounded-2xl border border-slate-200/70 bg-white/95 p-3.5 shadow-md flex flex-col justify-between h-full"
          style={{ animation: "floatSlow 5s ease-in-out infinite 2.5s" }}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h5 className="text-[10px] font-bold text-slate-800">Cartera y Ahorros</h5>
              <TrendingUp className="w-3.5 h-3.5 text-brand-green" />
            </div>
            <p className="text-[8px] text-slate-400">Eficiencia en colocación de créditos</p>
          </div>

          <div className="flex-1 flex flex-col justify-center py-2">
            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] text-slate-500 font-semibold">
                  <span>Préstamos Aprobados (Meta)</span>
                  <span className="text-brand-green font-mono">82%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-green h-full rounded-full w-[82%]" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[8px] text-slate-500 font-semibold">
                  <span>Aportaciones Captadas</span>
                  <span className="text-emerald-500 font-mono">68%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full w-[68%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between bg-slate-50 px-2 py-1.5 rounded-lg border border-slate-100 text-[8px]">
            <span className="text-slate-400 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" /> Caja Chica Integrada
            </span>
            <span className="text-brand-green font-bold">ACTIVO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualSlideVeriDoc() {
  return (
    <div className="relative w-full h-[340px] sm:h-[380px] md:h-[420px] rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-2xl backdrop-blur-lg overflow-hidden flex flex-col justify-between">
      <style>{`
        @keyframes laserSweep {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(96px); }
        }
        @keyframes radarPulse {
          0% { transform: scale(0.9); opacity: 0.15; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(0.9); opacity: 0.15; }
        }
        @keyframes floatCardVeriDoc {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
      `}</style>

      {/* Cybernetic grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0b2545_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(11,37,69,0.06),transparent_60%)]" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
        </div>
        <div className="flex-1 max-w-[280px] mx-4 rounded-full bg-slate-100/90 border border-slate-200/60 px-3 py-0.5 flex items-center justify-between text-[9px] font-bold text-slate-400 shadow-inner">
          <span className="flex items-center gap-1 text-slate-600 font-mono">
            veridoc360.com/verify/doc-3024
          </span>
          <span className="text-[7px] text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-1 rounded-sm font-semibold uppercase">ssl-secure</span>
        </div>
        <div className="w-8 h-2" />
      </div>

      {/* Main Content Body */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch my-auto flex-1 py-2 overflow-hidden">
        
        {/* Left Column: Digital Certificate Card (Span 7) */}
        <div 
          className="sm:col-span-7 rounded-2xl border border-slate-200 bg-white/95 p-3.5 shadow-md flex flex-col justify-between h-full"
          style={{ animation: "floatCardVeriDoc 4.5s ease-in-out infinite" }}
        >
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-100 px-2 py-0.5 text-[8px] font-extrabold text-emerald-600">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  VERIFICADO
                </span>
                <h4 className="text-xs font-bold text-slate-800 leading-tight mt-1">Acta de Aprobación</h4>
              </div>
              <div className="h-6 w-6 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center shadow-3xs shrink-0">
                <FileCheck2 className="w-3.5 h-3.5 text-brand-blue" />
              </div>
            </div>
            
            <div className="font-mono text-[7px] text-slate-400 bg-slate-50 border border-slate-100 rounded px-1.5 py-0.5 inline-block truncate max-w-full">
              SHA256: 8f3c1e9a2b5d4e7f9c3a8b...
            </div>
          </div>

          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between rounded-lg bg-slate-50/70 border border-slate-100 px-2 py-1 text-[8.5px] font-semibold text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-emerald-500" /> Estado
              </span>
              <span className="text-emerald-700 font-extrabold bg-emerald-50 px-1 py-0.2 rounded border border-emerald-100 text-[7px]">
                VIGENTE
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50/70 border border-slate-100 px-2 py-1 text-[8.5px] font-semibold text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-sky-500" /> Integridad
              </span>
              <span className="text-sky-700 font-extrabold bg-sky-50 px-1 py-0.2 rounded border border-sky-100 text-[7px]">
                INTEGRO
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50/70 border border-slate-100 px-2 py-1 text-[8.5px] font-semibold text-slate-600">
              <span className="text-slate-400 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-indigo-500" /> Aprobador
              </span>
              <span className="text-slate-700 font-extrabold text-[7.5px] truncate">
                Junta Directiva BERAXIS
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: QR Scanner Viewport (Span 5) */}
        <div 
          className="sm:col-span-5 flex flex-col items-center justify-center p-3.5 rounded-2xl border border-slate-200 bg-slate-50/50 shadow-inner space-y-2.5 relative overflow-hidden h-full"
          style={{ animation: "floatCardVeriDoc 4.5s ease-in-out infinite 2.25s" }}
        >
          {/* Laser scanning line */}
          <div 
            className="absolute top-4 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.5)] z-20 pointer-events-none"
            style={{ animation: "laserSweep 3s ease-in-out infinite" }} 
          />

          {/* Pulse Radial Radar */}
          <div 
            className="absolute w-20 h-20 rounded-full border border-cyan-200/50 pointer-events-none"
            style={{ animation: "radarPulse 2.5s ease-in-out infinite" }} 
          />
          
          {/* QR Code Container */}
          <div className="relative w-20 h-20 border border-slate-200 bg-white rounded-xl p-1.5 shadow-md flex items-center justify-center">
            <QrCode className="w-full h-full text-slate-800" />
            <div className="absolute w-4 h-4 bg-brand-blue rounded border border-white flex items-center justify-center text-[5px] font-black text-white font-mono">
              VD
            </div>
          </div>

          <div className="text-center relative z-10">
            <span className="text-[7.5px] font-bold text-slate-400 block tracking-widest uppercase">Escanear QR</span>
            <span className="text-[9px] font-extrabold text-slate-700 block">Validación Pública</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VisualSlideUrupos() {
  return (
    <div className="relative w-full h-[340px] sm:h-[380px] md:h-[420px] rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-2xl backdrop-blur-lg overflow-hidden flex flex-col justify-between">
      <style>{`
        @keyframes barGrow {
          0%, 100% { height: 35%; }
          50% { height: 85%; }
        }
        @keyframes floatUrupos {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>

      {/* Cybernetic grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#f39200_1px,transparent_1px)] [background-size:12px_12px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(243,146,0,0.06),transparent_60%)]" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/90" />
        </div>
        <div className="flex-1 max-w-[280px] mx-4 rounded-full bg-slate-100/90 border border-slate-200/60 px-3 py-0.5 flex items-center justify-between text-[9px] font-bold text-slate-400 shadow-inner">
          <span className="flex items-center gap-1 text-slate-600 font-mono">
            urupos.com/sales-portal
          </span>
          <span className="text-[7px] text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-1 rounded-sm font-semibold uppercase">retail-pos</span>
        </div>
        <div className="w-8 h-2" />
      </div>

      {/* Main Content Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch my-auto flex-1 py-2 overflow-hidden">
        
        {/* Left Column: Sales metrics */}
        <div 
          className="rounded-2xl border border-slate-200/70 bg-white/95 p-3.5 shadow-md flex flex-col justify-between h-full"
          style={{ animation: "floatUrupos 5.5s ease-in-out infinite" }}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 border border-orange-100 px-2 py-0.5 text-[8px] font-extrabold text-brand-orange">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  URUPOS RETAIL
                </span>
                <h4 className="text-xs font-bold text-slate-800 leading-tight mt-1">Terminal de Ventas</h4>
              </div>
              <div className="h-6 w-6 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shadow-xs shrink-0">
                <Store className="w-3.5 h-3.5 text-brand-orange" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-[8px] text-slate-400 uppercase font-semibold">Ventas del Día</div>
              <div className="text-base font-extrabold text-slate-800 flex items-baseline gap-1">
                $12,450.80
                <span className="text-[8px] text-emerald-500 font-semibold flex items-center gap-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +8.4%
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 px-2 py-1 text-[8px] font-semibold text-slate-700">
              <span>Pedido #9084</span>
              <span className="text-emerald-600 bg-emerald-50 px-1 rounded border border-emerald-100 text-[7px]">FACTURADO</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-100 px-2 py-1 text-[8px] font-semibold text-slate-700">
              <span>Pedido #9083</span>
              <span className="text-brand-orange bg-orange-50 px-1 rounded border border-orange-100 text-[7px]">EN RUTA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Sales Chart */}
        <div 
          className="rounded-2xl border border-slate-200/70 bg-white/95 p-3.5 shadow-md flex flex-col justify-between h-full"
          style={{ animation: "floatUrupos 5.5s ease-in-out infinite 2.75s" }}
        >
          <div className="space-y-1">
            <h5 className="text-[10px] font-bold text-slate-800">Monitoreo Horario</h5>
            <p className="text-[8px] text-slate-400">Picos de facturación del comercio</p>
          </div>

          {/* Bar Chart Simulation */}
          <div className="flex-1 flex items-end gap-2.5 h-20 px-2 py-1">
            <div className="flex-1 bg-brand-orange/20 rounded-t-sm h-[35%] relative group">
              <div className="absolute inset-x-0 bottom-0 bg-brand-orange rounded-t-sm transition-all duration-500" style={{ height: "70%", animation: "barGrow 4s ease-in-out infinite" }} />
            </div>
            <div className="flex-1 bg-brand-orange/20 rounded-t-sm h-[60%] relative group">
              <div className="absolute inset-x-0 bottom-0 bg-brand-orange rounded-t-sm transition-all duration-500" style={{ height: "80%", animation: "barGrow 4s ease-in-out infinite 0.8s" }} />
            </div>
            <div className="flex-1 bg-brand-orange/20 rounded-t-sm h-[90%] relative group">
              <div className="absolute inset-x-0 bottom-0 bg-brand-orange rounded-t-sm transition-all duration-500" style={{ height: "90%", animation: "barGrow 4s ease-in-out infinite 1.6s" }} />
            </div>
            <div className="flex-1 bg-brand-orange/20 rounded-t-sm h-[40%] relative group">
              <div className="absolute inset-x-0 bottom-0 bg-brand-orange rounded-t-sm transition-all duration-500" style={{ height: "50%", animation: "barGrow 4s ease-in-out infinite 2.4s" }} />
            </div>
            <div className="flex-1 bg-brand-orange/20 rounded-t-sm h-[75%] relative group">
              <div className="absolute inset-x-0 bottom-0 bg-brand-orange rounded-t-sm transition-all duration-500" style={{ height: "65%", animation: "barGrow 4s ease-in-out infinite 3.2s" }} />
            </div>
          </div>

          <div className="flex items-center justify-between text-[7px] text-slate-400 font-bold border-t border-slate-100 pt-1.5">
            <span>09:00</span>
            <span>12:00</span>
            <span>15:00</span>
            <span>18:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroVisual({ visualKey }: { visualKey: string }) {
  switch (visualKey) {
    case "nexcoop":
      return <VisualSlideNexCoop />;
    case "veridoc":
      return <VisualSlideVeriDoc />;
    case "urupos":
      return <VisualSlideUrupos />;
    default:
      return null;
  }
}
