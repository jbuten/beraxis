"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export default function SectionTitle({
  tag,
  title,
  description,
  align = "center",
  dark = false,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-16 space-y-4 ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {tag && (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          dark 
            ? "bg-brand-green/20 border border-brand-green/30 text-brand-green" 
            : "bg-brand-green/10 border border-brand-green/20 text-brand-green"
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
        dark ? "text-white" : "text-brand-blue"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg font-medium leading-relaxed ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
