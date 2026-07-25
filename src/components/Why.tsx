import Reveal from "./Reveal";
import WhyNumbers from "./WhyNumbers";
import { whyItems } from "../data/whyUs";

export default function Why() {
  return (
    <section id="why">
      <div className="why-inner">
        <div className="why-top">
          <Reveal>
            <div className="section-label">
              <span>Why Choose Boaz</span>
            </div>
            <h2 className="section-title">
              Built for <em>Scale</em>,<br />
              Driven by <em>Purpose</em>
            </h2>
            <p className="section-desc">
              We are not just a farm — we are a movement. Every investment in BOAZ AGRO is an
              investment in the food future of Africa.
            </p>
            <a href="#contact" className="btn-primary" style={{ display: "inline-block", marginTop: 28 }}>
              Explore Investment
            </a>
          </Reveal>

          <Reveal className="why-right">
            {whyItems.map((item) => (
              <div className="why-item" key={item.title}>
                <div className="wi-icon">{item.icon}</div>
                <div className="wi-text">
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <WhyNumbers />
      </div>
    </section>
  );
}
