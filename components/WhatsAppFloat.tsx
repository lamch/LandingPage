"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_FLOAT_TOOLTIP, waLink } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.15 }}
                className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap border-2 border-charcoal bg-lime px-3 py-2 font-mono text-xs font-bold uppercase tracking-wide text-charcoal shadow-lg"
              >
                {WHATSAPP_FLOAT_TOOLTIP}
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir WhatsApp"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
          >
            <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
