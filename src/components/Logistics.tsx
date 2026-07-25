import Reveal from "./Reveal";
import { coldChainSteps, coldChainRows, coldChainSummary } from "../data/coldChain";

export default function Logistics() {
  return (
    <section id="logistics">
      <div className="logistics-inner">
        <Reveal className="logistics-content">
          <div className="section-label">
            <span>Cold Chain Division</span>
          </div>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            Zero-Loss <em>Cold Chain</em>
          </h2>
          <p className="section-desc">
            Post-harvest losses devastate African agriculture. Our end-to-end cold chain
            infrastructure ensures product integrity from farm gate to final destination.
          </p>
          <div className="logistics-steps">
            {coldChainSteps.map((s) => (
              <div className="l-step" key={s.num}>
                <div className="l-num">{s.num}</div>
                <div className="l-info">
                  <h6>{s.title}</h6>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="chain-visual">
          {coldChainRows.map((row, i) => (
            <div className="chain-row" key={i}>
              {row.map((cell) => (
                <div className={`chain-cell${cell.highlight ? " highlight" : ""}`} key={cell.label}>
                  <span>{cell.icon}</span>
                  <p>{cell.label}</p>
                </div>
              ))}
            </div>
          ))}
          <div className="chain-row">
            <div className="chain-cell" style={{ flex: 1, aspectRatio: "auto", padding: 20 }}>
              <span>{coldChainSummary.icon}</span>
              <p style={{ marginTop: 6 }}>{coldChainSummary.label}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
