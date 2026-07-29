"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

/** Anima el primer bloque numérico de `value` cuando entra en el viewport; conserva prefijos/sufijos no numéricos (−72%, +3.100, 40 horas/mes). */
export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = value.match(/(-|−|\+)?([\d.,]+)/);
  const [display, setDisplay] = useState(match ? value.replace(match[0], "0") : value);

  useEffect(() => {
    if (!inView || !match) return;
    const sign = match[1] ?? "";
    const numStr = match[2].replace(/\./g, "");
    const target = parseInt(numStr, 10);
    if (Number.isNaN(target)) return;

    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(v) {
        const formatted = Math.round(v).toLocaleString("es-BO");
        setDisplay(value.replace(match[0], `${sign}${formatted}`));
      },
    });
    return () => controls.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.span ref={ref} className="font-mono tabular-nums">
      {display}
    </motion.span>
  );
}
