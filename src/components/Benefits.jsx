import {
  Activity,
  Accessibility,
  Feather,
  Heart,
  MoveUpRight,
  ScanLine,
} from "lucide-react";
import { SectionHeading } from "./Shared";

const benefits = [
  [
    Activity,
    "Fortalecimento muscular",
    "Mais força para os movimentos de todos os dias.",
  ],
  [
    Accessibility,
    "Melhora da postura",
    "Um olhar atento à forma como você se movimenta.",
  ],
  [
    MoveUpRight,
    "Mobilidade e flexibilidade",
    "Liberdade para explorar suas possibilidades.",
  ],
  [Feather, "Alívio de tensões", "Um momento para respirar e desacelerar."],
  [
    ScanLine,
    "Consciência corporal",
    "Uma conexão mais próxima com o seu corpo.",
  ],
  [Heart, "Qualidade de vida", "Cuidado que acompanha você além da aula."],
];

export default function Benefits() {
  return (
    <section className="section benefits" id="beneficios" tabIndex={-1}>
      <div className="container">
        <div className="benefits-intro">
          <SectionHeading eyebrow="O MOVIMENTO FAZ BEM">
            Mais equilíbrio para o corpo
            <br />e para a <em>rotina.</em>
          </SectionHeading>
          <p>
            Pequenos movimentos.
            <br />
            Novas possibilidades para viver melhor.
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map(([Icon, title, description]) => (
            <article className="benefit" key={title}>
              <Icon size={28} strokeWidth={1.25} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="fine-print">
          Cada corpo tem seu tempo. Os resultados variam de pessoa para pessoa,
          e o acompanhamento é adaptado às necessidades de cada aluno.
        </p>
      </div>
    </section>
  );
}
