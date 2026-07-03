"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Target launch date: 90 days from the initial development date (July 2, 2026)
export const LAUNCH_DATE = new Date("2026-09-30T00:00:00-04:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = +LAUNCH_DATE - +new Date();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || !timeLeft) {
    // Elegant skeletal or loader layout to prevent hydration flash
    return (
      <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 my-8 opacity-50">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-16 h-20 sm:w-24 sm:h-28 rounded-2xl bg-beraxis-blue/20 border border-white/5 animate-pulse" />
            <div className="h-4 w-12 bg-white/10 rounded mt-2 animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  const timeItems = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center gap-3 sm:gap-6 md:gap-8 my-10 select-none">
      {timeItems.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          {/* Main Translucent Glass Card */}
          <div className="relative glass-card w-16 h-20 sm:w-24 sm:h-28 rounded-2xl flex flex-col justify-center items-center overflow-hidden border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            {/* Top half overlay for a physical "card flip" split look */}
            <div className="absolute top-0 inset-x-0 h-[50%] bg-white/[0.02] border-b border-black/20" />
            
            <div className="relative font-sora text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white flex justify-center items-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={item.value}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="block"
                >
                  {String(item.value).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* Subtle glow border effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-beraxis-green/20 transition-all pointer-events-none" />
          </div>
          
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-beraxis-gray/50 mt-3 font-sans">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
