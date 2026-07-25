import Reveal from "./Reveal";
import { circularEconomyFeatures, circularEconomyRows } from "../data/circularEconomy";

export default function Circularity() {
  return (
    <section id="circularity">
      <div className="circularity-inner">
        <Reveal className="circularity-content">
          <div className="section-label">
            <span>Sustainability</span>
          </div>
          <h2 className="section-title">
            A System Where <em>Nothing</em> Goes to Waste
          </h2>
          <p className="section-desc">
            Every division feeds the next. Byproducts that would be discarded elsewhere are
            captured, converted, and put back to work across our own operations — cutting input
            costs, closing nutrient loops, and reducing our environmental footprint.
          </p>
          <div className="feature-list">
            {circularEconomyFeatures.map((f) => (
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
            Partner on Circular Agriculture
          </a>
        </Reveal>

        <Reveal className="circularity-visual">
          <div className="chain-visual">
            {circularEconomyRows.map((row, i) => (
              <div className="chain-row" key={i}>
                {row.map((cell) => (
                  <div
                    className={`chain-cell${cell.highlight ? " highlight" : ""}`}
                    key={cell.label}
                  >
                    <span>{cell.icon}</span>
                    <p>{cell.label}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
