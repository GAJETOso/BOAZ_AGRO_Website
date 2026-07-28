import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { climateRisks, climatePractices } from "../../../data/climateEffects";

export const metadata: Metadata = {
  title: "Climate Effects — BOAZ AGRO LIMITED",
  description: "How climate change affects Nigerian agriculture, and how BOAZ AGRO LIMITED builds resilience against it.",
};

export default function ClimateEffectsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Sustainability"
        title={<>Climate <em>Effects</em></>}
        desc="Climate change is already changing how and when we farm. Here's what we're seeing, and what we do about it."
      />
      <div className="page-content">
        <article className="prose">
          <h2>The Risks We Plan Around</h2>
          <p>
            West African agriculture is on the front line of a changing climate. These are the
            effects most relevant to our own operations across crop farming, livestock, and
            greenhouse production.
          </p>
          <div className="risk-grid">
            {climateRisks.map((r) => (
              <div className="risk-card" key={r.title}>
                <span className="rc-icon">{r.icon}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <h2>How We Build Resilience</h2>
          <p>
            None of these risks are hypothetical to us — they shape real decisions about where we
            plant, how we irrigate, and which divisions we invest in.
          </p>
          <div className="practice-grid">
            {climatePractices.map((p) => (
              <div className="practice-card" key={p.title}>
                <span className="rc-icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose-note">
            Our climate resilience practices sit alongside — and draw directly on — our{" "}
            <a href="/sustainability/waste-management">waste management</a> and circular economy
            work: composted organic matter improves soil water retention, and biogas reduces our
            reliance on the grid.
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
