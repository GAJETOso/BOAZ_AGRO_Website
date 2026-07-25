import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Safeguarding Policy — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's commitment to protecting children, workers, and host communities across our operations.",
};

export default function SafeguardingPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Legal"
        title={<>Safeguarding <em>Policy</em></>}
        desc="Our commitment to protecting children, workers, and the communities we operate alongside."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Our Commitment</h2>
          <p>
            BOAZ AGRO LIMITED operates across farming communities, processing sites, and host
            communities in rural Nigeria. We are committed to protecting children, vulnerable
            adults, and workers from harm, exploitation, and abuse in every part of our operations
            and supply chain — including our own sites, our outgrower network, and our contractors.
          </p>

          <h2>Child Labour</h2>
          <p>
            BOAZ AGRO LIMITED prohibits child labour across all owned operations and outgrower
            agreements. Minimum working age is enforced in line with Nigerian labour law, and age
            verification is part of our recruitment and outgrower onboarding process.
          </p>

          <h2>Worker Protection</h2>
          <ul>
            <li>Safe working conditions across all sites, governed by our HSE framework</li>
            <li>Freedom from harassment, discrimination, and forced labour</li>
            <li>A confidential channel to raise safeguarding concerns without fear of reprisal</li>
          </ul>

          <h2>Community Engagement</h2>
          <p>
            Where our operations affect host communities — land use, water access, or local
            employment — we engage through a stakeholder engagement plan and a community grievance
            mechanism, giving communities a documented channel to raise concerns and receive a
            response.
          </p>

          <h2>Reporting a Concern</h2>
          <div className="prose-note">
            Anyone — employee, contractor, community member, or member of the public — can raise a
            safeguarding concern via the confidential channel described in our{" "}
            <a href="/whistleblower">Whistleblower Policy</a>. Reports made in good faith are
            protected, and retaliation against a person raising a concern is treated as gross
            misconduct.
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
