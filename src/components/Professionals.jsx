import { professionals } from "../data/site";
import { SectionHeading } from "./Shared";

export default function Professionals() {
  return (
    <section className="section professionals" id="profissionais" tabIndex={-1}>
      <div className="container">
        <SectionHeading
          eyebrow="PRESENÇA, ESCUTA E CONHECIMENTO"
          centered
          description="Por trás de cada orientação, pessoas que acreditam no cuidado próximo e no movimento com propósito."
        >
          Cuidado conduzido por quem
          <br />
          entende de <em>movimento.</em>
        </SectionHeading>
        <div className="professionals-grid">
          {professionals.map((person) => (
            <article className="professional" key={person.name}>
              <div className="professional-image">
                <img
                  src={person.image}
                  alt={`Retrato fictício de ${person.name}, criado para este projeto demonstrativo`}
                  width="800"
                  height="1000"
                  loading="lazy"
                />
                <span>OLHAR ATENTO. CUIDADO PRESENTE.</span>
              </div>
              <div className="professional-copy">
                <h3>{person.name}</h3>
                <p className="professional-role">{person.role}</p>
                <p>{person.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="fine-print centered-text">
          Profissionais e retratos fictícios, apresentados para fins
          demonstrativos.
        </p>
      </div>
    </section>
  );
}
