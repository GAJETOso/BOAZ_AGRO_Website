import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { contactCards } from "../data/contact";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <Reveal className="contact-left">
          <div className="section-label">
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            Let&apos;s <em>Build</em> the Future of Food Together
          </h2>
          <p className="section-desc">
            Whether you are an investor, off-taker, technology partner, or government agency — we
            welcome conversations that grow Africa&apos;s agricultural potential.
          </p>
          <div className="contact-cards">
            {contactCards.map((c) => (
              <div className="contact-card" key={c.label}>
                <div className="cc-icon">{c.icon}</div>
                <div className="cc-text">
                  <label>{c.label}</label>
                  <p>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="contact-right">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
