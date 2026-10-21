import { Instagram } from "lucide-react";
import { navigation, studio, whatsappUrl } from "../data/site";
import { Brand, WhatsAppIcon } from "./Shared";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand light />
            <p>
              Movimento com propósito.
              <br />
              Cuidado que faz parte da sua vida.
            </p>
            <div className="social-links">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar pelo WhatsApp"
              >
                <WhatsAppIcon size={21} />
              </a>
              {studio.instagram ? (
                <a
                  href={studio.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do Studio Essenza"
                >
                  <Instagram size={20} />
                </a>
              ) : (
                <span
                  className="instagram-demo"
                  title="Perfil demonstrativo, ainda não disponível"
                >
                  <Instagram size={20} aria-hidden="true" />
                  <span>Instagram em breve</span>
                </span>
              )}
            </div>
          </div>
          <nav aria-label="Navegação do rodapé">
            <h3>Explore</h3>
            {navigation.slice(1).map(([label, id]) => (
              <a href={`#${id}`} key={id}>
                {label}
              </a>
            ))}
          </nav>
          <div className="footer-contact">
            <h3>Encontre seu equilíbrio</h3>
            <p>
              {studio.address}
              <br />
              {studio.neighborhood}
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {studio.phone}
            </a>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </div>
          <div className="footer-signature">
            <span>Respire fundo.</span>
            <span>
              O movimento
              <br />
              <em>começa em você.</em>
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Studio Essenza Pilates · Projeto
            demonstrativo.
          </p>
          <p>
            Site demonstrativo desenvolvido por <strong>Nexo Web</strong>
          </p>
        </div>
        <p className="demo-notice">
          Estúdio, profissionais, depoimentos e dados de contato fictícios. As
          fotografias do espaço e das aulas são ilustrativas.
        </p>
      </div>
    </footer>
  );
}
