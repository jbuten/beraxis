"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection observer behavior for active link
      const sections = ["inicio", "productos", "servicios", "sobre-nosotros", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Inicio", id: "inicio" },
    { name: "Productos", id: "productos" },
    { name: "Servicios", id: "servicios" },
    { name: "Sobre Nosotros", id: "sobre-nosotros" },
    { name: "Contacto", id: "contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Image with micro-animation */}
        <motion.button
          onClick={() => scrollToSection("inicio")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="focus:outline-none flex items-center cursor-pointer"
        >
          <img
            src="/logo_principal.svg"
            alt="BERAXIS"
            className="h-10 w-auto object-contain"
          />
        </motion.button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative py-1 text-sm font-semibold transition-colors hover:text-brand-green focus:outline-none cursor-pointer ${
                activeSection === link.id ? "text-brand-green font-bold" : "text-slate-600"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-green rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button with micro-animations */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="#contacto"
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contacto");
            }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-brand-green hover:bg-brand-green/90 rounded-lg shadow-sm hover:shadow transition-all duration-200 gap-2 cursor-pointer"
          >
            <motion.div
              animate={isBtnHovered ? { rotate: [0, -10, 10, -10, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <Calendar className="w-4 h-4" />
            </motion.div>
            <span>Solicitar reunión</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-950 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-6 px-6 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left py-2 text-base font-semibold transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? "text-brand-green font-bold border-l-2 border-brand-green pl-2"
                    : "text-slate-600 pl-2"
                }`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacto");
              }}
              className="mt-2 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white bg-brand-green hover:bg-brand-green/90 rounded-lg shadow-sm transition-all gap-2"
            >
              <Calendar className="w-4 h-4" />
              Solicitar reunión
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
