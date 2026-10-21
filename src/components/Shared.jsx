import { ArrowUpRight, Leaf } from "lucide-react";
import { whatsappUrl } from "../data/site";

export function WhatsAppIcon({ size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="m8.4 7.5 1.2-.2 1 2.3-.9 1.1a7 7 0 0 0 3.7 3.5l1-1 2.2 1.1v1.2c-.2.9-1.3 1.5-2.2 1.3-3.9-.8-6.6-3.5-7.3-6.7-.2-.9.3-2 1.3-2.6Z" />
    </svg>
  );
}

export function Brand({ light = false, onClick }) {
  return (
    <a
      className={`brand${light ? " brand-light" : ""}`}
      href="#inicio"
      aria-label="Essenza Pilates & Movimento — início"
      onClick={onClick}
    >
      <span className="brand-name">
        ESSENZA
        <Leaf size={14} strokeWidth={1.2} aria-hidden="true" />
      </span>
      <span className="brand-subtitle">PILATES & MOVIMENTO</span>
    </a>
  );
}

export function WhatsAppLink({
  children = "Agendar aula experimental",
  className = "",
  light = false,
}) {
  return (
    <a
      className={`button ${light ? "button-light" : "button-primary"} ${className}`}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

export function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow${light ? " eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  children,
  description,
  centered = false,
}) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
