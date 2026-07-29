"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  phase: "sand" | "bit";
  char: "0" | "1";
  vy: number;
  vx: number;
  opacity: number;
  size: number;
};

const PARTICLE_COUNT = 40;
const SAND_COLOR = "rgba(212, 255, 0, 0.55)";
const BIT_COLOR_A = "#D4FF00";
const BIT_COLOR_B = "#FFFFFF";

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createParticle(width: number, height: number): Particle {
  return {
    x: randomBetween(width * 0.1, width * 0.42),
    y: randomBetween(-height * 0.5, -10),
    phase: "sand",
    char: Math.random() > 0.5 ? "1" : "0",
    vy: randomBetween(0.5, 1.2),
    vx: 0,
    opacity: randomBetween(0.5, 0.9),
    size: randomBetween(2.5, 4.5),
  };
}

export default function BitSand({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(width, height)
      );
    }

    resize();
    window.addEventListener("resize", resize);

    function step() {
      const midY = height * 0.52;
      ctx!.clearRect(0, 0, width, height);
      ctx!.textBaseline = "middle";
      ctx!.font = "700 14px ui-monospace, 'Space Mono', SFMono-Regular, monospace";

      for (const p of particlesRef.current) {
        if (p.phase === "sand") {
          p.y += p.vy;
          ctx!.globalAlpha = p.opacity;
          ctx!.fillStyle = SAND_COLOR;
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          ctx!.fill();

          if (p.y >= midY) {
            p.phase = "bit";
            p.vx = randomBetween(1.2, 2.4);
            p.vy = randomBetween(-0.7, -0.2);
            p.opacity = 0.95;
          }
        } else {
          p.x += p.vx;
          p.y += p.vy;
          p.opacity -= 0.006;
          ctx!.globalAlpha = Math.max(p.opacity, 0);
          ctx!.fillStyle = p.char === "1" ? BIT_COLOR_A : BIT_COLOR_B;
          ctx!.fillText(p.char, p.x, p.y);

          if (p.x > width * 0.96 || p.opacity <= 0) {
            Object.assign(p, createParticle(width, height));
          }
        }
      }
      ctx!.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={`relative aspect-square w-full select-none ${className ?? ""}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/logo-icon.svg"
          alt="ByteCodex: código transformándose en bits"
          width={320}
          height={330}
          className="h-[42%] w-auto object-contain drop-shadow-[0_16px_40px_rgba(212,255,0,0.25)]"
        />
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full motion-reduce:hidden"
        aria-hidden="true"
      />
    </div>
  );
}
