import Reveal from "./Reveal";
import { commodities } from "../data/commodities";

export default function Exports() {
  return (
    <section id="exports">
      <div className="exports-inner">
        <Reveal className="exports-top">
          <div>
            <div className="section-label">
              <span>Export Division</span>
            </div>
            <h2 className="section-title">
              Global <em>Commodity</em> Trade
            </h2>
            <p className="section-desc">
              Premium Nigerian agricultural commodities, processed to international standards,
              shipped to markets worldwide.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Become an Importer
          </a>
        </Reveal>

        <Reveal className="commodities-grid" as="div">
          {commodities.map((c) => (
            <div className="commodity-card" key={c.name}>
              <span className="comm-icon">{c.icon}</span>
              <h3 className="comm-name">{c.name}</h3>
              <p className="comm-desc">{c.desc}</p>
              <span className="comm-tag">{c.tag}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
