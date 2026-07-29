"use client";

import { useEffect, useRef, useState } from "react";

const DIGIT_COUNT = 30;
const PARTICLE_COUNT = 8;

type FloatDigit = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  value: "0" | "1";
};

type Explosion = {
  id: string;
  x: number;
  y: number;
  color: string;
  particles: { dx: number; dy: number }[];
};

let nextDigitId = 0;

function makeDigit(size?: number): FloatDigit {
  return {
    id: nextDigitId++,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 10,
    delay: Math.random() * -18,
    size: size ?? 16 + Math.random() * 22,
    value: Math.random() > 0.5 ? "1" : "0",
  };
}

function makeDigits(): FloatDigit[] {
  return Array.from({ length: DIGIT_COUNT }, () => makeDigit());
}

export default function BinaryClicker() {
  const [digits, setDigits] = useState<FloatDigit[]>([]);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDigits(makeDigits());
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const popDigit = (
    digit: FloatDigit,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2 - (containerRect?.left ?? 0);
    const y = rect.top + rect.height / 2 - (containerRect?.top ?? 0);

    setDigits((prev) => prev.filter((d) => d.id !== digit.id));

    const burstId = `${digit.id}-${Date.now()}`;
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = ((360 / PARTICLE_COUNT) * i + Math.random() * 25) * (Math.PI / 180);
      const distance = 20 + Math.random() * 22;
      return { dx: Math.cos(angle) * distance, dy: Math.sin(angle) * distance };
    });

    setExplosions((prev) => [
      ...prev,
      {
        id: burstId,
        x,
        y,
        color: digit.value === "0" ? "var(--ink-soft)" : "var(--lime)",
        particles,
      },
    ]);

    setTimeout(() => {
      setExplosions((prev) => prev.filter((ex) => ex.id !== burstId));
    }, 650);

    // repone un dígito nuevo con el mismo tamaño del último presionado
    setTimeout(() => {
      setDigits((prev) => [...prev, makeDigit(digit.size)]);
    }, 800);
  };

  const reset = () => {
    setDigits(makeDigits());
    setExplosions([]);
  };

  return (
    <div className="mt-14 border-t border-border pt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
          Tocá los 0 y 1 flotantes para hacerlos explotar
        </span>
        <button
          type="button"
          onClick={reset}
          className="font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-lime"
        >
          Reiniciar
        </button>
      </div>

      <div ref={containerRef} className="relative mt-4 h-64 overflow-hidden">
        {digits.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={(e) => popDigit(d, e)}
            style={{
              left: `${d.left}%`,
              fontSize: `${d.size}px`,
              animation: reduceMotion
                ? undefined
                : `matrix-float ${d.duration}s linear ${d.delay}s infinite`,
              top: reduceMotion ? `${(d.id * 37) % 100}%` : undefined,
            }}
            className={`absolute select-none font-mono font-bold leading-none transition-transform duration-150 hover:scale-125 ${
              d.value === "0" ? "text-ink-soft hover:text-ink" : "text-lime hover:text-ink"
            }`}
          >
            {d.value}
          </button>
        ))}

        {explosions.map((ex) => (
          <div
            key={ex.id}
            className="pointer-events-none absolute"
            style={{ left: ex.x, top: ex.y }}
          >
            {ex.particles.map((p, i) => (
              <span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full"
                style={
                  {
                    backgroundColor: ex.color,
                    "--dx": `${p.dx}px`,
                    "--dy": `${p.dy}px`,
                    animation: "particle-fly 0.6s ease-out forwards",
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
