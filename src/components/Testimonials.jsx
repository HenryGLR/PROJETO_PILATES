import { Quote } from "lucide-react";
import { testimonials } from "../data/site";
import { SectionHeading } from "./Shared";

export default function Testimonials() {
  return (
    <section className="section testimonials" id="depoimentos" tabIndex={-1}>
      <div className="container">
        <SectionHeading eyebrow="HISTÓRIAS QUE INSPIRAM" centered>
          Quem se movimenta com a gente
          <br />
          sente a <em>diferença.</em>
        </SectionHeading>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.name}>
              <Quote size={28} strokeWidth={1} aria-hidden="true" />
              <blockquote>“{item.quote}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">
                  {item.initials}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.detail}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="fine-print centered-text">
          Depoimentos ilustrativos. Este é um projeto demonstrativo.
        </p>
      </div>
    </section>
  );
}
