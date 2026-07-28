import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";
import { founder, leadershipTeam } from "../../../data/people";

export const metadata: Metadata = {
  title: "Leadership Team — BOAZ AGRO LIMITED",
  description: "The team leading BOAZ AGRO LIMITED's operations, agronomy, finance, and processing.",
};

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="About"
        title={<>Leadership <em>Team</em></>}
        desc="A small, accountable team — every division has a named owner, and every policy in our internal SOP framework has a named signatory."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Executive</h2>
          <div className="team-grid">
            <div className="team-card">
              <h3>{founder.name}</h3>
              <span className="team-role">{founder.role}</span>
              <p>{founder.bio.slice(0, 140)}…</p>
            </div>
          </div>

          <h2>Division Leads</h2>
          <div className="team-grid">
            {leadershipTeam.map((person) => (
              <div className="team-card" key={person.name}>
                <h3>{person.name}</h3>
                <span className="team-role">{person.role}</span>
                <p>{person.bio}</p>
              </div>
            ))}
          </div>

          <div className="prose-note">
            Role scope, delegated authority, and reporting lines for each position are set out in
            our Governance framework and Delegation of Authority matrix, maintained internally and
            available to investors and partners on request.
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
