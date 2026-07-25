import HeroStats from "./HeroStats";
import HeroParallax from "./HeroParallax";
import { heroHighlights } from "../data/divisions";

export default function Hero() {
  return (
    <section id="hero">
      <HeroParallax />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-tag">
            <span></span>
            <p>Nigeria&apos;s Premier Agribusiness Conglomerate</p>
          </div>
          <h1 className="hero-title">
            From <em>Soil</em> to
            <br />
            <span className="outline">Summit</span>
          </h1>
          <p className="hero-desc">
            BOAZ AGRO LIMITED is a fully integrated agricultural enterprise driving food
            security, rural development, and global commodity export across Nigeria and West
            Africa.
          </p>
          <div className="hero-actions">
            <a href="#divisions" className="btn-primary">
              Explore Our Divisions
            </a>
            <a href="#contact" className="btn-outline">
              Partner With Us
            </a>
          </div>
          <HeroStats />
        </div>

        <div className="hero-right">
          <div className="hero-card-stack">
            {heroHighlights.map((h) => (
              <div key={h.title} className="hcard" style={{ transform: `rotate(${h.rotate})` }}>
                <div className="hcard-icon">{h.icon}</div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
