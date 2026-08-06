import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";

/** Placeholder visual para imágenes aún no generadas (spec §6): degradado suave + icono. */
export default function PlaceholderImage({
  icon: Icon = ImageIcon,
  className,
  label,
}: {
  icon?: LucideIcon;
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`group relative flex items-center justify-center overflow-hidden bg-charcoal-lighter ${className ?? ""}`}
      role="img"
      aria-label={label ?? "Imagen ilustrativa"}
    >
      <Icon
        className="h-10 w-10 text-lime/50 transition-all duration-300 ease-out group-hover:scale-125 group-hover:rotate-6 group-hover:text-lime/80"
        strokeWidth={1.5}
      />
    </div>
  );
}
