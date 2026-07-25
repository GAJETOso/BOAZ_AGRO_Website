import Reveal from "./Reveal";
import { agritechFeatures } from "../data/agritech";

export default function Agritech() {
  return (
    <section id="agritech">
      <div className="agritech-inner">
        <Reveal className="platform-mockup">
          <div className="mockup-bar">
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <div className="mockup-url">boazagro.ng/platform</div>
          </div>
          <div className="mockup-body"></div>
        </Reveal>

        <Reveal className="agritech-content">
          <div className="section-label">
            <span>AgriTech Division</span>
          </div>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            The <em>BoazConnect™</em> Platform
          </h2>
          <p className="section-desc">
            Our proprietary farm-to-market digital platform eliminates waste, reduces costs, and
            empowers farmers with real-time pricing, logistics, and buyer connections.
          </p>
          <div className="feature-list">
            {agritechFeatures.map((f) => (
              <div className="feature-item" key={f.title}>
                <span className="fi-icon">{f.icon}</span>
                <div className="fi-text">
                  <h6>{f.title}</h6>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary">
            Request a Demo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
