import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { faqs, whatsappUrl } from "../data/site";
import { SectionHeading } from "./Shared";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="duvidas" tabIndex={-1}>
      <div className="container faq-grid">
        <div className="faq-intro">
          <SectionHeading eyebrow="PODE PERGUNTAR">
            Um pouco mais de
            <br />
            <em>clareza</em> para começar.
          </SectionHeading>
          <p>
            Se a sua dúvida não estiver aqui,
            <br />
            nossa conversa continua no WhatsApp.
          </p>
          <a
            className="text-link"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com a equipe <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="accordion">
          {faqs.map(([question, answer], index) => (
            <div
              className={`faq-item${open === index ? " expanded" : ""}`}
              key={question}
            >
              <h3>
                <button
                  id={`faq-question-${index}`}
                  type="button"
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  {question}
                  {open === index ? (
                    <Minus size={19} aria-hidden="true" />
                  ) : (
                    <Plus size={19} aria-hidden="true" />
                  )}
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={open !== index}
              >
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
