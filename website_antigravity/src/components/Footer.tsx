"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Globe, Phone } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand column */}
        <div className="md:col-span-5 space-y-4">
          <button
            onClick={() => scrollToSection("inicio")}
            className="focus:outline-none flex items-center"
          >
            <img
              src="/logo_negativo.svg"
              alt="BERAXIS"
              className="h-8 w-auto object-contain"
            />
          </button>
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
            Tecnología empresarial, productos digitales e innovación aplicada. Diseñamos e implementamos soluciones críticas con altos estándares de seguridad y escalabilidad.
          </p>
        </div>

        {/* Product links column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Productos</h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li>
              <a
                href="https://nexcoopcore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                NexCoopCore
              </a>
            </li>
            <li>
              <a
                href="https://www.veridoc360.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                VeriDoc360
              </a>
            </li>
            <li>
              <a
                href="https://urupos.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                URUPOS
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation links column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Enlaces</h4>
          <ul className="space-y-2.5 text-xs font-semibold">
            <li>
              <button
                onClick={() => scrollToSection("inicio")}
                className="hover:text-white transition-colors focus:outline-none"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("productos")}
                className="hover:text-white transition-colors focus:outline-none"
              >
                Productos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("servicios")}
                className="hover:text-white transition-colors focus:outline-none"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("sobre-nosotros")}
                className="hover:text-white transition-colors focus:outline-none"
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-white transition-colors focus:outline-none"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Contacto</h4>
          <ul className="space-y-3 text-xs font-semibold">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-500" />
              <a href="mailto:contacto@beraxis.com" className="hover:text-white transition-colors">
                contacto@beraxis.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-slate-500" />
              <a href="tel:+18294709977" className="hover:text-white transition-colors">
                (829) 470-9977
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-slate-500" />
              <span className="text-slate-400">República Dominicana</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Legal terms bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-semibold text-slate-500">
        <div>
          © 2026 BERAXIS. Todos los derechos reservados.
        </div>
        <div className="flex gap-6">
          <Link href="/terminos-de-servicio" className="hover:text-slate-400 cursor-pointer">
            Términos de servicio
          </Link>
          <Link href="/politica-de-privacidad" className="hover:text-slate-400 cursor-pointer">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
