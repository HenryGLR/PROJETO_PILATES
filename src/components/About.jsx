import { ArrowUpRight, Check, Leaf } from "lucide-react";
import { images } from "../data/site";
import { SectionHeading } from "./Shared";

export default function About() {
  return (
    <section className="section about" id="studio" tabIndex={-1}>
      <div className="container about-grid">
        <div className="about-images">
          <img
            className="about-main-image"
            src={images.studio.src}
            alt={images.studio.alt}
            width="1000"
            height="667"
            loading="lazy"
          />
          <img
            className="about-detail-image"
            src={images.lesson.src}
            alt={images.lesson.alt}
            width="1000"
            height="667"
            loading="lazy"
          />
          <div className="about-note">
            <Leaf size={22} strokeWidth={1.2} aria-hidden="true" />
            <span>
              Entre. Respire.
              <br />
              <em>Sinta-se em casa.</em>
            </span>
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="ESSÊNCIA EM CADA DETALHE">
            Um espaço preparado
            <br />
            para receber <em>você.</em>
          </SectionHeading>
          <p>
            O Studio Essenza nasceu com a proposta de tornar o movimento parte
            de uma vida mais saudável e equilibrada. Aqui, cada aluno é
            acompanhado de perto, com exercícios adaptados às suas necessidades,
            limitações e objetivos.
          </p>
          <p>
            Da primeira conversa ao último alongamento, queremos que você se
            sinta à vontade para cuidar de si.
          </p>
          <div className="about-features">
            <div className="group-size">
              <strong>
                4<span>no máximo</span>
              </strong>
              <p>
                alunos por turma.
                <br />
                Mais atenção para você.
              </p>
            </div>
            <ul>
              {[
                "Atendimento personalizado",
                "Profissionais especializados",
                "Ambiente equipado e acolhedor",
              ].map((item) => (
                <li key={item}>
                  <Check size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a className="text-link" href="#modalidades">
            Encontre seu jeito de se movimentar{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
