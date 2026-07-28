import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { mythsFacts } from "../../../data/mythsFacts";

export const metadata: Metadata = {
  title: "Myths vs Facts — BOAZ AGRO LIMITED",
  description: "Common misconceptions about large-scale agribusiness, and the facts about how BOAZ AGRO LIMITED actually operates.",
};

export default function MythsVsFactsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="Sustainability"
        title={<>Myths vs <em>Facts</em></>}
        desc="Large-scale agribusiness attracts a lot of assumptions. Here's where the common ones hold up, and where they don't — for us specifically."
      />
      <div className="page-content">
        <article className="prose">
          <div className="myth-fact-list">
            {mythsFacts.map((mf) => (
              <div className="myth-fact-card" key={mf.myth}>
                <div className="mf-myth">{mf.myth}</div>
                <div className="mf-fact">{mf.fact}</div>
              </div>
            ))}
          </div>

          <div className="prose-note">
            Have a question we haven&apos;t addressed here? Reach out via the{" "}
            <a href="/#contact">Contact</a> section of our homepage — we&apos;d rather answer it
            directly than let it sit as an assumption.
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
