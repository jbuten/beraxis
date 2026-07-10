"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import HeroNetwork from "./HeroNetwork";
import HeroVisual from "./HeroVisuals";

const heroSlides = [
  {
    eyebrow: "Consultoría & Desarrollo B2B",
    title: "Tecnología empresarial para organizaciones que necesitan ",
    titleHighlight: "avanzar con confianza",
    description: "En BERAXIS diseñamos plataformas digitales, productos tecnológicos e integraciones empresariales que ayudan a modernizar operaciones, automatizar procesos y construir soluciones escalables.",
    bullets: [
      "Plataformas B2B a medida",
      "Arquitectura Cloud escalable",
      "Modernización de sistemas",
      "Consultoría estratégica B2B"
    ],
    primaryButton: {
      label: "Solicitar reunión",
      action: "contacto"
    },
    secondaryButton: {
      label: "Conocer nuestras soluciones",
      action: "productos"
    },
    bgImage: "/images/hero_bg_beraxis.png",
    visualKey: "network"
  },
  {
    eyebrow: "Core / ERP Financiero",
    title: "El Core Financiero moderno y escalable para ",
    titleHighlight: "cooperativas de crédito",
    description: "Una plataforma integral para cooperativas orientada a gestionar socios, préstamos, aportaciones y contabilidad de manera segura e integral.",
    bullets: [
      "Gestión de socios y cuentas",
      "Préstamos y cobranzas",
      "Contabilidad en tiempo real",
      "Reportes de cumplimiento"
    ],
    primaryButton: {
      label: "Solicitar presentación",
      action: "contacto"
    },
    secondaryButton: {
      label: "Visitar NexCoopCore",
      href: "https://nexcoopcore.com/",
      isExternal: true
    },
    bgImage: "/images/hero_bg_nexcoop.png",
    visualKey: "nexcoop"
  },
  {
    eyebrow: "Confianza & Firma Digital",
    title: "Firma digital y verificación de documentos con ",
    titleHighlight: "total integridad",
    description: "Una plataforma completa para generar, aprobar, firmar y verificar documentos digitales con total trazabilidad, códigos QR seguros y validez jurídica.",
    bullets: [
      "QR único de verificación",
      "Flujos de aprobación digital",
      "Auditoría y trazabilidad completa",
      "Cifrado y hash de integridad"
    ],
    primaryButton: {
      label: "Probar VeriDoc360",
      href: "https://www.veridoc360.com/",
      isExternal: true
    },
    secondaryButton: {
      label: "Ver flujos",
      action: "productos"
    },
    bgImage: "/images/hero_bg_veridoc.png",
    visualKey: "veridoc"
  },
  {
    eyebrow: "Operación Comercial",
    title: "Automatización comercial para puntos de venta y ",
    titleHighlight: "canales digitales",
    description: "Una suite de soluciones para administración de ventas, puntos de venta (POS), control de inventarios, vendedores móviles y automatización comercial.",
    bullets: [
      "Punto de venta (POS)",
      "Venta móvil y promotores",
      "Canales de venta digitales",
      "Dashboard comercial"
    ],
    primaryButton: {
      label: "Conocer URUPOS",
      href: "https://urupos.com/",
      isExternal: true
    },
    secondaryButton: {
      label: "Solicitar demo",
      action: "contacto"
    },
    bgImage: "/images/hero_bg_urupos.png",
    visualKey: "urupos"
  }
];

const contentVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Hero() {
  const autoplay = Autoplay({ delay: 7000, stopOnInteraction: false, stopOnMouseEnter: true });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrentSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slide = heroSlides[currentSlide];

  const renderButton = (btn: any, isPrimary: boolean) => {
    const baseClass = isPrimary
      ? "inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-white bg-brand-green hover:bg-brand-green/90 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer"
      : "inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:text-brand-orange hover:border-brand-orange/40 rounded-xl shadow-sm hover:shadow transition-all duration-200 gap-2 cursor-pointer";

    if (btn.isExternal) {
      return (
        <a
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {isPrimary ? <Calendar className="w-5 h-5" /> : null}
          {btn.label}
          {!isPrimary ? <ArrowRight className="w-4 h-4 text-slate-400" /> : null}
        </a>
      );
    } else {
      return (
        <button
          onClick={() => scrollToSection(btn.action)}
          className={baseClass}
        >
          {isPrimary ? <Calendar className="w-5 h-5" /> : null}
          {btn.label}
          {!isPrimary ? <ArrowRight className="w-4 h-4 text-slate-400" /> : null}
        </button>
      );
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center tech-dot-grid overflow-hidden border-b border-slate-100"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.bgImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.08, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.bgImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft gradient overlay to blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-transparent to-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading and Text */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Embla ref for swiping area in background */}
          <div ref={emblaRef} className="absolute inset-0 opacity-0 pointer-events-none z-0">
            <div className="flex h-full w-full">
              {heroSlides.map((_, i) => (
                <div key={i} className="flex-[0_0_100%] min-w-0 h-full" />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6 min-h-[360px] flex flex-col justify-center"
            >
              {/* Subtitle tag */}
              <motion.div
                variants={itemVariants}
                className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.eyebrow}</span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-blue leading-[1.1] md:leading-[1.15]"
              >
                {slide.title}
                <span className="text-brand-green">
                  {slide.titleHighlight}
                </span>
              </motion.h1>

              {/* Paragraph description */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl"
              >
                {slide.description}
              </motion.p>

              {/* Call to action buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                {renderButton(slide.primaryButton, true)}
                {renderButton(slide.secondaryButton, false)}
              </motion.div>

              {/* Bullets points */}
              <motion.div 
                variants={itemVariants} 
                className="flex flex-wrap gap-2 pt-4"
              >
                {slide.bullets.map((bullet) => (
                  <span 
                    key={bullet} 
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-slate-600 shadow-xs backdrop-blur-xs"
                  >
                    {bullet}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation and Indicators */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Ir a slide ${i + 1}`}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    width: currentSlide === i ? 28 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background:
                      currentSlide === i
                        ? "var(--brand-green)"
                        : "rgba(11, 37, 69, 0.2)",
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={scrollPrev}
                aria-label="Diapositiva anterior"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:text-brand-green cursor-pointer transition-colors shadow-xs"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Siguiente diapositiva"
                className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50 hover:text-brand-green cursor-pointer transition-colors shadow-xs"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <span className="text-brand-blue text-sm font-semibold ml-2 font-mono">
              {String(currentSlide + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Graphic/Mockup */}
        <div className="lg:col-span-5 flex justify-center items-center relative min-h-[420px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.visualKey}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              {slide.visualKey === "network" ? (
                <HeroNetwork />
              ) : (
                <HeroVisual visualKey={slide.visualKey} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
