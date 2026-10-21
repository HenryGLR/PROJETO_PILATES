import { ArrowUpRight } from "lucide-react";
import { SectionHeading, WhatsAppLink } from "./Shared";

const steps = [
  ["Entre em contato", "Fale com nossa equipe pelo WhatsApp."],
  [
    "Conte seus objetivos",
    "Entendemos sua rotina, necessidades e expectativas.",
  ],
  [
    "Faça sua aula experimental",
    "Conheça o espaço e experimente uma aula acompanhada.",
  ],
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="steps-heading">
          <SectionHeading eyebrow="É SIMPLES DAR O PRIMEIRO PASSO">
            Comece no seu <em>ritmo.</em>
          </SectionHeading>
          <WhatsAppLink>Vamos marcar sua primeira aula</WhatsAppLink>
        </div>
        <ol className="steps">
          {steps.map(([title, description], index) => (
            <li key={title}>
              <div className="step-number">
                <span>0{index + 1}</span>
                <ArrowUpRight size={22} strokeWidth={1} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
