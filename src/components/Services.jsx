import {
  Activity,
  ArrowUpRight,
  Heart,
  Sun,
  UserRound,
  UsersRound,
} from "lucide-react";
import { services, whatsappUrl } from "../data/site";
import { SectionHeading } from "./Shared";

const icons = {
  person: UserRound,
  group: UsersRound,
  sun: Sun,
  heart: Heart,
  activity: Activity,
};

export default function Services() {
  return (
    <section className="section services" id="modalidades" tabIndex={-1}>
      <div className="container">
        <div className="services-heading">
          <SectionHeading eyebrow="DIFERENTES CAMINHOS, O MESMO CUIDADO">
            Encontre a modalidade
            <br />
            ideal para <em>você.</em>
          </SectionHeading>
          <p>
            O seu ponto de partida é único.
            <br />A sua prática também pode ser.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <article className="service" key={service.name}>
                <div className="service-top">
                  <Icon size={28} strokeWidth={1.15} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <p className="service-label">{service.label}</p>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <a
                  className="service-link"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Conversar sobre ${service.name}`}
                >
                  Saiba mais <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </article>
            );
          })}
          <div className="service service-help">
            <LeafDrawing />
            <h3>
              Ainda não sabe
              <br />
              por onde começar?
            </h3>
            <p>A gente escuta você e encontra, junto, o melhor caminho.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Vamos conversar <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafDrawing() {
  return (
    <svg
      width="80"
      height="75"
      viewBox="0 0 80 75"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M19 71C27 49 48 24 62 8M33 49C5 46 10 23 10 23s24-1 23 26ZM47 32C36 6 62 5 62 5s8 24-15 27ZM31 53c26 6 39-14 39-14S46 31 31 53Z" />
    </svg>
  );
}
