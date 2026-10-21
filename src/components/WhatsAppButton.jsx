import { whatsappUrl } from "../data/site";
import { WhatsAppIcon } from "./Shared";

export default function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar aula experimental pelo WhatsApp (número demonstrativo)"
    >
      <span className="floating-tooltip">Vamos conversar?</span>
      <WhatsAppIcon size={27} />
    </a>
  );
}
