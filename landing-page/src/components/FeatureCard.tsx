"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "green" | "orange";
}

export default function FeatureCard({ title, description, icon: Icon, accent }: FeatureCardProps) {
  const accentColor = accent === "green" ? "text-beraxis-green" : "text-beraxis-orange";
  const glowColor = accent === "green" 
    ? "group-hover:border-beraxis-green/45 group-hover:shadow-[0_0_25px_rgba(7,139,76,0.15)]" 
    : "group-hover:border-beraxis-orange/45 group-hover:shadow-[0_0_25px_rgba(249,160,24,0.15)]";
  
  const iconBg = accent === "green"
    ? "bg-beraxis-green/10 text-beraxis-green border-beraxis-green/20"
    : "bg-beraxis-orange/10 text-beraxis-orange border-beraxis-orange/20";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group relative glass-card glass-card-interactive p-6 md:p-8 rounded-2xl flex flex-col justify-between border border-white/5 transition-all duration-350 cursor-pointer ${glowColor}`}
    >
      <div>
        {/* Animated Icon Container */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 transition-all duration-300 group-hover:scale-110 ${iconBg}`}>
          <Icon className="w-6 h-6 stroke-[1.75]" />
        </div>

        {/* Feature Title */}
        <h3 className="font-sora text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors">
          {title}
        </h3>

        {/* Feature Description */}
        <p className="font-sans text-sm text-beraxis-gray/75 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative interactive glow inside the card */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full blur-2xl pointer-events-none group-hover:bg-white/[0.03] transition-all duration-500" />
      
      {/* Corner interactive indicator */}
      <div className="mt-6 flex items-center text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className={`${accentColor} mr-1`}>Saber más</span>
        <span className={`${accentColor} transform translate-x-0 group-hover:translate-x-1 transition-transform`}>→</span>
      </div>
    </motion.div>
  );
}
