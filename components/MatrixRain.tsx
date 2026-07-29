"use client";

import { useEffect, useRef } from "react";

const CHARS = "01";
const FONT_SIZE = 16;
const LIME = "212, 255, 0";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      columns = Math.ceil(width / FONT_SIZE);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / FONT_SIZE) * -1
      );
    };

    setup();

    const drawFrame = () => {
      ctx.fillStyle = "rgba(18, 18, 18, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${FONT_SIZE}px monospace`;
      ctx.textAlign = "center";

      for (let i = 0; i < columns; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE + FONT_SIZE / 2;
        const y = drops[i] * FONT_SIZE;

        ctx.fillStyle = "rgba(230, 255, 220, 0.9)";
        ctx.fillText(char, x, y);

        if (y > 0 && y < height) {
          ctx.fillStyle = `rgba(${LIME}, 0.55)`;
          ctx.fillText(char, x, y - FONT_SIZE);
        }

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    if (reduceMotion) {
      ctx.fillStyle = "rgba(18, 18, 18, 1)";
      ctx.fillRect(0, 0, width, height);
      return;
    }

    let frameId: number;
    let lastTime = 0;
    const FRAME_INTERVAL = 60;

    const loop = (time: number) => {
      frameId = requestAnimationFrame(loop);
      if (time - lastTime < FRAME_INTERVAL) return;
      lastTime = time;
      drawFrame();
    };
    frameId = requestAnimationFrame(loop);

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-60"
    />
  );
}
