"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle system configuration
    const particles: Particle[] = [];
    const particleCount = 45;
    const connectionDistance = 140;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 2 + 1;
        // Brand colors: 70% Green (#078B4C), 30% Orange (#F9A018)
        this.color = Math.random() < 0.7 
          ? "rgba(7, 139, 76, 0.6)" 
          : "rgba(249, 160, 24, 0.6)";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      if (!ctx) return;
      ctx.shadowBlur = 0;
      ctx.clearRect(0, 0, width, height);

      // Draw & update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      // Draw connection lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.16;
            ctx.strokeStyle = particles[i].color.replace("0.6", alpha.toFixed(2));
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    // Lifecycle control for performance optimization
    let isRunning = true;

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animate();
      }
    };

    const stopAnimation = () => {
      if (isRunning) {
        isRunning = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    };

    // Listeners for in-viewport and hidden-tab states
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    const handleContentVisibilityStateChange = (event: any) => {
      if (event.skipped) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    container.addEventListener("contentvisibilityautostatechange", handleContentVisibilityStateChange);

    // Initial trigger
    animate();

    // Cleanups
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      container.removeEventListener("contentvisibilityautostatechange", handleContentVisibilityStateChange);
      stopAnimation();
    };
  }, [mounted]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-[#020813] select-none"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "auto none auto 100vh"
      } as any}
    >
      {/* Generated high-tech image with Ken Burns panning & zoom effect */}
      {mounted && (
        <motion.div
          className="absolute inset-[-5%] w-[110%] h-[110%] opacity-40 pointer-events-none mix-blend-screen"
          initial={{ scale: 1, x: "-1%", y: "-1%" }}
          animate={{
            scale: [1, 1.06, 1.02, 1],
            x: ["-2%", "2%", "-1%", "-2%"],
            y: ["-2%", "-1%", "1%", "-2%"],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/assets/tech-bg.png"
            alt="Fondo tecnologico BERAXIS"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Dynamic ambient glow spots to complement the background image */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#078B4C]/10 blur-[130px] pointer-events-none"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#F9A018]/8 blur-[140px] pointer-events-none"
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Connected nodes interactive canvas overlay */}
      <canvas 
        ref={canvasRef}
        id="tech-canvas" 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />
    </div>
  );
}
