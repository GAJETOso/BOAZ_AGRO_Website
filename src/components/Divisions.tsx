import Reveal from "./Reveal";
import DivisionsGrid from "./DivisionsGrid";
import { stats } from "../data/stats";

export default function Divisions() {
  return (
    <section id="divisions">
      <Reveal className="divisions-header">
        <div className="section-label">
          <span>Our Business Divisions</span>
        </div>
        <h2 className="section-title" style={{ color: "var(--cream)" }}>
          {stats.businessVerticals} Pillars of <em>Agricultural</em> Excellence
        </h2>
        <p className="section-desc" style={{ color: "rgba(247,237,216,0.55)" }}>
          A fully integrated value chain spanning farming, processing, technology, logistics, and
          export — every division engineered for scale.
        </p>
      </Reveal>

      <DivisionsGrid />
    </section>
  );
}
