import { ArrowDown, ArrowDownRight, Flower2, UsersRound } from "lucide-react";
import { images } from "../data/site";
import { Eyebrow, WhatsAppLink } from "./Shared";

export default function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      tabIndex={-1}
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <div className="hero-copy">
          <Eyebrow>SEU TEMPO. SEU CORPO. SUA ESSÊNCIA.</Eyebrow>
          <h1 id="hero-title">
            Movimento que <br />
            transforma. <br />
            <em>Cuidado</em> que <br />
            acolhe<span className="terracotta">.</span>
          </h1>
          <p className="hero-description">
            No Studio Essenza, cada aula é planejada para o seu corpo, seus
            objetivos e o seu momento. Descubra uma forma mais leve de
            fortalecer, alongar e cuidar de você.
          </p>
          <div className="hero-actions">
            <WhatsAppLink />
            <a className="text-link" href="#studio">
              Conhecer o Studio <ArrowDownRight size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-trust">
            <UsersRound size={18} strokeWidth={1.4} aria-hidden="true" />
            Atendimento individual e turmas reduzidas.
          </p>
        </div>
        <div className="hero-visual">
          <img
            src={images.hero.src}
            alt={images.hero.alt}
            width="1600"
            height="1067"
            fetchPriority="high"
          />
          <div className="hero-image-caption">
            <span>Um encontro com o seu bem-estar.</span>
            <span>01 / ESSENZA</span>
          </div>
          <div className="hero-seal" aria-hidden="true">
            <span>MOVIMENTO COM PROPÓSITO</span>
            <Flower2 size={39} strokeWidth={1} />
            <span>CUIDADO EM CADA DETALHE</span>
          </div>
          <span className="image-side-note">
            PILATES & MOVIMENTO · VILA MARIANA, SP
          </span>
        </div>
      </div>
      <div className="container hero-bottom">
        <a href="#beneficios">
          <ArrowDown size={15} aria-hidden="true" /> Seu próximo passo começa em
          você
        </a>
        <span>
          FORTALECER <i /> EQUILIBRAR <i /> RESPIRAR
        </span>
      </div>
    </section>
  );
}
