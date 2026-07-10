"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, Loader2, MessageSquare, Building2, Send, Phone } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    nombre: "",
    organizacion: "",
    correo: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      setErrorMsg("Por favor, completa los campos requeridos.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSuccess(true);
        setFormData({
          nombre: "",
          organizacion: "",
          correo: "",
          mensaje: "",
        });
      } else {
        setErrorMsg(data.error || "Ocurrió un error al enviar tu solicitud. Por favor intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error submitting contact request:", error);
      setErrorMsg("No se pudo conectar con el servidor. Por favor verifica tu conexión e intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-brand-blue-light relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left panel: Info */}
          <div className="lg:col-span-5 bg-brand-blue p-8 sm:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-6 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold uppercase tracking-wider">
                Contacto Directo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                ¿Listo para modernizar tus procesos?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                Conversemos sobre cómo BERAXIS puede ayudarte a diseñar, implementar o evolucionar una solución tecnológica para tu organización.
              </p>
            </div>

            <div className="space-y-4 pt-12 relative z-10">
              {/* Mail Detail */}
              <a
                href="mailto:contacto@beraxis.com"
                className="flex items-center gap-4 group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="p-2 bg-brand-green/20 text-brand-green rounded-lg group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Escríbenos por correo</div>
                  <div className="text-sm font-bold text-white">contacto@beraxis.com</div>
                </div>
              </a>

              {/* WhatsApp Detail */}
              <a
                href="https://wa.me/18294709977"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                </div>
                <div>
                  <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">Chatea por WhatsApp</div>
                  <div className="text-sm font-bold text-white">(829) 470-9977</div>
                </div>
              </a>

              {/* Phone Detail */}
              <a
                href="tel:+18294709977"
                className="flex items-center gap-4 group p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <div className="p-2 bg-brand-orange/20 text-brand-orange rounded-lg group-hover:scale-105 transition-transform duration-200">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Llámanos por teléfono</div>
                  <div className="text-sm font-bold text-white">(829) 470-9977</div>
                </div>
              </a>

              {/* Location Detail */}
              <div className="flex items-center gap-4 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 bg-white/5 text-slate-300 rounded-lg">
                  <Building2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Ubicación</div>
                  <div className="text-sm font-bold text-white">Santo Domingo, República Dominicana</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">Agenda una sesión estratégica</h3>
                    <p className="text-xs text-slate-500 font-medium">Déjanos tus datos y un consultor técnico se pondrá en contacto contigo.</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs font-semibold rounded-lg border border-red-100">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="nombre" className="text-xs font-bold text-slate-700">Nombre *</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green/10 rounded-xl outline-none transition-all"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="organizacion" className="text-xs font-bold text-slate-700">Organización / Cooperativa</label>
                      <input
                        type="text"
                        id="organizacion"
                        name="organizacion"
                        value={formData.organizacion}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green/10 rounded-xl outline-none transition-all"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="correo" className="text-xs font-bold text-slate-700">Correo institucional *</label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600/10 rounded-xl outline-none transition-all"
                      placeholder="ejemplo@empresa.com"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="mensaje" className="text-xs font-bold text-slate-700">¿Cómo podemos ayudarte? *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-green focus:ring-1 focus:ring-brand-green/10 rounded-xl outline-none transition-all resize-none"
                      placeholder="Cuéntanos un poco sobre tu proyecto o plataforma requerida..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-3.5 text-sm font-bold text-white bg-brand-green hover:bg-brand-green/90 disabled:bg-brand-green/55 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Procesando solicitud...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar solicitud
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="text-center py-10 space-y-4"
                >
                  <div className="w-16 h-16 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">¡Solicitud recibida con éxito!</h3>
                  <p className="text-sm text-slate-500 font-medium max-w-sm mx-auto">
                    Hemos registrado tus datos. Un especialista de BERAXIS se pondrá en contacto contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-block px-5 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
