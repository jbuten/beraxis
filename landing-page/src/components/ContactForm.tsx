"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  // Track validation status to manually set aria-invalid
  const [validation, setValidation] = useState<Record<string, boolean>>({});

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, validity } = e.target;
    setValidation((prev) => ({
      ...prev,
      [name]: validity.valid,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, validity } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // If it was already validated, update validity status in real-time
    if (validation[name] !== undefined) {
      setValidation((prev) => ({
        ...prev,
        [name]: validity.valid,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    });
    setValidation({});
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-6"
            noValidate={false} // Use HTML5 native validation
          >
            <div className="text-center sm:text-left mb-2">
              <h3 className="font-sora text-xl sm:text-2xl font-bold text-white mb-2">
                Solicitar información
              </h3>
              <p className="font-sans text-sm text-beraxis-gray/70">
                Completa tus datos y nos pondremos en contacto contigo para conversar sobre tu proyecto.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nombre */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-beraxis-gray/60">
                  Nombre completo <span className="text-beraxis-orange">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={validation.name === false ? "true" : "false"}
                  className="w-full bg-beraxis-dark/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-beraxis-green transition-all"
                  placeholder="Ej. José Buten"
                  autoComplete="name"
                />
                <p className="error-msg text-xs text-beraxis-orange/95 mt-1 hidden">
                  Por favor, ingresa tu nombre.
                </p>
              </div>

              {/* Empresa */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-beraxis-gray/60">
                  Empresa <span className="text-beraxis-orange">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={validation.company === false ? "true" : "false"}
                  className="w-full bg-beraxis-dark/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-beraxis-green transition-all"
                  placeholder="Ej. Beraxis Technologies"
                  autoComplete="organization"
                />
                <p className="error-msg text-xs text-beraxis-orange/95 mt-1 hidden">
                  Ingresa el nombre de tu organización.
                </p>
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-beraxis-gray/60">
                Correo corporativo <span className="text-beraxis-orange">*</span>
              </label>
              <span id="email-hint" className="text-[10px] text-beraxis-gray/40 -mt-1 mb-0.5">Format: nombre@empresa.com</span>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={validation.email === false ? "true" : "false"}
                aria-describedby="email-hint"
                className="w-full bg-beraxis-dark/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-beraxis-green transition-all"
                placeholder="ejemplo@empresa.com"
                autoComplete="email"
              />
              <p className="error-msg text-xs text-beraxis-orange/95 mt-1 hidden">
                Ingresa una dirección de correo válida.
              </p>
            </div>

            {/* Teléfono (Opcional) */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-beraxis-gray/60">
                Teléfono <span className="text-beraxis-gray/40 font-normal">(Opcional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full bg-beraxis-dark/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-beraxis-green transition-all"
                placeholder="+1 (809) 000-0000"
                autoComplete="tel"
              />
            </div>

            {/* Mensaje */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-beraxis-gray/60">
                Mensaje o Requerimientos <span className="text-beraxis-orange">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={validation.message === false ? "true" : "false"}
                rows={4}
                className="w-full bg-beraxis-dark/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-beraxis-green transition-all resize-none"
                placeholder="Cuéntanos un poco sobre lo que tu empresa necesita..."
              />
              <p className="error-msg text-xs text-beraxis-orange/95 mt-1 hidden">
                El mensaje debe tener al menos 10 caracteres.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 relative overflow-hidden group bg-beraxis-green text-white font-semibold text-sm rounded-xl py-3.5 px-6 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-beraxis-green/20 hover:bg-[#099A55] transition-all disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Procesando...</span>
                </>
              ) : (
                <>
                  <span>Enviar Solicitud</span>
                  <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="glass-card p-10 rounded-3xl border border-beraxis-green/30 shadow-2xl flex flex-col items-center text-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-beraxis-green/10 border border-beraxis-green/20 flex items-center justify-center text-beraxis-green animate-pulse">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="font-sora text-2xl font-bold text-white mb-3">
                ¡Solicitud Recibida!
              </h3>
              <p className="font-sans text-sm text-beraxis-gray/80 leading-relaxed max-w-sm">
                Gracias. Hemos recibido tu interés y te contactaremos pronto para conversar sobre tu proyecto.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-2 text-xs font-semibold uppercase tracking-wider text-beraxis-green hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer group"
            >
              <span>Volver a enviar</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
