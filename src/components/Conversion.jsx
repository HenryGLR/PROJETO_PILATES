import { Flower2 } from "lucide-react";
import { Eyebrow, WhatsAppLink } from "./Shared";

export default function Conversion() {
  return (
    <section className="conversion">
      <div className="container conversion-inner">
        <Flower2
          className="conversion-flower"
          size={260}
          strokeWidth={0.45}
          aria-hidden="true"
        />
        <div>
          <Eyebrow light>UM CONVITE PARA CUIDAR DE VOCÊ</Eyebrow>
          <h2>
            Seu corpo merece atenção,
            <br />
            movimento e <em>cuidado.</em>
          </h2>
          <p>
            Agende uma aula experimental e conheça de perto a experiência
            Essenza.
          </p>
        </div>
        <WhatsAppLink light>Quero agendar minha aula</WhatsAppLink>
      </div>
    </section>
  );
}
