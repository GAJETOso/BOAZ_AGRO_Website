import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PageHero from "../../../components/PageHero";

export const metadata: Metadata = {
  title: "Mission, Vision & Values — BOAZ AGRO LIMITED",
  description: "BOAZ AGRO LIMITED's mission, vision, values, and the policy statements that guide how we operate.",
};

export default function MissionPage() {
  return (
    <>
      <Navbar />
      <PageHero
        label="About"
        title={<>Mission, Vision &amp; <em>Values</em></>}
        desc="Why BOAZ AGRO exists, the kind of company we're building it to be, and the commitments that guide how we operate day to day."
      />
      <div className="page-content">
        <article className="prose">
          <h2>Our Mission</h2>
          <p>
            To revolutionize African agriculture through innovation, scale, and sustainability —
            creating economic value for farmers, investors, communities, and the continent at large.
            We do this by controlling the full agricultural value chain ourselves — farming,
            processing, technology, logistics, and export — so that efficiency gains stay inside the
            system that earned them, rather than leaking out to intermediaries.
          </p>

          <h2>Our Vision</h2>
          <p>
            A West Africa where smallholder farmers have direct, technology-enabled access to fair
            markets, where post-harvest loss is engineered out of the supply chain rather than
            accepted as a cost of doing business, and where a single Nigerian agribusiness can
            compete credibly in export markets on quality and traceability, not just price.
          </p>

          <h2>Our Values</h2>
          <h3>Safety First</h3>
          <p>HSE protocols are mandatory at every site, for every employee, contractor, and visitor, without exception.</p>
          <h3>Traceability</h3>
          <p>Every input, process, and output is documented — from seed source to shipping container.</p>
          <h3>Compliance</h3>
          <p>Full adherence to national and international regulations governing food safety, labour, and trade.</p>
          <h3>Continuous Improvement</h3>
          <p>Quarterly audits and annual revision cycles across every operating standard we hold ourselves to.</p>
          <h3>Accountability</h3>
          <p>Every policy and procedure has a named owner — decisions are traceable to a person, not a department.</p>
          <h3>Sustainability</h3>
          <p>
            Environmental stewardship in every decision, including a company-wide commitment to a
            circular, zero-waste model across our divisions.
          </p>

          <h2>Our Purpose</h2>
          <p>
            We exist because too much value leaks out of African agriculture at the points where
            farmer meets market — in post-harvest loss, in intermediaries who capture the margin
            processing would create, and in the absence of the traceability that export buyers
            require. BOAZ AGRO closes those gaps by holding farming, processing, technology,
            logistics, and export inside one accountable system.
          </p>

          <h2>Our Policy Statements</h2>
          <p>
            Alongside our mission and values, the following statements set out specific commitments
            we hold ourselves to. Each is backed by a fuller internal policy, audited on a regular
            cycle, and owned by a named member of the leadership team.
          </p>

          <h3>Health, Safety &amp; Environment Statement</h3>
          <p>
            BOAZ AGRO is committed to protecting the health, safety, and welfare of every employee,
            contractor, visitor, and surrounding community across all our sites, with zero
            tolerance for shortcuts on safety regardless of seniority or deadline pressure. Our
            targets are zero fatalities, zero lost-time injuries, and full HSE compliance, reviewed
            against Nigerian OHS legislation and ISO 45001 guidance at every annual cycle.
          </p>

          <h3>Quality Policy Statement</h3>
          <p>
            We are committed to delivering products and services that consistently meet customer,
            regulatory, and food-safety requirements — from farm inputs through processing to
            export. Quality is built into every process rather than inspected in at the end, and
            this commitment extends to every supplier and outgrower in our supply chain.
          </p>

          <h3>Environmental Policy Statement</h3>
          <p>
            We commit to minimising our environmental footprint through a circular, zero-waste
            operating model, responsible water and land stewardship, and climate-resilient farming
            practice — detailed further in our{" "}
            <a href="/sustainability/waste-management">waste management</a> and{" "}
            <a href="/sustainability/climate-effects">climate resilience</a> commitments.
          </p>

          <h3>Diversity, Equity &amp; Inclusion Statement</h3>
          <p>
            We employ and engage people on merit, without regard to sex, ethnicity, religion,
            disability, or age, and we hold every site and division to the same standard of respect
            set out in our <a href="/code-of-conduct">Code of Conduct</a>. Harassment and
            discrimination of any kind are treated as gross misconduct.
          </p>

          <h3>Human Rights Statement</h3>
          <p>
            We prohibit child labour and forced labour across our own operations and our supply
            chain, and we uphold every worker's right to fair wages, safe conditions, and freedom of
            association. Concerns can be raised without fear of retaliation under our{" "}
            <a href="/safeguarding">Safeguarding Policy</a> and{" "}
            <a href="/whistleblower">Whistleblower Policy</a>.
          </p>
        </article>
      </div>
      <Footer />
    </>
  );
}
