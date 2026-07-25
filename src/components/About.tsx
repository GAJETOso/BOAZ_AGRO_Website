import Reveal from "./Reveal";
import { aboutPills } from "../data/about";
import { stats } from "../data/stats";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <Reveal className="about-visual">
          <div className="about-img-frame"></div>
          <div className="about-badge">
            <strong>{stats.yearsOfImpact}+</strong>
            <span>Years of Impact</span>
          </div>
        </Reveal>

        <Reveal className="about-text">
          <div className="section-label">
            <span>About the Company</span>
          </div>
          <h2 className="section-title">
            Africa&apos;s <em>Integrated</em> Agri-Powerhouse
          </h2>
          <blockquote className="about-quote">
            &quot;We don&apos;t just grow food — we build systems that feed nations and create
            wealth for generations.&quot;
          </blockquote>
          <p className="section-desc">
            BOAZ AGRO LIMITED is a fully diversified agribusiness conglomerate headquartered in
            Nigeria. From seed to shelf, we control every link in the agricultural value chain —
            farming, processing, technology, logistics, and export.
          </p>
          <p className="section-desc" style={{ marginTop: 12 }}>
            Our mission is to revolutionize African agriculture through innovation, scale, and
            sustainability — creating economic value for farmers, investors, communities, and the
            continent at large.
          </p>
          <div className="about-pills">
            {aboutPills.map((pill) => (
              <span className="pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
