"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Code, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Target, 
  Award, 
  TrendingUp, 
  Mail, 
  MapPin, 
  ChevronRight,
  ArrowDown
} from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Countdown from "@/components/Countdown";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between select-none overflow-x-hidden pb-10">
      {/* Premium animated glow and particle background */}
      <AnimatedBackground />

      {/* Header */}
      <header className="w-full max-w-7xl px-6 md:px-12 py-6 flex justify-between items-center z-50">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-9 w-36 sm:w-44 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/assets/logo_negativo.svg"
            alt="BERAXIS Logo"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 sm:gap-6"
        >
          <a
            href="https://www.linkedin.com/in/jose-buten-10567117/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beraxis-gray/60 hover:text-beraxis-green transition-colors p-2 rounded-full hover:bg-white/[0.03]"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hidden sm:inline-flex bg-white/5 border border-white/10 hover:border-beraxis-green/30 hover:bg-white/[0.08] text-white font-medium text-xs rounded-xl py-2.5 px-5 transition-all cursor-pointer"
          >
            Contacto
          </button>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center z-10">
        
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center pt-10 pb-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-6 md:gap-8 max-w-4xl"
          >
            {/* Top expectation badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-beraxis-blue/35 border border-white/10 px-4 py-2 rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
            >
              <span className="w-2 h-2 rounded-full bg-beraxis-green animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-beraxis-gray/90 font-sans">
                Próximamente · beraxis.com
              </span>
            </motion.div>

            {/* Main responsive title */}
            <motion.h1
              variants={itemVariants}
              className="font-sora text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]"
            >
              {/* Short alternative for mobile, long for desktop */}
              <span className="block md:hidden text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-beraxis-gray/70">
                Tecnología empresarial para avanzar con confianza.
              </span>
              <span className="hidden md:inline text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-beraxis-gray/70">
                BERAXIS está construyendo tecnología para empresas que necesitan avanzar con confianza.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-sm sm:text-base md:text-lg text-beraxis-gray/75 leading-relaxed max-w-2xl"
            >
              Software empresarial, automatización, integraciones e innovación tecnológica para organizaciones que buscan operar con más eficiencia, control y visión de futuro.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-2"
            >
              <button
                onClick={() => scrollToSection("contacto")}
                className="w-full sm:w-auto bg-beraxis-green hover:bg-[#099A55] text-white font-semibold text-sm rounded-xl py-3 px-8 flex items-center justify-center gap-1.5 shadow-lg shadow-beraxis-green/10 hover:shadow-beraxis-green/20 transition-all cursor-pointer"
              >
                <span>Solicitar información</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("enfoque")}
                className="w-full sm:w-auto bg-white/5 border border-white/10 hover:border-beraxis-orange/30 hover:bg-white/[0.08] text-white font-semibold text-sm rounded-xl py-3 px-8 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Conocer enfoque</span>
              </button>
            </motion.div>

            {/* Countdown timer */}
            <motion.div variants={itemVariants} className="w-full">
              <Countdown />
            </motion.div>

            {/* Subtle scroll indicator */}
            <motion.div 
              variants={itemVariants}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-6 flex flex-col items-center gap-1.5 cursor-pointer text-beraxis-gray/40 hover:text-beraxis-green transition-colors"
              onClick={() => scrollToSection("servicios")}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider">Explorar</span>
              <ArrowDown className="w-4 h-4 stroke-[1.5]" />
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION: LO QUE ESTAMOS CONSTRUYENDO */}
        <section id="servicios" className="w-full py-20 md:py-28 border-t border-white/[0.04]">
          <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            <div className="text-beraxis-green font-semibold text-xs uppercase tracking-widest mb-3">
              Soluciones Integrales
            </div>
            <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Lo que estamos construyendo
            </h2>
            <p className="font-sans text-sm sm:text-base text-beraxis-gray/70 leading-relaxed">
              Desarrollamos soluciones de alta ingeniería para transformar procesos complejos en sistemas escalables, seguros y eficientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <FeatureCard
              title="Software empresarial a medida"
              description="Sistemas robustos de backend, aplicaciones escalables y plataformas de alta disponibilidad diseñadas a la medida de tu modelo operativo."
              icon={Code}
              accent="green"
            />
            <FeatureCard
              title="Automatización e inteligencia operacional"
              description="Orquestación de procesos complejos mediante automatizaciones y modelos aplicados a flujos críticos de negocio."
              icon={Cpu}
              accent="orange"
            />
            <FeatureCard
              title="Plataformas SaaS y productos digitales"
              description="Concepción, diseño e implementación de productos de software en la nube con altos estándares de seguridad y experiencia de usuario."
              icon={Layers}
              accent="orange"
            />
            <FeatureCard
              title="Integraciones, seguridad y trazabilidad"
              description="Conexión segura de sistemas core y externos mediante APIs, acompañado de protocolos estrictos de firma y verificación digital."
              icon={ShieldCheck}
              accent="green"
            />
          </div>
        </section>

        {/* SECTION: ENFOQUE BERAXIS */}
        <section id="enfoque" className="w-full py-20 md:py-28 border-t border-white/[0.04] bg-gradient-to-b from-transparent via-[#042444]/5 to-transparent">
          <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
            <div className="text-beraxis-orange font-semibold text-xs uppercase tracking-widest mb-3">
              Filosofía Operativa
            </div>
            <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Enfoque Beraxis
            </h2>
            <p className="font-sans text-sm sm:text-base text-beraxis-gray/70 leading-relaxed">
              Nuestra ingeniería se basa en tres pilares fundamentales para garantizar el éxito tecnológico a largo plazo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {/* Pilar 1 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-beraxis-green/10 text-beraxis-green border border-beraxis-green/20 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-sora text-base font-bold text-white">
                Precisión tecnológica
              </h3>
              <p className="font-sans text-xs sm:text-sm text-beraxis-gray/70 leading-relaxed">
                Código limpio, arquitectura escalable y selección tecnológica rigurosa para asegurar la eficiencia del software empresarial en entornos exigentes.
              </p>
            </motion.div>

            {/* Pilar 2 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-beraxis-orange/10 text-beraxis-orange border border-beraxis-orange/20 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-sora text-base font-bold text-white">
                Confianza corporativa
              </h3>
              <p className="font-sans text-xs sm:text-sm text-beraxis-gray/70 leading-relaxed">
                Garantía de seguridad de datos, auditorías de firma digital y apego estricto a las regulaciones financieras, fintechs y bancarias.
              </p>
            </motion.div>

            {/* Pilar 3 */}
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-beraxis-green/10 text-beraxis-green border border-beraxis-green/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-sora text-base font-bold text-white">
                Crecimiento sostenible
              </h3>
              <p className="font-sans text-xs sm:text-sm text-beraxis-gray/70 leading-relaxed">
                Diseñamos software modular que se adapta a la evolución del negocio, evitando dependencias tecnológicas rígidas y deuda técnica temprana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION: UNA NUEVA BASE TECNOLOGICA */}
        <section className="w-full py-20 md:py-28 border-t border-white/[0.04] relative">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.02]">
            <div className="relative w-64 h-64 sm:w-96 sm:h-96">
              <Image
                src="/assets/isotipo.svg"
                alt="Beraxis Isotipo Background"
                fill
                className="object-contain animate-float"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 relative z-10 px-4">
            <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Una nueva base tecnológica está tomando forma.
            </h2>
            <p className="font-sans text-sm sm:text-base text-beraxis-gray/75 leading-relaxed max-w-2xl">
              Estamos preparando soluciones pensadas para empresas que necesitan transformar procesos complejos en plataformas simples, seguras y escalables.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION / CAPTURE FORM */}
        <section id="contacto" className="w-full py-20 md:py-24 border-t border-white/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-center lg:text-left">
              <div className="text-beraxis-green font-semibold text-xs uppercase tracking-widest">
                Primer Contacto
              </div>
              <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                ¿Listo para liderar el futuro?
              </h2>
              <p className="font-sans text-sm sm:text-base text-beraxis-gray/70 leading-relaxed">
                Asesoramos y construimos la infraestructura digital que requiere tu organización para escalar con seguridad y precisión.
              </p>
              
              <div className="flex flex-col gap-4 text-xs sm:text-sm text-beraxis-gray/75 mt-4 items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-beraxis-green">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>info@beraxis.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-beraxis-green">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Santo Domingo, República Dominicana</span>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 w-full">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl px-6 md:px-12 pt-12 pb-6 border-t border-white/[0.04] flex flex-col sm:flex-row gap-6 justify-between items-center text-center sm:text-left z-20 text-xs text-beraxis-gray/50">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-beraxis-gray/70">
            BERAXIS · Tecnología, innovación e impacto.
          </p>
          <p>© 2026 Beraxis. Todos los derechos reservados.</p>
        </div>
        
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/jose-buten-10567117/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <button
            onClick={() => scrollToSection("contacto")}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contacto
          </button>
          <a href="#" className="hover:text-white transition-colors">
            Privacidad
          </a>
        </div>
      </footer>
    </div>
  );
}
