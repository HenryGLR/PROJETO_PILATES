import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { studio, whatsappUrl } from "../data/site";
import { SectionHeading, WhatsAppLink } from "./Shared";

export default function Contact() {
  return (
    <section className="section contact" id="contato" tabIndex={-1}>
      <div className="container contact-grid">
        <div>
          <SectionHeading eyebrow="VAMOS NOS ENCONTRAR?">
            O seu momento de
            <br />
            cuidar de si é <em>agora.</em>
          </SectionHeading>
          <p>
            Um espaço acolhedor na Vila Mariana,
            <br />
            pronto para fazer parte da sua rotina.
          </p>
          <address className="contact-details">
            <div>
              <MapPin aria-hidden="true" size={20} />
              <p>
                {studio.address}
                <span>{studio.neighborhood}</span>
              </p>
            </div>
            <div>
              <Clock3 aria-hidden="true" size={20} />
              <p>
                {studio.hours[0]}
                <span>{studio.hours[1]}</span>
              </p>
            </div>
            <div>
              <Phone aria-hidden="true" size={20} />
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {studio.phone}
                <span>Telefone e WhatsApp</span>
              </a>
            </div>
            <div>
              <Mail aria-hidden="true" size={20} />
              <a href={`mailto:${studio.email}`}>{studio.email}</a>
            </div>
          </address>
          <WhatsAppLink>Agendar minha aula experimental</WhatsAppLink>
        </div>
        <div
          className="map"
          aria-label="Mapa ilustrativo da localização fictícia na Vila Mariana"
        >
          <div className="map-block block-one" />
          <div className="map-block block-two" />
          <div className="map-block block-three" />
          <div className="map-block block-four" />
          <div className="map-park">
            <span>Um respiro na cidade</span>
          </div>
          <span className="map-street street-one">RUA DAS ACÁCIAS</span>
          <span className="map-street street-two">VILA MARIANA</span>
          <div className="map-marker">
            <MapPin size={32} strokeWidth={1.5} aria-hidden="true" />
            <strong>ESSENZA</strong>
            <span>Pilates & Movimento</span>
          </div>
          <div className="map-caption">
            <span>São Paulo, SP</span>
            <small>Mapa ilustrativo · endereço fictício</small>
          </div>
        </div>
      </div>
    </section>
  );
}
