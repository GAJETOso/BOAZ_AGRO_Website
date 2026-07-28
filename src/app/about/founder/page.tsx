import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { founder } from "../../../data/people";
import { stats } from "../../../data/stats";

export const metadata: Metadata = {
  title: "Our Founder — BOAZ AGRO LIMITED",
  description: "The story behind BOAZ AGRO LIMITED and its founder, Ayotunde Oso.",
};

export default function FounderPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="About"
        title={<>Our <em>Founder</em></>}
        desc={`The story behind BOAZ AGRO LIMITED, founded in ${stats.foundingYear}.`}
      />
      <div className="page-content">
        <article className="prose">
          <h2>{founder.name}</h2>
          <p style={{ fontStyle: "italic", color: "var(--sage)", marginTop: -8 }}>{founder.role}</p>
          <p>{founder.bio}</p>
          <div className="prose-note">&ldquo;{founder.quote}&rdquo;</div>
          <h2>Why BOAZ AGRO</h2>
          <p>
            The name reflects the ambition behind the company: a single, vertically integrated
            enterprise spanning {stats.businessVerticals} business divisions — from crop farming and
            livestock through processing, fertilizer, cold chain, and export — so that value created
            at the farm gate isn&apos;t lost to middlemen along the way.
          </p>
          <p>
            BOAZ AGRO is still early in that journey — {stats.hectares} hectares under cultivation
            across {stats.statesOfOperation} states today, with a working farm-to-market platform and
            a growing base of smallholder partners. The plan is to prove the model works at this
            scale before scaling it further.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
